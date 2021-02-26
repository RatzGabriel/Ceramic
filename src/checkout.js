import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";

let cart = getStorageItem("cart");
let store = getStorageItem("store");

function test(element) {
  const rightCheckout = getElement(".right-checkout");
  const totalBtn = getElement(".total-btn");
  const item = document.createElement("div");
  item.classList.add("single-item-checkout");

  item.innerHTML = `
    <h3>${element.title}</h3>
    <p>${formatPrice(element.price)}</p>
    <p>Amount: ${element.amount}</p>
  `;

  rightCheckout.appendChild(item);

  const totalAmount = getElement(".total-amount");
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  totalAmount.textContent = `Total : ${formatPrice(total)} `;
}

cart.forEach((element) => {
  console.log("ele", element);
  test(element);
});
