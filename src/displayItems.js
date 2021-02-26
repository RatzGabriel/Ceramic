import { getElement, formatPrice, getStorageItem } from "./utils.js";
import addToCart from "./addToCart.js";

const displayItems = function (div, products) {
  const allProducts = div;
  allProducts.innerHTML = products
    .map((item) => {
      return `<article class="product">
        <div class="product-container">
          
      <a href="singleProduct.html?${item.id} class="product-icon" >
      <img src="${item.src}" class="product-img img" data-id="${
        item.id
      }" alt="${item.title}" />    
    </a>
    
          <div class="product-icons">           
            <button id="tes" class="product-cart-btn product-icon" data-id="${
              item.id
            }">
              Add to Cart
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
      console.log("cartElement", element);
      addToCart(element.dataset.id);
    });
  });
  const productImg = document.querySelectorAll(".product-img");
  productImg.forEach((element) => {
    element.addEventListener("mouseover", function () {
      let store = getStorageItem("store");
      let newItem = store.find((item) => {
        return item.id == parseInt(element.dataset.id);
      });
      element.src = newItem.src2;
    });
  });
  productImg.forEach((element) => {
    element.addEventListener("mouseout", function () {
      let store = getStorageItem("store");
      let newItem = store.find((item) => {
        return item.id == parseInt(element.dataset.id);
      });
      element.src = newItem.src;
    });
  });
};

export default displayItems;
