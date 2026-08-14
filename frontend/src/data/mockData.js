/**
 * Mock data for SAMATVA AI decision-support platform.
 * Represents synthetic village records with socio-economic indicators,
 * AI vulnerability predictions, key driver explanations, targeted recommendations,
 * and SDG impact alignment.
 */

export const mockVillages = [
  {
    village_id: "VIL-IN-001",
    village_name: "Karanjia Tribal Hamlet",
    district: "Mayurbhanj",
    state: "Odisha",
    latitude: 21.7584,
    longitude: 85.9722,
    population: 1420,
    tribal_demographic_pct: 88.5,
    indicators: {
      clean_water_access_pct: 24,
      electrification_pct: 42,
      literacy_rate_pct: 38,
      healthcare_distance_km: 18.5,
      all_weather_road_access: false,
      poverty_headcount_pct: 71,
      sanitation_access_pct: 19,
      mobile_connectivity_pct: 31,
      child_immunization_pct: 44,
      school_dropout_rate_pct: 36
    },
    vulnerability: {
      score: 86,
      class: "High",
      key_drivers: [
        "Healthcare facility distance exceeds 18 km without paved road connectivity",
        "Safe drinking water accessibility is critically depressed at 24%",
        "Multidimensional poverty headcount rate is elevated at 71%",
        "Primary school dropout rate stands at 36% due to seasonal migration"
      ]
    },
    recommendations: [
      {
        id: "REC-001-1",
        title: "All-Weather Arterial Link Road Construction",
        sector: "Infrastructure & Connectivity",
        priority: "High",
        timeframe: "0-6 Months",
        target_sdgs: ["SDG 1", "SDG 11"]
      },
      {
        id: "REC-001-2",
        title: "Solar Mini-Grid & Community Water Purification Plant",
        sector: "Basic Services & Climate Resilience",
        priority: "High",
        timeframe: "0-3 Months",
        target_sdgs: ["SDG 11", "SDG 13", "SDG 3"]
      },
      {
        id: "REC-001-3",
        title: "Mobile Primary Healthcare Outreach & Telemedicine Kiosk",
        sector: "Public Health",
        priority: "High",
        timeframe: "Immediate",
        target_sdgs: ["SDG 3", "SDG 10"]
      }
    ],
    sdg_impact: [
      {
        sdg_id: "SDG 1",
        sdg_name: "No Poverty",
        current_index: 29,
        projected_index: 54,
        key_target: "Target 1.4: Equal rights to economic resources and basic services"
      },
      {
        sdg_id: "SDG 3",
        sdg_name: "Good Health & Well-being",
        current_index: 34,
        projected_index: 68,
        key_target: "Target 3.8: Universal health coverage and essential service access"
      },
      {
        sdg_id: "SDG 4",
        sdg_name: "Quality Education",
        current_index: 38,
        projected_index: 62,
        key_target: "Target 4.1: Free, equitable, and quality primary/secondary education"
      },
      {
        sdg_id: "SDG 10",
        sdg_name: "Reduced Inequalities",
        current_index: 31,
        projected_index: 59,
        key_target: "Target 10.2: Empower and promote social, economic, and political inclusion"
      },
      {
        sdg_id: "SDG 11",
        sdg_name: "Sustainable Cities & Communities",
        current_index: 25,
        projected_index: 65,
        key_target: "Target 11.2: Safe, affordable, accessible, and sustainable transport systems"
      },
      {
        sdg_id: "SDG 13",
        sdg_name: "Climate Action",
        current_index: 40,
        projected_index: 70,
        key_target: "Target 13.1: Strengthen resilience and adaptive capacity to climate hazards"
      }
    ]
  },
  {
    village_id: "VIL-IN-002",
    village_name: "Birsa Tola Settlement",
    district: "Khunti",
    state: "Jharkhand",
    latitude: 23.0728,
    longitude: 85.2789,
    population: 980,
    tribal_demographic_pct: 94.2,
    indicators: {
      clean_water_access_pct: 31,
      electrification_pct: 58,
      literacy_rate_pct: 44,
      healthcare_distance_km: 14.2,
      all_weather_road_access: false,
      poverty_headcount_pct: 65,
      sanitation_access_pct: 26,
      mobile_connectivity_pct: 48,
      child_immunization_pct: 52,
      school_dropout_rate_pct: 29
    },
    vulnerability: {
      score: 79,
      class: "High",
      key_drivers: [
        "Unpaved seasonal access road causes isolation during monsoon months",
        "Limited local institutional health facilities within 14 km radius",
        "High vulnerability to agricultural drought cycles and soil degradation"
      ]
    },
    recommendations: [
      {
        id: "REC-002-1",
        title: "Community Micro-Watershed & Rainwater Harvesting Check Dams",
        sector: "Water Resources & Climate Adaptation",
        priority: "High",
        timeframe: "1-3 Months",
        target_sdgs: ["SDG 13", "SDG 1"]
      },
      {
        id: "REC-002-2",
        title: "Aspirational Tribal Youth Skill Kiosk & Digital Classroom",
        sector: "Education & Livelihood",
        priority: "Medium",
        timeframe: "3-6 Months",
        target_sdgs: ["SDG 4", "SDG 10"]
      }
    ],
    sdg_impact: [
      {
        sdg_id: "SDG 1",
        sdg_name: "No Poverty",
        current_index: 35,
        projected_index: 58,
        key_target: "Target 1.2: Reduce proportion of population living in poverty"
      },
      {
        sdg_id: "SDG 3",
        sdg_name: "Good Health & Well-being",
        current_index: 41,
        projected_index: 66,
        key_target: "Target 3.2: End preventable deaths of newborns and children under 5"
      },
      {
        sdg_id: "SDG 4",
        sdg_name: "Quality Education",
        current_index: 44,
        projected_index: 69,
        key_target: "Target 4.4: Increase number of youth with relevant technical skills"
      },
      {
        sdg_id: "SDG 10",
        sdg_name: "Reduced Inequalities",
        current_index: 36,
        projected_index: 62,
        key_target: "Target 10.4: Adopt policies and progressively achieve greater equality"
      },
      {
        sdg_id: "SDG 11",
        sdg_name: "Sustainable Cities & Communities",
        current_index: 38,
        projected_index: 67,
        key_target: "Target 11.a: Support positive economic, social and environmental links"
      },
      {
        sdg_id: "SDG 13",
        sdg_name: "Climate Action",
        current_index: 42,
        projected_index: 74,
        key_target: "Target 13.2: Integrate climate change measures into village plans"
      }
    ]
  },
  {
    village_id: "VIL-IN-003",
    village_name: "Gudaguda Valley",
    district: "Koraput",
    state: "Odisha",
    latitude: 18.8123,
    longitude: 82.7108,
    population: 1860,
    tribal_demographic_pct: 76.0,
    indicators: {
      clean_water_access_pct: 54,
      electrification_pct: 69,
      literacy_rate_pct: 56,
      healthcare_distance_km: 9.8,
      all_weather_road_access: true,
      poverty_headcount_pct: 48,
      sanitation_access_pct: 43,
      mobile_connectivity_pct: 64,
      child_immunization_pct: 68,
      school_dropout_rate_pct: 21
    },
    vulnerability: {
      score: 55,
      class: "Medium",
      key_drivers: [
        "Moderate sanitation coverage gap leading to seasonal waterborne illnesses",
        "Sub-optimal secondary school transition rate among female students",
        "Forest-fringe agricultural exposure to climate variability"
      ]
    },
    recommendations: [
      {
        id: "REC-003-1",
        title: "Upgradation of Village Health Sub-Center to 24x7 Delivery Facility",
        sector: "Public Health",
        priority: "Medium",
        timeframe: "3-6 Months",
        target_sdgs: ["SDG 3", "SDG 10"]
      },
      {
        id: "REC-003-2",
        title: "Non-Timber Forest Produce (NTFP) Cold Storage & Processing Unit",
        sector: "Sustainable Livelihood",
        priority: "Medium",
        timeframe: "6-12 Months",
        target_sdgs: ["SDG 1", "SDG 11"]
      }
    ],
    sdg_impact: [
      {
        sdg_id: "SDG 1",
        sdg_name: "No Poverty",
        current_index: 52,
        projected_index: 73,
        key_target: "Target 1.5: Build resilience of poor and reduce exposure to climate shocks"
      },
      {
        sdg_id: "SDG 3",
        sdg_name: "Good Health & Well-being",
        current_index: 56,
        projected_index: 78,
        key_target: "Target 3.7: Ensure universal access to sexual and reproductive health"
      },
      {
        sdg_id: "SDG 4",
        sdg_name: "Quality Education",
        current_index: 58,
        projected_index: 79,
        key_target: "Target 4.5: Eliminate gender disparities in education"
      },
      {
        sdg_id: "SDG 10",
        sdg_name: "Reduced Inequalities",
        current_index: 51,
        projected_index: 72,
        key_target: "Target 10.1: Progressively achieve sustained income growth for bottom 40%"
      },
      {
        sdg_id: "SDG 11",
        sdg_name: "Sustainable Cities & Communities",
        current_index: 55,
        projected_index: 77,
        key_target: "Target 11.5: Reduce number of affected people and economic losses from disasters"
      },
      {
        sdg_id: "SDG 13",
        sdg_name: "Climate Action",
        current_index: 54,
        projected_index: 76,
        key_target: "Target 13.3: Improve human and institutional capacity on climate adaptation"
      }
    ]
  },
  {
    village_id: "VIL-IN-004",
    village_name: "Chhindwara Forest Border",
    district: "Chhindwara",
    state: "Madhya Pradesh",
    latitude: 22.0574,
    longitude: 78.9382,
    population: 1210,
    tribal_demographic_pct: 82.4,
    indicators: {
      clean_water_access_pct: 47,
      electrification_pct: 64,
      literacy_rate_pct: 51,
      healthcare_distance_km: 11.4,
      all_weather_road_access: true,
      poverty_headcount_pct: 53,
      sanitation_access_pct: 38,
      mobile_connectivity_pct: 59,
      child_immunization_pct: 61,
      school_dropout_rate_pct: 24
    },
    vulnerability: {
      score: 62,
      class: "Medium",
      key_drivers: [
        "Groundwater depletion risk affecting summer drinking water stability",
        "Limited secondary health infrastructure within 10 km radius",
        "Under-developed local non-farm livelihoods"
      ]
    },
    recommendations: [
      {
        id: "REC-004-1",
        title: "Borewell Recharge Wells & Community Jal Jeevan Scheme Expansion",
        sector: "Water Security",
        priority: "High",
        timeframe: "1-3 Months",
        target_sdgs: ["SDG 11", "SDG 13"]
      },
      {
        id: "REC-004-2",
        title: "Organic Tribal Millets Processing & Market Linkage Center",
        sector: "Agriculture & Economy",
        priority: "Medium",
        timeframe: "3-6 Months",
        target_sdgs: ["SDG 1", "SDG 10"]
      }
    ],
    sdg_impact: [
      {
        sdg_id: "SDG 1",
        sdg_name: "No Poverty",
        current_index: 48,
        projected_index: 70,
        key_target: "Target 1.4: Equal access to financial services and technology"
      },
      {
        sdg_id: "SDG 3",
        sdg_name: "Good Health & Well-being",
        current_index: 52,
        projected_index: 75,
        key_target: "Target 3.3: End epidemics of communicable diseases"
      },
      {
        sdg_id: "SDG 4",
        sdg_name: "Quality Education",
        current_index: 51,
        projected_index: 74,
        key_target: "Target 4.6: Ensure youth achieve literacy and numeracy"
      },
      {
        sdg_id: "SDG 10",
        sdg_name: "Reduced Inequalities",
        current_index: 46,
        projected_index: 71,
        key_target: "Target 10.3: Ensure equal opportunity and reduce inequalities of outcome"
      },
      {
        sdg_id: "SDG 11",
        sdg_name: "Sustainable Cities & Communities",
        current_index: 50,
        projected_index: 74,
        key_target: "Target 11.c: Support sustainable and resilient buildings using local materials"
      },
      {
        sdg_id: "SDG 13",
        sdg_name: "Climate Action",
        current_index: 49,
        projected_index: 75,
        key_target: "Target 13.1: Strengthen climate resilience"
      }
    ]
  },
  {
    village_id: "VIL-IN-005",
    village_name: "Attappadi Model Gramam",
    district: "Palakkad",
    state: "Kerala",
    latitude: 11.0519,
    longitude: 76.5447,
    population: 2150,
    tribal_demographic_pct: 62.0,
    indicators: {
      clean_water_access_pct: 86,
      electrification_pct: 95,
      literacy_rate_pct: 88,
      healthcare_distance_km: 3.2,
      all_weather_road_access: true,
      poverty_headcount_pct: 22,
      sanitation_access_pct: 89,
      mobile_connectivity_pct: 92,
      child_immunization_pct: 96,
      school_dropout_rate_pct: 6
    },
    vulnerability: {
      score: 24,
      class: "Low",
      key_drivers: [
        "Stable basic infrastructure with paved road connectivity and near-universal electrification",
        "High immunization and institutional delivery coverage",
        "Active community self-help groups (Kudumbashree) strengthening grassroots resilience"
      ]
    },
    recommendations: [
      {
        id: "REC-005-1",
        title: "Eco-Tourism & Indigenous Herbal Medicine Enterprise Hub",
        sector: "Sustainable Economic Expansion",
        priority: "Low",
        timeframe: "6-12 Months",
        target_sdgs: ["SDG 1", "SDG 11"]
      },
      {
        id: "REC-005-2",
        title: "Agro-Ecological Soil Moisture Sensor Network",
        sector: "Climate Smart Agriculture",
        priority: "Low",
        timeframe: "3-6 Months",
        target_sdgs: ["SDG 13"]
      }
    ],
    sdg_impact: [
      {
        sdg_id: "SDG 1",
        sdg_name: "No Poverty",
        current_index: 78,
        projected_index: 91,
        key_target: "Target 1.3: Implement nationally appropriate social protection systems"
      },
      {
        sdg_id: "SDG 3",
        sdg_name: "Good Health & Well-being",
        current_index: 85,
        projected_index: 94,
        key_target: "Target 3.1: Reduce global maternal mortality ratio"
      },
      {
        sdg_id: "SDG 4",
        sdg_name: "Quality Education",
        current_index: 88,
        projected_index: 96,
        key_target: "Target 4.a: Build education facilities that are child, disability and gender sensitive"
      },
      {
        sdg_id: "SDG 10",
        sdg_name: "Reduced Inequalities",
        current_index: 79,
        projected_index: 90,
        key_target: "Target 10.2: Promote universal social, economic inclusion"
      },
      {
        sdg_id: "SDG 11",
        sdg_name: "Sustainable Cities & Communities",
        current_index: 82,
        projected_index: 93,
        key_target: "Target 11.4: Strengthen efforts to protect and safeguard natural heritage"
      },
      {
        sdg_id: "SDG 13",
        sdg_name: "Climate Action",
        current_index: 76,
        projected_index: 90,
        key_target: "Target 13.2: Climate change mitigation integration"
      }
    ]
  }
];

export const approvedSdgs = [
  { id: "SDG 1", name: "No Poverty", targetRef: "Target 1.4" },
  { id: "SDG 3", name: "Good Health & Well-being", targetRef: "Target 3.8" },
  { id: "SDG 4", name: "Quality Education", targetRef: "Target 4.1" },
  { id: "SDG 10", name: "Reduced Inequalities", targetRef: "Target 10.2" },
  { id: "SDG 11", name: "Sustainable Cities & Communities", targetRef: "Target 11.2" },
  { id: "SDG 13", name: "Climate Action", targetRef: "Target 13.1" }
];
