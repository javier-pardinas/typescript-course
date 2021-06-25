enum Role {
    Neurologist,
    Cardiologist,
    Surgeon
};

type StaffT = {
    name: string,
    email: string,
    role: Role
};

interface StaffI {
    name: string,
    email: string,
    role: Role
};

interface Billable {
    total: number,
    currentBill(): string
};

const doctor = {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    role: Role.Surgeon,
    total: 25,
    currentBill() { return `Value of bill: '${this.total}'`;}
};

//const printStaff = (staff: {name: string, email: string, role: Role}) => console.log(staff);
const printStaff = (staff: StaffI) => console.log(staff);

const printCurrentBill = (bill: Billable) => console.log(bill.currentBill());

printStaff(doctor);

printCurrentBill(doctor);