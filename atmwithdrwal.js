
alert("welcome to ATM");
 let Balance=Number(prompt("enter your current balance"));
 let withdrawal=Number(prompt("please the vaild withdrawal amount"));


  
  if(withdrawal<=Balance){
    let balance=Balance-withdrawal
    console.log("success");
    console.log("the final amount: +balance");
    
    
  }else{
    console.log("denied");
    console.log("insuccifent balance");
    
    
  }