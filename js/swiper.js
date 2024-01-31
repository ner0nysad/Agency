const swiperTeam = new Swiper(".team__swiper", {
  loop: true,

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    740: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    935: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },

  pagination: {
    el: ".team__swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "team__swiper-bullet",
    bulletActiveClass: "team__swiper-bullet-active",
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  },

  navigation: {
    nextEl: ".team__swiper-button-next",
    prevEl: ".team__swiper-button-prev",
  },

  speed: 700,
});

const swiperReviews = new Swiper(".reviews__swiper", {
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  centeredSlides: true,

  pagination: {
    el: ".reviews__swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "reviews__swiper-bullet",
    bulletActiveClass: "reviews__swiper-bullet-active",
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  },

  speed: 700,
});
