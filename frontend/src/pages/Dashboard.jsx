import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import VillageSelector from '../components/VillageSelector.jsx';
import IndicatorGrid from '../components/IndicatorGrid.jsx';
import VulnerabilityCard from '../components/VulnerabilityCard.jsx';
import MapView from '../components/MapView.jsx';
import RecommendationPanel from '../components/RecommendationPanel.jsx';
import SdgImpactView from '../components/SdgImpactView.jsx';
import { mockVillages } from '../data/mockData.js';

export default function Dashboard() {
  const [selectedVillageId, setSelectedVillageId] = useState(mockVillages[0]?.village_id || '');

  const selectedVillage =
    mockVillages.find((v) => v.village_id === selectedVillageId) || mockVillages[0];

  return (
    <div className="dashboard-container">
      <Header />

      <VillageSelector
        villages={mockVillages}
        selectedVillageId={selectedVillageId}
        onSelectVillage={setSelectedVillageId}
      />

      <div className="dashboard-grid">
        <div className="dashboard-column">
          <MapView
            villages={mockVillages}
            selectedVillage={selectedVillage}
            onSelectVillage={setSelectedVillageId}
          />
          <VulnerabilityCard vulnerability={selectedVillage?.vulnerability} />
        </div>

        <div className="dashboard-column">
          <IndicatorGrid
            indicators={selectedVillage?.indicators}
            demographics={{
              population: selectedVillage?.population,
              tribal_demographic_pct: selectedVillage?.tribal_demographic_pct,
            }}
          />
          <RecommendationPanel recommendations={selectedVillage?.recommendations} />
          <SdgImpactView sdgImpact={selectedVillage?.sdg_impact} />
        </div>
      </div>
    </div>
  );
}
