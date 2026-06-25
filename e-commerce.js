let products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000}
];

 function calculateTotalBill(cart) {
     let total = 0;
    
    
     for (let product of cart) {
         total = total+product.price;
    }
    
  
     if (total > 5000) {
         let discount = total * 0.10;
         total = total - discount;
         console.log(`A 10% discount of ₹${discount} was applied.`);
     }
    
     return total;
 }

 let finalBill = calculateTotalBill(products);
 console.log(`Total Bill Amount: ₹${finalBill}`);
