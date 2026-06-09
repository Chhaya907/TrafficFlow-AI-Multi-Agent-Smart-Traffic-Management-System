const axios = require("axios");

async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://wttr.in/${city}?format=j1`
    );

    return response.data.current_condition[0]
      .weatherDesc[0].value;

  } catch (error) {
    return "Weather unavailable";
  }
}

module.exports = getWeather;