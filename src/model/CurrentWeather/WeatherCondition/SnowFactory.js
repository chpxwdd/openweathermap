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
var SnowFactory = /** @class */ (function () {
    function SnowFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.SNOW;
        this.description = '';
        this.icon = '13';
    }
    SnowFactory.build = function (code) {
        switch (code) {
            case 600:
                return new LightSnow(code);
            case 601:
                return new Snow(code);
            case 602:
                return new HeavySnow(code);
            case 611:
                return new Sleet(code);
            case 612:
                return new LightShowerSleet(code);
            case 613:
                return new ShowerSleet(code);
            case 615:
                return new LightRainSnow(code);
            case 616:
                return new RainSnow(code);
            case 620:
                return new LightShowerSnow(code);
            case 621:
                return new ShowerSnow(code);
            case 622:
                return new HeavyShowerSnow(code);
            default:
                throw new Error('Snow weather condition not found');
        }
    };
    return SnowFactory;
}());
exports["default"] = SnowFactory;
var LightSnow = /** @class */ (function (_super) {
    __extends(LightSnow, _super);
    function LightSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light snow';
        return _this;
    }
    return LightSnow;
}(SnowFactory));
var Snow = /** @class */ (function (_super) {
    __extends(Snow, _super);
    function Snow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'snow';
        return _this;
    }
    return Snow;
}(SnowFactory));
var HeavySnow = /** @class */ (function (_super) {
    __extends(HeavySnow, _super);
    function HeavySnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy snow';
        return _this;
    }
    return HeavySnow;
}(SnowFactory));
var Sleet = /** @class */ (function (_super) {
    __extends(Sleet, _super);
    function Sleet(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'sleet';
        return _this;
    }
    return Sleet;
}(SnowFactory));
var LightShowerSleet = /** @class */ (function (_super) {
    __extends(LightShowerSleet, _super);
    function LightShowerSleet(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light shower sleet';
        return _this;
    }
    return LightShowerSleet;
}(SnowFactory));
var ShowerSleet = /** @class */ (function (_super) {
    __extends(ShowerSleet, _super);
    function ShowerSleet(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light rain and snow';
        return _this;
    }
    return ShowerSleet;
}(SnowFactory));
var LightRainSnow = /** @class */ (function (_super) {
    __extends(LightRainSnow, _super);
    function LightRainSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light rain and snow';
        return _this;
    }
    return LightRainSnow;
}(SnowFactory));
var RainSnow = /** @class */ (function (_super) {
    __extends(RainSnow, _super);
    function RainSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'rain and snow';
        return _this;
    }
    return RainSnow;
}(SnowFactory));
var LightShowerSnow = /** @class */ (function (_super) {
    __extends(LightShowerSnow, _super);
    function LightShowerSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light shower snow';
        return _this;
    }
    return LightShowerSnow;
}(SnowFactory));
var ShowerSnow = /** @class */ (function (_super) {
    __extends(ShowerSnow, _super);
    function ShowerSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'shower snow';
        return _this;
    }
    return ShowerSnow;
}(SnowFactory));
var HeavyShowerSnow = /** @class */ (function (_super) {
    __extends(HeavyShowerSnow, _super);
    function HeavyShowerSnow(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy shower snow';
        return _this;
    }
    return HeavyShowerSnow;
}(SnowFactory));
