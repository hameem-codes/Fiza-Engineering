/**
 * Central Image Registry for Fiza Engineering Corporation
 * 
 * RULE: No image may appear more than once across the site (except logos).
 * Every Unsplash ID in this file is unique and maps to a specific editorial context.
 */

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const SITE_IMAGES = {
  // Homepage Hero
  homeHero: {
    src: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=2000&auto=format&fit=crop",
    alt: "Heavy hydraulic excavator loading rock at deep open-pit industrial mining concession",
    width: 2000,
    height: 1200,
  },

  // Homepage Company Editorial Strip
  editorialMining: {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
    alt: "High-tonnage surface mining extraction and overburden stripping operations",
    width: 1200,
    height: 800,
  },

  // Company Page
  company: {
    hero: {
      src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2000&auto=format&fit=crop",
      alt: "Aerial view of large-scale open-pit mining operations and mineral excavation benches",
      width: 2000,
      height: 1200,
    },
    fieldOps: {
      src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&auto=format&fit=crop",
      alt: "Field engineering team validating mechanical and structural tolerances on site",
      width: 1200,
      height: 800,
    },
  },

  // Contact Page
  contact: {
    hero: {
      src: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2000&auto=format&fit=crop",
      alt: "Fiza Engineering project directors and site engineers in consultation reviewing operational plans",
      width: 2000,
      height: 1200,
    },
  },

  // Turnkey Plant Strip (Modular Industrial Capabilities)
  turnkeyStrip: {
    primaryCrushing: {
      src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop",
      alt: "Modular primary jaw crushing station handling raw run-of-mine ore",
      width: 800,
      height: 500,
    },
    gravitySeparation: {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
      alt: "Heavy gravity separation spiraling circuits for physical mineral beneficiation",
      width: 800,
      height: 500,
    },
    grainSilo: {
      src: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      alt: "Industrial steel grain elevator conveyor terminal with pneumatic offloading",
      width: 800,
      height: 500,
    },
    slurryPumps: {
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
      alt: "Tailings slurry pump manifold station engineered for continuous high-solids throughput",
      width: 800,
      height: 500,
    },
  },

  // Capabilities (8 Divisions)
  capabilities: {
    miningServices: {
      src: "/images/capabilities/mining-services.jpg",
      alt: "Open-pit mining operation with hydraulic excavators and haul trucks actively working benches",
      width: 1920,
      height: 1080,
    },
    mineralTrading: {
      src: "/images/capabilities/mineral-trading.jpg",
      alt: "Bulk mineral stockpiles and overland conveyor systems at a maritime export terminal",
      width: 1920,
      height: 1080,
    },
    railwaySolutions: {
      src: "/images/capabilities/railway-solutions.jpg",
      alt: "Heavy freight train hauling mineral cargo hoppers across an industrial rail corridor",
      width: 1920,
      height: 1080,
    },
    heavyCivil: {
      src: "/images/capabilities/heavy-infrastructure.jpg",
      alt: "Large reinforced concrete bridge and arterial heavy-haul road under construction",
      width: 1920,
      height: 1080,
    },
    turnkeyPlants: {
      src: "/images/capabilities/turnkey-plants.jpg",
      alt: "Heavy industrial mineral processing plant floor, ball mills, and mechanical circuits",
      width: 1920,
      height: 1080,
    },
    commercialAgriculture: {
      src: "/images/capabilities/commercial-agriculture.jpg",
      alt: "Wide-angle commercial farmland with center-pivot irrigation and mechanized harvesting",
      width: 1920,
      height: 1080,
    },
    equipmentRemanufacturing: {
      src: "/images/capabilities/equipment-rebuild.jpg",
      alt: "Heavy equipment maintenance workshop bay with technicians servicing powertrains",
      width: 1920,
      height: 1080,
    },
    energyMicrogrids: {
      src: "/images/capabilities/industrial-microgrids.jpg",
      alt: "Off-grid hybrid industrial microgrid with solar panel arrays and containerized diesel generators",
      width: 1920,
      height: 1080,
    },
  },

  // Major Projects
  projects: {
    faleaMali: {
      src: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1600&auto=format&fit=crop",
      alt: "Falea Bauxite Mineral Corridor earthmoving and haul road stabilization",
      width: 1600,
      height: 1000,
    },
    katangaCopper: {
      src: "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?q=80&w=1600&auto=format&fit=crop",
      alt: "Haut-Katanga copper concentrator plant and flotation cell construction",
      width: 1600,
      height: 1000,
    },
    toamasinaRail: {
      src: "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1600&auto=format&fit=crop",
      alt: "Toamasina mineral sands extraction and coastal rail corridor",
      width: 1600,
      height: 1000,
    },
    sikassoRebuild: {
      src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop",
      alt: "Sikasso regional fleet rebuild workshops and hydraulic testing bays",
      width: 1600,
      height: 1000,
    },
    manonoCorridor: {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
      alt: "Manono critical minerals logistics corridor and heavy-haul railway track",
      width: 1600,
      height: 1000,
    },
    sikassoAgro: {
      src: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1600&auto=format&fit=crop",
      alt: "Commercial grain storage silos and agro-industrial facility",
      width: 1600,
      height: 1000,
    },
    civilBridge: {
      src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1600&auto=format&fit=crop",
      alt: "Civil engineering concrete bridge construction over waterway",
      width: 1600,
      height: 1000,
    },
    industrialCircuit: {
      src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop",
      alt: "Industrial ore crushing facility and mechanical chutes",
      width: 1600,
      height: 1000,
    },
  },

  // Products & Equipment
  products: {
    hydraulicShovel: {
      src: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?q=80&w=1600&auto=format&fit=crop",
      alt: "FZ-850 ultra-heavy hydraulic mining shovel operating on bench face",
      width: 1600,
      height: 1000,
    },
    crusherStation: {
      src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1600&auto=format&fit=crop",
      alt: "FZ-CrushMaster 1200 modular primary jaw crushing station",
      width: 1600,
      height: 1000,
    },
    locomotive: {
      src: "https://images.unsplash.com/photo-1527259105003-ea855b58ba05?q=80&w=1600&auto=format&fit=crop",
      alt: "FZ-4400 heavy-haul diesel-electric freight locomotive",
      width: 1600,
      height: 1000,
    },
    dumpTruck: {
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop",
      alt: "FZ-180 rigid frame mining dump truck transporting blasted ore",
      width: 1600,
      height: 1000,
    },
  },

  // News Articles
  news: {
    faleaHaulRoad: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
      alt: "Completed all-weather heavy mineral haul road in southwestern Mali",
      width: 1600,
      height: 1000,
    },
    solarMicrogrid: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
      alt: "25MW industrial solar-diesel hybrid microgrid synchronized at remote mine site",
      width: 1600,
      height: 1000,
    },
    railModernization: {
      src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1600&auto=format&fit=crop",
      alt: "Modernized mineral freight consist rolling on reinforced ballast",
      width: 1600,
      height: 1000,
    },
  },

  // Field Dispatches & Social Logs
  social: {
    sikassoDepot: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
      alt: "Technicians rebuilding hydraulic cylinder assemblies at Sikasso depot",
      width: 800,
      height: 600,
    },
    kolweziFlotation: {
      src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
      alt: "Flotation circuit testing at Kolwezi processing plant",
      width: 800,
      height: 600,
    },
    grainTerminal: {
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      alt: "Grain conveyance and elevator terminal pneumatic discharge testing",
      width: 800,
      height: 600,
    },
  },

  // Mining Page Territorial Breakdown
  miningPage: {
    mali: {
      src: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=1200&auto=format&fit=crop",
      alt: "Open-pit bauxite surface mining cut in southwestern Mali",
      width: 1200,
      height: 800,
    },
    drc: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      alt: "Central Africa mineral transport staging and heavy logistical base",
      width: 1200,
      height: 800,
    },
    madagascar: {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      alt: "Coastal mineral sands concession and maritime export corridor in Madagascar",
      width: 1200,
      height: 800,
    },
  },
};
