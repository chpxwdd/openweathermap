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
var RainFactory = /** @class */ (function () {
    function RainFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.RAIN;
        this.description = '';
        this.icon = '10';
    }
    RainFactory.build = function (code) {
        switch (code) {
            case 500:
                return new LightRain(code);
            case 501:
                return new ModerateRain(code);
            case 502:
                return new HeavyIntensityRain(code);
            case 503:
                return new VeryHeavyRain(code);
            case 504:
                return new ExtremeRain(code);
            case 511:
                return new FreezingRain(code);
            case 520:
                return new LightIntensityShowerRain(code);
            case 521:
                return new ShowerRain(code);
            case 522:
                return new HeavyIntensityShowerRain(code);
            case 531:
                return new RaggedShowerRain(code);
            default:
                throw new Error('Rain weather coFndition not found');
        }
    };
    return RainFactory;
}());
exports["default"] = RainFactory;
var LightRain = /** @class */ (function (_super) {
    __extends(LightRain, _super);
    function LightRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light rain';
        return _this;
    }
    return LightRain;
}(RainFactory));
var ModerateRain = /** @class */ (function (_super) {
    __extends(ModerateRain, _super);
    function ModerateRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'moderate rain';
        return _this;
    }
    return ModerateRain;
}(RainFactory));
var HeavyIntensityRain = /** @class */ (function (_super) {
    __extends(HeavyIntensityRain, _super);
    function HeavyIntensityRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy intensity rain';
        return _this;
    }
    return HeavyIntensityRain;
}(RainFactory));
var VeryHeavyRain = /** @class */ (function (_super) {
    __extends(VeryHeavyRain, _super);
    function VeryHeavyRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'very heavy rain';
        return _this;
    }
    return VeryHeavyRain;
}(RainFactory));
var ExtremeRain = /** @class */ (function (_super) {
    __extends(ExtremeRain, _super);
    function ExtremeRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'extreme rain';
        return _this;
    }
    return ExtremeRain;
}(RainFactory));
var FreezingRain = /** @class */ (function (_super) {
    __extends(FreezingRain, _super);
    function FreezingRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'freezing rain';
        _this.icon = '13';
        return _this;
    }
    return FreezingRain;
}(RainFactory));
var LightIntensityShowerRain = /** @class */ (function (_super) {
    __extends(LightIntensityShowerRain, _super);
    function LightIntensityShowerRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.icon = '09';
        _this.description = 'light intensity shower rain';
        return _this;
    }
    return LightIntensityShowerRain;
}(RainFactory));
var ShowerRain = /** @class */ (function (_super) {
    __extends(ShowerRain, _super);
    function ShowerRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.icon = '09';
        _this.description = 'shower rain';
        return _this;
    }
    return ShowerRain;
}(RainFactory));
var HeavyIntensityShowerRain = /** @class */ (function (_super) {
    __extends(HeavyIntensityShowerRain, _super);
    function HeavyIntensityShowerRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy intensity shower rain';
        _this.icon = '09';
        return _this;
    }
    return HeavyIntensityShowerRain;
}(RainFactory));
var RaggedShowerRain = /** @class */ (function (_super) {
    __extends(RaggedShowerRain, _super);
    function RaggedShowerRain(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'ragged shower rain';
        _this.icon = '09';
        return _this;
    }
    return RaggedShowerRain;
}(RainFactory));
