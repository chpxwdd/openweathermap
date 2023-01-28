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
var AtmosphereFactory = /** @class */ (function () {
    function AtmosphereFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.SNOW;
        this.description = '';
        this.icon = '50';
    }
    AtmosphereFactory.build = function (code) {
        switch (code) {
            case 701:
                return new Mist(code);
            case 711:
                return new Smoke(code);
            case 721:
                return new Haze(code);
            case 731:
                return new SandDust(code);
            case 741:
                return new Fog(code);
            case 751:
                return new Sand(code);
            case 761:
                return new Dust(code);
            case 762:
                return new Ash(code);
            case 771:
                return new Squall(code);
            case 781:
                return new Tornado(code);
            default:
                throw new Error('Atmosphere weather condition not found');
        }
    };
    return AtmosphereFactory;
}());
exports["default"] = AtmosphereFactory;
var Mist = /** @class */ (function (_super) {
    __extends(Mist, _super);
    function Mist(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'mist';
        return _this;
    }
    return Mist;
}(AtmosphereFactory));
var Smoke = /** @class */ (function (_super) {
    __extends(Smoke, _super);
    function Smoke(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'Smoke';
        return _this;
    }
    return Smoke;
}(AtmosphereFactory));
var Haze = /** @class */ (function (_super) {
    __extends(Haze, _super);
    function Haze(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'haze';
        return _this;
    }
    return Haze;
}(AtmosphereFactory));
var SandDust = /** @class */ (function (_super) {
    __extends(SandDust, _super);
    function SandDust(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'sand/ dust whirls';
        return _this;
    }
    return SandDust;
}(AtmosphereFactory));
var Fog = /** @class */ (function (_super) {
    __extends(Fog, _super);
    function Fog(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'fog';
        return _this;
    }
    return Fog;
}(AtmosphereFactory));
var Sand = /** @class */ (function (_super) {
    __extends(Sand, _super);
    function Sand(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'sand';
        return _this;
    }
    return Sand;
}(AtmosphereFactory));
var Dust = /** @class */ (function (_super) {
    __extends(Dust, _super);
    function Dust(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'dust';
        return _this;
    }
    return Dust;
}(AtmosphereFactory));
var Ash = /** @class */ (function (_super) {
    __extends(Ash, _super);
    function Ash(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'volcanic ash';
        return _this;
    }
    return Ash;
}(AtmosphereFactory));
var Squall = /** @class */ (function (_super) {
    __extends(Squall, _super);
    function Squall(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'squalls';
        return _this;
    }
    return Squall;
}(AtmosphereFactory));
var Tornado = /** @class */ (function (_super) {
    __extends(Tornado, _super);
    function Tornado(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'tornado';
        return _this;
    }
    return Tornado;
}(AtmosphereFactory));
