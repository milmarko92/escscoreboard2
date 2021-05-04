export const countries = ["coolmedown","jutro","cry","randäjad","statements","mojotsvet","stay","lamoreefemmina","onitgoes","showmeheaven","chiamamipernome","cantapormim","pameaptinarhi","nononever","mëmerrnëëndërr","soldi","rockintheride","quedateconmigo","iflovewasacrime","mudblood","mojaštikla","glorious","shegotme","wildchild",]
export const countryNameMap = {"coolmedown": "Cool Me Down","jutro": "Jutro","cry": "Cry","randäjad": "Randäjad","statements": "Statements","mojotsvet": "Mojot svet","stay": "Stay","lamoreefemmina": "L'amore e femmina","onitgoes": "On It Goes","showmeheaven": "Show Me Heaven","chiamamipernome": "Chiamami per nome","cantapormim": "Canta por mim","pameaptinarhi": "Pame ap' tin arhi","nononever": "No No Never","mëmerrnëëndërr": "Më merr në ëndërr","soldi": "Soldi","rockintheride": "Rockin' the Ride","quedateconmigo": "Quedate conmigo","iflovewasacrime": "If Love Was a Crime","mudblood": "Mud Blood","mojaštikla": "Moja štikla","glorious": "Glorious","shegotme": "She Got Me","wildchild": "Wild Child",}
export const countryFlagMap = {"coolmedown": "poland.png","jutro": "serbia and montenegro.png","cry": "sweden.png","randäjad": "estonia.png","statements": "sweden.png","mojotsvet": "macedonia.png","stay": "norway.png","lamoreefemmina": "italy.png","onitgoes": "finland.png","showmeheaven": "sweden.png","chiamamipernome": "italy.png","cantapormim": "portugal.png","pameaptinarhi": "cyprus.png","nononever": "germany.png","mëmerrnëëndërr": "albania.png","soldi": "italy.png","rockintheride": "sweden.png","quedateconmigo": "spain.png","iflovewasacrime": "bulgaria.png","mudblood": "belgium.png","mojaštikla": "croatia.png","glorious": "germany.png","shegotme": "switzerland.png","wildchild": "sweden.png",}
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
  //"Aivis",
  "Aleksandra",
  //"Alex",
  //"Cecilia",
  "Costa",
  "Ed",
  //"Eirik",
  //"Hannah",
  "Hlynur",
  //"Lukáš",
  "Luke",
  "Maria",
  "Marko",
  "Matteo",
  //"Michael",
  "Miki",
  "Nathan",
  "Nick",
  "Oliver",
  "Pedro",
  "Peter",
  "Philip",
  "Rinor",
  //"Rita",
  "Rodrigo",
  "Simon",
  "Thomas",
  //"Tommy",
  //"Victoria",
  "Vladan",
  "Wiv",
  //"Jelena",
  //"Meg",
  //"Anthony",
];

export const audioMap = {};

export const magic_code = "raging";

export default countries;

export const currentEdition = "13";

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
