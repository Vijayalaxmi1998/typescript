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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return "4 Wheeler";
    };
    Car.prototype.checkAC = function () {
        return "Ac is available";
    };
    Car.prototype.callFacility = function () {
        return "call facility supported";
    };
    return Car;
}());
var Toyata = /** @class */ (function (_super) {
    __extends(Toyata, _super);
    function Toyata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyata.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyata.prototype.Color = function () {
        return "white";
    };
    Toyata.prototype.Price = function () {
        return 1000000;
    };
    return Toyata;
}(Car));
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gps = true;
        return _this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return "gray";
    };
    return Hundyai;
}(Car));
var hundyai = new Hundyai();
var toyata = new Toyata();
console.log(hundyai);
console.log(toyata);
