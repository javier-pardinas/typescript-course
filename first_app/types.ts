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