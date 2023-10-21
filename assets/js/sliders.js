
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


let designSwiperTwo = new Swiper(".design__sliderTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".designTwo-swiper-next",
        prevEl: ".designTwo-swiper-prev",
    },
});
let designSwiperTyhree = new Swiper(".design__sliderThree", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".designThree-swiper-next",
        prevEl: ".designThree-swiper-prev",
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
    breakpoints: {

        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },

        '760': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,

        },
        '480': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },

});


let maintainedSwiper = new Swiper(".maintained__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".scape-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".scape-swiper-next",
        prevEl: ".scape-swiper-prev",
    },

});





let scapeSwiper = new Swiper(".scape__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".scape-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".scape-swiper-next",
        prevEl: ".scape-swiper-prev",
    },
});








let buildTwoSwiper = new Swiper(".buildings__two", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

let buildingsSwiper = new Swiper(".buildings__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".buildings-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".buildings-swiper-next",
        prevEl: ".buildings-swiper-prev",
    },
    thumbs: {
        swiper: buildTwoSwiper,
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

