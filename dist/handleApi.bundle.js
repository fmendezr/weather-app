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

/***/ "./src/handle-api.js":
/*!***************************!*\
  !*** ./src/handle-api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weather\": () => (/* binding */ weather)\n/* harmony export */ });\nasync function getCurrentWeather(lat, lon) {\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6079b902d16c1d19a4a0e658ed40c5a2&units=metric`,\n      { mode: \"cors\" }\n    );\n    const weatherData = await response.json();\n    return weatherData;\n  } catch {}\n}\n\nasync function getCoordinates(name) {\n  try {\n    const response = await fetch(\n      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=6079b902d16c1d19a4a0e658ed40c5a2`\n    );\n    const data = await response.json();\n    const latLon = {\n      lat: await data[0].lat,\n      lon: await data[0].lon,\n    };\n    return latLon;\n  } catch {}\n}\n\nasync function weather(name) {\n  try {\n    const coordinates = getCoordinates(name);\n    const data = await getCurrentWeather(\n      (\n        await coordinates\n      ).lat,\n      (\n        await coordinates\n      ).lon\n    );\n    const namelocation = data.name;\n    const countryCode = data.sys.country;\n    const description = data.weather[0].description;\n    const temperature = data.main.temp;\n    const feelsLike = data.main.feels_like;\n    const windSpeed = data.wind.speed;\n    const humidity = data.main.humidity;\n    return {\n      namelocation,\n      countryCode,\n      description,\n      temperature,\n      feelsLike,\n      windSpeed,\n      humidity,\n    };\n  } catch (err) {\n    return \"error\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/handle-api.js?");

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
/******/ 	__webpack_modules__["./src/handle-api.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;