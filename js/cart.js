
import { productsArray } from "/js/product.js"
console.log(productsArray);

const itemsWrapper= document.querySelector(".women-section");
const cartIcon = document.querySelector("#cart");
console.log(cartIcon);
const price = document.querySelectorAll(".price-2");
console.log(price);



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
       productCartArray.push(event.target.dataset.product);
       const cartProducts = productsArray.find(itemsWrapper => itemsWrapper.id === event.target.dataset.product)
       console.log(productCartArray);
      productCartArray.push(cartProducts);
     window.location.href = "/products/products.html"
   }
})


   function showCartPage(cartItems) {
      cartIcon.style.display="block"
      cartItems.foreach(function(cartElement) {
      price.innerHTML += `        <div class ="cards">
                                    <div class="products">
                                    <img src="${product.image}" alt="" class="products">
                                    </div>
                                    <div class="price-2">
                                    <p class="productName">${product.name}</p>
                                    <p class="cost">${product.price}</p>
                                    </div>
                                    <div class="add-to-cart-btn">
                                    <button class="btn-small" data-product = ${product.id}>Add to cart</button>
                                    </div>
                                  </div>
                               `
   })


}

