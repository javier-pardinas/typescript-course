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
var myCar = ['seat', 2021, 'black'];
var myBike = ['yamaha', 2020, 'white'];
console.log(myCar);
console.log(myBike);
//declare enum:
var role;
(function (role) {
    role[role["student"] = 0] = "student";
    role[role["teacher"] = 1] = "teacher";
})(role || (role = {}));
;
//declare an object:
var user = {
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
