//EMPLOYEE REGISTARtion
let a="Darshan"
let b=" EMP101"
const c="Development "
let d=50000
let e="true"
console.log(`NAME : ${a}
    ID : ${b}
    DEPARTMENT : ${c}
    SALARY :  ${d}
    PERMANET: ${e}`);
//EMPLOYEE SKILLS
    let f=["HTML","CSS","JAVASCRIPT","REACT","GIT","NODE.JS"]
    console.log( "first skill:",f[0]);
    console.log("third skills:",f[2]);
    console.log("last skill :",f[f.length-1]);
    console.log("total :",f.length);
    //COMPANY OBJECT
    let company={
        name: "stackly",
        location:"bengalore",
        emp:150,
        technology:["HTML","CSS","JAVASCRIPT","REACT","GIT","NODE.JS"]
    };
    
    
    console.log("COMPANYNAME:",company.name);
    console.log("LOACTION:",company.location);
    console.log("EMPLYOEE:",company.emp);
    console.log("TECHNOLOGY:",company.technology[1]);
    console.log("last technology:",company.technology.length);
//SALARY CALCULATOR
    let basic=30000;
    let bonus=5000;
    total=basic+ bonus
tax=total*0.10
final=total-tax
console.log("total;",total);
console.log("tax:", tax);
console.log("final salary:",final);
//ATTENDENCE CHECKER
let attendence=92;
attendence>=75?console.log("eligiable for exam"):console.log("not eligiable for exam");

//LOGIN VERIFICATION
let username="admin";
let password="12345";
if(
    username==="admin"&& password==="12345"
) {
console.log("login successful");}
else{
console.log("invaild credentails");
}
//PRODUCT BILLING
let produactname="laptop"
let productprize=45000
let quantity=2
total=productprize*quantity

console.log("product:",produactname);
console.log("price:",productprize);
console.log("quantity",quantity);
console.log("total:",total);

//USER INTERACTION
let p=prompt("Employee name")
let m=prompt("employee age")
let t=confirm("do you want to join our company?")

if(t){
alert("welcome")
}
else{ alert(
    "thank you"
)}

//comparison checker
console.log(10 == "10");// true because it == check valu are same
console.log( 10 === "10");// false beacuse the datqa types are differnt
console.log( 20 != "20");// false because values are equal
console.log( 20 !=="20");// true  becaus the data types are different
console.log( 5 < 10);// true becaus e5 is lesser than 10 only
console.log( 15 >= 20);// false becaus e 20 i sgreater but  not eqaul
console.log( 100 <= 100); true // it equal

// increment and decrement

let visitors = 100
console.log("post increment:",visitors++);//first print and then it will add 100

console.log("post decrement:",visitors--);// becaus ein post increment after increase the value become 101 first print and then it will subtract 101
console.log("pre increment:",++visitors);//post decrement it will become 100 so it add first then print 101
console.log("pre decrement:",--visitors);// pre decrement it will becoime 101 so it subtract first and print 100


// employee portal














    
    
    
    
    
    

