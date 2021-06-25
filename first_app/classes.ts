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
        protected readonly brandName: string, 
        private readonly model: string, 
        private readonly color: string,
        private price: number
        ) {}
   /* 
   get getPrice() {
        return this.price;
    }
    set setPrice(value:number) {
     this.price = value;
    }
    */
    drive() {
        console.log(`driving a ${this.brandName}, model: ${this.model}, color: ${this.color}`)
    }
}

const vehicle = new Vehicle('seat', '3', 'black', 5000);
vehicle.drive();

let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}

motorcycle.drive();

class Car extends Vehicle {
    drive(): void {
        console.log(`I am driving a vehicle that is: ${this.brandName}`);
    }
}

const vehicle2 = new Car('mazda', '2', 'white', 5000);
vehicle2.drive();
//vehicle2.setPrice
//console.log(vehicle2.getPrice);