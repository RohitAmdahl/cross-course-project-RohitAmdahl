
import { productsArray } from "/js/product.js"
console.log(productsArray);

const itemsWrapper= document.querySelector(".women-section");

const cart = document.querySelector("#cart");
const cartList = document.querySelector(".classlist");
console.log(cart);
console.log(cartList);



let productCartArray = [];

 productsArray.forEach(function(product){
   itemsWrapper.innerHTML  +=

   `
      <div class ="cards">
         <div class="products">
         <img src="${product.image}" alt="" class="products">
         </div>
         <div class="price-1">
         <p class="productName">${product.name}</p>
         <p class="cost">${product.price}</p>
         </div>
         <div class="add-to-cart-btn">
         <button class="btn-small" data-product = ${product.id}>Add to cart</button>
         </div>
      </div>
   
`
 })

 const button = document.querySelectorAll(".add-to-cart-btn")
 console.log(button);

 

button.forEach(function(button) {
   button.onclick = function(event) {
      console.log(event.target.dataset.product);
       const cartProducts = productsArray.find(itemsWrapper => itemsWrapper.id === event.target.dataset.product)
       productCartArray.push(cartProducts);
       CartPage(productCartArray);
       localStorage.setItem("cartlist", JSON.stringify(productCartArray));
   }
})

const addToCart = JSON.parse(localStorage.getItem(".cartList"))
console.log(addToCart);

   function CartPage(cartItems) {
      cartList.style.display = "block";
      cartList.style.color = "red";
      cartList.innerHTML= "";
      cartItems.forEach(function(cartElement) {
        cartList.innerHTML += `<div class="classlist">
                             <p>${cartElement.id}<p>
                             </div>  `
      
   })

  
}

