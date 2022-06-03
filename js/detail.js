// import { productsArray } from "/js/product.js" 

import {productCartArray} from "/js/product.js";
console.log(productCartArray);

// const url =  product.html?id=123;

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

