(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),n.classList.toggle("is-open")};e.addEventListener("click",s),c.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();
