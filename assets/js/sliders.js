
let territorySwiper = new Swiper(".territory__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".territory-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".territory-swiper-next",
        prevEl: ".territory-swiper-prev",
    },

});


let chooseSwiper = new Swiper(".choose-apart__slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".choose-pag",
    },
    navigation: {
        nextEl: ".choose-swiper-next",
        prevEl: ".choose-swiper-prev",
    },
});


let designSwiper = new Swiper(".design__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".design-swiper-next",
        prevEl: ".design-swiper-prev",
    },
});


let purchaseSwiper = new Swiper(".purchase__slider", {
    slidesPerView: 4,
    spaceBetween: 34,
    loop: true,
    navigation: {
        nextEl: ".purchase-swiper-next",
        prevEl: ".purchase-swiper-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});






let metersSwiper = new Swiper(".meters-sea__slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".meters-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".meters-swiper-next",
        prevEl: ".meters-swiper-prev",
    },

});







let locationSwiper = new Swiper(".location__slider", {
    slidesPerView: 4,
    spaceBetween: 105,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 4000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    pagination: {
        el: ".location-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".loc-swiper-next",
        prevEl: ".loc-swiper-prev",
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
    breakpoints: {
        '1499': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 50,
            grabCursor: false,
            mousewheelControl: false,
            keyboardControl: false,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 25,
            grabCursor: false,
            mousewheelControl: false,
            keyboardControl: false,

        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 25,
            grabCursor: false,
            mousewheelControl: false,
            keyboardControl: false,

        },
        '480': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

