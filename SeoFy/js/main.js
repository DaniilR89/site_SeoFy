var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1200:{
            spaceBetween: 30,
            slidesPerView: 3,
        },
        800:{
            spaceBetween: 30,
            slidesPerView: 2,
        },
        0:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});