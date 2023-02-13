import { thumbsActiveFunction } from "./single-product/thumbsActive.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify("1"));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

// product-title
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;

// product price
const oldPriceDOM = document.querySelector(".old-price");
const newPriceDOM = document.querySelector(".new-price");
newPriceDOM.innerHTML = "$" + findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = "$" + findProduct.price.oldPrice.toFixed(2);

// product gallery

const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = findProduct.img.singleImage;
const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
  <li class="glide__slide">
    <img src=${item} class="img-fluid" />
  </li> `;
});
galleryThumbs.innerHTML = result;

thumbsActiveFunction();

const productThumbs = document.querySelectorAll(
  ".product-thumb .glide__slide img"
);

productThumbs[0].classList.add("active");
