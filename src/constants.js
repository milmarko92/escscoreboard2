export const countries = ["portugal2009todasasruasdoamor","romania2000themoon","germany1987laßdiesonneindeinherz","ireland2016sunlight","spain2013contigohastaelfinal(withyouuntiltheend)","belgium1957straatdeuntje","lithuania2017rainofrevolution","portugal1985pensoemti,eusei","netherlands2008yourheartbelongstome","france1967ildoitfairebeaulàbas","bulgaria2005lorraine","bosnia&herzegovina2010thunderandlightning","belgium1989doordewind","switzerland2020répondezmoi","austria1991venedigimregen","montenegro2018inje","greece2005mynumberone","netherlands1987rechtopindewind","poland2019fireoflove(palisię)","ireland1965walkingthestreetsintherain","sweden1991fångadavenstormvind","switzerland2010ilpleutdelor","slovakia2009lettmou","slovenia2008vragnajvzame",]
export const countryNameMap = {"portugal2009todasasruasdoamor": "Todas as ruas do amor","romania2000themoon": "The moon","germany1987laßdiesonneindeinherz": "Laß die Sonne in dein Herz","ireland2016sunlight": "Sunlight","spain2013contigohastaelfinal(withyouuntiltheend)": "Contigo hasta el final (With you until the end)","belgium1957straatdeuntje": "Straatdeuntje","lithuania2017rainofrevolution": "Rain of revolution","portugal1985pensoemtieusei": "Penso em ti, eu sei","netherlands2008yourheartbelongstome": "Your heart belongs to me","france1967ildoitfairebeaulàbas": "Il doit faire beau là-bas","bulgaria2005lorraine": "Lorraine","bosnia&herzegovina2010thunderandlightning": "Thunder and lightning","belgium1989doordewind": "Door de wind","switzerland2020répondezmoi": "Répondez-moi","austria1991venedigimregen": "Venedig im Regen","montenegro2018inje": "Inje","greece2005mynumberone": "My number one","netherlands1987rechtopindewind": "Rechtop in de wind","poland2019fireoflove(palisię)": "Fire of Love (Pali się)","ireland1965walkingthestreetsintherain": "Walking the streets in the rain","sweden1991fångadavenstormvind": "Fångad av en stormvind","switzerland2010ilpleutdelor": "Il pleut de l'or","slovakia2009lettmou": "Let 'tmou","slovenia2008vragnajvzame": "Vrag naj vzame",}
export const countryFlagMap = {"portugal2009todasasruasdoamor": "portugal.png","romania2000themoon": "romania.png","germany1987laßdiesonneindeinherz": "germany.png","ireland2016sunlight": "ireland.png","spain2013contigohastaelfinal(withyouuntiltheend)": "spain.png","belgium1957straatdeuntje": "belgium.png","lithuania2017rainofrevolution": "lithuania.png","portugal1985pensoemtieusei": "portugal.png","netherlands2008yourheartbelongstome": "netherlands.png","france1967ildoitfairebeaulàbas": "france.png","bulgaria2005lorraine": "bulgaria.png","bosnia&herzegovina2010thunderandlightning": "bosnia&herzegovina.png","belgium1989doordewind": "belgium.png","switzerland2020répondezmoi": "switzerland.png","austria1991venedigimregen": "austria.png","montenegro2018inje": "montenegro.png","greece2005mynumberone": "greece.png","netherlands1987rechtopindewind": "netherlands.png","poland2019fireoflove(palisię)": "poland.png","ireland1965walkingthestreetsintherain": "ireland.png","sweden1991fångadavenstormvind": "sweden.png","switzerland2010ilpleutdelor": "switzerland.png","slovakia2009lettmou": "slovakia.png","slovenia2008vragnajvzame": "slovenia.png",}
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
