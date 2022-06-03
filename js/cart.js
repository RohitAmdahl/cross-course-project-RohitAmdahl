
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
       //productCartArray.push(event.target.dataset.product);
       const cartProducts = productsArray.find(itemsWrapper => itemsWrapper.id === event.target.dataset.product)
       //console.log(productCartArray);
       productCartArray.push(cartProducts);
       //window.location.href = "/products/products.html"
       CartPage(productCartArray);
   }
})


   function CartPage(cartItems) {
      cartList.style.display = "block";
      cartList.style.color = "red";
      cartList.innerHTML= "";
      // total = 0;
      cartItems.foreach(function(cartElement) {
        cartList.innerHTML += `<div class="classlist">
                             <p>${cartElement.name}<p>
                             <img src="${cartElement.image}" alt="" class="products">
                             </div>  `
       window.location.href = "/products/products.html"
   })

   // totalcost.innerHTML= `Total: ${total}`;
}

