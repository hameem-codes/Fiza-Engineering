export interface ExternalMention {
  id: string;
  source: "LinkedIn" | "Instagram" | "X / Twitter" | "Industry Journal" | "Ministry of Mines";
  sourceType: "social" | "press" | "government";
  date: string;
  title: string;
  excerpt: string;
  authorOrHandle: string;
  url: string;
  image?: string;
  imageAlt?: string;
  tag: string;
}

export const EXTERNAL_COVERAGE: ExternalMention[] = [
  {
    id: "ext-1",
    source: "LinkedIn",
    sourceType: "social",
    date: "August 2026",
    title: "Katanga Fleet Mobilization Milestone",
    excerpt: "Fiza Engineering Corporation completes customs transit of 45 tier-1 heavy mining machines through the Port of Dar es Salaam into Haut-Katanga, reinforcing overburden stripping operations.",
    authorOrHandle: "Fiza Engineering Corporation · Official Update",
    url: "https://www.linkedin.com/company/fiza-engineering",
    image: "/images/capabilities/equipment-rebuild.jpg",
    imageAlt: "Heavy mining fleet units customized at regional depot",
    tag: "Fleet Logistics"
  },
  {
    id: "ext-2",
    source: "Ministry of Mines",
    sourceType: "government",
    date: "July 2026",
    title: "Falea 94-Km Bauxite Corridor Inspection",
    excerpt: "Sovereign infrastructure oversight delegation conducts final validation on the crushed-basalt haul road and river terminal integration in southwestern Mali. Transit times reduced by over 70%.",
    authorOrHandle: "Direction Nationale des Mines et de la Géologie",
    url: "https://fizaengineering.com",
    image: "/images/projects/project_falea.jpg",
    imageAlt: "94-kilometer all-weather mineral transport corridor",
    tag: "Government Inspection"
  },
  {
    id: "ext-3",
    source: "Industry Journal",
    sourceType: "press",
    date: "June 2026",
    title: "African Mining Review: Off-Grid Microgrid Integration",
    excerpt: "Feature analysis on Fiza's 25MW solar-diesel hybrid power station, synchronizing 16MW PV generation with automated load shedding to deliver 99.8% uptime to remote mineral ball mills.",
    authorOrHandle: "African Mining & Energy Review",
    url: "https://fizaengineering.com",
    image: "/images/capabilities/industrial-microgrids.jpg",
    imageAlt: "25MW industrial solar-diesel hybrid microgrid",
    tag: "Energy Systems"
  },
  {
    id: "ext-4",
    source: "Instagram",
    sourceType: "social",
    date: "May 2026",
    title: "Central Rebuild Depot Operations: Sikasso",
    excerpt: "Direct view from the 35,000 m² central depot floor: technicians completing precision hydraulic cylinder overhauls and powertrain bench testing to sustain 94%+ fleet availability.",
    authorOrHandle: "@fizaengineering · Operational Field Dispatch",
    url: "https://www.instagram.com",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Technicians servicing heavy hydraulic cylinder assemblies",
    tag: "Field Dispatch"
  },
  {
    id: "ext-5",
    source: "X / Twitter",
    sourceType: "social",
    date: "April 2026",
    title: "Heavy-Haul Rail Corridor Track Renewal",
    excerpt: "Field engineers confirm placement of 32-tonne axle-load ballasted track sections along the coastal mineral export rail link, ensuring continuous freight transit to deep-water berths.",
    authorOrHandle: "@FizaEngineering · Corridor Logistics",
    url: "https://x.com",
    image: "/images/capabilities/railway-solutions.jpg",
    imageAlt: "Heavy freight locomotive and ballasted track infrastructure",
    tag: "Railway Operations"
  }
];
