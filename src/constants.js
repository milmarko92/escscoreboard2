export const countries = ["superlove","ilnousfait","geilaois","99","csodák","kormiahamena","thesirens","movies","edemais","occhiprofondi","latinolove","sober","prontoacorrere","voulezvous","anemosagapis","feelsomething","kiflafafla","whatweremember","skin","vulcano","karma","iwannabeyourslave","tom","tespasunhomme","pregomesh","miedo","viktimë",]
export const countryNameMap = {"superlove": "Super Love","ilnousfait": "Il nous fait","geilaois": "Geila ois","99": "99","csodák": "Csodák","kormiahamena": "Kormia Hamena","thesirens": "The Sirens","movies": "Movies","edemais": "E Demais","occhiprofondi": "Occhi Profondi","latinolove": "Latino Love","sober": "Sober","prontoacorrere": "Pronto a correre","voulezvous": "Voulez Vous","anemosagapis": "Anemos Agapis","feelsomething": "Feel Something","kiflafafla": "Kifla Fafla","whatweremember": "What We Remember","skin": "Skin","vulcano": "Vulcano","karma": "Karma","iwannabeyourslave": "I wanna be your slave","tom": "Tom","tespasunhomme": "T'es pas un Homme","pregomesh": "PreGomesh","miedo": "Miedo","viktimë": "Viktimë",}
export const countryFlagMap = {"superlove": "australia.png","ilnousfait": "belgium.png","geilaois": "austria.png","99": "spain.png","csodák": "hungary.png","kormiahamena": "greece.png","thesirens": "finland.png","movies": "switzerland.png","edemais": "portugal.png","occhiprofondi": "italy.png","latinolove": "slovakia.png","sober": "sweden.png","prontoacorrere": "italy.png","voulezvous": "sweden.png","anemosagapis": "cyprus.png","feelsomething": "netherlands.png","kiflafafla": "bulgaria.png","whatweremember": "france.png","skin": "norway.png","vulcano": "italy.png","karma": "greece.png","iwannabeyourslave": "italy.png","tom": "france.png","tespasunhomme": "france.png","pregomesh": "armenia.png","miedo": "spain.png","viktimë": "albania.png",}

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

export const currentEdition = "14";

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
