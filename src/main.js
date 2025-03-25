import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import './style.css';

let closeMenu = document.getElementById("close-menu");
let openMenu = document.getElementById("open-menu");
let mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});


// Browse By Category

const catagory = new Swiper(".mySwiper2", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  pagination: {
    enabled: false,
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});


// sidebar
document.querySelectorAll('.sidebarbtn').forEach(sidebarbtn => {
  sidebarbtn.addEventListener('click', () => {
    const content = sidebarbtn.nextElementSibling;
    const arrow = sidebarbtn.querySelector('svg');

    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  });
});


// by ratting

document.addEventListener("DOMContentLoaded", function () {
  const dropdownSelect = document.getElementById("dropdownSelect");
  const arrowIcon = document.getElementById("arrowIcon");

  // Toggle arrow on focus
  dropdownSelect.addEventListener("click", function () {
    arrowIcon.classList.toggle("rotate-180");
  });

  // Reset arrow when focus is lost
  dropdownSelect.addEventListener("blur", function () {
    arrowIcon.classList.remove("rotate-180");
  });
});
