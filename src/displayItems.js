import { getElement, formatPrice, getStorageItem } from "./utils.js";
import addToCart from "./addToCart";

const displayItems = function (div, products) {
  const allProducts = div;
  allProducts.innerHTML = products
    .map((item) => {
      return `<article class="product">
        <div class="product-container">
          <img src="${item.src}" class="product-img img" alt="${
        item.title
      }" />       
          <div class="product-icons">           
            <button id="tes" class="product-cart-btn product-icon" data-id="${
              item.id
            }">
              Shop now
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${item.title}</p>
          <h4 class="product-price">${formatPrice(item.price)}</h4>
        </footer>
      </article> `;
    })
    .join("");
  const test = document.querySelectorAll("#tes");
  test.forEach((element) => {
    element.addEventListener("click", function () {
      addToCart(element.dataset.id);
    });
  });
};

export default displayItems;
