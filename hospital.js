let age = Number(prompt("Enter Age:"));
let weight = Number(prompt("Enter Weight:"));

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}