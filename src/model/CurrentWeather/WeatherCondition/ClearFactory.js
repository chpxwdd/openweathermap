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
var ClearFactory = /** @class */ (function () {
    function ClearFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.CLEAR;
        this.description = '';
        this.icon = '01';
    }
    ClearFactory.build = function (code) {
        switch (code) {
            case 800:
                return new Clear(code);
            default:
                throw new Error('Clear weather condition not found');
        }
    };
    return ClearFactory;
}());
exports["default"] = ClearFactory;
var Clear = /** @class */ (function (_super) {
    __extends(Clear, _super);
    function Clear(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'clear sky';
        return _this;
    }
    return Clear;
}(ClearFactory));
