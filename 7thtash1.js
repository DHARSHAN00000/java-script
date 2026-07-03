let employees = [
{
    name:"Naveen",
    salary:30000
},
{
    name:"John",
    salary:45000
},
{
    name:"Arun",
    salary:60000
}
]
// Tasks
// Find highest salary.
// Find lowest salary.
// Add ₹5000 bonus.
// Print total salary.
// Print employees earning above ₹40,000.

let highest = employees.reduce((max, emp) => {
    return emp.salary > max ? emp.salary : max;
}, employees[0].salary);

console.log("Highest Salary:", highest);
let lowest = employees.reduce((min, emp) => {
    return emp.salary < min ? emp.salary : min;
}, employees[0].salary);

console.log("Lowest Salary:", lowest);

employees.forEach((student) => {
    student.salary +=5000;
});
console.log(employees);


   let totalsalary=employees.reduce((total,emp)=>{
    return total+emp.salary
  },0)
  console.log(totalsalary);

  let find1=employees.find((emp1)=>{
    return emp1.salary>=40000
  })
  console.log(find1);

let products = [
{
    name:"Laptop",
    price:50000
},
{
    name:"Mouse",
    price:500
},
{
    name:"Keyboard",
    price:1500
}
]
// Tasks
// Print product names.
// Print total bill.
// Search product "Mouse".
// Apply 10% discount.
// Print the final bill.
// 🟢 Task 4 - Bank Accoun

let tasks=products.map(element => {
     return element.name;
    
});console.log(tasks);

let totalbill=products.reduce((total,sum)=>{
    return (total+sum.price);
    
},0)
console.log(totalbill);

 let mouses=products.find((elements)=>{
return elements.name="mouse"
})
console.log(mouses);

let discounts=products.forEach((product)=>{
product.price=product.price-(product.price*0.10)
})
console.log(products);

let after=products.reduce((total,product)=>{
return total+product.price},0)
console.log(after);



let finalBill = 0;

products.forEach((product) => {
    finalBill += product.price;
});

console.log("Final Bill: ₹" + finalBill);

let account={
    name:"Naveen",
    balance:50000
}
// Tasks
// Deposit ₹10,000.
// Withdraw ₹5,000.
// Print current balance.
// Check balance is below ₹20,000.
// Print account details.

let Deposit=amount=> depo=>{
    console.log(amount+depo);
    
}
 let depositamount=Deposit(50000)(10000)
console.log("Depositamount:"+ depositamount);


let withdraw=amount=> with1=> {
console.log(amount-with1);

}
let finalwithdrawl=withdraw(60000)(5000)

 account.balance +=10000
 console.log("Deposit:"+account.balance);

 account.balance-=5000
 console.log("final:"+account.balance);

 console.log("current balance:"+account.balance)

 if(account.balance<=20000){
    console.log("insufficent balance");
    
 }else{
    console.log("add money");
    
 }
 console.log(`accountname:${account.name}
    accountbalance:${account.balance}`);
 
//  Use
// prompt()
// if else
// Logic
// Enter Username

// ↓

// Enter Password

// ↓

// Correct

// ↓

// Welcome

// ↓

// Wrong

// ↓

// Invalid Username or Passwod

let username=prompt("please enter your name")
 let a=prompt("enter your userid")
let b=prompt("enter your password")
let userid="dharshan"
let Password="12345"

if(a=="dharshan"&& b=="12345"){
    alert("welcome"+ username);
     
}else{
    alert ("invalid username")

}

// Use
// switch()
// Input
// Red
// Yellow
// Green
// Output
// Stop

// Ready

// Go
let signal="red"
switch(signal){
    case ("red"):console.log("stop the vechile");break
     case("yellow"):console.log("start the vechile") ;break 
     case("green"):console.log("move the vechile");break
     default:("have a nice day")
    
}

let atm=""
switch(atm){
    case "withdrawlamount":prompt("enter the amount");break
      case "depositamount":prompt("deposit the amount");break
        case "finalamount":prompt("final amount");break
        default:console.log("have a nice day");
        

}
let score=[10,25,40,60,80,100]
// Tasks
// Highest score
// Lowest score
// Total score
// Average score

let highest1=score[0]
let lowest1=score[0]

score.forEach((marks)=>{
    if(marks>highest1){
        highest1=marks;
    }  
    if(marks<lowest1){
        lowest1=marks;
    }    
    
  

});

 let scores=score.reduce((sum,marks)=>{
    return sum+marks

})
console.log(scores);

let avearge1=scores/score.length

console.log("higesht:", highest1);
console.log("lowest:",lowest1);
console.log("average",avearge1);

// Age >=18

// ↓

// Allow Movie

// Otherwise

// Not Allowed
// Also use
// confirm()

// prompt()
alert("welcome to stackly films")
 let age=prompt("enter your age")
 if (age>18){
    alert("welcome and allowed")
 }else{
    confirm("please confirm your age")
 }
//  Enter Token

// ↓

// 1 Doctor A

// 2 Doctor B

// 3 Doctor C
// Use
// switch()

let Doctor=""
switch(Doctor){
    case "doctor A":console.log("doctor a is free");break
    case "doctor B":console.log("doctor b is free");break
    case "doctor C":console.log("doctor c is free");break
    default:console.log("wait for a min");
    

    
}
let fruits=["Apple","Orange","Banana"]
// Perform
// push()
// pop()
// shift()
// unshift()
// splice()
// slice()

fruits.push("banana");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("bananan");
console.log(fruits);

fruits.splice(1, 3, "Mango");
console.log(fruits);

let result = fruits.slice(1, 3);
console.log(result);

let employees4=[
{name:"A",salary:20000},
{name:"B",salary:35000},
{name:"C",salary:50000},
{name:"D",salary:70000}
]
// Tasks
// Using map()
// Increase every salary by ₹5,000.
// Using filter()
// Salary greater than ₹30,000.
// Using find()
// Find salary ₹50,000.
// Using reduce()
// Calculate total salary.
// Using some()
// Check whether any employee earns more than ₹60,000.
// Using every()
// Check whether every employee earns more than ₹15,000.
 
 
 let employ=employees4.map((increase)=>{
   return{
    name:increase.name,
    salary:increase.salary+5000
   };
 })
 console.log(employ);
 

  let fil=employees4.filter((emp)=>
{
return emp.salary>30000
})
console.log(fil);
let fin=employees4.find((emp)=>
{
return emp.salary=50000
})
console.log(fin);

let tot=employees4.reduce((total, emp)=>{
return total+emp.salary
},0)
console.log(tot);
let moreThan60k = employees.some((emp) => {
    return emp.salary > 60000;
});

let company=" Stackly IT "
// Tasks
// Convert to uppercase.
// Convert to lowercase.
// Remove spaces.
// Replace "IT" with "Software".
// Check whether "Stackly" exists.
// Split using space.

 let u=company.toUpperCase()
 console.log(u);
 let v=company.toLowerCase()
 console.log(v);
 let r=company.replace("IT","Software")
 console.log(r);
 let t=company.includes("Stackly")
 console.log(t);
 let s=company.trim()
 console.log(s);
 let sp=company.split("")
 console.log(sp);

//  🟢 Task 14 - Digital Clock
// Display the current time every second.
// Use
// Date()
// setInterval()
// Stop after 10 sec
let all=setInterval(() => {
    let time=new Date()
    console.log(time.toLocaleTimeString);
    

    
},1000);
setTimeout(()=>
    {
        clearInterval(all)
    },10000)

    let week=["sunday","monday","tuesday","wednesday","thursady","firday"]
    let date=new Date()
    let birthday=week[date.getDate()]
    console.log(birthday);
    
   let api = "https://fakestoreapi.com/products";

fetch(api)
  .then((res) => res.json())
  .then((data) => {

    console.log("Titles");
    data.forEach((item) => {
      console.log(item.title);
    });
console.log("prices"); 
data.forEach((item) => {
    console.log(item.prices);
    
    
});

    console.log("Prices");
    data.forEach((item) => {
      console.log(item.price);
    });

    console.log("Price > 100");
    data.forEach((item) => {
      if (item.price > 100) {
        console.log(item.title, item.price);
      }
    });

    console.log("Total Products:", data.length);

    // Print category names
    console.log("Categories");
    data.forEach((item) => {
      console.log(item.category);
    });
  b  });
 
      
 
 
 






 
 




  