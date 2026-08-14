import React from 'react';

export default function SdgImpactView({ sdgImpact = [] }) {
  return (
    <section className="panel-card" id="sdg-impact-panel">
      <h2 className="panel-header">Sustainable Development Goals (SDG) Alignment</h2>
      <div className="sdg-grid">
        {sdgImpact.map((item) => (
          <div key={item.sdg_id} className="sdg-card">
            <div className="sdg-tag">{item.sdg_id}</div>
            <div className="sdg-name">{item.sdg_name}</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.35rem' }}>
              Current: <strong>{item.current_index}/100</strong> → Projected:{' '}
              <strong>{item.projected_index}/100</strong>
            </div>
            <div className="sdg-target-ref">{item.key_target}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
