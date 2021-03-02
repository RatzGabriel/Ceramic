import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";
import addToCart from "./addToCart.js";

let cart = getStorageItem("cart");
let store = getStorageItem("store");

cart.forEach((element) => {
  addToCartDOM(element);
});
console.log("test");

window.addEventListener("DOMContentLoaded", async function () {
  console.log("test");
  const urlID = window.location.search;

  const regEx = /[0-9]+/;
  let newUrl = urlID.match(regEx).toString();

  for (let i = 0; i < store.length; i++) {
    if (store[i].id == newUrl) {
      const title = getElement(".singleProduct-title");
      const image = getElement(".singleProduct-image");
      const price = getElement(".singleProduct-price");
      const button = getElement(".product-cart-btn");
      const image2 = getElement("#picture2");
      const h1text2 = getElement("#h1text2");
      h1text2.innerText = store[i].title;
      image2.src = store[i].src2;
      title.innerText = store[i].title;
      image.src = store[i].src;
      price.innerText = formatPrice(store[i].price);
      button.dataset.id = store[i].id;
      const test = document.querySelectorAll("#tes");
      test.forEach((element) => {
        element.addEventListener("click", function () {
          addToCart(element.dataset.id);
        });
      });
      image.addEventListener("mouseover", function () {
        image.src = store[i].src2;
      });
      image.addEventListener("mouseout", function () {
        image.src = store[i].src;
      });
    }
  }
});
