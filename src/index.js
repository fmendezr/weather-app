import "./style.css";

async function getWeather(lat, long) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6079b902d16c1d19a4a0e658ed40c5a2`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}
