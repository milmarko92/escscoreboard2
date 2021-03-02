export const countries = [
  "greece2010",
  "yugoslavia1989",
  "israel1987",
  "bulgaria2016",
  "latvia2015",
  "germany1979",
  "poland1994",
  "spain2004",
  "yugoslavia1968",
  "france2017",
  "bosniaandherzegovina2007",
  "armenia2016",
  "unitedkingdom1969",
  "netherlands1975",
  "unitedkingdom2005",
  "spain1969",
  "cyprus2010",
  "norway1960",
  "italy1958",
  "turkey2003",
  "luxembourg1965",
  "hungary2017",
  "unitedkingdom1975",
  "netherlands1967",
  "montenegro2014",
  "spain2019",
];

export const countryNameMap = {
  greece2010: "Greece 2010",
  yugoslavia1989: "Yugoslavia 1989",
  israel1987: "Israel 1987",
  bulgaria2016: "Bulgaria 2016",
  latvia2015: "Latvia 2015",
  germany1979: "Germany 1979",
  poland1994: "Poland 1994",
  spain2004: "Spain 2004",
  yugoslavia1968: "Yugoslavia 1968",
  france2017: "France 2017",
  bosniaandherzegovina2007: "Bosnia and Herzegovina 2007",
  armenia2016: "Armenia 2016",
  unitedkingdom1969: "United Kingdom 1969",
  netherlands1975: "Netherlands 1975",
  unitedkingdom2005: "United Kingdom 2005",
  spain1969: "Spain 1969",
  cyprus2010: "Cyprus 2010",
  norway1960: "Norway 1960",
  italy1958: "Italy 1958",
  turkey2003: "Turkey 2003",
  luxembourg1965: "Luxembourg 1965",
  hungary2017: "Hungary 2017",
  unitedkingdom1975: "United Kingdom 1975",
  netherlands1967: "Netherlands 1967",
  montenegro2014: "Montenegro 2014",
  spain2019: "Spain 2019",
};

export const countryFlagMap = {
  greece2010: "greece.png",
  yugoslavia1989: "yugoslavia.png",
  israel1987: "israel.png",
  bulgaria2016: "bulgaria.png",
  latvia2015: "latvia.png",
  germany1979: "germany.png",
  poland1994: "poland.png",
  spain2004: "spain.png",
  yugoslavia1968: "yugoslavia.png",
  france2017: "france.png",
  bosniaandherzegovina2007: "bosnia-and-herzegovina.png",
  armenia2016: "armenia.png",
  unitedkingdom1969: "united-kingdom.png",
  netherlands1975: "netherlands.png",
  unitedkingdom2005: "united-kingdom.png",
  spain1969: "spain.png",
  cyprus2010: "cyprus.png",
  norway1960: "norway.png",
  italy1958: "italy.png",
  turkey2003: "turkey.png",
  luxembourg1965: "luxembourg.png",
  hungary2017: "hungary.png",
  unitedkingdom1975: "united-kingdom.png",
  netherlands1967: "netherlands.png",
  montenegro2014: "montenegro.png",
  spain2019: "spain.png",
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

export const currentEdition = "3";

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

export const videomap = {
  i_will_love_again: "01.mp4",
  nochenka: "02.mp4",
  thinking: "03.mp4",
  akoma_jo: "04.mp4",
  ti_ho_voluto_bene_veramente: "05.mp4",
  haide: "06.mp4",
  me_gusta: "07.mp4",
  superman: "08.mp4",
  "nobody's_wife": "09.mp4",
  mr: "10.mp4",
  brodolom: "11.mp4",
  dancing_queen: "12.mp4",
  rapide: "13.mp4",
  i_drove_all_night: "14.mp4",
  nemir: "15.mp4",
  zaljuljali_smo_svijet: "16.mp4",
  take_it_off: "17.mp4",
  what_i: "18.mp4",
  all_by_myself: "19.mp4",
  şirket: "20.mp4",
  okeani: "21.mp4",
  te_despertare: "22.mp4",
  bella_bella: "23.mp4",
};
