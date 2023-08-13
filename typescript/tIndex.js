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
    function Car(id, manufacturerName, modelName, price) {
        this.id = id;
        this.manufacturerName = manufacturerName;
        this.modelName = modelName;
        this.price = price;
    }
    Car.prototype.showInfo = function () {
        console.log("Id : ".concat(this.id));
        console.log("Manufacturer : ".concat(this.manufacturerName));
        console.log("Model : ".concat(this.modelName));
        console.log("Price : ".concat(this.price));
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(id, manufacturerName, modelName, price) {
        return _super.call(this, id, manufacturerName, modelName, price) || this;
    }
    Mercedes.prototype.showInfo = function () {
        console.log("Mercedes I.N.C");
        _super.prototype.showInfo.call(this);
    };
    return Mercedes;
}(Car));
var Kia = /** @class */ (function (_super) {
    __extends(Kia, _super);
    function Kia(id, manufacturerName, modelName, price) {
        return _super.call(this, id, manufacturerName, modelName, price) || this;
    }
    Kia.prototype.showInfo = function () {
        console.log("Kia I.N.C");
        _super.prototype.showInfo.call(this);
    };
    return Kia;
}(Car));
var mercedes = new Mercedes(0, "Mercedes-Benz Group", "AMG", 10000);
var kia = new Mercedes(1, "Kia Corporation", "Sportage", 5000);
mercedes.showInfo();
kia.showInfo();
