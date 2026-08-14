import React from 'react';

export default function VillageSelector({
  villages = [],
  selectedVillageId,
  onSelectVillage,
  filterRiskClass = 'ALL',
  onFilterChange
}) {
  const filteredVillages = villages.filter((v) => {
    if (filterRiskClass === 'ALL') return true;
    return v.vulnerability?.class?.toUpperCase() === filterRiskClass.toUpperCase();
  });

  const selectedVillage = villages.find((v) => v.village_id === selectedVillageId);

  return (
    <section className="panel-card village-selector-card" id="village-selector-panel">
      <div className="selector-header-row">
        <div>
          <h2 className="panel-header-title">Target Village Selection & Filtering</h2>
          <p className="panel-header-subtitle">
            Filter by vulnerability risk classification or select a target tribal habitation
          </p>
        </div>

        {/* Risk Classification Filter Pills */}
        <div className="filter-pill-group">
          <span className="filter-label">Filter Risk Tier:</span>
          <button
            type="button"
            className={`filter-btn ${filterRiskClass === 'ALL' ? 'active' : ''}`}
            onClick={() => onFilterChange('ALL')}
          >
            All ({villages.length})
          </button>
          <button
            type="button"
            className={`filter-btn filter-btn-high ${filterRiskClass === 'HIGH' ? 'active' : ''}`}
            onClick={() => onFilterChange('HIGH')}
          >
            High ({villages.filter((v) => v.vulnerability.class === 'High').length})
          </button>
          <button
            type="button"
            className={`filter-btn filter-btn-medium ${filterRiskClass === 'MEDIUM' ? 'active' : ''}`}
            onClick={() => onFilterChange('MEDIUM')}
          >
            Medium ({villages.filter((v) => v.vulnerability.class === 'Medium').length})
          </button>
          <button
            type="button"
            className={`filter-btn filter-btn-low ${filterRiskClass === 'LOW' ? 'active' : ''}`}
            onClick={() => onFilterChange('LOW')}
          >
            Low ({villages.filter((v) => v.vulnerability.class === 'Low').length})
          </button>
        </div>
      </div>

      <div className="selector-body-grid">
        <div className="selector-dropdown-wrapper">
          <label htmlFor="village-select" className="input-label">
            Active Target Village:
          </label>
          <select
            id="village-select"
            className="selector-dropdown"
            value={selectedVillageId || ''}
            onChange={(e) => onSelectVillage(e.target.value)}
          >
            {filteredVillages.map((village) => (
              <option key={village.village_id} value={village.village_id}>
                {village.village_name} — {village.district}, {village.state} [{village.vulnerability.class} Risk, Score {village.vulnerability.score}]
              </option>
            ))}
          </select>
        </div>

        {selectedVillage && (
          <div className="selected-village-summary-strip">
            <div className="village-meta-item">
              <span className="meta-label">Village ID</span>
              <span className="meta-val font-mono">{selectedVillage.village_id}</span>
            </div>
            <div className="village-meta-item">
              <span className="meta-label">District & State</span>
              <span className="meta-val">{selectedVillage.district}, {selectedVillage.state}</span>
            </div>
            <div className="village-meta-item">
              <span className="meta-label">Population</span>
              <span className="meta-val">{selectedVillage.population.toLocaleString()}</span>
            </div>
            <div className="village-meta-item">
              <span className="meta-label">Tribal Demography</span>
              <span className="meta-val">{selectedVillage.tribal_demographic_pct}% ST</span>
            </div>
            <div className="village-meta-item">
              <span className="meta-label">Geo Coordinates</span>
              <span className="meta-val font-mono">{selectedVillage.latitude.toFixed(3)}°N, {selectedVillage.longitude.toFixed(3)}°E</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
