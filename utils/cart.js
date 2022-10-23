import { cartItems } from "../utils/cart_function.js";

const items = cartItems();

const productContainer = document.querySelector(".women-section");
// console.log(productContainer);

items.forEach((item) => {
  productContainer.innerHTML += `<div class ="cards">
                                <div class="products">
                                  <h2>"${item.name}"</h2>
                                   <img src="${item.image}" alt="item.name" class="products">
                                  </div>
                                  <div class="price-1">
                                   <h3class="cost">Price: "${item.price}"</h3>
                                  </div>
                               </div> `;
});

//------------------------------------------------------//--------------------
