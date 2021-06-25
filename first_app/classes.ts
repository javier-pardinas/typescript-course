//abstract: you cannot be instantiated (only the classes that extend from you)
abstract class Vehicle {
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
   //the static methods and properties we can access them without creating an object.
   //we are accessing a method or property of the class.
   static PriceToCurrency(value:number, typeOfCurrency:string) {
       let result = "";
       switch(typeOfCurrency) {
           case "EURO": 
               result = "€" + value;
               break;
            
           case "DOLLAR": 
                result = "$" + value;
                break;
       }
       return result;
   }
   //you can also make abstract methods:
    abstract drive(): void;
}

/*const vehicle = new Vehicle('seat', '3', 'black', 5000);
vehicle.drive();

let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}

motorcycle.drive();
*/

class Car extends Vehicle {
    //you are forced to implemnt the abstract methods from your parent:
    drive(): void {
        console.log(`I am driving a vehicle that is: ${this.brandName}`);
    }
}

//Static classes:


const vehicle2 = new Car('mazda', '2', 'white', 5000);
vehicle2.drive();

console.log(Car.PriceToCurrency(200, 'DOLLAR'));
//vehicle2.setPrice
//console.log(vehicle2.getPrice);