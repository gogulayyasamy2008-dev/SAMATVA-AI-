import React from 'react';

export default function Header() {
  return (
    <header className="header-container" id="samatva-header">
      <div className="header-top-row">
        <div className="brand-group">
          <div className="brand-logo-badge">
            <span className="brand-dot"></span>
            <span className="brand-code">GOV / INTEL</span>
          </div>
          <h1 className="header-title">SAMATVA AI</h1>
        </div>
        <div className="header-tagline-badge">
          Sustainable AI Decision Intelligence Platform
        </div>
      </div>
      <p className="header-description">
        Evidence-based decision-support system to identify marginalized communities, predict socio-economic vulnerability, interpret underlying drivers, localize risk hotspots on geospatial maps, and prioritize targeted multi-sector interventions for sustainable development.
      </p>
      <div className="workflow-stepper">
        <span className="stepper-item active">1. Select Village</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">2. View Indicators</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">3. Predict Vulnerability</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">4. Explain Why</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">5. Map Hotspot</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">6. Recommend Action</span>
        <span className="stepper-arrow">→</span>
        <span className="stepper-item active">7. SDG Impact</span>
      </div>
    </header>
  );
}
