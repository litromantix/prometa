export type Category =
  | "healthcare"
  | "aviation"
  | "retail"
  | "hospitality"
  | "corporate";

export const categories: { key: Category; label: string }[] = [
  { key: "healthcare", label: "Healthcare & Science" },
  { key: "aviation", label: "Aviation & Infrastructure" },
  { key: "retail", label: "Retail & Commercial Malls" },
  { key: "hospitality", label: "Hospitality & High-Rise Residential" },
  { key: "corporate", label: "Corporate Headquarters" },
];

export type Tag =
  | "perforated-cladding"
  | "point-fix-spider-glass"
  | "u-channel-glass"
  | "led-lighting"
  | "stainless-mesh";

export const tags: { key: Tag; label: string }[] = [
  { key: "perforated-cladding", label: "#PerforatedCladding" },
  { key: "point-fix-spider-glass", label: "#PointFixSpiderGlass" },
  { key: "u-channel-glass", label: "#UChannelGlass" },
  { key: "led-lighting", label: "#LEDLightingIntegration" },
  { key: "stainless-mesh", label: "#StainlessMeshPanels" },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  contractorLabel: "General Contractor" | "Investor";
  contractor: string;
  category: Category;
  overview: string;
  scope: string[];
  tags: Tag[];
  image: string | null;
};

export const projects: Project[] = [
  {
    id: "ikb-infectious-hospital",
    name: "IKB Infectious Clinical Hospital",
    location: "Moscow, Russian Federation",
    contractorLabel: "General Contractor",
    contractor: "ENKA İnşaat A.Ş.",
    category: "healthcare",
    overview:
      "A massive, multi-tiered healthcare complex featuring a highly complex, layered geometric facade designed to maximize daylight while maintaining exceptional thermal efficiency.",
    scope: [
      "Fabrication and precision installation of specialized perforated aluminium and steel facade claddings forming the iconic white outer structural panels.",
      "High-performance, integrated energy-saving aluminium window and door systems.",
      "Integrated architectural balustrading and handrail systems wrapping around multi-level exterior terraces.",
      "Seamless integration of linear exterior LED lighting systems within the facade cladding joints to outline the building's distinct modern geometry at night.",
    ],
    tags: ["perforated-cladding", "led-lighting"],
    image: "/projects/ikb1-facade.jpg",
  },
  {
    id: "medical-diagnostic-center",
    name: "Medical Consultation and Diagnostic Center",
    location: "Moscow, Russian Federation",
    contractorLabel: "General Contractor",
    contractor: "Monotek İnşaat A.Ş. (Kazan / Tataristan)",
    category: "healthcare",
    overview:
      "A state-of-the-art medical and diagnostic center utilizing vibrant, vertical glass-and-aluminium louvers to achieve a striking modern aesthetic and custom solar control.",
    scope: [
      "Precision facade engineering of structural aluminium framing and high-transparency curtain wall glazing.",
      "Custom-fabricated architectural vertical sun-shading panels in vibrant green and white powder-coated finishes.",
      "High-security point-fixing glass balustrades and stainless steel support handrails protecting pedestrian entrance ways.",
    ],
    tags: [],
    image: "/projects/hadassah-medical-moscow.jpg",
  },
  {
    id: "city-clinical-hospital-15",
    name: "City Clinical Hospital No. 15",
    location: "Moscow, Russian Federation",
    contractorLabel: "General Contractor",
    contractor: "Monotek İnşaat A.Ş.",
    category: "healthcare",
    overview:
      "A high-capacity, multi-wing clinical facility requiring strict compliance with clinical hygiene, seismic safety, and thermal performance regulations.",
    scope: [
      "Heavy-duty aluminium window systems and multi-pane curtain glazing structures.",
      "Bespoke, multi-colored insulated metal composite wall panels (green, orange, and beige finishes) integrated seamlessly with structural masonry.",
      "Rigid stainless steel handrails and protective entry barrier systems.",
    ],
    tags: [],
    image: "/projects/hospital-finished.jpg",
  },
  {
    id: "izmir-adnan-menderes-airport",
    name: "İzmir Adnan Menderes Airport (Domestic Terminal)",
    location: "İzmir, Turkey",
    contractorLabel: "General Contractor",
    contractor: "TAV Airports Holding",
    category: "aviation",
    overview:
      "A world-class transit hub defined by soaring heights, open-concept walkways, and massive passenger bridge networks requiring heavy-duty, high-traffic glass barriers.",
    scope: [
      "Heavy-duty glass floor coverings at pedestrian bridges engineered with integrated steel construction to support millions of travelers annually.",
      "Architectural glass railings utilizing structural aluminium base profiles and high-gloss stainless steel handrails.",
      "Heavy-use stair glass railings with specialized stainless steel point-fix glass brackets.",
      "Custom-engineered half-painted architectural glass panels to provide elegant privacy screens on mezzanine walkways.",
      "High-tolerance stainless steel floor skirtings running throughout the main passenger terminal corridors.",
    ],
    tags: [],
    image: null,
  },
  {
    id: "ashgabat-airport",
    name: "International Airport Terminal Building",
    location: "Ashgabat, Turkmenistan",
    contractorLabel: "General Contractor",
    contractor: "Polimeks İnşaat A.Ş.",
    category: "aviation",
    overview:
      "A majestic national landmark incorporating fluid, organic shapes and colossal glass facades designed to withstand extreme desert temperature fluctuations.",
    scope: [
      "Structural cable and point-fixing glass facades featuring heavy-duty stainless steel spider and routel systems to maximize structural transparency.",
      "Grand architectural glass railings with custom steel construction and integrated aluminium U-channel clamping systems.",
      "High-end stainless steel handrails and protective skirting on all grand staircases and passenger ramps.",
    ],
    tags: ["point-fix-spider-glass"],
    image: null,
  },
  {
    id: "kuntsevo-plaza",
    name: "Kuntsevo Plaza",
    location: "Moscow, Russian Federation",
    contractorLabel: "General Contractor",
    contractor: "ENKA İnşaat A.Ş.",
    category: "retail",
    overview:
      "An award-winning, ultra-luxury retail and commercial space featuring complex suspended structural glass installations and high-traffic public barriers.",
    scope: [
      "Bespoke U-channel glass application suspended between multiple retail levels, supported by heavy-duty stainless steel posts, brackets, pipes, and spider-and-routil connectors.",
      "Atrium stair railings featuring robust stainless steel posts, brackets, and custom-tensioned stainless steel wire mesh panels (using 6mm bars framed within thick stainless steel plates).",
      "Atrium balustrades integrated with elegant, concealed LED strip lighting running directly within the handrail profiles.",
      "High-impact glass railings utilizing specialized aluminum base profiles, heavy-duty glass, premium wooden handrails, and stainless steel support brackets.",
      "Precision-aligned aluminium composite facade claddings integrated directly with structural balustrades and stainless steel floor skirtings.",
    ],
    tags: ["u-channel-glass", "led-lighting", "stainless-mesh"],
    image: null,
  },
  {
    id: "kashirskaya-trade-center",
    name: "Kashirskaya Multifunctional Trade Center",
    location: "Moscow, Russian Federation",
    contractorLabel: "General Contractor",
    contractor: "ENKA İnşaat A.Ş.",
    category: "retail",
    overview:
      "A massive commercial and entertainment mall centered around sweeping curves, continuous vertical circular openings, and high-visibility panoramic lift enclosures.",
    scope: [
      "Continuous inclined glass railings following the precise curvature of the retail levels, engineered with stainless steel point-fix brackets, custom glasses decorated with vertical painted stripes, and stainless steel handrails.",
      "Panoramic elevator glass claddings utilizing specialized steel anchor plates, high-tensile stainless steel spiders, routels, and custom structural glass.",
      "High-traffic stair glass railings equipped with heavy-duty stainless steel skirting and brackets.",
    ],
    tags: ["point-fix-spider-glass"],
    image: null,
  },
  {
    id: "trump-shopping-mall",
    name: "Trump Shopping Mall",
    location: "İstanbul, Turkey",
    contractorLabel: "General Contractor",
    contractor: "D Yapı A.Ş.",
    category: "retail",
    overview:
      "A high-end commercial complex demanding a minimalist, high-transparency aesthetic achieved through raw structural steel and ultra-clear laminated glass.",
    scope: [
      "Striking suspended stairs engineered with special design steel constructions, stainless steel point-fix brackets, glass railings, and structural glass steps.",
      "Frameless structural glass separators and elevator claddings utilizing heavy steel anchor plates and precision-machined stainless steel glass brackets.",
      "Gallery-edge glass railings clamping directly into integrated steel U-channels, finished with premium wooden handrails.",
    ],
    tags: ["point-fix-spider-glass"],
    image: null,
  },
  {
    id: "jw-marriott-absheron",
    name: "JW Marriott Absheron Hotel",
    location: "Baku, Azerbaijan",
    contractorLabel: "General Contractor",
    contractor: "Strabag Baku",
    category: "hospitality",
    overview:
      "A premier 5-star hotel landmark requiring highly secure, aerodynamically stable balcony balustrades capable of withstanding intense coastal wind loads.",
    scope: [
      "Balcony glass railings featuring side-mounted, heavy-duty aluminium base profiles and protective aluminium handrails.",
      "Seamless integration of custom aluminium facade cladding profiles acting as a continuous horizontal transition band between the building's floor plates and the glass balustrades.",
    ],
    tags: [],
    image: null,
  },
  {
    id: "el-aurassi-hotel",
    name: "El Aurassi Hotel",
    location: "Algiers, Algeria",
    contractorLabel: "General Contractor",
    contractor: "Kontek İnşaat A.Ş.",
    category: "hospitality",
    overview:
      "A brutalist-meets-modern hotel restoration demanding premium balcony privacy solutions and durable, salt-air-resistant metals.",
    scope: [
      "Balcony edge glass railings utilizing side-mounted architectural aluminium base profiles and high-grade stainless steel handrails.",
      "Custom-fabricated balcony privacy separators engineered with robust stainless steel glass brackets, premium milky glass panels, and corrosion-resistant stainless steel structural connectors.",
    ],
    tags: [],
    image: null,
  },
  {
    id: "eti-gida-hq",
    name: "ETİ Gıda Chief Executive Office Building",
    location: "Eskişehir, Turkey",
    contractorLabel: "Investor",
    contractor: "ETİ Gıda San. A.Ş.",
    category: "corporate",
    overview:
      "An ultra-modern, daylight-flooded corporate headquarters utilizing open workspaces, floating walkways, and high-transparency glass dividers.",
    scope: [
      "Elegant mezzanine glass railings supported by custom-engineered steel substructures and integrated aluminium U-channel base assemblies.",
      "Sleek stainless steel handrails and protective skirting lining all interior multi-floor walkways.",
    ],
    tags: [],
    image: null,
  },
];
