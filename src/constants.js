export const countries = ["1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];

export const countryNameMap = {
  "1": "Vågar du, vågar jag",
  "2": "Ring Ring",
  "3": "Statements",
  "4": "Maria",
  "5": "Let Your Spirit Fly",
  "6": "Heaven or Hell",
  "7": "Human",
  "8": "Carpool Karaoke",
  "9": "En värld full av strider",
  "10": "Not a Sinner, Nor a Saint",
  "11": "A Little Bit of Love",
  "12": "Hur svårt kan det va’?",
  "13": "Love Is All",
  "14": "Det vackraste",
  "15": "C’est la vie",
  "16": "You’re My World",
  "17": "Lay Your Love On Me",
  "18": "Keep On Walking",
  "19": "I dag och i morgon",
  "20": "För att du finns",
  "21": "Falling",
  "22": "What If",
  "23": "Cara Mia",
  "24": "Snälla snälla",
  "25": "Att älska dig",
};

export const countryFlagMap = {
  "1": "sweden.png",
  "2": "sweden.png",
  "3": "sweden.png",
  "4": "sweden.png",
  "5": "sweden.png",
  "6": "sweden.png",
  "7": "sweden.png",
  "8": "sweden.png",
  "9": "sweden.png",
  "10": "sweden.png",
  "11": "sweden.png",
  "12": "sweden.png",
  "13": "sweden.png",
  "14": "sweden.png",
  "15": "sweden.png",
  "16": "sweden.png",
  "17": "sweden.png",
  "18": "sweden.png",
  "19": "sweden.png",
  "20": "sweden.png",
  "21": "sweden.png",
  "22": "sweden.png",
  "23": "sweden.png",
  "24": "sweden.png",
  "25": "sweden.png",
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