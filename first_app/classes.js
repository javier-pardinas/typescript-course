var Vehicle = /** @class */ (function () {
    function Vehicle(b) {
        this.brandName = b;
    }
    Vehicle.prototype.drive = function () {
        console.log("driving a " + this.brandName);
    };
    return Vehicle;
}());
var vehicle = new Vehicle('seat');
vehicle.drive();
//driving a undefined:
var motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
};
motorcycle.drive();
