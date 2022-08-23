const url = "https://www.rkamdahl.no/wp-json/wc/store/products";
const  products = document.querySelector(".women-section");

async function getProduct(url){
  const response = await fetch(url);
  const results =  await response.json();
  console.log(results);
  results.forEach(function(product){
   products.innerHTML  +=    ` <div class ="cards">
                               <div class="products">
                               <a href="/products/products.html">
                               <img src="${product.images[0].src}" alt="" class="products"></a> 
                               </div>
                               <div class="price-1">
                               <p class="productName">${product.name}</p>
                               <p class="cost">${product.prices.price}</p>
                               </div>
                               <div class="add-to-cart-btn">
                               <button class="btn-small" data-product = ${product.id}>Add to cart</button>
                               </div>
                               </div>    
                             `
  })

}
getProduct(url);








