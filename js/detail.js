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

  document.querySelector(".items-1").innerHTML = productsJacket.images[0].src;
  document.querySelector("h1").innerText = productsJacket.name;
  document.querySelector(".sub-heading").innerHTML = productsJacket.short_description;
  document.getElementById("price-2").innerHTML = productsJacket.prices.price;
  document.querySelector(".details").innerHTML= productsJacket.description;
  //document.querySelector(".cost").innerText= price;
  document.querySelector(".in-stock").innerText= productsJacket.is_in_stock;
      
}

fetchProductsID()
// async function fetchID(){
//   const response = await fetch(linkUrl);
//   const link = await response.json();
//   console.log(link);

//   linkCards.innerHTML +=  ` <div>
//                             <img src="${link.images[0].src}" alt="" class="items-1">
//                             <h1>${link.id}</h1>
//                             <h2>${link.name}</h2>
//                             <p class="cost">${link.prices.price}</p>
//                             <p class="cost">${link.description}</p>
//                           </div>    
//                         `

// }

// fetchID()
// const cartlist = JSON.parse(localStorage.getItem(".cartList"))
// console.log(cartlist);


