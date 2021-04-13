export const countries = ["sanmarino2017","malta2010","ireland1973","sweden1981","northmacedonia2007","greece1990","slovenia1996","switzerland1980","germany2018","unitedkingdom2001","luxembourg1990","lithuania2002","turkey1987","sweden1967","thenetherlands2005","monaco1961","belarus2006","iceland1991","france1985","cyprus1986","norway2005","austria2011","finland1987","germany1992",]
export const countryNameMap = {"sanmarino2017": "San Marino 2017","malta2010": "Malta 2010","ireland1973": "Ireland 1973","sweden1981": "Sweden 1981","northmacedonia2007": "North Macedonia 2007","greece1990": "Greece 1990","slovenia1996": "Slovenia 1996","switzerland1980": "Switzerland 1980","germany2018": "Germany 2018","unitedkingdom2001": "United Kingdom 2001","luxembourg1990": "Luxembourg 1990","lithuania2002": "Lithuania 2002","turkey1987": "Turkey 1987","sweden1967": "Sweden 1967","thenetherlands2005": "The Netherlands 2005","monaco1961": "Monaco 1961","belarus2006": "Belarus 2006","iceland1991": "Iceland 1991","france1985": "France 1985","cyprus1986": "Cyprus 1986","norway2005": "Norway 2005","austria2011": "Austria 2011","finland1987": "Finland 1987","germany1992": "Germany 1992",}
export const countryFlagMap = {"sanmarino2017": "san-marino.png","malta2010": "malta.png","ireland1973": "ireland.png","sweden1981": "sweden.png","northmacedonia2007": "macedonia.png","greece1990": "greece.png","slovenia1996": "slovenia.png","switzerland1980": "switzerland.png","germany2018": "germany.png","unitedkingdom2001": "united-kingdom.png","luxembourg1990": "luxembourg.png","lithuania2002": "lithuania.png","turkey1987": "turkey.png","sweden1967": "sweden.png","thenetherlands2005": "netherlands.png","monaco1961": "monaco.png","belarus2006": "belarus.png","iceland1991": "iceland.png","france1985": "france.png","cyprus1986": "cyprus.png","norway2005": "norway.png","austria2011": "austria.png","finland1987": "finland.png","germany1992": "germany.png",}
export const videomap = {
  "san_marino": "san_marino.mov",
    "estonia": "estonia.mov",
    "czech_republic": "czech_republic.mov",
    "greece": "greece.mov",
    "austria": "austria.mov",
    "poland": "poland.mov",
    "moldova": "moldova.mov",
    "iceland": "iceland.mov",
    "serbia": "serbia.mov",
    "georgia": "georgia.mov",
    "albania": "albania.mov",
    "portugal": "portugal.mov",
    "bulgaria": "bulgaria.mov",
    "finland": "finland.mov",
    "latvia": "latvia.mov",
    "switzerland": "switzerland.mov",
    "denmark": "denmark.mov",
  }
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
  "Aivis",
  "Aleksandra",
  "Alex",
  "Cecilia",
  "Costa",
  "Ed",
  "Eirik",
  "Hannah",
  "Hlynur",
  "Lukáš",
  "Luke",
  "Maria",
  "Marko",
  "Matteo",
  "Michael",
  "Miki",
  "Nathan",
  "Nick",
  "Oliver",
  "Pedro",
  "Philip",
  "Rinor",
  "Rita",
  "Rodrigo",
  "Simon",
  "Thomas",
  "Tommy",
  "Victoria",
  "Vladan",
  "Wiv",
    "Jelena",
    "Meg",
    "Anthony"
];

export const audioMap = {};

export const magic_code = "raging";

export default countries;

export const currentEdition = "11";

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
