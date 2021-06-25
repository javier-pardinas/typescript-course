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
for (const hobbie of hobbies) {
    console.log(hobbie);
    }
//tuples:
type vehicleType = [string, number, string];
let myCar: [string, number, string] = ['seat', 2021, 'black'];
let myBike: vehicleType = ['yamaha', 2020, 'white'];
console.log(myCar);
console.log(myBike);
//declare enum:
enum role {student, teacher};
//the literal type:
let pet: 'pet';
//pet = 'duck';

//declare an object:
let user: {
    name: string,
    age: number,
    address: {
        street: string,
        zipCode: number
    },
    courses: string[],
    role: role
} = {
    name: 'Pepe',
    age: 40,
    address: {
        street: "john flower",
        zipCode: 841
    },
    courses: ['typescript', 'node.js', 'mongoDB'],
    role: role.student
};

console.log(user);