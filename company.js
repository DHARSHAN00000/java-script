let products=document.getElementById("products");
let search=document.getElementById("search");
let category=document.getElementById("category");
let count=document.getElementById("count");

let allProducts=[];

fetch("https://fakestoreapi.com/products")
.then((response)=>{
    if(!response.ok){
        throw new Error("Error");
    }
    return response.json();
})
.then((data)=>{

    allProducts=data;

    displayProducts(allProducts);

    count.innerHTML=allProducts.length;

    let categories=["all"];

    data.forEach((item)=>{
        if(!categories.includes(item.category)){
            categories.push(item.category);
        }
    });

    categories.forEach((cat)=>{
        category.innerHTML+=`
        <option value="${cat}">${cat}</option>
        `;
    });

})
.catch(()=>{
    products.innerHTML=`
    <h2>❌ Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;
});

function displayProducts(data){

    products.innerHTML="";

    count.innerHTML=data.length;

    data.forEach((item)=>{

        products.innerHTML+=`
        <div class="card">

        <img src="${item.image}">

        <h4>${item.title}</h4>

        <p><b>Category:</b> ${item.category}</p>

        <p><b>Price:</b> ₹${item.price}</p>

        <p><b>Rating:</b> ⭐ ${item.rating.rate}</p>

        <button>Buy Now</button>

        </div>
        `;
    });

}

search.addEventListener("keyup",()=>{

    let value=search.value.toLowerCase();

    let filtered=allProducts.filter((item)=>{
        return item.title.toLowerCase().includes(value);
    });

    if(category.value!="all"){
        filtered=filtered.filter((item)=>{
            return item.category==category.value;
        });
    }

    displayProducts(filtered);

});

category.addEventListener("change",()=>{

    let filtered=allProducts;

    if(category.value!="all"){
        filtered=filtered.filter((item)=>{
            return item.category==category.value;
        });
    }

    let value=search.value.toLowerCase();

    filtered=filtered.filter((item)=>{
        return item.title.toLowerCase().includes(value);
    });

    displayProducts(filtered);

});