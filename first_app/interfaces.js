var Role;
(function (Role) {
    Role[Role["Neurologist"] = 0] = "Neurologist";
    Role[Role["Cardiologist"] = 1] = "Cardiologist";
    Role[Role["Surgeon"] = 2] = "Surgeon";
})(Role || (Role = {}));
;
;
;
var doctor = {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    role: Role.Surgeon,
    total: 25,
    currentBill: function () { return "Value of bill: '" + this.total + "'"; }
};
//const printStaff = (staff: {name: string, email: string, role: Role}) => console.log(staff);
var printStaff = function (staff) { return console.log(staff); };
var printCurrentBill = function (bill) { return console.log(bill.currentBill()); };
printStaff(doctor);
printCurrentBill(doctor);
