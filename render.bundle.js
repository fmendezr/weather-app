/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderer\": () => (/* binding */ renderer)\n/* harmony export */ });\n// new city\nconst renderWeatherComponent = (weatherObject) => {\n  const main = document.createElement(\"main\");\n  document.querySelector(\"body\").appendChild(main);\n\n  const locationName = document.createElement(\"h1\");\n  locationName.id = \"location\";\n  locationName.textContent = `${weatherObject.namelocation}, ${weatherObject.countryCode}`;\n  main.appendChild(locationName);\n\n  const description = document.createElement(\"h2\");\n  description.id = \"description\";\n  description.textContent = `${weatherObject.description}`;\n  main.appendChild(description);\n\n  const bottomContainer = document.createElement(\"div\");\n  bottomContainer.id = \"buttomContainer\";\n  main.appendChild(bottomContainer);\n\n  const leftSide = document.createElement(\"div\");\n  leftSide.id = \"leftSide\";\n  bottomContainer.appendChild(leftSide);\n\n  const temperature = document.createElement(\"h2\");\n  temperature.id = \"temperature\";\n  temperature.textContent = `${weatherObject.temperature}`;\n  leftSide.appendChild(temperature);\n\n  const units = document.createElement(\"h4\");\n  units.id = \"units\";\n  units.textContent = \"C\" + String.fromCharCode(176);\n  leftSide.appendChild(units);\n\n  const rightSide = document.createElement(\"div\");\n  rightSide.id = \"rightSide\";\n  bottomContainer.appendChild(rightSide);\n\n  const feelsLike = document.createElement(\"p\");\n  feelsLike.id = \"feelsLike\";\n  feelsLike.textContent =\n    `Feels like: ${weatherObject.feelsLike} C` + String.fromCharCode(176);\n  rightSide.appendChild(feelsLike);\n\n  const windSpeed = document.createElement(\"p\");\n  windSpeed.id = \"wind\";\n  windSpeed.textContent = `Wind: ${weatherObject.windSpeed} km/h`;\n  rightSide.appendChild(windSpeed);\n\n  const humidity = document.createElement(\"p\");\n  humidity.id = \"humidity\";\n  humidity.textContent = `Humidity: ${weatherObject.humidity} %`;\n  rightSide.appendChild(humidity);\n};\n\n// error message\nconst renderErrorComponent = () => {\n  const text = document.createElement(\"p\");\n  text.textContent = \"No matching location found!\";\n  text.id = \"errorMessage\";\n  document.querySelector(\"form\").appendChild(text);\n};\n\n// render what is appropiate (error if there is error, city if is found)\nasync function renderer(weatherObject, first = false) {\n  const weatherData = await weatherObject;\n\n  try {\n    document.getElementById(\"errorMessage\").remove();\n  } catch {}\n\n  if (weatherData == \"error\") {\n    console.log(\"error\");\n    renderErrorComponent();\n  } else if (first == true) {\n    renderWeatherComponent(weatherData);\n  } else {\n    document.querySelector(\"main\").remove();\n    document.querySelector(\"input\").value = \"\";\n    renderWeatherComponent(weatherData);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/render.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;