let productCart = [];

const cartItems = document.querySelector(".cart-items")
console.log(cartItems);

const priceOFitems = document.querySelector(".total-price");
console.log(priceOFitems);

const products = document.querySelectorAll(".cards")
console.log(products);

 const ShoppingCartHTML= function() {
   
  if (productInCart.length > 0) {

    let result = productCart.map( product =>{
      return `
      
      <p class="empty">Your shopping cart is empty</p> 
      <li class="buyItem">
<img src="images/manacketgreen.png">
<div>
<h5>Products Name</h5>
<h6>$199</h6>
<div>
  <button>-</button>
  <span class="countOfProduct">1</span>
  <button>+</button>
</div>
</div>
</li> -->
                  
      `


    });

    
  }
  else{
    //document.querySelector.(".checkout").classList.add("hidden");
    cartItems.innerHTML = `<p class="empty">Your shopping cart is empty</p> `;
    priceOFitems.innerHTML = "";
  
  
  }


 }



function updateProductInCart(product) {
  for (let i = 0; i < productInCart.length; i++) {
    if (productInCart[i].id === data-id) {
      productInCart[i].count += 1;
      productInCart[i].price = productInCart[i].baseCost * productInCart[i].count;
      return;
    }
    
    
  }
  
  productInCart.push(product)
}



products.forEach(function (products) {
  
  products.addEventListener("click", (card) => {
    if (card.target.classList.contains("addtocart")) {

      const dataID = card.target.dataset.dataID;
      const productName = card.querySelector(".productName").innerHTML;
      console.log(productName);
      const productPrice = card.querySelector(".cost").innerHTML;
      const productImage = card.querySelector("img").src;

      let productCart ={
        name : productName,
        Image: productImage,
        id : dataID,
        count : 1,
        price : +productPrice,
        baseCost : +productPrice
      } 

      updateProductInCart(productInCart);
      ShoppingCartHTML();
    }


  });


});


