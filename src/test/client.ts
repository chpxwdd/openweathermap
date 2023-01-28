// Abstract Factory Use Case Example Code
import { EWeatherCondition } from '../model/CurrentWeather/WeatherCondition/CurrentWeatherInterface'
import { WeatherCondition } from '../model/CurrentWeather/WeatherCondition/WeatherCondition'

console.log(WeatherCondition.create(EWeatherCondition.CLEAR, 800).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 201).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 202).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 210).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 211).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 212).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 221).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 230).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 231).toString())
// console.log(WeatherCondition.create(EWeatherCondition.THUNDERSTORM, 232).toString())
