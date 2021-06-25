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
    function Vehicle(brandName, model, color) {
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
//driving a undefined:
var motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
};
motorcycle.drive();
