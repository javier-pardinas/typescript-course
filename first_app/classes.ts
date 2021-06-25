class Vehicle {
    /*private brandName: string;
    private model: string;
    private color: string;
    constructor(brandName: string, model: string, color: string) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
    }
    */

    constructor(
        private brandName: string, 
        private model: string, 
        private color: string
        ) {}

    drive() {
        console.log(`driving a ${this.brandName}, model: ${this.model}, color: ${this.color}`)
    }
}

const vehicle = new Vehicle('seat', '3', 'black');
vehicle.drive();

//driving a undefined:
let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}

motorcycle.drive();