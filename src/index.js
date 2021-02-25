import {
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
} from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";
let cart = getStorageItem("cart");
let store = getStorageItem("store");

const main = function () {
  console.log(data);
  setupStore(data);
  let cart = getStorageItem("cart");
  let store = getStorageItem("store");
  const featured = store.filter((product) => product.featured === true);
  const featuredDiv = getElement(".featured-center");
  displayItems(featuredDiv, featured);
  cart.forEach((element) => {
    console.log("allproductsCart", cart);
    console.log("ele", element);
    addToCartDOM(element);
  });
  setStorageItem("cart", cart);
};

main();
