import { getElement, formatPrice, getStorageItem } from "./utils.js";
import data from "./items.js";
import displayItems from "./displayItems.js";
import setupStore from "./setupStore.js";
import "./toggle.js";
import addToCartDOM from "./addToCartDOM.js";
import addToCart from "./addToCart.js";

let cart = getStorageItem("cart");
let store = getStorageItem("store");

cart.forEach((element) => {
  addToCartDOM(element);
});

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  console.log(urlID);
  const regEx = /[0-9]+/;
  let newUrl = urlID.match(regEx).toString();
  for (let i = 0; i < store.length; i++) {
    if (store[i].id == newUrl) {
      const title = getElement(".singleProduct-title");
      const image = getElement(".singleProduct-image");
      const price = getElement(".singleProduct-price");
      const button = getElement(".product-cart-btn");
      title.innerText = store[i].title;
      image.src = store[i].src;
      price.innerText = formatPrice(store[i].price);
      button.dataset.id = store[i].id;
      console.log(button);
      const test = document.querySelectorAll("#tes");
      test.forEach((element) => {
        element.addEventListener("click", function () {
          addToCart(element.dataset.id);
        });
      });
    }
  }
});

//   window.addEventListener('DOMContentLoaded', async function () {
//     const urlID = window.location.search;

//     try {
//       const response = await fetch(`${singleProductUrl}${urlID}`);
//       if (response.status >= 200 && response.status <= 299) {
//         const product = await response.json();
//         // grab data
//         const { id, fields } = product;
//         productID = id;

//         const { name, company, price, colors, description } = fields;
//         const image = fields.image[0].thumbnails.large.url;
//         // set values

//         document.title = `${name.toUpperCase()} | Comfy`;
//         pageTitleDOM.textContent = `Home / ${name}`;
//         imgDOM.src = image;
//         titleDOM.textContent = name;
//         companyDOM.textContent = `by ${company}`;
//         priceDOM.textContent = formatPrice(price);
//         descDOM.textContent = description;
//         colors.forEach((color) => {
//           const span = document.createElement('span');
//           span.classList.add('product-color');
//           span.style.backgroundColor = `${color}`;
//           colorsDOM.appendChild(span);
//         });
//       } else {
//         console.log(response.status, response.statusText);
//         centerDOM.innerHTML = `
//       <div>
//       <h3 class="error">sorry, something went wrong</h3>
//       <a href="index.html" class="btn">back home</a>
//       </div>
//        `;
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     loading.style.display = 'none';
//   });

//   cartBtn.addEventListener('click', function () {
//     addToCart(productID);
//   });
