// const url = "https://www.rkamdahl.no/wp-json/wc/v3/products?consumer_key=ck_946e569b72881be9b01c9ebcbfb9761e36118143&consumer_secret=cs_cd563c29f6ce7fc749515dfe3912ec618804f8b6";


 const apIUrl = "https://www.rkamdahl.no/wp-json/wc/store/products ";
 const itemsWrapper= document.querySelector(".men-section");

async function getProduct(url){
  const response = await fetch(url);
  const results =  await response.json();
  console.log(results);
  results.forEach(function(product){
   itemsWrapper.innerHTML  +=
                                `  
                                    <div class ="cards">
                                      <div class="products">
                                      <a href="/products/products.html">
                                      <img src="${product.images}" alt="" class="products"></a> 
                                      </div>
                                      <div class="price-1">
                                      <p class="productName">${product.name}</p>
                                      <p class="cost">${product.prices}</p>
                                      </div>
                                      <div class="add-to-cart-btn">
                                      <button class="btn-small" data-product = ${product.id}>Add to cart</button>
                                      </div>
                                    </div> 
                                      
                              `
  })

}
getProduct(apIUrl);








