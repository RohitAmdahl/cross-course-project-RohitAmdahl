
import { productsArray } from "/js/product.js"
console.log(productsArray);

//  const button = document.querySelectorAll(".btn-small")
//  console.log(button);

//   const shoppingCart = document.querySelector("#cart");
//   console.log(shoppingCart);


const itemsWrapper= document.querySelector(".women-section");

 productsArray.forEach(function(product){
  itemsWrapper.innerHTML  +=

   `
      <div class ="cards">
      <div class="products">
      <img src="${product.image}" alt="" class="products">
      </div>
      <div class="price_1">
      <p class="productName">${product.name}</p>
      <p class="cost">${product.price}</p>
      </div>
      <div class="add_to_cart_btn">
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

