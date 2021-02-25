import {
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
} from "./utils.js";

let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    const { id, featured, name, price, src, title, src2, src3, src4 } = product;
    return { id, featured, name, price, src, title, src2, src3, src4 };
  });
  setStorageItem("store", store);
};

export default setupStore;
