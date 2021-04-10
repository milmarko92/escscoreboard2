export const countries = ["malta2021","spain2021","australia2021","belgium2021","ukraine2021","norway2021","france2021","moldova2021","russia2021","sanmarino2021","lithuania2021","israel2021","latvia2021","bulgaria2021","czechrepublic2021","serbia2021","germany2021","cyprus2021","finland2021","greece2021","iceland2021","uk2021","netherlands2021","croatia2021","switzerland2021","italy2021",]
export const countryNameMap = {"malta2021": "Malta","spain2021": "Spain","australia2021": "Australia","belgium2021": "Belgium","ukraine2021": "Ukraine","norway2021": "Norway","france2021": "France","moldova2021": "Moldova","russia2021": "Russia","sanmarino2021": "San Marino","lithuania2021": "Lithuania","israel2021": "Israel","latvia2021": "Latvia","bulgaria2021": "Bulgaria","czechrepublic2021": "Czech  Republic","serbia2021": "Serbia","germany2021": "Germany","cyprus2021": "Cyprus","finland2021": "Finland","greece2021": "Greece","iceland2021": "Iceland","uk2021": "UK","netherlands2021": "Netherlands","croatia2021": "Croatia","switzerland2021": "Switzerland","italy2021": "Italy",}
export const countryFlagMap = {"malta2021": "malta.png","spain2021": "spain.png","australia2021": "australia.png","belgium2021": "belgium.png","ukraine2021": "ukraine.png","norway2021": "norway.png","france2021": "france.png","moldova2021": "moldova.png","russia2021": "russia.png","sanmarino2021": "san-marino.png","lithuania2021": "lithuania.png","israel2021": "israel.png","latvia2021": "latvia.png","bulgaria2021": "bulgaria.png","czechrepublic2021": "czech-republic.png","serbia2021": "serbia.png","germany2021": "germany.png","cyprus2021": "cyprus.png","finland2021": "finland.png","greece2021": "greece.png","iceland2021": "iceland.png","uk2021": "united-kingdom.png","netherlands2021": "netherlands.png","croatia2021": "croatia.png","switzerland2021": "switzerland.png","italy2021": "italy.png",}
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
    "Meg"
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
