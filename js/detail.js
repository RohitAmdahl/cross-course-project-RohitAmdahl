
//  import {productCartArray} from "./js/product.js";
//  console.log(productCartArray);

const details = document.querySelector("#datalist")
console.log(details);
const productInfo  = document.querySelector(".card_details")
console.log(productInfo);
 const counting = document.getElementById("numberCount")
 console.log(counting);
const plus = document.querySelector("#plus")
console.log(plus);

const minus = document.querySelector("#minus")
console.log(minus);
const cart = document.querySelector("#cart")
console.log(cart);
// const url =  product.html?id=123;





const url = `http://127.0.0.1:5501/products/products.html?id=123`
console.log(url);
const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

 