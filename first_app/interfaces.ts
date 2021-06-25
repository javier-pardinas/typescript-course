enum Role {
    Neurologist,
    Cardiologist,
    Surgeon
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

const doctor = {
    name: 'Pepe',
    email: 'pepe@gmail.com',
    role: Role.Surgeon
}

//const printStaff = (staff: {name: string, email: string, role: Role}) => console.log(staff);
const printStaff = (staff: Staff) => console.log(staff);

printStaff(doctor);