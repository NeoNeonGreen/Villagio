new Swiper('.news-slider' ,{
    navigation: {
        nextEl: '.photo-btn-next',
        prevEl: '.photo-btn-prev'
    },

   pagination: {
        el: '.photo-pag',

        clickable: true,
    },

    breakpoints: {
        100: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1240: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },

});