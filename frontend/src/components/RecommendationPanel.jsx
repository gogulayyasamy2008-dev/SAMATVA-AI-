import React from 'react';

export default function RecommendationPanel({ recommendations = [] }) {
  return (
    <section className="panel-card" id="recommendation-panel">
      <h2 className="panel-header">Targeted Policy & Resource Interventions</h2>
      <div className="recommendation-list">
        {recommendations.length === 0 ? (
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            No specific interventions generated for this location.
          </p>
        ) : (
          recommendations.map((rec) => (
            <div key={rec.id} className="recommendation-card">
              <div className="rec-title">{rec.title}</div>
              <div className="rec-meta">
                <span>Sector: <strong>{rec.sector}</strong></span>
                <span>Priority: <strong>{rec.priority}</strong></span>
                <span>Timeframe: <strong>{rec.timeframe}</strong></span>
                <span>SDGs: <strong>{rec.target_sdgs?.join(', ')}</strong></span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
