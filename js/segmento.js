

const label = document.querySelectorAll(".label");
const desc = document.querySelectorAll(".desc");

label.forEach((label) => {
  label.addEventListener("click", () => {
    label.classList.toggle("down");
    label.lastElementChild.classList.toggle("shown");
    label.lastElementChild.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});


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
    menu.style.backgroundImage = "url(assets/cancelar.png)"
  } else {
    hamContent.style.maxHeight = "";
    menu.style.backgroundImage = '';
  }
});

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    fluidSpeed: 200,
    startPosition: 0,
    loop: true,
    margin: 5,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      850: {
        items: 3
      },
      1100: {
        items: 4
      },
      1500: {
        items: 5
      }
    }
  });
});