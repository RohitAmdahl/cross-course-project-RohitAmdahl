

//  import {url} from "./category_men.js";
//  console.log(url);


// const cart = document.querySelector("#cart");
// const cartList = document.querySelector(".classlist");
// console.log(cart);
// console.log(cartList);

// function getBasket() {
//   return JSON.parse(localStorage.getItem("basket"))
// }

// function saveBasket(basketArray) {
//   localStorage.setItem("basket", JSON.stringify(basketArray)); 
// }

// function addToBasket(productId, quantity) {
//   const basket = getBasket();
//   const alreadyInBasket = basket.find(product => product.id === productId);
  
//   if (alreadyInBasket) {
//     alreadyInBasket.quantity + quantity;
//   } else {
//     basket.push({ productId, quantity });
//     saveBasket(basket);
//   }
// }







// buttons.forEach((button) => {
//   button.addEventListener("click", handelClick);

// });

// function handelClick(event){
//   console.log(event);
// }




// const cart = document.querySelector("#cart");
// const cartList = document.querySelector(".classlist");
// console.log(cart);
// console.log(cartList);

// //let url = [];

//  const button = document.querySelectorAll(".add-to-cart-btn")
//  console.log(button);

// button.forEach(function(button) {
//    button.onclick = function(event) {
//       console.log(event.target.dataset.product);
//        const cartProducts = productsArray.find(itemsWrapper => itemsWrapper.id === event.target.dataset.product)
//        productCartArray.push(cartProducts);
//        CartPage(productCartArray);
//        localStorage.setItem("cartlist", JSON.stringify(productCartArray));
//    }
// })


//    function CartPage(cartItems) {
//       cartList.style.display = "block";
//       cartList.style.color = "red";
//       cartList.innerHTML= "";
//       cartItems.forEach(function(cartElement) {
//         cartList.innerHTML += `
//                               <div class="classlist">
//                              <span>${cartElement.id}<span>
//                              <span>${cartElement.name}<span>
//                              </div>  
//                              `
      
//    })

  
// }


