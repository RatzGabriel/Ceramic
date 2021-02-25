import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";

const mainStore = function () {
  let cart = getStorageItem("cart");
  let store = getStorageItem("store");
  const featuredDiv = getElement(".allProducts");
  displayItems(featuredDiv, store);
  cart.forEach((element) => {
    addToCartDOM(element);
  });
};

mainStore();
