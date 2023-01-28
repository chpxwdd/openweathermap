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
var ThunderstormFactory = /** @class */ (function () {
    function ThunderstormFactory() {
        this.type = CurrentWeatherInterface_1.EWeatherCondition.THUNDERSTORM;
        this.icon = '11';
        this.description = '';
        this.code = NaN;
    }
    ThunderstormFactory.build = function (code) {
        switch (code) {
            case 200:
                return new LightRainThunderstom(code);
            case 201:
                return new RainThunderstom(code);
            case 202:
                return new HeavyRainThunderstom(code);
            case 210:
                return new LightThunderstom(code);
            case 211:
                return new Thunderstom(code);
            case 212:
                return new HeavyThunderstom(code);
            case 221:
                return new RaggedThunderstom(code);
            case 230:
                return new LightDrizzleThunderstom(code);
            case 231:
                return new DrizzleThunderstom(code);
            case 232:
                return new HeavyDrizzleThunderstom(code);
            default:
                throw new Error('Thunderstorm weather condition not found!');
        }
    };
    return ThunderstormFactory;
}());
exports["default"] = ThunderstormFactory;
var LightRainThunderstom = /** @class */ (function (_super) {
    __extends(LightRainThunderstom, _super);
    function LightRainThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with light cls';
        return _this;
    }
    return LightRainThunderstom;
}(ThunderstormFactory));
var RainThunderstom = /** @class */ (function (_super) {
    __extends(RainThunderstom, _super);
    function RainThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with light rain';
        return _this;
    }
    return RainThunderstom;
}(ThunderstormFactory));
var HeavyRainThunderstom = /** @class */ (function (_super) {
    __extends(HeavyRainThunderstom, _super);
    function HeavyRainThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with light rain';
        return _this;
    }
    return HeavyRainThunderstom;
}(ThunderstormFactory));
var LightThunderstom = /** @class */ (function (_super) {
    __extends(LightThunderstom, _super);
    function LightThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'light thunderstorm';
        return _this;
    }
    return LightThunderstom;
}(ThunderstormFactory));
var Thunderstom = /** @class */ (function (_super) {
    __extends(Thunderstom, _super);
    function Thunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm';
        return _this;
    }
    return Thunderstom;
}(ThunderstormFactory));
var HeavyThunderstom = /** @class */ (function (_super) {
    __extends(HeavyThunderstom, _super);
    function HeavyThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'heavy thunderstorm';
        return _this;
    }
    return HeavyThunderstom;
}(ThunderstormFactory));
var RaggedThunderstom = /** @class */ (function (_super) {
    __extends(RaggedThunderstom, _super);
    function RaggedThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'ragged thunderstorm';
        return _this;
    }
    return RaggedThunderstom;
}(ThunderstormFactory));
var LightDrizzleThunderstom = /** @class */ (function (_super) {
    __extends(LightDrizzleThunderstom, _super);
    function LightDrizzleThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with light drizzle';
        return _this;
    }
    return LightDrizzleThunderstom;
}(ThunderstormFactory));
var DrizzleThunderstom = /** @class */ (function (_super) {
    __extends(DrizzleThunderstom, _super);
    function DrizzleThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with drizzle';
        return _this;
    }
    return DrizzleThunderstom;
}(ThunderstormFactory));
var HeavyDrizzleThunderstom = /** @class */ (function (_super) {
    __extends(HeavyDrizzleThunderstom, _super);
    function HeavyDrizzleThunderstom(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'thunderstorm with heavy drizzle';
        return _this;
    }
    return HeavyDrizzleThunderstom;
}(ThunderstormFactory));
