"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CurrentWeatherInterface_1 = require("./CurrentWeatherInterface");
var DrizzleFactory = /** @class */ (function () {
    function DrizzleFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.DRIZZLE;
        this.description = '';
        this.icon = '09';
    }
    DrizzleFactory.build = function (code) {
        switch (code) {
            case 300:
                return new LightIntensityDrizzle(code);
            case 301:
                return new Drizzle(code);
            case 302:
                return new HeavyIntensityDrizzle(code);
            case 310:
                return new LightIntensityRainDrizzle(code);
            case 311:
                return new RainDrizzle(code);
            case 312:
                return new HeavyIntensityRainDrizzle(code);
            case 313:
                return new ShowerRainDrizzle(code);
            case 314:
                return new HeavyShowerRainDrizzle(code);
            case 321:
                return new ShowerDrizzle(code);
            default:
                throw new Error('Drizzle weather condition not found');
        }
    };
    return DrizzleFactory;
}());
exports["default"] = DrizzleFactory;
var LightIntensityDrizzle = /** @class */ (function (_super) {
    __extends(LightIntensityDrizzle, _super);
    function LightIntensityDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light intensity drizzle';
        return _this;
    }
    return LightIntensityDrizzle;
}(DrizzleFactory));
var Drizzle = /** @class */ (function (_super) {
    __extends(Drizzle, _super);
    function Drizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light intensity drizzle';
        return _this;
    }
    return Drizzle;
}(DrizzleFactory));
var HeavyIntensityDrizzle = /** @class */ (function (_super) {
    __extends(HeavyIntensityDrizzle, _super);
    function HeavyIntensityDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy intensity drizzle';
        return _this;
    }
    return HeavyIntensityDrizzle;
}(DrizzleFactory));
var LightIntensityRainDrizzle = /** @class */ (function (_super) {
    __extends(LightIntensityRainDrizzle, _super);
    function LightIntensityRainDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light intensity drizzle rain';
        return _this;
    }
    return LightIntensityRainDrizzle;
}(DrizzleFactory));
var RainDrizzle = /** @class */ (function (_super) {
    __extends(RainDrizzle, _super);
    function RainDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'drizzle rain';
        return _this;
    }
    return RainDrizzle;
}(DrizzleFactory));
var HeavyIntensityRainDrizzle = /** @class */ (function (_super) {
    __extends(HeavyIntensityRainDrizzle, _super);
    function HeavyIntensityRainDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy intensity drizzle rain';
        return _this;
    }
    return HeavyIntensityRainDrizzle;
}(DrizzleFactory));
var ShowerRainDrizzle = /** @class */ (function (_super) {
    __extends(ShowerRainDrizzle, _super);
    function ShowerRainDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'shower rain and drizzle';
        return _this;
    }
    return ShowerRainDrizzle;
}(DrizzleFactory));
var HeavyShowerRainDrizzle = /** @class */ (function (_super) {
    __extends(HeavyShowerRainDrizzle, _super);
    function HeavyShowerRainDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy shower rain and drizzle';
        return _this;
    }
    return HeavyShowerRainDrizzle;
}(DrizzleFactory));
var ShowerDrizzle = /** @class */ (function (_super) {
    __extends(ShowerDrizzle, _super);
    function ShowerDrizzle(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'shower drizzle';
        return _this;
    }
    return ShowerDrizzle;
}(DrizzleFactory));
