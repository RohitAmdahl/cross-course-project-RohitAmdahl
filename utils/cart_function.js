export function cartItems() {
  const items = localStorage.getItem("cartProducts");

  if (items === null) {
    return [];
  } else {
    return JSON.parse(items);
  }
}

//------------------------------------------//------------------------------------------------//
