// const mainUrl = "https://www.rkamdahl.no/wp-json/wc/v3/products?consumer_key=ck_946e569b72881be9b01c9ebcbfb9761e36118143&consumer_secret=cs_cd563c29f6ce7fc749515dfe3912ec618804f8b6";


const mainUrl = "https://www.rkamdahl.no/wp-json/wc/store/products";

async function getProduct(url){
  const response = await fetch(url);
  const products =  await response.json();
  console.log(products);
}
getProduct(mainUrl);
/*
  export const productsArray = [

  {
  name: "Rainy, blue",
  description: "rainy day jacket water proof",
  image: "./images/hiking-2.png",
  id: "1",
  price: "950kr,-",
  Total: "Total",
  },

  {
    name: "Viking, green",
    description: "rainy day jacket water proof",
    image: "./images/manacketgreen.png",
    id: "3",
    price: "150kr,-",
    Total: "Total",
  }, 

  {
    name: "Hiking, purple",
    description: "rainy day hiking  jacket water proof purple  ",
    image: "./images/hiking-1.png",
    id: "4",
    price: "190kr,-",
    Total: "Total",
    
  },

  {
    name: "Rainy, pink",
    description: "rainy day pink jacket water proof pink unisex in new look",
    image: "/images/manjacketpink.png",
    id: "5",
    price: "190kr,-",
    Total: "Total",
    
  },

  {
    name: "Rainy, pink",
    description: "rainy day pink jacket water proof unisex new style ",
    image: "/images/manjacketpink.png",
    id: "6",
    price: "150kr,-",
    Total: "Total",
    
  },

  {
    name: "Rainy, navy blue",
    description: "rainy day water proof hiking jacket ",
    image: "/images/hiking.png",
    id: "7",
    price: "195kr,-",
    Total: "Total",
    
  },

  {
    name: "Hiking, purple",
    description: "rainy day green jacket water proof hiking jacket purple ",
    image: "/images/hiking-1.png",
    id: "8",
    price: "150kr,-",
    Total: "Total",
    
  },

  {
    name: "Viking, green ",
    description: "rainy day jacket water proof jacket unisex blue",
    image: "images/womenunisexbluelight.png",
    id: "9",
    price: "190kr,-",
    Total: "Total",
    
  },

  {
    name: "Viking green",
    description: "rainy day green jacket water proof hiking jacket purple ",
    image: "/images/hiking-1.png",
    id: "10",
    price: "50kr,-",
    Total: "Total",
  },

  {
    name: "Viking jacket",
    description: "rainy day green jacket water proof hiking jacket ",
    image: "/images/manacketgreen.png",
    id: "11",
    price: "180kr,-",
    Total: "Total",
    
  },

  {
    name: "Viking pink",
    description: "rainy day pink jacket water proof  ",
    image: "/images/manjacketpink.png",
    id: "12",
    price: "1950kr,-",
    Total: "Total",
    
  },

]
*/




