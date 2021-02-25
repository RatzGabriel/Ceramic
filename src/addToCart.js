import {
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
} from "./utils.js";
import addToCartDOM from "./addToCartDOM.js";
import openCart from "./toggle";

//shopping cart fertig stellen
// all products page
// einzelne product page
//about page
//

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

export const addToCart = (id) => {
  let cart = getStorageItem("cart");
  let store = getStorageItem("store");
  let item = cart.find((cartItem) => cartItem.id == id);
  console.log("cart", cart, "item", item);
  if (!item) {
    let product = store.find((product) => product.id == id);
    console.log("first", product);
    // add item to the the
    product = { ...product, amount: 1 };
    cart.push(product);
    // add item to the DOM;
    console.log("pp", product, "newCart", cart);
    addToCartDOM(product);
    setStorageItem("cart", cart);
  }
  displayCartTotal();
  // add one to the item count
  //   displayCartItemCount();
  //   // set cart in local storage
  //   //more stuff coming up
  //   openCart();
};

const init = function () {
  cartItemsDOM.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("cart-item-remove-btn")) {
      let allCartItems = document.querySelectorAll(".cart-item");
      allCartItems = [...allCartItems];
      allCartItems.forEach((item) => {
        if (item.dataset.id == id) {
          let cart = getStorageItem("cart");
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
              cart.splice(i, 1);
              setStorageItem("cart", cart);
            }
          }
          item.remove();
        }
      });
    }
    // counter 1 up
    if (
      e.target.classList.contains("cart-item-increase-btn") ||
      e.target.classList.contains("fa-chevron-up")
    ) {
      let allCartItems = document.querySelectorAll(".cart-item-amount");
      allCartItems = [...allCartItems];
      allCartItems.forEach((item) => {
        let cart = getStorageItem("cart");

        if (item.dataset.id == id) {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
              cart[i].amount = cart[i].amount + 1;
              item.textContent = cart[i].amount;
              console.log("cart+++", cart);
            }
          }
          setStorageItem("cart", cart);
        }
      });
    }
    // counter 1 down
    if (
      e.target.classList.contains("cart-item-decrease-btn") ||
      e.target.classList.contains("fa-chevron-down")
    ) {
      let allCartItems = document.querySelectorAll(".cart-item-amount");
      allCartItems = [...allCartItems];
      allCartItems.forEach((item) => {
        let cart = getStorageItem("cart");
        if (item.dataset.id == id) {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
              console.log("cartIII", cart[i]);
              console.log("???", cart[i].amount);
              console.log("cart+++", cart);
              //remove after amount is zero
              if (cart[i].amount - 1 == 0) {
                console.log("cart", cart);
                console.log("i", i);
                cart.splice(i, 1);
                console.log("after", cart);
                setStorageItem("cart", cart);
                item.parentElement.parentElement.remove();
              } else {
                cart[i].amount = cart[i].amount - 1;
                item.textContent = cart[i].amount;
              }
            }
          }
          setStorageItem("cart", cart);
        }
      });
    }
    displayCartTotal();
  });
};

function displayCartTotal() {
  const cartTotalDOM = getElement(".cart-total");
  let cart = getStorageItem("cart");
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}

init();

export default addToCart;
