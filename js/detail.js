const linkCards = document.getElementById("detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const linkUrl = "https://www.rkamdahl.no/wp-json/wc/store/products/? +id";

console.log(linkUrl);

async function fetchID(){
  const response = await fetch(linkUrl);
  const link = await response.json();
  console.log(link);

  linkCards.innerHTML +=  ` <div>
                            <img src="" alt="" class="items-1">
                            <h1>${link.id}</h1>
                            <h2>${link.name}</h2>
                            <p class="cost">${link.price}</p>
                          </div>    
                        `

}

fetchID()
// const cartlist = JSON.parse(localStorage.getItem(".cartList"))
// console.log(cartlist);


