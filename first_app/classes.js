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
var Vehicle = /** @class */ (function () {
    /*private brandName: string;
    private model: string;
    private color: string;
    constructor(brandName: string, model: string, color: string) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
    }
    */
    function Vehicle(
    //readonly: only able to use atribute when initialize
    brandName, model, color) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log("driving a " + this.brandName + ", model: " + this.model + ", color: " + this.color);
    };
    return Vehicle;
}());
var vehicle = new Vehicle('seat', '3', 'black');
vehicle.drive();
var motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
};
motorcycle.drive();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log('I am driving a vehicle');
    };
    return Car;
}(Vehicle));
var vehicle2 = new Car('mazda', '2', 'white');
vehicle2.drive();
