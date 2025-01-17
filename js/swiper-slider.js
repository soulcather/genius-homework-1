const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  slidesPerGroup: 1,
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
