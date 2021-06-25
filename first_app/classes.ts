class Vehicle {
    private brandName: string;
    private model: string;
    private color: string;
    constructor(b: string, model: string, color: string) {
        this.brandName = b;
        this.model = model;
        this.color = color;
    }

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