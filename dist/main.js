(()=>{"use strict";const t=[{title:"pic1",src:"./dist/images/1.jpg",src2:"./dist/images/2.jpg",src3:"./dist/images/3.jpg",src4:"./dist/images/4.jpg",price:"999",featured:!1,id:1},{title:"pic2",src:"./dist/images/2.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:2},{title:"pic3",src:"./dist/images/3.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:3},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!0,id:4},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:5},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:6},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:7},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:8},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:9},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:10},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:11},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:12},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:13},{title:"pic4",src:"./dist/images/4.jpg",src2:"./dist/images/2.jpg",price:"999",featured:!1,id:14}];function e(t){const e=document.querySelector(t);if(e)return e;throw new Error(`Please check ${t} your selection`)}const i=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format((t/100).toFixed(2)),c=t=>{let e=localStorage.getItem(t);return e=e?JSON.parse(localStorage.getItem(t)):[],e},r=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},s=e(".cart-items"),a=function({id:t,title:r,price:a,src:n,amount:o}){const d=document.createElement("article");d.classList.add("cart-item"),d.setAttribute("data-id",t),d.innerHTML=`\n  <div class="left-cart-item">\n  <h4 class="cart-item-name">${r}</h4>\n    <img src="${n}"\n              class="cart-item-img"\n              alt="${r}"\n            />  \n            <p class="cart-item-price">${i(a)}</p>\n            <button class="cart-item-remove-btn" data-id="${t}">remove</button>\n            </div>\n            <div>\n              \n            </div>\n          \n            <div>\n              <button class="cart-item-increase-btn" data-id="${t}">\n                <i data-id="${t}" class="fas fa-chevron-up"></i>\n              </button>\n              <p class="cart-item-amount" data-id="${t}">${o}</p>\n              <button class="cart-item-decrease-btn" data-id="${t}">\n                <i data-id="${t}" class="fas fa-chevron-down"></i>\n              </button>\n            </div>\n  `,s.appendChild(d),function(){const t=e(".cart-total");let r=c("cart").reduce(((t,e)=>t+e.price*e.amount),0);t.textContent=`Total : ${i(r)} `}()},n=e(".cart-overlay"),o=e(".cart-close"),d=e(".cartButton"),l=e(".hamburgerButton"),m=e(".sidebar-container");l.addEventListener("click",(function(){m.classList.toggle("show")})),d.addEventListener("click",(()=>{console.log("test"),n.classList.add("show")})),o.addEventListener("click",(()=>{n.classList.remove("show")}));const g=e(".darkModeBtn");g.addEventListener("click",(function(){e(".hero-container").classList.toggle("dark"),g.classList.toggle("on"),console.log(g.innerText),"Dark Mode"==g.innerText?g.innerText="Normal Mode":"Normal Mode"==g.innerText&&(g.innerText="Dark Mode")})),e(".cart-item-count");const u=e(".cart-items");function p(){const t=e(".cart-total");let r=c("cart").reduce(((t,e)=>t+e.price*e.amount),0);t.textContent=`Total : ${i(r)} `}function f(){let t=c("cart");const i=e(".cart-item-count"),r=t.reduce(((t,e)=>t+e.amount),0);i.textContent=r}e(".cart-total"),u.addEventListener("click",(function(t){const e=t.target.dataset.id;if(t.target.classList.contains("cart-item-remove-btn")){let t=document.querySelectorAll(".cart-item");t=[...t],t.forEach((t=>{if(t.dataset.id==e){let i=c("cart");for(let t=0;t<i.length;t++)i[t].id==e&&(i.splice(t,1),r("cart",i));t.remove()}}))}if(t.target.classList.contains("cart-item-increase-btn")||t.target.classList.contains("fa-chevron-up")){let t=document.querySelectorAll(".cart-item-amount");t=[...t],t.forEach((t=>{let i=c("cart");if(t.dataset.id==e){for(let c=0;c<i.length;c++)i[c].id==e&&(i[c].amount=i[c].amount+1,t.textContent=i[c].amount,console.log("cart+++",i));r("cart",i)}}))}if(t.target.classList.contains("cart-item-decrease-btn")||t.target.classList.contains("fa-chevron-down")){let t=document.querySelectorAll(".cart-item-amount");t=[...t],t.forEach((t=>{let i=c("cart");if(t.dataset.id==e){for(let c=0;c<i.length;c++)i[c].id==e&&(console.log("cartIII",i[c]),console.log("???",i[c].amount),console.log("cart+++",i),i[c].amount-1==0?(console.log("cart",i),console.log("i",c),i.splice(c,1),console.log("after",i),r("cart",i),t.parentElement.parentElement.remove()):(i[c].amount=i[c].amount-1,t.textContent=i[c].amount));r("cart",i)}}))}p(),f()}));const j=function(t,s){t.innerHTML=s.map((t=>`<article class="product">\n        <div class="product-container">\n          \n      <a href="singleProduct.html?${t.id} class="product-icon" >\n      <img src="${t.src}" class="product-img img" data-id="${t.id}" alt="${t.title}" />    \n    </a>\n    \n          <div class="product-icons">           \n            <button id="tes" class="product-cart-btn product-icon" data-id="${t.id}">\n              Add to Cart\n            </button>\n          </div>\n        </div>\n        <footer>\n          <p class="product-name">${t.title}</p>\n          <h4 class="product-price">${i(t.price)}</h4>\n        </footer>\n      </article> `)).join(""),document.querySelectorAll("#tes").forEach((t=>{t.addEventListener("click",(function(){console.log("cartElement",t),(t=>{e(".cart-overlay").classList.add("show");let i=c("cart"),s=c("store"),n=i.find((e=>e.id==t));if(console.log("cart",i,"item",n),!n){let e=s.find((e=>e.id==t));console.log("first",e),e={...e,amount:1},i.push(e),console.log("pp",e,"newCart",i),a(e),r("cart",i)}p(),f()})(t.dataset.id)}))}));const n=document.querySelectorAll(".product-img");n.forEach((t=>{t.addEventListener("mouseover",(function(){let e=c("store").find((e=>e.id==parseInt(t.dataset.id)));t.src=e.src2}))})),n.forEach((t=>{t.addEventListener("mouseout",(function(){let e=c("store").find((e=>e.id==parseInt(t.dataset.id)));t.src=e.src}))}))};let v=c("store");c("cart"),c("store"),function(){v=t.map((t=>{const{id:e,featured:i,name:c,price:r,src:s,title:a,src2:n,src3:o,src4:d}=t;return{id:e,featured:i,name:c,price:r,src:s,title:a,src2:n,src3:o,src4:d}})),r("store",v);let i=c("cart");const s=c("store").filter((t=>!0===t.featured)),n=e(".featured-center");j(n,s),i.forEach((t=>{a(t)})),r("cart",i)}()})();