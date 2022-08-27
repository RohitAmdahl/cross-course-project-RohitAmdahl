//

export const url = "https://www.rkamdahl.no/wp-json/wc/store/products?category=24";
const  products = document.querySelector(".women-section");

async function getProductCategory(url) {
  try {
  const response = await fetch(url);
  const results =  await response.json();
  console.log(results);
  products.innerHTML = "";
  results.forEach(function (product) {
  products.innerHTML += ` <div class ="cards">
                                <div class="products">
                                <a href="/products/products.html?id=${product.id}">
                                <img src="${product.images[0].src}" alt="product pictures" class="products"> 
                                </div>
                                <div class="price-1">
                                <p class="productName">${product.name}</p>
                                <h3class="cost">"${product.prices.price}" "${product.prices.currency_symbol}"</h3>
                                </div>
                                <div class="add-to-cart-btn">
                                <button class="btn-small cart_btn" data-product="${product.id}">View our product</button>
                                </div></a>
                               </div>`;
                             
               
    });
    
  } catch (error) {
    console.log(error);
  }

} 

getProductCategory(url);



  


