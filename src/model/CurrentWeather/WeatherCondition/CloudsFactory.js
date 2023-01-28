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
var CloudsFactory = /** @class */ (function () {
    function CloudsFactory() {
        this.code = NaN;
        this.type = CurrentWeatherInterface_1.EWeatherCondition.CLEAR;
        this.description = '';
        this.icon = '04';
    }
    CloudsFactory.build = function (code) {
        switch (code) {
            case 801:
                return new FewClouds(code);
            case 802:
                return new ScatteredClouds(code);
            case 803:
                return new BrokenClouds(code);
            case 804:
                return new OvercastClouds(code);
            default:
                throw new Error('Clear weather condition not found');
        }
    };
    return CloudsFactory;
}());
exports["default"] = CloudsFactory;
var FewClouds = /** @class */ (function (_super) {
    __extends(FewClouds, _super);
    function FewClouds(code) {
        var _this = _super.call(this) || this;
        _this.icon = String('02');
        _this.code = code;
        _this.description = 'few clouds: 11-24%';
        return _this;
    }
    return FewClouds;
}(CloudsFactory));
var ScatteredClouds = /** @class */ (function (_super) {
    __extends(ScatteredClouds, _super);
    function ScatteredClouds(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.icon = String('03');
        _this.description = 'scattered clouds: 25-50%';
        return _this;
    }
    return ScatteredClouds;
}(CloudsFactory));
var BrokenClouds = /** @class */ (function (_super) {
    __extends(BrokenClouds, _super);
    function BrokenClouds(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'broken clouds: 51-84%';
        return _this;
    }
    return BrokenClouds;
}(CloudsFactory));
var OvercastClouds = /** @class */ (function (_super) {
    __extends(OvercastClouds, _super);
    function OvercastClouds(code) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.description = 'overcast clouds: 85-100%';
        return _this;
    }
    return OvercastClouds;
}(CloudsFactory));
