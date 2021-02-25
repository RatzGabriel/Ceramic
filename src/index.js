import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
let cart = getStorageItem("cart");
let store = getStorageItem("store");
const main = function () {
  setupStore(data);
  let cart = getStorageItem("cart");
  let store = getStorageItem("store");
  const featured = store.filter((product) => product.featured === true);
  const featuredDiv = getElement(".featured-center");
  displayItems(featuredDiv, featured);
};

main();
