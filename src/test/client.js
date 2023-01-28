"use strict";
exports.__esModule = true;
// Abstract Factory Use Case Example Code
var CurrentWeatherInterface_1 = require("../model/CurrentWeather/WeatherCondition/CurrentWeatherInterface");
var WeatherCondition_1 = require("../model/CurrentWeather/WeatherCondition/WeatherCondition");
console.log(WeatherCondition_1.WeatherCondition.create(CurrentWeatherInterface_1.EWeatherCondition.CLEAR, 800).toString());
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 201).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 202).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 210).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 211).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 212).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 221).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 230).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 231).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 232).toString())
