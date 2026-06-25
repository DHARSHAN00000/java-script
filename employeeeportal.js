let employees = [
    {
        name: "Dharshan",
        id: 105,
        salary: 30000
    },
    {
        name: "Vidya",
        id: 106,
        salary: 60000
    }
];

for (let emp of employees) {
    
    if (emp.salary < 50000) {
        console.log(`${emp.name} is Eligible For Bonus`);
    } else {
        console.log(`${emp.name} is Not Eligible For Bonus`);
    }
}
