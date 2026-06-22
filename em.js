let employeename=prompt("Employee name");
let employeeage=prompt("Employee age")
let employeedepartment=prompt("Employee department")
let employeesalary=prompt("salary")

let employeedeatils={
    name:"yashaswini",
    age:21,
    department:"atot",
    salary:20000
};
let salary=45000
if(salary>=35000)
{
    console.log( "Eligible for bonus");
   
} 
else{
    console.log("not Eligible for bonous");
    
};
console.log(salary)
console.log(`
    EMPLOYEENAME :${employeedeatils.name}
     EMPLOYEEAGE :${employeedeatils.age}
      EMPLOYEEDEPEARTMENT :${employeedeatils.department}
      EMPLOYEESALARY :${employeedeatils.salary}
      
    `);
