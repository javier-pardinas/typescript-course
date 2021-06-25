//declare string (text):
let vehicle: string;
vehicle = "car";
//declare number:
let quantity: number;
quantity = 1;
//declare boolean (true, false):
let isCar: boolean = true;

//declare an object:
let user: {
    name: string,
    age: number,
    address: {
        street: string,
        zipCode: number
    }
} = {
    name: 'Pepe',
    age: 40,
    address: {
        street: "john flower",
        zipCode: 841
    }
};

console.log(user);