import React from 'react';

export default function SdgImpactView({ sdgImpact = [] }) {
  return (
    <section className="panel-card" id="sdg-impact-panel">
      <div className="card-header-row">
        <div>
          <h2 className="panel-header-title">Sustainable Development Goals (SDG) Impact Matrix</h2>
          <p className="panel-header-subtitle">
            Projected advancement across the 6 approved United Nations SDG target dimensions post-intervention
          </p>
        </div>
      </div>

      <div className="sdg-grid">
        {sdgImpact.map((item) => {
          const current = item.current_index || 0;
          const projected = item.projected_index || 0;
          const gain = projected - current;

          return (
            <div key={item.sdg_id} className="sdg-card">
              <div className="sdg-card-header">
                <span className="sdg-tag">{item.sdg_id}</span>
                <span className="sdg-gain-badge">+{gain} pts Gain</span>
              </div>
              <div className="sdg-name">{item.sdg_name}</div>

              {/* Progress comparison visual */}
              <div className="sdg-progress-wrapper">
                <div className="sdg-progress-labels">
                  <span>Baseline: <strong>{current}%</strong></span>
                  <span>Projected: <strong>{projected}%</strong></span>
                </div>
                <div className="sdg-progress-track">
                  {/* Baseline fill */}
                  <div
                    className="sdg-baseline-fill"
                    style={{ width: `${current}%` }}
                    title={`Baseline: ${current}%`}
                  ></div>
                  {/* Projected delta fill */}
                  <div
                    className="sdg-projected-fill"
                    style={{
                      left: `${current}%`,
                      width: `${Math.max(projected - current, 0)}%`,
                    }}
                    title={`Projected Gain: +${gain}%`}
                  ></div>
                </div>
              </div>

              <div className="sdg-target-ref">
                {item.key_target}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
