const linkCards = document.getElementById("detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const linkUrl = `https://www.rkamdahl.no/wp-json/wc/store/products/${id}`;

console.log(linkUrl);
async function fetchProductsID() {
  try {
    const response = await fetch(linkUrl);
    const productsJacket = await response.json();
    console.log(productsJacket);

    document.querySelector(".items-1").src = productsJacket.images[0].src;
    document.querySelector("h1").innerText = productsJacket.name;
    document.querySelector(".sub-heading").innerHTML =
      productsJacket.short_description;
    document.getElementById("price-2").innerHTML = productsJacket.prices.price;
    document.querySelector(".details").innerHTML = productsJacket.description;
    document.querySelector(".addtocart").dataset.name = productsJacket.name;
    document.querySelector(".addtocart").dataset.id = productsJacket.id;
    document.querySelector(".addtocart").dataset.price =
      productsJacket.prices.price;
    document.querySelector(".addtocart").dataset.image =
      productsJacket.images[0].src;

    const button = document.querySelector(".addtocart");
    console.log(button);
    //---display msg on after add to cart button--------
    const displayMsg = document.querySelector(".display_massage");
    console.log(displayMsg);
    button.onclick = function (event) {
      displayMsg.style.display = "block";
      //--------
      const { name, id, price, image } = event.target.dataset;

      const currentItems = cartItems();

      const productExists = currentItems.find(function (items) {
        return items.id === id;
      });

      if (!productExists) {
        const productCart = { id: id, name: name, price: price, image: image };
        currentItems.push(productCart);
        saveItems(currentItems);
      } else {
        const newItems = currentItems.filter((items) => items.id !== id);
        saveItems(newItems);
      }
    };

    function cartItems() {
      const items = localStorage.getItem("cartProducts");

      if (items === null) {
        return [];
      } else {
        return JSON.parse(items);
      }
    }

    function saveItems(items) {
      // productExists.innerHTML +=`<div>Your product is added to the cart</div>`
      localStorage.setItem("cartProducts", JSON.stringify(items));
    }
  } catch (error) {
    console.log(error);
  }
}

fetchProductsID();
