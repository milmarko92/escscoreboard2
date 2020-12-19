import {countryFlagMap} from "./constants";


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./flags/circle', false, /\.(png|jpe?g|svg)$/));

export function getFlagForCountry(country){
    return countryFlagMap[country.toLowerCase()]
}