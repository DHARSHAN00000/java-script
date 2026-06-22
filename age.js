// Ask user's age.
// Display:
// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior Citizen
// Concepts: if else-if

let age=prompt("enter your age");
if(age<=0 && age>=12){
    console.log("child");
    
}
else if(age >=13 && age <=19){
console.log("teenager");

}
else if(age >=20 && age <=59){
console.log("adult");

}
else if(age >=60){
console.log("senior citizen");
}else{
    console.log("invalid age");
    
}