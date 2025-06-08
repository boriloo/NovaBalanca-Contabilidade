

//navbar sumindo
let hamOpen = false;

const navTop = document.querySelector(".nav-top");

let ultimoScroll = 0;

window.addEventListener("scroll", () => {
  let scrollAtual = window.pageYOffset;
  if (scrollAtual > ultimoScroll) {
    navTop.style.transform = "translateY(-500px)";
    hamContent.style.maxHeight = "";
    menu.style.backgroundImage = '';
    hamOpen = false;
    ultimoScroll = scrollAtual;
  } else {
    navTop.style.transform = "";
    ultimoScroll = scrollAtual;
  }
});

//hamburguer
const menu = document.querySelector(".menu");
const hamContent = document.querySelector(".ham-content");

menu.addEventListener("click", () => {
  hamOpen = !hamOpen;
  if (hamOpen) {
    hamContent.style.maxHeight = "500px";
    menu.style.backgroundImage =  "url(assets/cancelar.png)"
  } else {
    hamContent.style.maxHeight = "";
    menu.style.backgroundImage = '';
  }
});