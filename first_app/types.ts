//declare string (text):
let vehicle: string;
vehicle = "car";
//declare number:
let quantity: number;
quantity = 1;
//declare boolean (true, false):
let isCar: boolean = true;
//declare an array (any accepts any type):
let hobbies: any[];
hobbies = [123, 'music', 'movies'];
//tuples:
type vehicleType = [string, number, string];
let myCar: [string, number, string] = ['seat', 2021, 'black'];
let myBike: vehicleType = ['yamaha', 2020, 'white'];
console.log(myCar);
console.log(myBike);


for (const hobbie of hobbies) {
console.log(hobbie);
}

//declare an object:
let user: {
    name: string,
    age: number,
    address: {
        street: string,
        zipCode: number
    },
    courses: string[]
} = {
    name: 'Pepe',
    age: 40,
    address: {
        street: "john flower",
        zipCode: 841
    },
    courses: ['typescript', 'node.js', 'mongoDB']
};

console.log(user);