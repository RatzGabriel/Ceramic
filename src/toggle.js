import { getElement } from "./utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".cartButton");

toggleCartBtn.addEventListener("click", () => {
  console.log("test");
  cartOverlay.classList.add("show");
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
