export const countries = [
  "germany1971",
  "portugal2014",
  "poland2003",
  "unitedkingdom1998",
  "cyprus1981",
  "portugal1967",
  "ukraine2010",
  "greece1992",
  "poland1997",
  "sweden1996",
  "turkey1980",
  "malta2000",
  "france1959",
  "slovenia1997",
  "portugal1971",
  "ireland1993",
  "moldova2015",
  "russia1994",
  "greece1997",
  "slovenia2001",
  "germany1999",
  "portugal2008",
];
export const countryNameMap = {
  germany1971: "Germany 1971",
  portugal2014: "Portugal 2014",
  poland2003: "Poland 2003",
  unitedkingdom1998: "United Kingdom 1998",
  cyprus1981: "Cyprus 1981",
  portugal1967: "Portugal 1967",
  ukraine2010: "Ukraine 2010",
  greece1992: "Greece 1992",
  poland1997: "Poland 1997",
  sweden1996: "Sweden 1996",
  turkey1980: "Turkey 1980",
  malta2000: "Malta 2000",
  france1959: "France 1959",
  slovenia1997: "Slovenia 1997",
  portugal1971: "Portugal 1971",
  ireland1993: "Ireland 1993",
  moldova2015: "Moldova 2015",
  russia1994: "Russia 1994",
  greece1997: "Greece 1997",
  slovenia2001: "Slovenia 2001",
  germany1999: "Germany 1999",
  portugal2008: "Portugal 2008",
};
export const countryFlagMap = {
  germany1971: "germany.png",
  portugal2014: "portugal.png",
  poland2003: "poland.png",
  unitedkingdom1998: "united-kingdom.png",
  cyprus1981: "cyprus.png",
  portugal1967: "portugal.png",
  ukraine2010: "ukraine.png",
  greece1992: "greece.png",
  poland1997: "poland.png",
  sweden1996: "sweden.png",
  turkey1980: "turkey.png",
  malta2000: "malta.png",
  france1959: "france.png",
  slovenia1997: "slovenia.png",
  portugal1971: "portugal.png",
  ireland1993: "ireland.png",
  moldova2015: "moldova.png",
  russia1994: "russia.png",
  greece1997: "greece.png",
  slovenia2001: "slovenia.png",
  germany1999: "germany.png",
  portugal2008: "portugal.png",
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
