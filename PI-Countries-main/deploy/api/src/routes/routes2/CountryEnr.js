


const { Country } = require("../../db");
const axios = require("axios");



const getApiCountries = async () => {
  try {
    let countries = (await axios.get("https://restcountries.com/v3/all")).data;          //Countries esta capturando toda la info de la api
    countries = await Promise.all(
      countries.map((country) => {
        Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.translations.spa.common,
            flags: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "Not found",
            subregion: country.subregion ? country.subregion : "Not found",
            area: country.area,
            population: country.population,
          },
        });
      }) 
    ); 
    
    return "Database loaded";
  } catch (error) {
    return error;
  }
};










  module.exports = {
    getApiCountries,
  }