let studentname = prompt("Please enter your name");
let studentmarks = prompt("Please enter your marks");

let percentage = Number(studentmarks);

if (percentage > 90) {
    console.log("u r topper");
}
else if (percentage > 80) {
    console.log("grade AA");
}
else if (percentage > 70) {
    console.log("grade B");
}
else if (percentage >= 60) {
    console.log("grade C");
}
else {
    console.log("Fail");
}

console.log(`
STUDENTNAME: ${studentname}
STUDENTMARKS: ${studentmarks}
`);