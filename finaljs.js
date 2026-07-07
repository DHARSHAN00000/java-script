let api = "https://fakestoreapi.com/products";

fetch(api)
//   .then((response) => response.json())
//   .then((products) => {

//     // Display total product count
//     document.getElementById("count")
//     .innerText =
//       "Total Products : " + products.length;

//     console.log("Total Products :", products.length);


// document.getElementById("count")
// .innertext="total products :" +products.length[5];
//  console.log("Total Products :", products.length);

    
// fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
// // to print only products nname
//      let products = document.getElementById("products");


    // data.forEach((item, index) => {
    // //   console.log(`${index + 1}. ${item.title}`);
    // });
   
    
    //      data.forEach((item) => {
    //   let description = item.description;

    //   if (description.length > 100) {
    //     description = description.substring(0, 100) + "...";
    //   }

    //   console.log(description);
    // });




    // let highest = data[0];
    // let lowest=data[0];

//     data.forEach((item) => {
//       if (item.rating.rate > highest.rating.rate) {
//         highest = item;
//       }
//     });

//     console.log("Highest Rated Product:");
//     console.log("Title:", highest.title);
//     console.log("Rating:", highest.rating.rate);
//   });

//   data.forEach((item)=>{
//     if(item.rating.rate< lowest.rating.rate){
//         lowest=item;}
//     }); 
//     console.log("lowest Rated Product:");
//     console.log("Title:", lowest.title);
//     console.log("Rating:", lowest.rating.rate);
//   });

//   let costlier=data[0]
//   data.forEach((item)=>{
//     if(item.price> costlier.price){
//         costlier=item
//   }
//   })
//   console.log("costiert item;")
//   console.log("costlier:", costlier.title);

// });



// let cheap=data[0]
//   data.forEach((item)=>{
//     if(item.price< cheap.price){
//         cheap=item
//   }
//   })
//   console.log("cheap item;")
//   console.log("cheap:", cheap.title);

// });
  
  
    // data.forEach(item => {
    //   products.innerHTML += `<h3>${item.title}</h3>`;
    // });




    // item above 100
// data.find(item=>{
//     if(item.price>100){
//     products.innerHTML +=`<h3>${item.title}</h3>`}

    //item below 100
// })
// data.find((item)=>{
//     if(item.price<100){
//         products.innerHTML +=`<h3>${item.tile}</h3>`
//     }

// })



// data.forEach
    
// ((item)=>{
//     products.innerHTML+=`<h3>${item.title}</h3>
//     <p>category:${item.category}</p>
//     <h4>rating:${item.rating.rate}`
// })

// data.forEach((item)=>{
//     if(item.category===electronics){
//          products.innerHTML+= `<h3>${item.title}</h3>
//          <p>category:${item.category}</p>
//          `
//     }
    

// })




// data.forEach((item)=>{
// if(item.category==="men's clothing"){
//     products.innerHTML+=`<h3>${item.title}</h3>
//     <p>${item.category}</p>`
// }
// })



//    });  



//    data.forEach((item)=>{
// if(item.category==="women's clothing"){
//     products.innerHTML+=`<h3>${item.title}</h3>
//     <p>${item.category}</p>`
// }
// })



// data.forEach(item => {
//     if(item.category==="jewelerys"){
//         products.innerHTML+=`<h3> ${items.title} </h3>
//         <p>${item.category} </p>`
    
        
//     }
    
// })



// for (let i = 0; i < 5; i++) {
//     products.innerHTML += `
//         <h3>${data[i].title}</h3>
//     `;
// }
// for (let i = data.length-5; i < data.length; i++) {
//     products.innerHTML += `
//         <h3>${data[i].title}</h3>
//     `;
// }


  
//    allProducts = data;
//     displayProducts(data);
//   });

// function displayProducts(data) {
//   let products = document.getElementById("products");
//   products.innerHTML = "";

//   data.forEach(item => {
//     products.innerHTML += `<h3>${item.title}</h3>`;
//   });
// }



// function searchProduct() {
//   let text = document.getElementById("search").value.toLowerCase();

//   let result = allProducts.filter(item =>
//     item.title.toLowerCase().includes(text)
//   );

//   displayProducts(result);
// }




//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("API Error");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((item) => {
//       products.innerHTML += `
//         <h3>${item.title}</h3>
//         <p>₹${item.price}</p>
//       `;
//     });
//   })
//   .catch((error) => {
//     products.innerHTML = `
//       <h2>❌ Unable to Load Products</h2>
//       <p>Please try again later.</p>
//     `;
//   });