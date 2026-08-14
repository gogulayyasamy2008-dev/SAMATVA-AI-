%% SAMATVA AI - MATLAB Spatial Analysis
% Purpose:
%   Demonstrate the MATLAB Maps / Mapping Toolbox portion of SAMATVA AI
%   without changing the React frontend.
%
% Input:
%   input/village_data.csv
%
% Outputs:
%   output/spatial_results.csv
%   output/vulnerability_map.png
%
% This script analyzes the vulnerability scores already produced by the
% current demo data. It does NOT train or replace the project's Python
% scikit-learn model.

clear; clc; close all;

%% Paths
scriptDir = fileparts(mfilename('fullpath'));
inputFile = fullfile(scriptDir, "input", "village_data.csv");
outputDir = fullfile(scriptDir, "output");

if ~isfolder(outputDir)
    mkdir(outputDir);
end

%% Load data
T = readtable(inputFile, "TextType", "string");

requiredVars = ["village_id","village_name","district","state", ...
                "latitude","longitude","vulnerability_score","vulnerability_class"];

missingVars = setdiff(requiredVars, string(T.Properties.VariableNames));
if ~isempty(missingVars)
    error("Missing required columns: %s", strjoin(missingVars, ", "));
end

lat = T.latitude;
lon = T.longitude;
score = T.vulnerability_score;

if any(~isfinite(lat)) || any(~isfinite(lon))
    error("Latitude/longitude contains invalid values.");
end

if any(score < 0 | score > 100)
    error("Vulnerability scores must be between 0 and 100.");
end

%% Risk classification check
% Uses the same score bands displayed by the current frontend:
% High >= 75, Medium 50-74, Low < 50.
calculatedClass = strings(height(T),1);
calculatedClass(score >= 75) = "High";
calculatedClass(score >= 50 & score < 75) = "Medium";
calculatedClass(score < 50) = "Low";

T.matlab_risk_class = calculatedClass;
T.class_matches_frontend = strcmpi(string(T.vulnerability_class), calculatedClass);

%% Pairwise geographic distances
% distance() returns angular distance by default. Convert to km using
% Earth's mean radius.
n = height(T);
distanceKm = zeros(n,n);

for i = 1:n
    for j = 1:n
        angularDistance = distance(lat(i), lon(i), lat(j), lon(j));
        distanceKm(i,j) = deg2km(angularDistance);
    end
end

%% Nearest-neighbour distance
nearestNeighborKm = nan(n,1);

for i = 1:n
    d = distanceKm(i,:);
    d(i) = Inf;
    nearestNeighborKm(i) = min(d);
end

%% Local weighted vulnerability
% A simple transparent spatial indicator:
% nearby villages contribute more than distant villages.
% 100 km is used as the spatial influence scale for this demo.
influenceKm = 100;
localWeightedRisk = nan(n,1);

for i = 1:n
    d = distanceKm(i,:);
    weights = exp(-d / influenceKm);
    weights(i) = 0;  % do not count the village itself
    if sum(weights) > 0
        localWeightedRisk(i) = sum(weights .* score') / sum(weights);
    else
        localWeightedRisk(i) = score(i);
    end
end

%% Hotspot flag
% A village is marked as a spatial vulnerability hotspot when:
%   1) its own vulnerability score is High, and
%   2) nearby weighted vulnerability is also High.
hotspot = score >= 75 & localWeightedRisk >= 75;

%% Add results to table
T.nearest_neighbor_km = round(nearestNeighborKm, 2);
T.local_weighted_vulnerability = round(localWeightedRisk, 2);
T.spatial_hotspot = hotspot;

%% Export results
resultFile = fullfile(outputDir, "spatial_results.csv");
writetable(T, resultFile);

%% Create geographic map
fig = figure("Color","w");
gx = geoaxes(fig);
hold(gx, "on");

% Plot by risk class.
high = calculatedClass == "High";
medium = calculatedClass == "Medium";
low = calculatedClass == "Low";

if any(high)
    geoscatter(gx, lat(high), lon(high), 90, "r", "filled");
end
if any(medium)
    geoscatter(gx, lat(medium), lon(medium), 80, "y", "filled");
end
if any(low)
    geoscatter(gx, lat(low), lon(low), 70, "g", "filled");
end

% Label each village.
for i = 1:n
    text(gx, lat(i), lon(i), "  " + T.village_id(i), ...
        "FontSize", 8, "Color", "k");
end

title(gx, "SAMATVA AI - Vulnerability Spatial Analysis");
geobasemap(gx, "streets");

legendEntries = strings(0);
if any(high), legendEntries(end+1) = "High Risk"; end
if any(medium), legendEntries(end+1) = "Medium Risk"; end
if any(low), legendEntries(end+1) = "Low Risk"; end
legend(gx, legendEntries, "Location", "best");

hold(gx, "off");

mapFile = fullfile(outputDir, "vulnerability_map.png");
exportgraphics(fig, mapFile, "Resolution", 180);

%% Console summary
fprintf("\nSAMATVA AI MATLAB spatial analysis completed.\n");
fprintf("Input:  %s\n", inputFile);
fprintf("Results: %s\n", resultFile);
fprintf("Map:    %s\n\n", mapFile);

fprintf("Village spatial summary:\n");
disp(T(:, ["village_id","vulnerability_score", ...
           "matlab_risk_class","nearest_neighbor_km", ...
           "local_weighted_vulnerability","spatial_hotspot"]));

fprintf("Class consistency with frontend mock data: %d/%d rows match.\n", ...
    sum(T.class_matches_frontend), height(T));
