const linkCards = document.getElementById("detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const linkUrl = `https://www.rkamdahl.no/wp-json/wc/store/products/${id}`;

console.log(linkUrl);
async function fetchProductsID(){
  const response = await fetch(linkUrl);
  const productsJacket = await response.json();
  console.log(productsJacket);

  document.querySelector(".items-1").src = productsJacket.images[0].src;
  document.querySelector("h1").innerText = productsJacket.name;
  document.querySelector(".sub-heading").innerHTML = productsJacket.short_description;
  document.getElementById("price-2").innerHTML = productsJacket.prices.price;
  document.querySelector(".details").innerHTML= productsJacket.description;
  document.querySelector(".menswear").innerText= productsJacket.name;

      
}

fetchProductsID()

  const button = document.querySelector(".btn");
  console.log(button);

