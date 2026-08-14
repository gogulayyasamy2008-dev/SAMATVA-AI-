import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import VillageSelector from '../components/VillageSelector.jsx';
import VulnerabilityCard from '../components/VulnerabilityCard.jsx';
import IndicatorGrid from '../components/IndicatorGrid.jsx';
import MapView from '../components/MapView.jsx';
import RecommendationPanel from '../components/RecommendationPanel.jsx';
import SdgImpactView from '../components/SdgImpactView.jsx';
import { mockVillages } from '../data/mockData.js';

export default function Dashboard() {
  const [selectedVillageId, setSelectedVillageId] = useState(mockVillages[0]?.village_id || '');
  const [filterRiskClass, setFilterRiskClass] = useState('ALL');

  // Active village lookup
  const selectedVillage =
    mockVillages.find((v) => v.village_id === selectedVillageId) || mockVillages[0];

  // Handler for risk filter change
  const handleFilterChange = (filter) => {
    setFilterRiskClass(filter);
    if (filter !== 'ALL') {
      const firstMatching = mockVillages.find(
        (v) => v.vulnerability?.class?.toUpperCase() === filter.toUpperCase()
      );
      if (firstMatching) {
        setSelectedVillageId(firstMatching.village_id);
      }
    }
  };

  return (
    <div className="dashboard-container" id="samatva-dashboard">
      {/* 1. Header with branding and decision pipeline overview */}
      <Header />

      {/* 2. Village Selection & Filter Section */}
      <VillageSelector
        villages={mockVillages}
        selectedVillageId={selectedVillageId}
        onSelectVillage={setSelectedVillageId}
        filterRiskClass={filterRiskClass}
        onFilterChange={handleFilterChange}
      />

      {/* 3. Primary Decision Support Grid: Split Layout */}
      <div className="dashboard-grid">
        {/* Left Column: Geographic Intelligence & AI Vulnerability Interpretation */}
        <div className="dashboard-column">
          <MapView
            villages={mockVillages}
            selectedVillage={selectedVillage}
            onSelectVillage={setSelectedVillageId}
          />
          <VulnerabilityCard
            vulnerability={selectedVillage?.vulnerability}
            villageName={selectedVillage?.village_name}
            population={selectedVillage?.population}
          />
        </div>

        {/* Right Column: Baseline Indicators, Targeted Interventions, and SDG Matrix */}
        <div className="dashboard-column">
          <IndicatorGrid indicators={selectedVillage?.indicators} />
          <RecommendationPanel
            recommendations={selectedVillage?.recommendations}
            villageName={selectedVillage?.village_name}
          />
          <SdgImpactView sdgImpact={selectedVillage?.sdg_impact} />
        </div>
      </div>
    </div>
  );
}
