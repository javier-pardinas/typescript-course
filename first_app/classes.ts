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
        //readonly: only able to use atribute when initialize
        private readonly brandName: string, 
        private readonly model: string, 
        private readonly color: string
        ) {}

    drive() {
        console.log(`driving a ${this.brandName}, model: ${this.model}, color: ${this.color}`)
    }
}

const vehicle = new Vehicle('seat', '3', 'black');
vehicle.drive();

let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}

motorcycle.drive();

class Car extends Vehicle {
    drive(): void {
        console.log('I am driving a vehicle');
    }
}

const vehicle2 = new Car('mazda', '2', 'white');
vehicle2.drive()