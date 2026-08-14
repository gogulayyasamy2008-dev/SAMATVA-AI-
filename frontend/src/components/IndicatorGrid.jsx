import React from 'react';

export default function IndicatorGrid({ indicators = {} }) {
  const getProgressColorClass = (pct, inverse = false) => {
    const val = Number(pct) || 0;
    if (inverse) {
      if (val >= 60) return 'meter-fill-high';
      if (val >= 35) return 'meter-fill-medium';
      return 'meter-fill-low';
    }
    if (val < 40) return 'meter-fill-high';
    if (val < 70) return 'meter-fill-medium';
    return 'meter-fill-low';
  };

  const getDistanceColorClass = (km) => {
    const d = Number(km) || 0;
    if (d > 12) return 'meter-fill-high';
    if (d > 6) return 'meter-fill-medium';
    return 'meter-fill-low';
  };

  return (
    <section className="panel-card" id="indicator-grid-panel">
      <div className="card-header-row">
        <div>
          <h2 className="panel-header-title">Socio-Economic & Infrastructure Indicators</h2>
          <p className="panel-header-subtitle">
            Granular village baseline metrics informing the predictive vulnerability model
          </p>
        </div>
      </div>

      <div className="indicators-wrapper">
        {/* Clean Water Access */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Clean Water Access</span>
            <span className="indicator-val">{indicators.clean_water_access_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.clean_water_access_pct)}`}
              style={{ width: `${indicators.clean_water_access_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Safe piped/treated drinking water</div>
        </div>

        {/* Electrification */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Electrification</span>
            <span className="indicator-val">{indicators.electrification_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.electrification_pct)}`}
              style={{ width: `${indicators.electrification_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Habitation grid & off-grid power</div>
        </div>

        {/* Literacy Rate */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Literacy Rate</span>
            <span className="indicator-val">{indicators.literacy_rate_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.literacy_rate_pct)}`}
              style={{ width: `${indicators.literacy_rate_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Adult & youth literacy aggregate</div>
        </div>

        {/* Healthcare Distance */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Healthcare Distance</span>
            <span className="indicator-val">{indicators.healthcare_distance_km ?? '--'} km</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getDistanceColorClass(indicators.healthcare_distance_km)}`}
              style={{ width: `${Math.min(((indicators.healthcare_distance_km || 0) / 20) * 100, 100)}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Distance to nearest primary health center</div>
        </div>

        {/* All Weather Road */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">All-Weather Road Access</span>
            <span className={`indicator-val-badge ${indicators.all_weather_road_access ? 'badge-risk-low' : 'badge-risk-high'}`}>
              {indicators.all_weather_road_access ? 'Connected' : 'Unconnected'}
            </span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${indicators.all_weather_road_access ? 'meter-fill-low' : 'meter-fill-high'}`}
              style={{ width: indicators.all_weather_road_access ? '100%' : '15%' }}
            ></div>
          </div>
          <div className="indicator-sub">Paved road accessibility under PMGSY</div>
        </div>

        {/* Poverty Headcount */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Poverty Headcount Index</span>
            <span className="indicator-val">{indicators.poverty_headcount_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.poverty_headcount_pct, true)}`}
              style={{ width: `${indicators.poverty_headcount_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Multidimensional poverty baseline</div>
        </div>

        {/* Sanitation Access */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Sanitation Coverage</span>
            <span className="indicator-val">{indicators.sanitation_access_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.sanitation_access_pct)}`}
              style={{ width: `${indicators.sanitation_access_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">Household individual latrines</div>
        </div>

        {/* Mobile Connectivity */}
        <div className="indicator-item">
          <div className="indicator-header">
            <span className="indicator-label">Mobile & Telecom Signal</span>
            <span className="indicator-val">{indicators.mobile_connectivity_pct ?? '--'}%</span>
          </div>
          <div className="indicator-meter-track">
            <div
              className={`indicator-meter-fill ${getProgressColorClass(indicators.mobile_connectivity_pct)}`}
              style={{ width: `${indicators.mobile_connectivity_pct || 0}%` }}
            ></div>
          </div>
          <div className="indicator-sub">4G/2G network coverage reliability</div>
        </div>
      </div>
    </section>
  );
}
