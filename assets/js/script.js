var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: true,
    fade: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
      breakpoints:{
        0:{
            slidesPerView: 2,
        },
        520:{
            slidesPerView: 4,
        },
        950:{
            slidesPerView: 6,
        },
        1500:{
            slidesPerView: 8,
        },
      },

  })