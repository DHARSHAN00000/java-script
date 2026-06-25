

let employees = [];
function addEmployee(id, name, salary) {
    employees.push({
        id: id,
        name: name,
        salary: salary
    });
    console.log("Employee Added Successfully");
}
function viewEmployees() {
    console.log("Employee List:");
    
    for (let emp of employees) {
        console.log(
            `ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`
        );
    }
}

function calculateBonus(id, callback) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        callback(employee);
    } else {
        console.log("Employee Not Found");
    }
}

function bonus(employee) {
    let bonusAmount = employee.salary * 0.10;
    console.log(
        `${employee.name}'s Bonus: ${bonusAmount}`
    );
}

function searchEmployee(id) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

function deleteEmployee(id) {
    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Deleted");
    } else {
        console.log("Employee Not Found");
    }
}


function totalEmployees() {
    console.log("Total Employees:", employees.length);
}

addEmployee(101, "Dharshan", 50000);
addEmployee(102, "Rahul", 60000);
addEmployee(103, "Anu", 45000);

viewEmployees();

calculateBonus(101, bonus);

searchEmployee(102);

deleteEmployee(103);

totalEmployees();

viewEmployees();