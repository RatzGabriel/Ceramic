import data from "./items.js";

function getElement(select) {
  const element = document.querySelector(select);
  if (element) {
    return element;
  } else {
    throw new Error(`Please check ${select} your selection`);
  }
}

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export { getElement, formatPrice, getStorageItem, setStorageItem };
