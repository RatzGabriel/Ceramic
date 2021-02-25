import { getElement, formatPrice, getStorageItem } from "./utils.js";
const cartItemsDOM = getElement(".cart-items");
const addToCartDOM = function ({ id, title, price, src, amount }) {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
  article.innerHTML = `
  <div class="left-cart-item">
  <h4 class="cart-item-name">${title}</h4>
    <img src="${src}"
              class="cart-item-img"
              alt="${title}"
            />  
            <p class="cart-item-price">${formatPrice(price)}</p>
            <button class="cart-item-remove-btn" data-id="${id}">remove</button>
            </div>
            <div>
              
            </div>
          
            <div>
              <button class="cart-item-increase-btn" data-id="${id}">
                <i data-id="${id}" class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease-btn" data-id="${id}">
                <i data-id="${id}" class="fas fa-chevron-down"></i>
              </button>
            </div>
  `;
  cartItemsDOM.appendChild(article);
  function displayCartTotal() {
    const cartTotalDOM = getElement(".cart-total");
    let cart = getStorageItem("cart");
    let total = cart.reduce((total, cartItem) => {
      return (total += cartItem.price * cartItem.amount);
    }, 0);
    cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
  }
  displayCartTotal();
};

export default addToCartDOM;
