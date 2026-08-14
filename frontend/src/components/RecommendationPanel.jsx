import React from 'react';

export default function RecommendationPanel({ recommendations = [], villageName = '' }) {
  return (
    <section className="panel-card" id="recommendation-panel">
      <div className="card-header-row">
        <div>
          <h2 className="panel-header-title">Targeted Policy & Resource Interventions</h2>
          <p className="panel-header-subtitle">
            AI-recommended decision action plans tailored to resolve the specific local deficit drivers
          </p>
        </div>
        <span className="action-counter-badge">{recommendations.length} Active Directives</span>
      </div>

      <div className="recommendation-list">
        {recommendations.length === 0 ? (
          <p className="empty-state-text">
            No specific interventions generated for this location.
          </p>
        ) : (
          recommendations.map((rec, index) => {
            const priorityClass =
              rec.priority === 'High'
                ? 'badge-risk-high'
                : rec.priority === 'Medium'
                ? 'badge-risk-medium'
                : 'badge-risk-low';

            return (
              <div key={rec.id || index} className="recommendation-card">
                <div className="rec-card-top">
                  <div className="rec-title-group">
                    <span className="rec-index-badge">ACTION {index + 1}</span>
                    <h3 className="rec-title">{rec.title}</h3>
                  </div>
                  <span className={priorityClass}>{rec.priority} Priority</span>
                </div>

                <div className="rec-meta-grid">
                  <div className="rec-meta-cell">
                    <span className="rec-meta-label">Department / Sector:</span>
                    <span className="rec-meta-val">{rec.sector}</span>
                  </div>
                  <div className="rec-meta-cell">
                    <span className="rec-meta-label">Implementation Window:</span>
                    <span className="rec-meta-val">{rec.timeframe}</span>
                  </div>
                  <div className="rec-meta-cell">
                    <span className="rec-meta-label">Target SDGs:</span>
                    <span className="rec-meta-val font-semibold">
                      {rec.target_sdgs ? rec.target_sdgs.join(', ') : 'SDG 1, SDG 11'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
