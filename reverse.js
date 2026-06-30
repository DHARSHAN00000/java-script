
 let a1=["Hi","Hello","How are you?","Good Morning"]
console.log(a1.reverse());


//Sort
 let a2=[25000,45000,30000,70000]
a2.sort((a,b)=>b-a)
console.log(a2);

//includes

let a3=["Mouse","Keyboard","Monitor","Laptop"]
console.log(a3.includes("Mouse"));


// splice
Array
let a4=["Rahul","Arun","John","David"]
a4.splice(2,1,"navin")
console.log(a4);

//push
let a5=["Mobile","Laptop"]
a5.push("phone")
console.log(a5);

//pop

 let a6=["Mobile","Laptop","Headphone"]
 a6.pop("Headphone")
 console.log(a6);

 //array disctructing

  let a7=[101,"Naveen","Chennai",9876543210] 
  let [ID,name,city,phonemunber]=a7
  console.log("id",ID);
  console.log("NAme",name);
  console.log("CITY",city);
  console.log("PHONE",phonemunber);
  
  //object destructing

  Object
 let a8={
name1:"Laptop",
price:65000,
brand:"Dell",
stock:20
}
let {name1,price}=a8
console.log(name1,price);

//rest operator
  

function student(name2, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student:", name2);
    console.log("Total Marks:", total);
    console.log("Average:", average);
}

student("Naveen", 90, 85, 88, 95);


//concat
let cart1=["a","c","d"]
let cart2=["b","e"]
let cart3=[...cart1,...cart2];
console.log(cart3);

//sprecd operator

 let  employeePersonal={
    name:"darshan",
    id:21
}

 let employeeOffice={
    company:"stackly"
}
let a10={...employeePersonal,...employeeOffice}
console.log(a10);



//function

let a11=salary=> extra=>{
    console.log("total salary:",salary+extra);
    

}
a11(5000)(4000)

//genetor function

function *a21(){
    yield "10% cashback"
    yield"20% cashback"
    yield "30% cashback"
    yield"better luck next time"
}
let a12=a21()
console.log(a12.next().value);
console.log(a12.next().value);
console.log(a12.next().value);
console.log(a12.next().value);

//callback
  function a31(callback){
    console.log("login sucessfull");
    callback()
  }
  function a32(){
    console.log("return to dashborad");
    
  }
  a31(a32)
  

  //higher order funtion

 function order(status, callback) {
    console.log(status);
    callback();
}

function preparingFood() {
    console.log("Preparing Food");
}

function outForDelivery() {
    console.log("Out for Delivery");
}

function delivered() {
    console.log("Delivered");
}

order("Order Received", function () {
    preparingFood();
    outForDelivery();
    delivered();
});

//discount

function amount(){
    let spent=5000
    let discount=500
    return spent-discount
}

console.log("final amount",amount());


 let amt=spen=> dis=>{
    console.log("discou", spen-dis);

    
    
 }
 amt(5000)(500)


 //function  

 function name3(user){
    return`hello ${user}`;
 }
 let user="darshan"
let name4=name3(user)
console.log(name4);

function details(name5,department){
    console.log(name5);
    console.log(department);
    
    
}
details("darshan","ece")


//burger bill


function burger(){
    let burg=300
    let quantity=3

    return burg*quantity
}
console.log("total:",burger());
 let bug=bur=> qua=>{
    console.log("total6:",bur*qua);
 }
 bug(300)(3)


 //student

 function students(marks){
    if(marks>=35){
        console.log("pass");
        
    }else{
        console.log("fail");
        
    }
 }
 students(72)

 //employee salary

 function salary(totalsalary){
    return (totalsalary)
 }
 let pay=salary(50000)

 function yearly(monthly){
    console.log(pay*monthly)
 }
 yearly(12)
  


 let slip=am=> to=>{
    console.log(am*to);
    
 }
 slip(50000)(12)
 