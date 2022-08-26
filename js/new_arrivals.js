const url = "https://www.rkamdahl.no/wp-json/wc/store/products?category=23";
const  products = document.querySelector(".women-section");

async function getProductCategory(url){
const response = await fetch(url);
  const results =  await response.json();
  console.log(results);
    products.innerHTML = "";
  results.forEach(function(product){
   products.innerHTML  +=    ` <div class ="cards">
                                <div class="products">
                                <a href="/products/products.html?id=${product.id}">
                                <img src="${product.images[0].src}" alt="product pictures" class="products"> 
                                </div>
                                <div class="price-1">
                                <p class="productName">${product.name}</p>
                                <p class="cost">${product.prices.price} ${product.prices.currency_symbol}</p>
                                </div>
                                <div class="view_product">
                                <button class="btn-small" data-product = ${product.id}>View products</button>
                                </div>
                                </a>
                                <div class="add-to-cart-btn">
                                <button class="btn-small" data-product = ${product.id}>Add to cart</button>
                                </div>
                               </div>    
                             `
  })
  
} 
  


getProductCategory(url)
