interface Billable {
    currentBill():string;
}

interface Flyable {
    altitude():string;
}

abstract class Vehicle2 {
    constructor(
        protected readonly brandName: string, 
        private readonly model: string, 
        private readonly color: string,
        private price: number
        ) {}

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

    abstract drive(): void;
}

class Airplane extends Vehicle2 implements Billable, Flyable {
    drive(): void {
        console.log(`I am driving a vehicle that is: ${this.brandName}`);
    }
    currentBill(): string {
        return `The bill is 5000`
    }

    altitude():string {
        return `The altitude is 50.000 feet`
    }
}

const vehicle: Flyable = new Airplane('mazda', '2', 'white', 5000);