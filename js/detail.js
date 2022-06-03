// import { productsArray } from "/js/product.js" 

import {productCartArray} from "/js/product.js";
console.log(productCartArray);

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id);

const product = products.find(product => product.id === id)
console.log(product);