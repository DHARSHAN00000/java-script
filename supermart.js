let productname=prompt("Please select ypur products");
let productprice=prompt("please enter the product price");
let productquanity=prompt("please enter the quamtity");
  let total=productprice*productquanity;
  let finalamount;
  if (total>5000)
  {
    let discount=total*0.10;
    finalamount=total-discount;

    
  }else{
    finalamount=total;
  };
  console.log(`
    PRODUCTNAME :${productname}
    PRODUCTPRICE :${productprice}
    PRODUCTQUANITY : ${productquanity}
    TOTALBILL : ${total}
    FINALAMOUNT: ${finalamount}`)