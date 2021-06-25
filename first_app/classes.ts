class Vehicle {
    brandName: string;
    constructor(b: string) {
        this.brandName = b;
    }

    drive() {
        console.log(`driving a ${this.brandName}`)
    }
}

const vehicle = new Vehicle('seat');
vehicle.drive();

//driving a undefined:
let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}

motorcycle.drive();