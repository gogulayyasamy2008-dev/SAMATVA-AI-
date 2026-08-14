import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function MapView({ villages = [], selectedVillage, onSelectVillage }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layerGroupRef = useRef(null);

  // Initialize Map once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const defaultLat = selectedVillage ? selectedVillage.latitude : 21.7584;
      const defaultLng = selectedVillage ? selectedVillage.longitude : 85.9722;

      const map = L.map(mapContainerRef.current, {
        center: [defaultLat, defaultLng],
        zoom: 6,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      // Map cleanup handled in component unmount hook below
    };
  }, []);

  // Sync Markers and Hotspot Circles on village changes or selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;

    if (!map || !layerGroup) return;

    // Clear previous markers & circles
    layerGroup.clearLayers();

    villages.forEach((v) => {
      const isSelected = selectedVillage && selectedVillage.village_id === v.village_id;
      const riskTier = v.vulnerability?.class || 'Medium';

      let markerColor = '#d97706'; // Medium default
      let radiusSize = 9;

      if (riskTier === 'High') {
        markerColor = '#dc2626';
        radiusSize = 11;
      } else if (riskTier === 'Low') {
        markerColor = '#16a34a';
        radiusSize = 8;
      }

      // If High risk, draw a semi-transparent danger buffer zone circle
      if (riskTier === 'High') {
        const hotspotCircle = L.circle([v.latitude, v.longitude], {
          radius: 12000, // 12 km radius buffer
          color: '#dc2626',
          fillColor: '#dc2626',
          fillOpacity: isSelected ? 0.22 : 0.1,
          weight: isSelected ? 2 : 1,
          dashArray: '4, 4',
        });
        layerGroup.addLayer(hotspotCircle);
      }

      // Circle Marker for village
      const marker = L.circleMarker([v.latitude, v.longitude], {
        radius: isSelected ? radiusSize + 4 : radiusSize,
        fillColor: markerColor,
        color: isSelected ? '#0f172a' : '#ffffff',
        weight: isSelected ? 3 : 2,
        opacity: 1,
        fillOpacity: 0.9,
      });

      const popupContent = `
        <div class="leaflet-popup-custom">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">${v.village_name}</div>
          <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">${v.district}, ${v.state}</div>
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 12px;">Vulnerability Score: <strong>${v.vulnerability.score}/100</strong></span>
          </div>
          <div style="font-size: 12px;">Risk Class: <span style="font-weight: 700; color: ${markerColor};">${v.vulnerability.class} Risk</span></div>
          <div style="font-size: 11px; color: #64748b; margin-top: 6px;">Click to inspect details and interventions</div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        if (onSelectVillage) {
          onSelectVillage(v.village_id);
        }
      });

      layerGroup.addLayer(marker);

      if (isSelected) {
        // Automatically open popup for the currently active selected village
        marker.openPopup();
      }
    });

    // Center map view on selected village with smooth transition
    if (selectedVillage && map) {
      map.setView([selectedVillage.latitude, selectedVillage.longitude], 8, {
        animate: true,
        duration: 0.8,
      });
    }
  }, [villages, selectedVillage, onSelectVillage]);

  // Clean unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="panel-card map-panel-card" id="map-view-panel">
      <div className="card-header-row">
        <div>
          <h2 className="panel-header-title">Geographic Intelligence & Risk Hotspot Map</h2>
          <p className="panel-header-subtitle">
            Spatial distribution of tribal settlements with predictive vulnerability hotspots (Leaflet + OpenStreetMap)
          </p>
        </div>
        <div className="map-badge-status">Interactive GIS Active</div>
      </div>

      <div className="map-wrapper">
        <div ref={mapContainerRef} className="leaflet-map-element" />
      </div>

      <div className="map-footer-controls">
        <div className="map-legend">
          <span className="legend-label">Map Legend:</span>
          <span className="legend-item">
            <span className="legend-dot legend-dot-high"></span> High Risk (Buffer Radius &gt;75)
          </span>
          <span className="legend-item">
            <span className="legend-dot legend-dot-medium"></span> Medium Risk (50-74)
          </span>
          <span className="legend-item">
            <span className="legend-dot legend-dot-low"></span> Low Risk (&lt;50)
          </span>
        </div>
        <div className="map-hint-text">
          * Clicking any marker centers the GIS map and synchronizes indicators across all decision panels.
        </div>
      </div>
    </section>
  );
}
