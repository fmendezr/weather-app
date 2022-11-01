import "./style.css";

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

async function getCoordinates(name) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=6079b902d16c1d19a4a0e658ed40c5a2`
    );
    const data = await response.json();
    const latLon = {
      lat: await data[0].lat,
      lon: await data[0].lon,
    };
    return latLon;
  } catch {}
}

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

const renderWeatherComponent = (weatherObject) => {
  const main = document.createElement("main");
  document.querySelector("body").appendChild(main);

  const locationName = document.createElement("h1");
  locationName.id = "location";
  locationName.textContent = `${weatherObject.namelocation}, ${weatherObject.countryCode}`;
  main.appendChild(locationName);

  const description = document.createElement("h2");
  description.id = "description";
  description.textContent = `${weatherObject.description}`;
  main.appendChild(description);

  const bottomContainer = document.createElement("div");
  bottomContainer.id = "buttomContainer";
  main.appendChild(bottomContainer);

  const leftSide = document.createElement("div");
  leftSide.id = "leftSide";
  bottomContainer.appendChild(leftSide);

  const temperature = document.createElement("h2");
  temperature.id = "temperature";
  temperature.textContent = `${weatherObject.temperature}`;
  leftSide.appendChild(temperature);

  const units = document.createElement("h4");
  units.id = "units";
  units.textContent = "C";
  leftSide.appendChild(units);

  const rightSide = document.createElement("div");
  rightSide.id = "rightSide";
  bottomContainer.appendChild(rightSide);

  const feelsLike = document.createElement("p");
  feelsLike.id = "feelsLike";
  feelsLike.textContent = `Feels like: ${weatherObject.feelsLike}`;
  rightSide.appendChild(feelsLike);

  const windSpeed = document.createElement("p");
  windSpeed.id = "wind";
  windSpeed.textContent = `Wind: ${weatherObject.windSpeed}`;
  rightSide.appendChild(windSpeed);

  const humidity = document.createElement("p");
  humidity.id = "humidity";
  humidity.textContent = `Humidity: ${weatherObject.humidity}`;
  rightSide.appendChild(humidity);
};

const renderErrorComponent = () => {
  const text = document.createElement("p");
  text.textContent = "No matching location found!";
  docuemnt.querySelector("form").appendChild(text);
};

async function determineWhatToRender(weatherObject, first = false) {
  const weatherData = await weatherObject;
  if (weatherData == "error") {
    console.log("error");
  } else if (first == true) {
    renderWeatherComponent(weatherData);
  } else {
    document.querySelector("main").remove();
    renderWeatherComponent(weatherData);
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  determineWhatToRender(weather(document.querySelector("input").value));
});

determineWhatToRender(weather("london"), true);
