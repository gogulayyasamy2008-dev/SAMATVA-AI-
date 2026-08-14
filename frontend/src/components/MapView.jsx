import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function MapView({ villages = [], selectedVillage, onSelectVillage }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const initialLat = selectedVillage?.latitude || 21.7584;
      const initialLng = selectedVillage?.longitude || 85.9722;

      const map = L.map(mapContainerRef.current).setView([initialLat, initialLng], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear old markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add village markers
    villages.forEach((v) => {
      const isSelected = selectedVillage && selectedVillage.village_id === v.village_id;
      const markerColor =
        v.vulnerability.class === 'High'
          ? '#dc2626'
          : v.vulnerability.class === 'Low'
          ? '#16a34a'
          : '#d97706';

      const circle = L.circleMarker([v.latitude, v.longitude], {
        radius: isSelected ? 12 : 8,
        fillColor: markerColor,
        color: isSelected ? '#0f172a' : '#ffffff',
        weight: isSelected ? 3 : 2,
        opacity: 1,
        fillOpacity: 0.85,
      }).addTo(map);

      circle.bindPopup(`
        <strong>${v.village_name}</strong><br/>
        District: ${v.district}, ${v.state}<br/>
        Risk Class: <strong>${v.vulnerability.class}</strong> (${v.vulnerability.score}/100)
      `);

      circle.on('click', () => {
        if (onSelectVillage) {
          onSelectVillage(v.village_id);
        }
      });

      markersRef.current.push(circle);
    });

    if (selectedVillage) {
      map.setView([selectedVillage.latitude, selectedVillage.longitude], 8, {
        animate: true,
      });
    }

    return () => {
      // cleanup on component unmount only if needed
    };
  }, [villages, selectedVillage, onSelectVillage]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="panel-card" id="map-view-panel">
      <h2 className="panel-header">Geographic Intelligence & Risk Hotspots</h2>
      <div className="map-wrapper">
        <div ref={mapContainerRef} className="leaflet-map-element" />
      </div>
      <div className="map-legend">
        <span>
          <span className="legend-dot legend-dot-high"></span> High Risk
        </span>
        <span>
          <span className="legend-dot legend-dot-medium"></span> Medium Risk
        </span>
        <span>
          <span className="legend-dot legend-dot-low"></span> Low Risk
        </span>
      </div>
    </section>
  );
}
