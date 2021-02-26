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

const darkModeBtn = getElement(".darkModeBtn");
darkModeBtn.addEventListener("click", function () {
  const heroContainer = getElement(".hero-container");
  console.log(heroContainer);
  heroContainer.classList.toggle("dark");
});

export default {
  toggleCartBtn,
  closeCartBtn,
  openCart,
  toggleHamburger,
  darkModeBtn,
};
