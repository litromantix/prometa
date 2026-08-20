export type Country =
  | "Russia"
  | "Turkey"
  | "Azerbaijan"
  | "Algeria"
  | "Libya"
  | "Turkmenistan"
  | "Moldova";

export const countries: Country[] = [
  "Russia",
  "Turkey",
  "Azerbaijan",
  "Algeria",
  "Libya",
  "Turkmenistan",
  "Moldova",
];

export const contractorFilters = [
  "ENKA",
  "TAV",
  "Summa",
  "Polimeks",
  "Strabag",
  "Monotek",
  "Kontek",
  "ADEC",
  "Tepe",
];

export type Reference = {
  id: string;
  project: string;
  buildingType: string;
  city: string;
  country: Country;
  contractor: string;
};

export const references: Reference[] = [
  {
    id: "kuntsevo-plaza",
    project: "Kuntsevo Plaza",
    buildingType: "Shopping and Trade Center",
    city: "Moscow",
    country: "Russia",
    contractor: "ENKA İnşaat A.Ş.",
  },
  {
    id: "kashirskaya-trade-center",
    project: "Kashirskaya Multifunctional Trade Center",
    buildingType: "Shopping Mall",
    city: "Moscow",
    country: "Russia",
    contractor: "ENKA İnşaat A.Ş.",
  },
  {
    id: "izmir-airport",
    project: "İzmir Adnan Menderes Airport",
    buildingType: "Domestic Flights Terminal",
    city: "İzmir",
    country: "Turkey",
    contractor: "TAV Airports Holding",
  },
  {
    id: "aqua-florya-mall",
    project: "Aqua Florya Shopping Mall (Akvaryum AVM)",
    buildingType: "Shopping Mall",
    city: "İstanbul",
    country: "Turkey",
    contractor: "Akvaryum Tur. Yat. İnş. A.Ş.",
  },
  {
    id: "eurovision-crystal-hall",
    project: "Eurovision SCC Project – Crystal Hall",
    buildingType: "Public Assembly Arena",
    city: "Baku",
    country: "Azerbaijan",
    contractor: "Alpine Bau – Munich",
  },
  {
    id: "sheremetyevo-svo3",
    project: "Sheremetyevo Airport Terminal – SVO3",
    buildingType: "Airport Terminal",
    city: "Moscow",
    country: "Russia",
    contractor: "ENKA / Enmar Co. Inc. – Moscow",
  },
  {
    id: "jw-marriott-baku",
    project: "JW Marriott Absheron Baku Hotel",
    buildingType: "5-Star Hotel",
    city: "Baku",
    country: "Azerbaijan",
    contractor: "Strabag Baku",
  },
  {
    id: "trump-towers-mall",
    project: "Trump Towers AVM",
    buildingType: "Shopping Mall",
    city: "İstanbul",
    country: "Turkey",
    contractor: "D Yapı A.Ş.",
  },
  {
    id: "ashgabat-airport",
    project: "Ashgabat International Airport Terminal Building",
    buildingType: "Airport Terminal",
    city: "Ashgabat",
    country: "Turkmenistan",
    contractor: "Polimeks İnşaat A.Ş.",
  },
  {
    id: "gateway-office-baku",
    project: "Gateway Office Building — White City",
    buildingType: "Corporate Offices",
    city: "Baku",
    country: "Azerbaijan",
    contractor: "ADEC – Azerbaijan Development Company",
  },
  {
    id: "eti-hq",
    project: "ETİ Headquarter Office Building",
    buildingType: "Corporate Offices",
    city: "Eskişehir",
    country: "Turkey",
    contractor: "Investor: ETİ Gıda San. A.Ş.",
  },
  {
    id: "el-aurassi-hotel",
    project: "El Aurassi Hotel",
    buildingType: "Hotel Development",
    city: "Algiers",
    country: "Algeria",
    contractor: "Kontek İnşaat A.Ş.",
  },
  {
    id: "radisson-blu-tripoli",
    project: "Radisson BLU Hotel",
    buildingType: "Hotel Development",
    city: "Tripoli",
    country: "Libya",
    contractor: "Summa İnşaat A.Ş.",
  },
  {
    id: "kazan-airport",
    project: "Kazan Airport Terminal Building",
    buildingType: "Airport Terminal",
    city: "Kazan, Tataristan",
    country: "Russia",
    contractor: "Monotek İnşaat A.Ş.",
  },
  {
    id: "malldova-mall",
    project: "MallDova Shopping Mall",
    buildingType: "Shopping Mall",
    city: "Chișinău",
    country: "Moldova",
    contractor: "Summa İnşaat A.Ş.",
  },
  {
    id: "ramstore-15",
    project: "Ramstore 15 Shopping Mall",
    buildingType: "Shopping Mall",
    city: "Moscow",
    country: "Russia",
    contractor: "ENKA İnşaat A.Ş.",
  },
  {
    id: "festival-mall",
    project: "Festival Shopping Mall",
    buildingType: "Shopping Mall",
    city: "Moscow",
    country: "Russia",
    contractor: "Summa İnşaat A.Ş.",
  },
  {
    id: "it-tekno-park",
    project: "IT Tekno Park",
    buildingType: "Technology Park / Offices",
    city: "Kazan, Tataristan",
    country: "Russia",
    contractor: "Monotek İnşaat A.Ş.",
  },
  {
    id: "khanty-mansiysk-theatre",
    project: "Theatre — Ice Hockey and Bowling Centre",
    buildingType: "Sports & Leisure Complex",
    city: "Khanty-Mansiysk",
    country: "Russia",
    contractor: "Kontek İnşaat A.Ş.",
  },
  {
    id: "ramstore-11",
    project: "Ramstore 11 Shopping Mall",
    buildingType: "Shopping Mall",
    city: "Moscow",
    country: "Russia",
    contractor: "ENKA İnşaat A.Ş.",
  },
  {
    id: "nautilus-mall",
    project: "Nautilus Shopping Mall",
    buildingType: "Shopping Mall",
    city: "İstanbul",
    country: "Turkey",
    contractor: "Tepe İnşaat A.Ş.",
  },
];
