import "./style.css";
import { weather } from "./handle-api.js";
import { renderer } from "./render.js";

// When new city is searched
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  renderer(weather(document.querySelector("input").value));
});

// Initial display
renderer(weather("lyon"), true);
