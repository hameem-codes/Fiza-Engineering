import { SITE_IMAGES } from "./images";

// TODO: OWNER TO CONFIRM MANUFACTURER
// Config flag: Set to false until confirmed whether Fiza manufactures machinery or only sources, owns, and leases it.
// If false, shows a "Fleet & Equipment" page listing categories of equipment the company owns, procures, or supplies (no invented model numbers or specs).
export const SHOW_PRODUCT_SPECS = false;

export interface KeySpec {
  label: string;
  value: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  fleetCount?: string;
  scope: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "Heavy Mining Fleet" | "Turnkey Plant Modules" | "Railway Solutions" | "Traded Minerals";
  modelNumber?: string;
  heroImage: string;
  imageAlt: string;
  verified: boolean;
  specs: Record<string, string>;
  keySpecs: KeySpec[]; // Exactly 3 key specs for card tables
  applications: string[];
  overview: string;
  specSheetPdf?: string | null;
  quoteType: string;
  // Traded Minerals specific fields
  grade?: string;
  origin?: string;
  packaging?: string;
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: "heavy-mining-fleet",
    name: "Heavy Mining Fleet",
    slug: "Heavy Mining Fleet",
    description: "Company-owned heavy excavation, loading, and off-highway haulage units deployed across active mine concessions and earthmoving corridors.",
    fleetCount: "450+ Machines",
    scope: [
      "80T to 120T hydraulic mining excavators and shovels",
      "90T to 100T rigid off-highway haul trucks",
      "Tracked bulldozers, motor graders, and wheel loaders",
      "Field maintenance service units and fuel tankers"
    ]
  },
  {
    id: "turnkey-plant-modules",
    name: "Turnkey Plant Modules",
    slug: "Turnkey Plant Modules",
    description: "Modular, skid-mounted primary and secondary crushing stations, beneficiation circuits, and overland bulk materials handling systems.",
    scope: [
      "Modular primary jaw crusher stations (350–680 TPH)",
      "Cone crushing and vibrating screening circuits",
      "Overland and barge loading conveyor belt networks",
      "Containerized switchgear, VFDs, and motor control centers"
    ]
  },
  {
    id: "railway-solutions",
    name: "Railway Solutions",
    slug: "Railway Solutions",
    description: "Heavy-haul freight locomotives, specialized mineral bulk hopper wagons, and dedicated track maintenance rolling stock.",
    scope: [
      "Heavy-haul diesel-electric freight locomotives (up to 4,400 BHP)",
      "Narrow-gauge (Cape gauge 1,067 mm) and standard-gauge (1,435 mm) bogies",
      "Heavy dry-bulk bottom-dump and rotary-dump hopper wagons",
      "Continuous rail ballast tampers and maintenance vehicles"
    ]
  },
  {
    id: "traded-minerals",
    name: "Traded Minerals",
    slug: "Traded Minerals",
    description: "Commercial supply and off-take contracts for high-grade industrial minerals and bulk metallic commodities mined and processed across Africa.",
    scope: [
      "Metallurgical-grade bauxite for alumina refining",
      "Direct shipping iron ore (hematite and magnetite lump/fines)",
      "Refined Grade-A copper cathodes and copper blister ingots",
      "High-grade titanium ilmenite mineral sand concentrates"
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "fiza-980-excavator",
    slug: "fiza-980-excavator",
    name: "FIZA-980 Heavy Hydraulic Mining Excavator",
    category: "Heavy Mining Fleet",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    modelNumber: "FX-980-HD",
    heroImage: "/images/capabilities/mining-services.jpg",
    imageAlt: "FIZA-980 massive hydraulic excavator actively digging and loading in an open-pit mine",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    verified: false,
    specs: {
      "Operating Weight": "98,500 kg (108 US Tons)",
      "Engine Power": "567 kW (760 HP) Cummins QSK19 Diesel",
      "Standard Bucket Capacity": "6.5 m³ Heavy Rock Armored",
      "Maximum Digging Depth": "9.24 meters",
      "Breakout Force": "480 kN ISO",
      "Fuel Tank Capacity": "1,220 Liters"
    },
    keySpecs: [
      { label: "Operating Weight", value: "98,500 kg" },
      { label: "Engine Power", value: "567 kW (760 HP)" },
      { label: "Bucket Capacity", value: "6.5 m³" }
    ],
    applications: [
      "Open-pit overburden removal",
      "Direct truck loading into 60T-100T haulers",
      "Hard-rock quarry extraction",
      "Bulk material reclamation"
    ],
    overview: "98-tonne hydraulic mining excavator configured for continuous open-pit overburden removal and direct truck loading. Equipped with a heavy-duty cooling radiator pack, reinforced forged boom linkages, and an air-filtered operator cabin.",
    specSheetPdf: null,
    quoteType: "equipment-procurement"
  },
  {
    id: "jaw-crusher-station-1200",
    slug: "jaw-crusher-station-1200",
    name: "Modular Primary Jaw Crusher Station",
    category: "Turnkey Plant Modules",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    modelNumber: "JC-1200-MOD",
    heroImage: "/images/capabilities/turnkey-plants.jpg",
    imageAlt: "Large industrial jaw crusher and primary crushing station with conveyor belts",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    verified: false,
    specs: {
      "Feed Opening Size": "1,200 mm x 950 mm",
      "Maximum Feed Chunk": "820 mm Solid Basalt / Quartz",
      "Throughput Capacity": "350 - 680 TPH (variable CSS)",
      "Drive Electric Motor": "200 kW 400V 50Hz ABB",
      "Discharge Conveyor": "1,200 mm Heavy Belt with Magnet",
      "Structural Foundation": "Pre-cast skid modular mount"
    },
    keySpecs: [
      { label: "Feed Opening", value: "1,200 mm x 950 mm" },
      { label: "Throughput Capacity", value: "350 - 680 TPH" },
      { label: "Drive Motor", value: "200 kW 400V" }
    ],
    applications: [
      "Primary run-of-mine reduction",
      "Pre-crushing circuit for ball mill feeds",
      "Railway ballast production from granite quarries",
      "Concrete aggregate processing"
    ],
    overview: "Skid-mounted modular primary jaw crusher station for run-of-mine ore reduction and aggregate processing. Electrical switchgear, variable frequency drives, and grease lubrication pumps are pre-wired into a standardized containerized control module.",
    specSheetPdf: null,
    quoteType: "turnkey-plants"
  },
  {
    id: "heavy-haul-locomotive-4400",
    slug: "heavy-haul-locomotive-4400",
    name: "FIZA-4400 Heavy-Haul Diesel-Electric Freight Locomotive",
    category: "Railway Solutions",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    modelNumber: "FL-4400-AC",
    heroImage: "/images/capabilities/railway-solutions.jpg",
    imageAlt: "FIZA-4400 large freight locomotive pulling cargo wagons on industrial railway tracks",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    verified: false,
    specs: {
      "Power Output": "4,400 BHP (3,280 kW) AC Traction",
      "Axle Configuration": "Co-Co (6 Axles Powered)",
      "Starting Tractive Effort": "640 kN",
      "Continuous Tractive Effort": "534 kN",
      "Track Gauge": "1,067 mm (Cape Gauge) or 1,435 mm (Standard)",
      "Maximum Operating Speed": "105 km/h Loaded"
    },
    keySpecs: [
      { label: "Power Output", value: "4,400 BHP (3,280 kW)" },
      { label: "Axle Layout", value: "Co-Co (6 Powered Axles)" },
      { label: "Tractive Effort", value: "640 kN Starting" }
    ],
    applications: [
      "Heavy bulk mineral consist haulage (6,000+ tonnes)",
      "Long-distance cross-border mineral logistics",
      "Steep grade ascent on mountain corridor routes"
    ],
    overview: "Heavy-haul Co-Co diesel-electric freight locomotive engineered for bulk mineral unit trains up to 6,000 tonnes. Incorporates AC traction motors, microprocessor wheel-slip control, and dual-gauge options for Cape gauge and standard gauge.",
    specSheetPdf: null,
    quoteType: "railway-solutions"
  },
  {
    id: "fiza-rt100-haul-truck",
    slug: "fiza-rt100-haul-truck",
    name: "FIZA-RT100 Rigid Mining Haul Truck",
    category: "Heavy Mining Fleet",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    modelNumber: "RT-100-MINER",
    heroImage: "/images/projects/project_falea.jpg",
    imageAlt: "FIZA-RT100 massive rigid mining haul truck operating inside an open-pit mine",
    // TODO: OWNER TO CONFIRM MANUFACTURER
    verified: false,
    specs: {
      "Nominal Payload": "95,000 kg (105 US Tons)",
      "Gross Machine Weight": "165,000 kg",
      "Engine Rating": "783 kW (1,050 HP) Heavy V12 Turbo",
      "Heaped Capacity (SAE 2:1)": "60.4 m³",
      "Top Speed (Loaded)": "64 km/h",
      "Tire Size": "27.00R49 E-4 Deep Tread"
    },
    keySpecs: [
      { label: "Nominal Payload", value: "95,000 kg (105 US Tons)" },
      { label: "Engine Rating", value: "783 kW (1,050 HP)" },
      { label: "Heaped Capacity", value: "60.4 m³ (SAE 2:1)" }
    ],
    applications: [
      "Large-scale open-pit iron ore and bauxite haulage",
      "High-gradient pit ramp ascents up to 12%",
      "Continuous fleet operations pairing with 80T-120T excavators"
    ],
    overview: "95-tonne off-highway rigid dump truck for bulk open-pit mineral transport. Equipped with oil-cooled retarder braking for downhill loaded descents and a high-strength structural box-section chassis resistant to torsional stress.",
    specSheetPdf: null,
    quoteType: "equipment-procurement"
  }
];

export const TRADED_MINERALS: ProductItem[] = [
  {
    id: "mineral-bauxite",
    slug: "mineral-bauxite",
    name: "Metallurgical Bauxite Ore",
    category: "Traded Minerals",
    heroImage: "/images/projects/project_katanga.jpg",
    imageAlt: "Large stockpile of reddish-brown metallurgical bauxite ore at port terminal",
    verified: true,
    grade: "45% - 48% Al₂O₃ (Total Alumina), Reactive Silica < 2.5%",
    origin: "Republic of Guinea / Western Mali Corridors",
    packaging: "Bulk carrier vessel (Panamax/Capesize), river barge, or open-top rail hopper",
    specs: {
      "Alumina Content (Al₂O₃)": "45% - 48%",
      "Reactive Silica (SiO₂)": "< 2.5%",
      "Moisture Content": "8% - 12% max",
      "Size Fraction": "0 - 100 mm run-of-mine / crushed",
      "Annual Shipping Capacity": "8.5M Tonnes corridor throughput",
      "Delivery Terms": "FOB Port Kamsar / Conakry or CIF destination"
    },
    keySpecs: [
      { label: "Grade", value: "45% - 48% Al₂O₃" },
      { label: "Origin", value: "Guinea / Mali" },
      { label: "Packaging", value: "Bulk Vessel / Barge" }
    ],
    applications: [
      "Primary alumina refinery feed",
      "Refractory and abrasive industrial manufacturing",
      "Chemical manufacturing raw material"
    ],
    overview: "High-grade metallurgical bauxite ore extracted along dedicated transport corridors. Screened and loaded for direct river barge and deepwater maritime export.",
    specSheetPdf: null,
    quoteType: "mineral-trading"
  },
  {
    id: "mineral-iron-ore",
    slug: "mineral-iron-ore",
    name: "Direct Shipping Iron Ore (Hematite & Magnetite)",
    category: "Traded Minerals",
    heroImage: "/images/projects/project_bamako.jpg",
    imageAlt: "Direct shipping iron ore lumps and hematite metallic chunks consolidated at bulk rail heads",
    verified: true,
    grade: "62% - 64.5% Fe (Lump & Sinter Fines)",
    origin: "West & Central African Extraction Corridors",
    packaging: "Bulk maritime carrier or heavy rail hopper consist",
    specs: {
      "Iron Grade (Fe)": "62.0% - 64.5%",
      "Silica (SiO₂)": "3.5% - 4.5%",
      "Alumina (Al₂O₃)": "1.8% - 2.4%",
      "Phosphorus (P)": "0.06% max",
      "Moisture": "7.5% - 9.0%",
      "Physical Form": "Lump (10-30 mm) and Fines (0-10 mm)"
    },
    keySpecs: [
      { label: "Grade", value: "62% - 64.5% Fe" },
      { label: "Origin", value: "West Africa" },
      { label: "Packaging", value: "Bulk Carrier / Rail" }
    ],
    applications: [
      "Blast furnace feed for primary steelmaking",
      "Direct reduced iron (DRI) pellets production",
      "Heavy industrial metallurgical casting"
    ],
    overview: "Direct shipping iron ore comprising high-purity hematite and magnetite lump and sinter fines, consolidated at regional bulk rail heads for international export.",
    specSheetPdf: null,
    quoteType: "mineral-trading"
  },
  {
    id: "mineral-copper-cathode",
    slug: "mineral-copper-cathode",
    name: "Grade-A Copper Cathode & Copper Blister",
    category: "Traded Minerals",
    heroImage: "/images/capabilities/mineral-trading.jpg",
    imageAlt: "Stacked Grade-A copper cathode plates bundled for export",
    verified: true,
    grade: "Grade-A 99.9935% Cu Cathode & 98.5%+ Copper Blister Ingots",
    origin: "Democratic Republic of the Congo (Haut-Katanga / Kolwezi)",
    packaging: "Bundled strapping (2.5 MT bundles) containerized or bonded break-bulk",
    specs: {
      "Purity": "99.9935% Copper min (BS EN 1978:1998)",
      "Standard": "LME Grade-A Certified",
      "Sheet Dimensions": "914 mm x 914 mm x 12 mm approx.",
      "Bundle Weight": "2,500 kg (+/- 1%) steel strapped",
      "Inspection": "Third-party audited (SGS / Alex Stewart)",
      "Origin Corridor": "Kolwezi / Haut-Katanga via Dar es Salaam or Walvis Bay"
    },
    keySpecs: [
      { label: "Grade", value: "99.99% Cu (Grade-A)" },
      { label: "Origin", value: "DRC (Kolwezi)" },
      { label: "Packaging", value: "2.5T Strapped Bundles" }
    ],
    applications: [
      "Electrical copper rod and wire drawing",
      "Industrial electrical transmission cabling",
      "High-conductivity alloy extrusion and brass fabrication"
    ],
    overview: "Electrolytically refined Grade-A copper cathodes produced from hydrometallurgical SX-EW processing in the Katanga Copperbelt, bundled and audited for bonded maritime export.",
    specSheetPdf: null,
    quoteType: "mineral-trading"
  },
  {
    id: "mineral-ilmenite",
    slug: "mineral-ilmenite",
    name: "Heavy Mineral Sands Ilmenite Concentrate",
    category: "Traded Minerals",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Dark stockpile of heavy mineral sands and ilmenite concentrate extraction",
    verified: true,
    grade: "48% - 52% TiO₂ Heavy Mineral Sands Concentrate",
    origin: "Republic of Madagascar (Toamasina Coastal Spurring)",
    packaging: "Bulk vessel or 1.5 MT heavy woven polypropylene big bags",
    specs: {
      "Titanium Dioxide (TiO₂)": "48.0% - 52.0%",
      "Total Iron (Fe)": "32.0% - 35.0%",
      "Vanadium (V₂O₅)": "< 0.35%",
      "Chromium (Cr₂O₃)": "< 0.15%",
      "Grain Size": "90% between 75 - 250 microns",
      "Logistics Route": "Dedicated rail spur direct to Port of Toamasina"
    },
    keySpecs: [
      { label: "Grade", value: "48% - 52% TiO₂" },
      { label: "Origin", value: "Madagascar (Toamasina)" },
      { label: "Packaging", value: "Bulk Vessel / 1.5T Big Bags" }
    ],
    applications: [
      "Titanium dioxide pigment (sulfate / chloride process)",
      "Titanium metal sponge production",
      "Welding rod flux coating ingredients"
    ],
    overview: "High-grade ilmenite heavy mineral sands concentrate beneficiated through spiral gravity separation and railed directly to coastal deepwater export berths in Madagascar.",
    specSheetPdf: null,
    quoteType: "mineral-trading"
  }
];

export const ALL_CATALOG_ITEMS: ProductItem[] = [
  ...PRODUCTS,
  ...TRADED_MINERALS
];
