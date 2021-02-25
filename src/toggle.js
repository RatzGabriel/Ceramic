import { getElement } from "./utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".cartButton");
const toggleHamburger = getElement(".hamburgerButton");
const sidebar = getElement(".sidebar-container");

toggleHamburger.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

toggleCartBtn.addEventListener("click", () => {
  console.log("test");
  cartOverlay.classList.add("show");
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

const openCart = () => {
  cartOverlay.classList.add("show");
};

export default { toggleCartBtn, closeCartBtn, openCart, toggleHamburger };
