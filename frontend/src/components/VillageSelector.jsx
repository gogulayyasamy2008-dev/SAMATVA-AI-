import React from 'react';

export default function VillageSelector({ villages = [], selectedVillageId, onSelectVillage }) {
  return (
    <section className="panel-card" id="village-selector-panel">
      <h2 className="panel-header">Select Target Village</h2>
      <div className="selector-form">
        <label htmlFor="village-select">Target Location:</label>
        <select
          id="village-select"
          className="selector-dropdown"
          value={selectedVillageId || ''}
          onChange={(e) => onSelectVillage(e.target.value)}
        >
          {villages.map((village) => (
            <option key={village.village_id} value={village.village_id}>
              {village.village_name} ({village.district}, {village.state}) - {village.vulnerability.class} Risk
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
