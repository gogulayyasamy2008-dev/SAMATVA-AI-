import React from 'react';

export default function IndicatorGrid({ indicators = {}, demographics = {} }) {
  return (
    <section className="panel-card" id="indicator-grid-panel">
      <h2 className="panel-header">Socio-Economic & Infrastructure Indicators</h2>
      <div className="indicators-wrapper">
        <div className="indicator-item">
          <div className="indicator-label">Clean Water Access</div>
          <div className="indicator-val">{indicators.clean_water_access_pct ?? '--'}%</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Electrification</div>
          <div className="indicator-val">{indicators.electrification_pct ?? '--'}%</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Literacy Rate</div>
          <div className="indicator-val">{indicators.literacy_rate_pct ?? '--'}%</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Health Facility Distance</div>
          <div className="indicator-val">{indicators.healthcare_distance_km ?? '--'} km</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">All-Weather Road</div>
          <div className="indicator-val">
            {indicators.all_weather_road_access ? 'Yes' : 'No'}
          </div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Poverty Headcount</div>
          <div className="indicator-val">{indicators.poverty_headcount_pct ?? '--'}%</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Sanitation Access</div>
          <div className="indicator-val">{indicators.sanitation_access_pct ?? '--'}%</div>
        </div>
        <div className="indicator-item">
          <div className="indicator-label">Mobile Connectivity</div>
          <div className="indicator-val">{indicators.mobile_connectivity_pct ?? '--'}%</div>
        </div>
      </div>
    </section>
  );
}
