let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let newemployee = employees.find((c) => {
    return c.salary > 50000;
});

console.log(newemployee);

let employeesid=employees.find((i) =>
{
    return i.id=103;
});
console.log(employeesid);

let bonus = 5000;

employees.map((employee) => {
    console.log(employee.name + " : " + (employee.salary + bonus));
});

let employees1 = [
{
    name:"Naveen",
    experience:2
},
{
    name:"John",
    experience:7
},
{
    name:"Arun",
    experience:5
}
];

employees1.forEach((employee) => {
    if (employee.experience >= 5) {
        console.log(employee.name + " - Senior Employee");
    } else {
        console.log(employee.name + " - Junior Employee");
    }
});

let employee2=employees.map((c)=>
{
    return c.name
});
console.log(employee2);

let employee3=employees.map((i)=>
{
    return i.id
});
console.log(employee3);

let employee4=employees.forEach((employee)=>{
if(employee.salary>40000){
    console.log(employee.name);}
    else{
console.log("")
    } 

})

let bonus1 = 5000;

let updatedEmployees = employees.map((employee) => {
    return {
        ...employee,
        salary: employee.salary + bonus1
    };
});

updatedEmployees.forEach((employee) => {
    console.log(employee.name + " : " + employee.salary);
});


employees.forEach((employee) => {
    console.log(`Employee Name : ${employee.name}
Employee ID : ${employee.id}
Salary : ${employee.salary}
`);
});