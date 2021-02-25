import { getElement, formatPrice, getStorageItem } from "./utils.js";
import addToCart from "./addToCart.js";

const displayItems = function (div, products) {
  const allProducts = div;
  console.log("wyh", products);
  allProducts.innerHTML = products
    .map((item) => {
      return `<article class="product">
        <div class="product-container">
          
      <a href="singleProduct.html?id=${item.id}" class="product-icon">
      <img src="${item.src}" class="product-img img" alt="${item.title}" />    
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
      addToCart(element.dataset.id);
    });
  });
};

export default displayItems;
