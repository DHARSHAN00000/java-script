let username=prompt("username");
let accountname=prompt("account balance");
let withdrawal=prompt("enter amount");

if (withdrawal<=accountname)
{
    console.log("transtion sucessfull");
    
}else{
    console.log("insufficant balance");
    
}
console.log(`
    USERNMAE:${username}
    ACCOUNTBALANCE:${accountname}
    WITHDRAWAL:${withdrawal}`);

