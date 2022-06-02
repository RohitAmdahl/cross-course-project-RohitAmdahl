// import { products } from "/js/product.js";

// const productCards = document.querySelector(".cards");

// products.forEach(function(product){

//   productCards.innerHTML += 
//   `
//   <div class="cards">
//   <div class="products">
//       <img src="${products.image}" alt="${products.description}">
//   </div>
//   <div class="price-1">
//    <p class="productName">${products.name}</p>
//    <p class="cost">${products.price}</p>
//   </div>
//   <div class="add-to-cart-btn" >
//    <button class="btn-small">Add to Cart</button>
//  </div>
// </div>

//   `

// }) 

let productCart = [];

 const button = document.querySelectorAll(".btn-small")
 console.log(button);

//  const shoppingCart = document.querySelector("#cart");
// console.log(shoppingCart);

 const products = document.querySelectorAll(".cards")
 console.log(products);


button.forEach(function (button) {
  button.onclick = function(event) {
    console.log(event.target.dataset);
    productCart.push(event.target.dataset.products);
    const itemsToAddTocart = productCart.find(products => card.id === event.target.dataset.products);
    console.log(itemsToAddTocart);

  }
  
})
  
