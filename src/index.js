import "./style.css";

async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6079b902d16c1d19a4a0e658ed40c5a2`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

async function getCoordinates(name) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=6079b902d16c1d19a4a0e658ed40c5a2`
  );
  const data = await response.json();
  const latLon = {
    lat: await data[0].lat,
    lon: await data[0].lon,
  };
  return latLon;
}

async function weather(name) {
  const coordinates = getCoordinates(name);
  getCurrentWeather((await coordinates).lat, (await coordinates).lon);
}

weather("london");
