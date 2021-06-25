//declare string (text):
var vehicle;
vehicle = "car";
//declare number:
var quantity;
quantity = 1;
//declare boolean (true, false):
var isCar = true;
//declare an array (any accepts any type):
var hobbies;
hobbies = [123, 'music', 'movies'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobbie = hobbies_1[_i];
    console.log(hobbie);
}
//declare an object:
var user = {
    name: 'Pepe',
    age: 40,
    address: {
        street: "john flower",
        zipCode: 841
    },
    courses: ['typescript', 'node.js', 'mongoDB']
};
console.log(user);
