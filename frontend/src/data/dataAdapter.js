/*
 * SAMATVA AI
 * Frontend Data Adapter
 *
 * Converts backend/raw village data into the canonical structure
 * consumed by the React frontend.
 */

const numberOrNull = (value) => {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const booleanOrNull = (value) => {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();

    if (['true', 'yes', '1'].includes(normalized)) {
      return true;
    }

    if (['false', 'no', '0'].includes(normalized)) {
      return false;
    }
  }

  return Boolean(value);
};

const stringOrEmpty = (value) => {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value);
};

export function normalizeVillage(rawVillage = {}) {
  const geography = rawVillage.geography || {};
  const infrastructure = rawVillage.infrastructure || {};
  const education = rawVillage.education || {};
  const livelihood = rawVillage.livelihood || {};
  const tribal = rawVillage.tribal || {};
  const healthContext = rawVillage.health_context || {};
  const vulnerability = rawVillage.vulnerability || {};

  return {
    village_id: stringOrEmpty(
      rawVillage.village_id ?? rawVillage.id
    ),

    geography: {
      village_name: stringOrEmpty(
        geography.village_name ?? rawVillage.village_name
      ),

      district: stringOrEmpty(
        geography.district ?? rawVillage.district
      ),

      state_code: stringOrEmpty(
        geography.state_code ?? rawVillage.state_code
      ),

      latitude: numberOrNull(
        geography.latitude ?? rawVillage.latitude
      ),

      longitude: numberOrNull(
        geography.longitude ?? rawVillage.longitude
      ),

      elevation_m: numberOrNull(geography.elevation_m),

      terrain_type: stringOrEmpty(geography.terrain_type),

      population_total: numberOrNull(
        geography.population_total ?? rawVillage.population
      ),

      households_total: numberOrNull(
        geography.households_total
      ),

      distance_to_town_km: numberOrNull(
        geography.distance_to_town_km
      ),

      distance_to_hospital_km: numberOrNull(
        geography.distance_to_hospital_km
      ),

      distance_to_school_km: numberOrNull(
        geography.distance_to_school_km
      ),

      distance_to_bank_km: numberOrNull(
        geography.distance_to_bank_km
      ),

      road_connectivity_status: stringOrEmpty(
        geography.road_connectivity_status
      ),

      monsoon_isolated: booleanOrNull(
        geography.monsoon_isolated
      ),

      forest_cover_pct: numberOrNull(
        geography.forest_cover_pct
      ),

      accessibility_index: numberOrNull(
        geography.accessibility_index
      )
    },

    infrastructure: {
      ...infrastructure
    },

    education: {
      ...education
    },

    livelihood: {
      ...livelihood
    },

    tribal: {
      ...tribal
    },

    health_context: {
      level: stringOrEmpty(
        healthContext.level || 'district'
      ),

      district: stringOrEmpty(
        healthContext.district ??
        geography.district ??
        rawVillage.district
      ),

      maternal_health:
        healthContext.maternal_health || {},

      child_health:
        healthContext.child_health || {},

      disease_burden:
        healthContext.disease_burden || {},

      healthcare_access:
        healthContext.healthcare_access || {}
    },

    temporal: Array.isArray(rawVillage.temporal)
      ? rawVillage.temporal
      : [],

    interventions: Array.isArray(rawVillage.interventions)
      ? rawVillage.interventions
      : [],

    vulnerability: {
      score: numberOrNull(vulnerability.score),

      class: stringOrEmpty(
        vulnerability.class || 'Low'
      ),

      source: stringOrEmpty(
        vulnerability.source || 'dataset_proxy'
      ),

      key_drivers: Array.isArray(vulnerability.key_drivers)
        ? vulnerability.key_drivers
        : []
    },

    sdg_impacts: Array.isArray(rawVillage.sdg_impacts)
      ? rawVillage.sdg_impacts
      : [],

    recommendations: Array.isArray(rawVillage.recommendations)
      ? rawVillage.recommendations
      : []
  };
}

export function normalizeVillages(villages = []) {
  if (!Array.isArray(villages)) {
    return [];
  }

  return villages.map(normalizeVillage);
}