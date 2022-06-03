
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

 button.onclick

button.forEach(function(button) {
   button.onclick = function(event) {
      //console.log(event.target.dataset.product);
      productCartArray.push(event.target.dataset.product);
      const cartProducts = productsArray.find(itemsWrapper => itemsWrapper.id === event.target.dataset.product)
      console.log(productCartArray);
      productCartArray.push(cartProducts);
     
   }
})


button.onclick = function toDetailsPage() {
   window.location.href = '/products/products.html'
}

   function showCartPage(cartItems) {
      
      cartItems.foreach(function() {
      price.innerHTML += `<h1 class="menswear">Unisex</h1>
                          <h2 class="sub-heading">Universal design winter jackets and water resistant.</h2>
                            <div class="price-2">
                              <p>${product.name}</p>
                              <p>${product.price}</p>
                              </div>
                              <div class="price-2">
                              <p>${product.Total}</p>
                              <p>${product.price}</p>
                              
                               `
   })


}



