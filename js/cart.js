
import { productsArray } from "/js/product.js"
console.log(productsArray);

//  const button = document.querySelectorAll(".btn-small")
//  console.log(button);

//   const shoppingCart = document.querySelector("#cart");
//   console.log(shoppingCart);


const items= document.querySelector(".cards");

 productsArray.forEach(function(product){
  items.innerHTML  +=

   `<div class="container">
      <div class ="cards">
      <img src="${product.image}" alt="" class="products">
      <p>${product.name}</p>
      <p>${product.price}</p>
      <button class="btn-small">Add to cart</button>
      </div>
   </div>
`
 })


// let productCart = [];


// button.forEach(function (button) {
//   button.onclick = function(event) {
//     console.log(event.target.dataset);
//     productCart.push(event.target.dataset.products);
//     const itemsToAddToCart = productCart.find(products => products.id === event.target.dataset.products);
//     console.log(itemsToAddToCart);
//     openCart();

//   }
//   function openCart(cartItems){
//     shoppingCart.style.display="block";






//   }
// })

