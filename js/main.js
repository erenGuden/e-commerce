import headerFunc from "./header.js";
import productsFunc from "./products.js";

// add products to localStorage starts

(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc();
})();
// add products to localStorage ends

//add cartItems to localStorage starts

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

//add cartItems to localStorage ends
