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
    brandName, model, color, price) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    /*
    get getPrice() {
         return this.price;
     }
     set setPrice(value:number) {
      this.price = value;
     }
     */
    Vehicle.prototype.drive = function () {
        console.log("driving a " + this.brandName + ", model: " + this.model + ", color: " + this.color);
    };
    return Vehicle;
}());
var vehicle = new Vehicle('seat', '3', 'black', 5000);
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
        console.log("I am driving a vehicle that is: " + this.brandName);
    };
    return Car;
}(Vehicle));
var vehicle2 = new Car('mazda', '2', 'white', 5000);
vehicle2.drive();
//vehicle2.setPrice
//console.log(vehicle2.getPrice);
