// give coordinates and get back data
async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6079b902d16c1d19a4a0e658ed40c5a2&units=metric`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch {}
}

// transform city name input into coordinates
async function getCoordinates(name) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=6079b902d16c1d19a4a0e658ed40c5a2`,
      { mode: "cors" }
    );
    const data = await response.json();
    const latLon = {
      lat: await data[0].lat,
      lon: await data[0].lon,
    };
    return latLon;
  } catch {}
}

// combine previous functions and filter data to return only needed info
async function weather(name) {
  try {
    const coordinates = getCoordinates(name);
    const data = await getCurrentWeather(
      (
        await coordinates
      ).lat,
      (
        await coordinates
      ).lon
    );
    const namelocation = data.name;
    const countryCode = data.sys.country;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
    return {
      namelocation,
      countryCode,
      description,
      temperature,
      feelsLike,
      windSpeed,
      humidity,
    };
  } catch (err) {
    return "error";
  }
}

export { weather };
