// import { productsArray } from "/js/product.js" 

import {productCartArray} from "/js/product.js";
console.log(productCartArray);


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
