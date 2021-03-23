export const countries = ["norway2021witchwoods",
"italy2021unmilionidicosadadirti",
"sweden2021littletot",
"france2021magique",
"norway2021nordlyset",
"estonia2021tartu",
"sweden2021onetouch",
"portugal2021namaisprofundasaudade",
"finland2021iloveyou",
"albania2021pendese",
"croatia2021mazamisli",
"portugal2021volteface",
"france2021bahnon",
"sweden2021themissingpiece",
"norway2021monument",
"italy2021chiamamipernome",
"bulgaria2021thefuneralsong",
"sweden2021renaramadingdong",
];

export const countryNameMap = {"norway2021witchwoods": "Witch Woods",
"italy2021unmilionidicosadadirti": "Un milioni di cosa da dirti",
"sweden2021littletot": "Little Tot",
"france2021magique": "Magique",
"norway2021nordlyset": "Nordlyset",
"estonia2021tartu": "Tartu",
"sweden2021onetouch": "One Touch",
"portugal2021namaisprofundasaudade": "Na mais profunda saudade",
"finland2021iloveyou": "I Love You",
"albania2021pendese": "Pendesë",
"croatia2021mazamisli": "Ma zamisli",
"portugal2021volteface": "VOLTE-FACE",
"france2021bahnon": "Bah non",
"sweden2021themissingpiece": "The Missing Piece",
"norway2021monument": "Monument",
"italy2021chiamamipernome": "Chiamami per nome",
"bulgaria2021thefuneralsong": "The Funeral Song",
"sweden2021renaramadingdong": "Rena Rama Ding Dong",
};

export const countryFlagMap = {"norway2021witchwoods": "norway.png",
"italy2021unmilionidicosadadirti": "italy.png",
"sweden2021littletot": "sweden.png",
"france2021magique": "france.png",
"norway2021nordlyset": "norway.png",
"estonia2021tartu": "estonia.png",
"sweden2021onetouch": "sweden.png",
"portugal2021namaisprofundasaudade": "portugal.png",
"finland2021iloveyou": "finland.png",
"albania2021pendese": "albania.png",
"croatia2021mazamisli": "croatia.png",
"portugal2021volteface": "portugal.png",
"france2021bahnon": "france.png",
"sweden2021themissingpiece": "sweden.png",
"norway2021monument": "norway.png",
"italy2021chiamamipernome": "italy.png",
"bulgaria2021thefuneralsong": "bulgaria.png",
"sweden2021renaramadingdong": "sweden.png",
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
