export const countries = [
  "portugal2009",
  "romania2000",
  "germany1987",
  "ireland2016",
  "spain2013",
  "belgium1957",
  "lithuania2017",
  "portugal1985",
  "netherlands2008",
  "france1967",
  "bulgaria2005",
  "bosniaandherzegovina2010",
  "belgium1989",
  "switzerland2020",
  "austria1991",
  "montenegro2018",
  "greece2005",
  "netherlands1987",
  "poland2019",
  "ireland1965",
  "sweden1991",
  "switzerland2010",
  "slovakia2009",
  "slovenia2008",
];
export const countryNameMap = {
  portugal2009: "Portugal 2009",
  romania2000: "Romania 2000",
  germany1987: "Germany 1987",
  ireland2016: "Ireland 2016",
  spain2013: "Spain 2013",
  belgium1957: "Belgium 1957",
  lithuania2017: "Lithuania 2017",
  portugal1985: "Portugal 1985",
  netherlands2008: "Netherlands 2008",
  france1967: "France 1967",
  bulgaria2005: "Bulgaria 2005",
  bosniaandherzegovina2010: "Bosnia and Herzegovina 2010",
  belgium1989: "Belgium 1989",
  switzerland2020: "Switzerland 2020",
  austria1991: "Austria 1991",
  montenegro2018: "Montenegro 2018",
  greece2005: "Greece 2005",
  netherlands1987: "Netherlands 1987",
  poland2019: "Poland 2019",
  ireland1965: "Ireland 1965",
  sweden1991: "Sweden 1991",
  switzerland2010: "Switzerland 2010",
  slovakia2009: "Slovakia 2009",
  slovenia2008: "Slovenia 2008",
};
export const countryFlagMap = {
  portugal2009: "portugal.png",
  romania2000: "romania.png",
  germany1987: "germany.png",
  ireland2016: "ireland.png",
  spain2013: "spain.png",
  belgium1957: "belgium.png",
  lithuania2017: "lithuania.png",
  portugal1985: "portugal.png",
  netherlands2008: "netherlands.png",
  france1967: "france.png",
  bulgaria2005: "bulgaria.png",
  bosniaandherzegovina2010: "bosnia-and-herzegovina.png",
  belgium1989: "belgium.png",
  switzerland2020: "switzerland.png",
  austria1991: "austria.png",
  montenegro2018: "montenegro.png",
  greece2005: "greece.png",
  netherlands1987: "netherlands.png",
  poland2019: "poland.png",
  ireland1965: "ireland.png",
  sweden1991: "sweden.png",
  switzerland2010: "switzerland.png",
  slovakia2009: "slovakia.png",
  slovenia2008: "slovenia.png",
};

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
