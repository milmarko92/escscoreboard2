export const countries = ["albania2009","ireland2017","netherlands2000","turkey2011","romania2005","moldova2013","denmark2014","poland2014","australia2020","unitedkingdom2007","lithuania2007","georgia2016","sweden2018","netherlands2010","austria2018","estonia2011","estonia2013","moldova2018","france2004","poland2006","russia2018","latvia2017","azerbaijan2019","australia2019",]
export const countryNameMap = {"albania2009": "Albania 2009","ireland2017": "Ireland 2017","netherlands2000": "Netherlands 2000","turkey2011": "Turkey 2011","romania2005": "Romania 2005","moldova2013": "Moldova 2013","denmark2014": "Denmark 2014","poland2014": "Poland 2014","australia2020": "Australia 2020","unitedkingdom2007": "United Kingdom 2007","lithuania2007": "Lithuania 2007","georgia2016": "Georgia 2016","sweden2018": "Sweden 2018","netherlands2010": "Netherlands 2010","austria2018": "Austria 2018","estonia2011": "Estonia 2011","estonia2013": "Estonia 2013","moldova2018": "Moldova 2018","france2004": "France  2004","poland2006": "Poland 2006","russia2018": "Russia 2018","latvia2017": "Latvia 2017","azerbaijan2019": "Azerbaijan 2019","australia2019": "Australia 2019",}
export const countryFlagMap = {"albania2009": "albania.png","ireland2017": "ireland.png","netherlands2000": "netherlands.png","turkey2011": "turkey.png","romania2005": "romania.png","moldova2013": "moldova.png","denmark2014": "denmark.png","poland2014": "poland.png","australia2020": "australia.png","unitedkingdom2007": "united kingdom.png","lithuania2007": "lithuania.png","georgia2016": "georgia.png","sweden2018": "sweden.png","netherlands2010": "netherlands.png","austria2018": "austria.png","estonia2011": "estonia.png","estonia2013": "estonia.png","moldova2018": "moldova.png","france2004": "france .png","poland2006": "poland.png","russia2018": "russia.png","latvia2017": "latvia.png","azerbaijan2019": "azerbaijan.png","australia2019": "australia.png",}

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
