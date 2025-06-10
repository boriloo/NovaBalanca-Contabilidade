
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

//switch animation
const beforePrice1 = document.querySelector("#beforePrice1");
const afterPrice1 = document.querySelector("#afterPrice1");
const beforePrice2 = document.querySelector("#beforePrice2");
const afterPrice2 = document.querySelector("#afterPrice2");
const beforePrice3 = document.querySelector("#beforePrice3");
const afterPrice3 = document.querySelector("#afterPrice3");

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("selected-tab"));
    tab.classList.add("selected-tab");
    if (tab === tabs[0]) {
      beforePrice1.innerHTML = "A partir de <span>R$200,00</span>";
      afterPrice1.innerHTML = "R$100,00<span>/mês</span>";
      beforePrice2.innerHTML = "De <span>R$300,00</span>";
      afterPrice2.innerHTML = "R$200,00<span>/mês</span>";
      beforePrice3.innerHTML = "De <span>R$400,00</span>";
      afterPrice3.innerHTML = "R$300,00<span>/mês</span>";
    } else {
      beforePrice1.innerHTML = "A partir de <span>R$300,00</span>";
      afterPrice1.innerHTML = "R$200,00<span>/mês</span>";
      beforePrice2.innerHTML = "De <span>R$400,00</span>";
      afterPrice2.innerHTML = "R$300,00<span>/mês</span>";
      beforePrice3.innerHTML = "De <span>R$500,00</span>";
      afterPrice3.innerHTML = "R$400,00<span>/mês</span>";
    }
  });
});

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    fluidSpeed: 200,
    startPosition: 0,
    loop: false,
    margin: 5,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      950: {
        items: 3
      },
      1300: {
        items: 4
      },
      1600: {
        items: 5
      }
    }
  });
  $(".owl-two").owlCarousel({
    startPosition: 0,
    loop: false,
    margin: 5,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1500: {
        items: 3,
      },
    },
  });
  $(".owl-three").owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
