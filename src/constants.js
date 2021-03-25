export const countries = ["sweden2021stillyoung","albania2021vashezo","france2021amourfou","norway2021ican'tescape","sweden2021bailabaila","finland2021kellemäsoitan","italy2021potevifaredipiù","france2021onamangélesoleil","albania2021nesevdes","lithuania2021home","israel2021uelala","sweden2021behöverintedigidag","norway2021letloose","france2021pourvuqu'onm'aime","belarus2021braids","sweden2021everyminute","italy2021voce","estonia2021magusmelanhoolia","france2021maeva",]
export const countryNameMap = {"sweden2021stillyoung": "Still young","albania2021vashezo": "Vashëzo","france2021amourfou": "Amour fou","norway2021ican'tescape": "I can't escape","sweden2021bailabaila": "Baila baila","finland2021kellemäsoitan": "Kelle mä soitan","italy2021potevifaredipiù": "Potevi fare di più","france2021onamangélesoleil": "On a mangé le soleil","albania2021nesevdes": "Nëse vdes","lithuania2021home": "Home","israel2021uelala": "Ue la la","sweden2021behöverintedigidag": "Behöver inte dig idag","norway2021letloose": "Let loose","france2021pourvuqu'onm'aime": "Pourvu qu'on m'aime","belarus2021braids": "Braids","sweden2021everyminute": "Every minute","italy2021voce": "Voce","estonia2021magusmelanhoolia": "Magus melanhoolia","france2021maeva": "Maeva",}
export const countryFlagMap = {"sweden2021stillyoung": "sweden.png","albania2021vashezo": "albania.png","france2021amourfou": "france.png","norway2021ican'tescape": "norway.png","sweden2021bailabaila": "sweden.png","finland2021kellemäsoitan": "finland.png","italy2021potevifaredipiù": "italy.png","france2021onamangélesoleil": "france.png","albania2021nesevdes": "albania.png","lithuania2021home": "lithuania.png","israel2021uelala": "israel.png","sweden2021behöverintedigidag": "sweden.png","norway2021letloose": "norway.png","france2021pourvuqu'onm'aime": "france.png","belarus2021braids": "belarus.png","sweden2021everyminute": "sweden.png","italy2021voce": "italy.png","estonia2021magusmelanhoolia": "estonia.png","france2021maeva": "france.png",}
export const videomap = {"sweden2021stillyoung": "01.mp4","albania2021vashëzo": "02.mp4","france2021amourfou": "03.mp4","norway2021icantescape": "04.mp4","sweden2021bailabaila": "05.mp4","finland2021kellemäsoitan": "06.mp4","italy2021potevifaredipiù": "07.mp4","france2021onamangélesoleil": "08.mp4","albania2021nësevdes": "09.mp4","lithuania2021home": "10.mp4","israel2021uelala": "11.mp4","sweden2021behöverintedigidag": "12.mp4","norway2021letloose": "13.mp4","france2021pourvuquonmaime": "14.mp4","belarus2021braids": "15.mp4","sweden2021everyminute": "16.mp4","italy2021voce": "17.mp4","estonia2021magusmelanhoolia": "18.mp4","france2021maeva": "19.mp4",}
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
