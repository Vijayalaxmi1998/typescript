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
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Cars.prototype.CheckAC = function () {
        return 'AC is available';
    };
    Cars.prototype.CallFacility = function () {
        return 'Call Facility supported';
    };
    return Cars;
}());
var Hundai = /** @class */ (function (_super) {
    __extends(Hundai, _super);
    function Hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundai.prototype.Price = function () {
        return 1000000; // implementation
    };
    Hundai.prototype.Color = function () {
        return 'Gray';
    };
    Hundai.prototype.TotalSeats = function () {
        return 5;
    };
    return Hundai;
}(Cars));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1500000;
    };
    Toyota.prototype.Color = function () {
        return 'White';
    };
    Toyota.prototype.TotalSeats = function () {
        return 7;
    };
    return Toyota;
}(Cars));
var objToyata = new Toyota();
console.log('Toyota', objToyata.TotalSeats());
var objHundai = new Hundai();
console.log('Hundai', objHundai.TotalSeats());
