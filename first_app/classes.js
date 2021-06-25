var Vehicle = /** @class */ (function () {
    function Vehicle(b, model, color) {
        this.brandName = b;
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
//driving a undefined:
var motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
};
motorcycle.drive();
