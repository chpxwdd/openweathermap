"use strict";
exports.__esModule = true;
var WeatherCondition_1 = require("./WeatherCondition/WeatherCondition");
var CurrentWeatherInterface_1 = require("./WeatherCondition/CurrentWeatherInterface");
var data = [
    { main: CurrentWeatherInterface_1.EWeatherCondition.THUNDERSTORM, codes: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.DRIZZLE, codes: [300, 301, 302, 310, 311, 312, 313, 314, 321] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.RAIN, codes: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.SNOW, codes: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.ATMOSPHERE, codes: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.CLEAR, codes: [800] },
    { main: CurrentWeatherInterface_1.EWeatherCondition.CLOUDS, codes: [801, 802, 803, 804] },
];
data.forEach(function (elem) {
    elem.codes.forEach(function (code) {
        var ws;
        ws = WeatherCondition_1.WeatherCondition.create(elem.main, code);
        console.log(ws);
        // console.log(`main: ${ws.main}, code: ${ws.code}, description:${ws.description}, icon:${ws.icon}`)
    });
});
