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

new Swiper('.house-slider' ,{
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
            slidesPerView: 1,
            spaceBetween: 24,
        },

        1240: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },

});

new Swiper('.info-slider' ,{
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
            slidesPerView: 1,
            spaceBetween: 10,
        },

        350: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        1240: {
            slidesPerView: 6,
            spaceBetween: 16,
        }
    },

});