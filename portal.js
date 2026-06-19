
// Prompt
let employeeName = prompt("Enter Employee Name:");
let employeeAge = prompt("Enter Employee Age:");

// Confirm
let joinCompany = confirm("Do you want to join our company?");

// Alert
if (joinCompany) {
    alert("Welcome " + employeeName);
} else {
    alert("Thank You");
}

// Login Verification
let username = "admin";
let password = "12345";

let loginStatus =
    (username === "admin" && password === "12345")
        ? "Success"
        : "Failed";

// Employee Object
const employee = {
    employeeName: "Dharshan",
    employeeId: "EMP303",
    department: "Development",
    experience: 2,
    salary: 50000,
    company: "Stackly IT",
    location: "Bengalore"
};

// Skills Array
let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// Attendance Check
let attendance = 92;
let examStatus = attendance >= 75 ? "Eligible" : "Not Eligible";

// Experience Check
let experienceStatus =
    employee.experience >= 2 ? "Experienced Employee" : "Fresher";

// Bonus Calculation
let bonus = employee.salary * 0.10;
let finalSalary = employee.salary + bonus;

// Console Methods
console.log("Employee Object:", employee);
console.table(skills);
console.warn("Attendance should be maintained above 75%");
console.info(experienceStatus);

// Final Output using Template String
console.log(`

Employee Name : ${employee.employeeName}
Employee ID   : ${employee.employeeId}
Department    : ${employee.department}
Experience    : ${employee.experience} Years
Salary        : ₹${employee.salary}
Bonus         : ₹${bonus}
Final Salary  : ₹${finalSalary}
Skills        : ${skills.join(", ")}
Attendance    : ${attendance}%
Exam Status   : ${examStatus}
Login Status  : ${loginStatus}
Company       : ${employee.company}
Location      : ${employee.location}
`);