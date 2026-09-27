import { SITE_IMAGES } from "./images";

export type ProjectStatus = "ACTIVE" | "IN_DEVELOPMENT" | "COMPLETED";

export interface Project {
  slug: string;
  name: string;
  country: string;
  sector: string;
  status: ProjectStatus;
  startYear: number;
  endYear?: number | null;
  summary: string;
  keyFacts: string[];
  image: string;
  imageAlt?: string;
  verified: boolean;

  // Detail page & contextual references
  id?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  location?: string;
  client?: string;
  timeline?: string;
  keyFigure?: { label: string; value: string };
  stats: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
  outcome?: string;
  relatedServiceSlug?: string;
  relatedServiceName?: string;
  relatedNewsSlug?: string;
  relatedNewsTitle?: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "falea-bauxite-corridor",
    slug: "falea-bauxite-corridor",
    name: "Falea Bauxite & Mineral Corridor",
    title: "Falea Bauxite & Mineral Corridor",
    country: "Mali",
    location: "Kayes Region",
    sector: "Mining Services & Rail",
    category: "Mining Services & Rail",
    status: "ACTIVE",
    startYear: 2023,
    endYear: null,
    timeline: "2023 - Present",
    summary: "Turnkey development of an 8.5 MTPA bauxite deposit including a 94-kilometer dedicated heavy haul access road and river barge loading terminal.",
    excerpt: "Turnkey development of an 8.5 MTPA bauxite deposit including a 94-kilometer dedicated heavy haul access road and river barge loading terminal.",
    keyFacts: [
      "8.5M Tonnes annual ore moved",
      "94 km all-weather crushed-basalt haul road",
      "85 heavy units deployed",
      "480 local engineers trained"
    ],
    keyFigure: { label: "Annual Ore Moved", value: "8.5M Tonnes" },
    stats: [
      { label: "Annual Ore Moved", value: "8.5M Tonnes" },
      { label: "Haul Road Length", value: "94 Kilometers" },
      { label: "Fleet Deployed", value: "85 Heavy Units" },
      { label: "Local Workforce Trained", value: "480 Engineers" }
    ],
    image: "/images/projects/project_falea.jpg",
    imageAlt: "Open-pit bauxite mine haul road with heavy-duty dump trucks in Falea, Mali",
    verified: true,
    client: "National Mineral Resources Directorate & Syndicate Partners",
    challenge: "The plateau deposit sat 120 km from the nearest paved arterial road with seasonal monsoons rendering standard unpaved laterite tracks impassable for 90-tonne triple-trailer road trains.",
    solution: "Fiza mobilized 85 heavy machines to stabilize a 94-kilometer crushed-basalt corridor, erected two double-lane reinforced concrete river crossings, and installed an automated 1,200 TPH barge conveyor system.",
    outcome: "Haulage cycle time dropped from 14 hours to 3.2 hours. First ore shipped 45 days ahead of contracted deadline.",
    relatedServiceSlug: "mining-services",
    relatedServiceName: "Mining Services",
    relatedNewsSlug: "falea-terminal-phase-one-complete",
    relatedNewsTitle: "Phase One of the Falea Mineral Corridor Completed Ahead of Schedule",
    gallery: [
      SITE_IMAGES.projects.faleaMali.src,
      SITE_IMAGES.projects.civilBridge.src,
      SITE_IMAGES.projects.industrialCircuit.src
    ]
  },
  {
    id: "katanga-copper-processing",
    slug: "katanga-copper-processing",
    name: "Katanga Copper-Cobalt Plant",
    title: "Katanga Copper-Cobalt Plant",
    country: "Democratic Republic of Congo",
    location: "Kolwezi District",
    sector: "Turnkey Plants",
    category: "Turnkey Plants",
    // TODO: CONFLICT: Katanga Copper-Cobalt Plant is ACTIVE but dated 2022-2024.
    status: "ACTIVE",
    startYear: 2022,
    endYear: 2024,
    timeline: "2022 - 2024",
    summary: "Engineering, procurement, and construction of a modular 1,500 TPH primary crushing station and dense media separation circuit.",
    excerpt: "Engineering, procurement, and construction of a modular 1,500 TPH primary crushing station and dense media separation circuit.",
    keyFacts: [
      "1,500 TPH nameplate processing capacity",
      "3,200 tonnes structural steel erected",
      "Zero lost-time incidents across 620,000 man-hours",
      "10-month construction runway"
    ],
    keyFigure: { label: "Circuit Throughput", value: "1,500 TPH" },
    stats: [
      { label: "Circuit Throughput", value: "1,500 TPH" },
      { label: "Structural Steel Erection", value: "3,200 Tonnes" },
      { label: "Lost Time Incidents", value: "Zero" },
      { label: "Construction Runway", value: "10 Months" }
    ],
    image: "/images/projects/project_katanga.jpg",
    imageAlt: "Overhead view of a large industrial mineral processing plant and crusher conveyor in Katanga, DRC",
    verified: true,
    client: "Katanga Mineral Consortium",
    challenge: "Integrating high-throughput crushing machinery inside an active extraction concession without disrupting existing open-cast haulage flow.",
    solution: "Designed a pre-fabricated structural steel framework anchored to mass-pour raft foundations, assembled using twin 250-tonne all-terrain crawler cranes.",
    outcome: "Attained target 1,500 TPH nameplate capacity within 72 hours of cold commissioning. Zero lost-time incidents across 620,000 man-hours.",
    relatedServiceSlug: "turnkey-plants",
    relatedServiceName: "Turnkey Industrial Plants",
    relatedNewsSlug: "expanding-heavy-fleet-central-africa",
    relatedNewsTitle: "Fiza Mobilizes 45 Additional Heavy Units to Katanga Operations",
    gallery: [
      SITE_IMAGES.projects.katangaCopper.src,
      SITE_IMAGES.projects.industrialCircuit.src
    ]
  },
  {
    id: "toamasina-bulk-rail-terminal",
    slug: "toamasina-bulk-rail-terminal",
    name: "Toamasina Bulk Mineral Rail Terminal",
    title: "Toamasina Bulk Mineral Rail Terminal",
    country: "Madagascar",
    location: "Atsinanana Region",
    sector: "Railway Solutions",
    category: "Railway Solutions",
    // TODO: CONFLICT: Toamasina rail terminal (nickel-cobalt tailings) vs the removed Home "Ilmenite" project (dedicated narrow-gauge rail spur to port) vs the Company page's Madagascar rail work.
    status: "COMPLETED",
    startYear: 2021,
    endYear: 2023,
    timeline: "2021 - 2023",
    summary: "Complete rehabilitation of a 42-kilometer heavy-haul narrow-gauge rail spur connecting inland nickel-cobalt tailings to the ocean port.",
    excerpt: "Complete rehabilitation of a 42-kilometer heavy-haul narrow-gauge rail spur connecting inland nickel-cobalt tailings to the ocean port.",
    keyFacts: [
      "42 km heavy-haul narrow-gauge track rehabilitated",
      "+78% axle load capacity increase to 25 tonnes",
      "Daily train throughput tripled from 3 to 9 return consists",
      "-45% turnaround time reduction"
    ],
    keyFigure: { label: "Rehabilitated Track", value: "42 Kilometers" },
    stats: [
      { label: "Rehabilitated Track", value: "42 Kilometers" },
      { label: "Axle Load Increase", value: "+78% Capacity" },
      { label: "Turnaround Time", value: "-45% Reduction" }
    ],
    image: "/images/projects/project_toamasina.jpg",
    imageAlt: "Heavy freight train on industrial railway tracks loaded with cargo at Toamasina, Madagascar",
    verified: true,
    client: "Madagascar Port & Rail Infrastructure Authority",
    challenge: "Steep grades, tropical cyclone erosion, and deteriorated legacy ballast from the 1970s limiting axle loads to under 14 tonnes.",
    solution: "Complete subgrade re-engineering with geotextile reinforcement, automated mechanized ballast tampers, and 50 kg/m continuous welded rail installation.",
    outcome: "Permitted 25-tonne axle loads and tripled daily train throughput from 3 to 9 return mineral consists.",
    relatedServiceSlug: "railway-solutions",
    relatedServiceName: "Railway Solutions",
    gallery: [
      SITE_IMAGES.projects.toamasinaRail.src,
      SITE_IMAGES.projects.civilBridge.src
    ]
  },
  {
    id: "bamako-industrial-logistics-hub",
    slug: "bamako-industrial-logistics-hub",
    name: "Bamako Heavy Equipment Base & Hub",
    title: "Bamako Heavy Equipment Base & Hub",
    country: "Mali",
    location: "Bamako Industrial Zone",
    sector: "Infrastructure",
    category: "Infrastructure",
    status: "ACTIVE",
    startYear: 2020,
    endYear: null,
    timeline: "2020 - Continuous",
    summary: "A 35,000 m² central depot featuring 6-bay heavy equipment rebuild workshops, bonded mineral storage, and central logistics dispatch.",
    excerpt: "A 35,000 m² central depot featuring 6-bay heavy equipment rebuild workshops, bonded mineral storage, and central logistics dispatch.",
    keyFacts: [
      "35,000 m² depot footprint with 6 maintenance bays",
      "50-tonne overhead gantry cranes installed",
      "120 powertrains annual rebuild capacity",
      "Excavator rebuild turnaround reduced from 12 weeks to 14 days"
    ],
    keyFigure: { label: "Depot Footprint", value: "35,000 m²" },
    stats: [
      { label: "Depot Footprint", value: "35,000 m²" },
      { label: "Overhead Crane Capacity", value: "50 Tonnes" },
      { label: "Annual Rebuild Capacity", value: "120 Powertrains" }
    ],
    image: "/images/projects/project_bamako.jpg",
    imageAlt: "Heavy equipment workshop and excavator depot at the Bamako Hub, Mali",
    verified: true,
    client: "Fiza Engineering Corporation",
    challenge: "Lack of domestic component rebuild facilities forced mining operators in Mali to air-freight diesel engines to South Africa or Europe.",
    solution: "Constructed a certified tier-1 remanufacturing workshop with 50-tonne overhead gantry cranes, dynamometer engine test cells, and automated parts inventory.",
    outcome: "Turnaround for hydraulic excavator rebuilds reduced from 12 weeks to 14 days, saving regional operators millions in fleet downtime.",
    relatedServiceSlug: "equipment-procurement",
    relatedServiceName: "Equipment Procurement & Rebuild",
    gallery: [
      SITE_IMAGES.projects.sikassoRebuild.src
    ]
  },
  {
    id: "manono-lithium-infrastructure",
    slug: "manono-lithium-infrastructure",
    name: "Manono Critical Minerals Access Route",
    title: "Manono Critical Minerals Access Route",
    country: "Democratic Republic of Congo",
    location: "Tanganyika Province",
    sector: "Infrastructure & Mining",
    category: "Infrastructure & Mining",
    status: "IN_DEVELOPMENT",
    startYear: 2024,
    endYear: 2027,
    timeline: "2024 - 2027",
    summary: "Engineering a 180 km heavy-duty logistics artery connecting prospective hard-rock lithium deposits to the national rail head.",
    excerpt: "Engineering a 180 km heavy-duty logistics artery connecting prospective hard-rock lithium deposits to the national rail head.",
    keyFacts: [
      "180 km heavy-duty planned roadway corridor",
      "14 elevated causeway sections over seasonal floodplains",
      "2.4M TPA projected mineral haul capacity",
      "Cellular embankment engineering with geotextile reinforcement"
    ],
    keyFigure: { label: "Planned Roadway", value: "180 Kilometers" },
    stats: [
      { label: "Planned Roadway", value: "180 Kilometers" },
      { label: "Elevated Causeways", value: "14 Sections" },
      { label: "Projected Haul Capacity", value: "2.4M TPA" }
    ],
    image: "/images/capabilities/heavy-infrastructure.jpg",
    imageAlt: "Heavy machinery building a new road through remote terrain for the Manono Critical Minerals Route, DRC",
    verified: true,
    client: "Central African Energy Metals Consortium",
    challenge: "Traversing difficult floodplains with seasonal river swell requiring extensive elevated causeways and high-capacity drainage structures.",
    solution: "Pioneering cellular embankment engineering using geo-cells packed with river gravel and armored with crushed granite rip-rap.",
    outcome: "Construction phase 1 completed on schedule; test convoys carrying drill rigs deployed successfully.",
    relatedServiceSlug: "infrastructure",
    relatedServiceName: "Heavy Infrastructure",
    gallery: [
      SITE_IMAGES.projects.manonoCorridor.src
    ]
  },
  {
    id: "sikasso-agro-processing",
    slug: "sikasso-agro-processing",
    name: "Sikasso Grain & Oilseed Industrial Plant",
    title: "Sikasso Grain & Oilseed Industrial Plant",
    country: "Mali",
    location: "Sikasso Region",
    sector: "Commercial Agriculture",
    category: "Commercial Agriculture",
    status: "COMPLETED",
    startYear: 2022,
    endYear: 2024,
    timeline: "2022 - 2024",
    summary: "Turnkey development of a 60,000-tonne automated silo grain terminal and continuous cottonseed oil solvent extraction plant.",
    excerpt: "Turnkey development of a 60,000-tonne automated silo grain terminal and continuous cottonseed oil solvent extraction plant.",
    keyFacts: [
      "60,000 tonnes automated silo storage capacity",
      "450 tonnes/day oilseed processing throughput",
      "4MW synchronized diesel-solar power station",
      "Supported 14,000 regional agrarian growers"
    ],
    keyFigure: { label: "Storage Volume", value: "60,000 Tonnes" },
    stats: [
      { label: "Storage Volume", value: "60,000 Tonnes" },
      { label: "Processing Throughput", value: "450 Tonnes/Day" },
      { label: "Farmers Supported", value: "14,000 Growers" }
    ],
    image: "/images/capabilities/commercial-agriculture.jpg",
    imageAlt: "Large commercial grain storage silos and agricultural processing facility in Sikasso, Mali",
    verified: true,
    client: "Malian Agro-Industrial Development Board",
    challenge: "Extreme ambient dust and heat fluctuations requiring specialized pneumatic conveyance and explosion-proof electrical substations.",
    solution: "Integrated specialized steel silos with automated thermocouple monitoring systems and a 4MW synchronized diesel-solar power station.",
    outcome: "Decreased post-harvest grain losses in the Sikasso agrarian basin by over 30% in its initial harvest cycle.",
    relatedServiceSlug: "agriculture",
    relatedServiceName: "Commercial Agriculture",
    gallery: [
      SITE_IMAGES.projects.sikassoAgro.src
    ]
  }
];

// TODO: CONFLICT: The removed Home projects (Gold, Ilmenite, Ethiopia Railway Localization) are not shown anywhere. Keep them in /lib/projects.ts under a hiddenProjects array with verified: false. Do not render them.
export const hiddenProjects: Project[] = [
  {
    id: "drc-gold",
    slug: "drc-gold",
    name: "Gold Mining & Extraction Operations",
    title: "Gold Mining & Extraction Operations",
    country: "Democratic Republic of Congo",
    sector: "Mining Services",
    category: "Mining Services",
    status: "ACTIVE",
    startYear: 2021,
    endYear: null,
    timeline: "2021 - Present",
    summary: "Active gold extraction concession supported by direct heavy machinery mobilization, in-pit crushing circuits, on-site metallurgical assaying, and environmental containment.",
    excerpt: "Active gold extraction concession supported by direct heavy machinery mobilization, in-pit crushing circuits, on-site metallurgical assaying, and environmental containment.",
    keyFacts: [
      "100% owned heavy excavator & hauler deployment",
      "On-site assay validation & core analysis",
      "Advanced slurry containment & water recycling",
      "24/7 continuous extraction operations"
    ],
    stats: [],
    image: SITE_IMAGES.projects.katangaCopper.src,
    verified: false
  },
  {
    id: "madagascar-ilmenite",
    slug: "madagascar-ilmenite",
    name: "Heavy Mineral Sands Rail Corridor",
    title: "Heavy Mineral Sands Rail Corridor",
    country: "Madagascar",
    sector: "Railway Solutions",
    category: "Railway Solutions",
    // TODO: CONFLICT: Toamasina rail terminal (nickel-cobalt tailings) vs the removed Home "Ilmenite" project (dedicated narrow-gauge rail spur to port) vs the Company page's Madagascar rail work.
    status: "ACTIVE",
    startYear: 2021,
    endYear: null,
    timeline: "2021 - Present",
    summary: "High-grade heavy mineral sand concession with certified 52.4% Titanium Dioxide (TiO₂) assay concentrations, supported by specialized spiral separation circuits and dedicated rail transfer.",
    excerpt: "High-grade heavy mineral sand concession with certified 52.4% Titanium Dioxide (TiO₂) assay concentrations, supported by specialized spiral separation circuits and dedicated rail transfer.",
    keyFacts: [
      "52.4% TiO₂ certified assay grade",
      "Low trace radionuclide profile",
      "Dedicated narrow-gauge rail spur to ocean port",
      "Multi-year off-take supply agreements"
    ],
    stats: [],
    image: SITE_IMAGES.projects.toamasinaRail.src,
    verified: false
  },
  {
    id: "ethiopia-railway",
    slug: "ethiopia-railway",
    name: "Railway Localization Programme",
    title: "Railway Localization Programme",
    country: "Ethiopia",
    sector: "Railway Solutions",
    category: "Railway Solutions",
    status: "ACTIVE",
    startYear: 2022,
    endYear: null,
    timeline: "2022 - Present",
    summary: "National railway capability development initiative focused on domestic track component fabrication, sleeper plant localization, ballast rehabilitation, and technical skills transfer.",
    excerpt: "National railway capability development initiative focused on domestic track component fabrication, sleeper plant localization, ballast rehabilitation, and technical skills transfer.",
    keyFacts: [
      "Track rehabilitation & ballast tamping",
      "Domestic railway maintenance capacity building",
      "Rolling stock engineering with partner syndicates",
      "Strategic logistics corridor expansion"
    ],
    stats: [],
    image: SITE_IMAGES.projects.toamasinaRail.src,
    verified: false
  }
];
