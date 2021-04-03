export const countries = ["sweden2000","serbia2013","portugal1964","slovenia2003","israel1988","italy2017","poland1996","belgium2000","cyprus1995","northmacedonia2016","unitedkingdom1991","norway2019","luxembourg1988","slovakia2012","switzerland1960","hungary1994","cyprus2021","luxembourg1970","ukraine2016","israel1977","croatia2019","greece1979","northmacedonia2009","azerbaijan2020",]
export const countryNameMap = {"sweden2000": "Sweden 2000","serbia2013": "Serbia 2013","portugal1964": "Portugal 1964","slovenia2003": "Slovenia 2003","israel1988": "Israel 1988","italy2017": "Italy 2017","poland1996": "Poland 1996","belgium2000": "Belgium 2000","cyprus1995": "Cyprus 1995","northmacedonia2016": "North Macedonia 2016","unitedkingdom1991": "United Kingdom 1991","norway2019": "Norway 2019","luxembourg1988": "Luxembourg 1988","slovakia2012": "Slovakia 2012","switzerland1960": "Switzerland 1960","hungary1994": "Hungary 1994","cyprus2021": "Cyprus 2021","luxembourg1970": "Luxembourg 1970","ukraine2016": "Ukraine 2016","israel1977": "Israel 1977","croatia2019": "Croatia 2019","greece1979": "Greece 1979","northmacedonia2009": "North Macedonia 2009","azerbaijan2020": "Azerbaijan 2020",}
export const countryFlagMap = {"sweden2000": "sweden.png","serbia2013": "serbia.png","portugal1964": "portugal.png","slovenia2003": "slovenia.png","israel1988": "israel.png","italy2017": "italy.png","poland1996": "poland.png","belgium2000": "belgium.png","cyprus1995": "cyprus.png","northmacedonia2016": "macedonia.png","unitedkingdom1991": "united-kingdom.png","norway2019": "norway.png","luxembourg1988": "luxembourg.png","slovakia2012": "slovakia.png","switzerland1960": "switzerland.png","hungary1994": "hungary.png","cyprus2021": "cyprus.png","luxembourg1970": "luxembourg.png","ukraine2016": "ukraine.png","israel1977": "israel.png","croatia2019": "croatia.png","greece1979": "greece.png","northmacedonia2009": "macedonia.png","azerbaijan2020": "azerbaijan.png",}
export const rankToPointsMap = {
  1: 12,
  2: 10,
  3: 8,
  4: 7,
  5: 6,
  6: 5,
  7: 4,
  8: 3,
  9: 2,
  10: 1,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 0,
  28: 0,
  29: 0,
};

export const all_voters = [
  // "Aivis",
  // "Aleksandra",
  // "Alex",
  // "Cecilia",
  "Costa",
  // "Ed",
  // "Eirik",
  // "Hannah",
  // "Hlynur",
  // "Lukáš",
  "Luke",
  "Maria",
  "Marko",
  "Matteo",
  // "Michael",
  "Miki",
  "Nathan",
  "Nick",
  "Oliver",
  "Pedro",
  "Philip",
  "Rinor",
  // "Rita",
  "Rodrigo",
  "Simon",
  "Thomas",
  // "Tommy",
  // "Victoria",
  "Vladan",
  "Wiv",
];

export const audioMap = {};

export const magic_code = "raging";

export default countries;

export const currentEdition = "8";

const edition_map = {
  yugo: 10,
  east: 7,
  west: 6,
  south: 8,
  north: 9,
  raging: 11,
};

export function edition_id(edition_name = "") {
  return currentEdition;
  // console.log("Edition "+ edition_name)
  // if (edition_name === "") {
  //   edition_name = currentEdition;
  // }
  //
  // if (edition_name in edition_map) {
  //   return edition_map[edition_name];
  // }
  // return 0;
}

export const edition_list = {
  west: [
    "germany2003",
    "belgium2006",
    "ireland2011",
    "france2010",
    "hungary2011",
  ],
  east: [
    "belarus2019",
    "ukraine2010",
    "moldova2010",
    "bulgaria2012",
    "latvia2020",
  ],
  south: [
    "greece2009",
    "cyprus2012",
    "israel2015",
    "spain2009",
    "portugal2014",
  ],
  north: [
    "iceland2008",
    "denmark2007",
    "norway2019",
    "sweden2008",
    "finland2009",
  ],
  yugo: [
    "slovenia2006",
    "croatia2006",
    "bosnia2004",
    "serbia2020",
    "macedonia2006",
  ],
  raging: countries,
};

export function get_countries(edition_name = "") {
  if (edition_name === "") {
    edition_name = currentEdition;
  }

  if (edition_name in edition_list) {
    return edition_list[edition_name];
  }
  return countries;
}

export const num_of_qualifiers = 10;

const country_to_edition_map = {
  germany2003: "west",
  belgium2006: "west",
  ireland2011: "west",
  france2010: "west",
  hungary2011: "west",
  belarus2019: "east",
  ukraine2010: "east",
  moldova2010: "east",
  bulgaria2012: "east",
  latvia2020: "east",
  greece2009: "south",
  cyprus2012: "south",
  israel2015: "south",
  spain2009: "south",
  portugal2014: "south",
  iceland2008: "north",
  denmark2007: "north",
  norway2019: "north",
  sweden2008: "north",
  finland2009: "north",
  slovenia2006: "yugo",
  croatia2006: "yugo",
  bosnia2004: "yugo",
  serbia2020: "yugo",
  macedonia2006: "yugo",
};

export function get_edtion_for_country(country) {
  return country_to_edition_map[country];
}
