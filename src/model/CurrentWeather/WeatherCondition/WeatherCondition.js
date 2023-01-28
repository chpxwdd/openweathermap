"use strict";
exports.__esModule = true;
exports.WeatherCondition = void 0;
var CurrentWeatherInterface_1 = require("./CurrentWeatherInterface");
var ThunderstormFactory_1 = require("./ThunderstormFactory");
var DrizzleFactory_1 = require("./DrizzleFactory");
var RainFactory_1 = require("./RainFactory");
var SnowFactory_1 = require("./SnowFactory");
var AtmosphereFactory_1 = require("./AtmosphereFactory");
var ClearFactory_1 = require("./ClearFactory");
var CloudsFactory_1 = require("./CloudsFactory");
var WeatherCondition = /** @class */ (function () {
    function WeatherCondition() {
        this.code = 800;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.CLEAR;
        this.icon = '01';
        this.description = 'clear sky';
    }
    WeatherCondition.prototype.getWeatherCondition = function () {
        return { type: this.type, description: this.description, icon: this.icon };
    };
    WeatherCondition.create = function (type, code) {
        if (type === void 0) { type = CurrentWeatherInterface_1.EWeatherCondition.CLEAR; }
        if (code === void 0) { code = 800; }
        switch (type) {
            case CurrentWeatherInterface_1.EWeatherCondition.THUNDERSTORM:
                return ThunderstormFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.DRIZZLE:
                return DrizzleFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.RAIN:
                return RainFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.SNOW:
                return SnowFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.ATMOSPHERE:
                return AtmosphereFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.CLEAR:
                return ClearFactory_1["default"].build(code);
            case CurrentWeatherInterface_1.EWeatherCondition.CLOUDS:
                return CloudsFactory_1["default"].build(code);
            default:
                throw new Error('Weather condition not found');
        }
    };
    return WeatherCondition;
}());
exports.WeatherCondition = WeatherCondition;
