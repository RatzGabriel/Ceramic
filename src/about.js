import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";

let cart = getStorageItem("cart");
let store = getStorageItem("store");

cart.forEach((element) => {
  console.log("allproductsCart", cart);
  console.log("ele", typeof element);
  addToCartDOM(element);
});
