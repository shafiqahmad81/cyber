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

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('svg');

    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  });
});
