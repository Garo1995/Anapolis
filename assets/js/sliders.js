
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

    speed: 1500,
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
    speed: 500,
    effect: 'fade',
    navigation: {
        nextEl: ".design-swiper-next",
        prevEl: ".design-swiper-prev",
    },
});


let designSwiperTwo = new Swiper(".design__sliderTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".designTwo-swiper-next",
        prevEl: ".designTwo-swiper-prev",
    },
});
let designSwiperTyhree = new Swiper(".design__sliderThree", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".designThree-swiper-next",
        prevEl: ".designThree-swiper-prev",
    },
});


let constructSwiper = new Swiper(".construct__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".construct-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".construct-swiper-next",
        prevEl: ".construct-swiper-prev",
    },
});
let constructTowSwiper = new Swiper(".constructTow__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".construct-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".construct-swiper-next",
        prevEl: ".construct-swiper-prev",
    },
});
let constructThreeSwiper = new Swiper(".constructThree__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".construct-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".construct-swiper-next",
        prevEl: ".construct-swiper-prev",
    },
});

let constructFourSwiper = new Swiper(".constructFour__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".construct-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".construct-swiper-next",
        prevEl: ".construct-swiper-prev",
    },
});

let constructFiveSwiper = new Swiper(".constructFive__slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".construct-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".construct-swiper-next",
        prevEl: ".construct-swiper-prev",
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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
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
    slidesPerView: 1,
    spaceBetween: 105,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".location-pag",
        type: "fraction",
    },
    navigation: {
        nextEl: ".loc-swiper-next",
        prevEl: ".loc-swiper-prev",
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
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 25,
            grabCursor: false,
            mousewheelControl: false,
            keyboardControl: false,

        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});


























let partnersSwiper = new Swiper(".dev-partners__slider", {
    slidesPerView: 6,
    spaceBetween: 10,

    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 4000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,

    breakpoints: {

        '1500': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },

        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 5,

        },
        '991': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '420': {
            slidesPerView: 2,
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

































var pspath =  $('[data-perc]'),
    zn = 0;

pspath.mousemove(function(e){
    $('.plans-percent').css({'top' : e.pageY, 'left' : e.pageX, 'display': 'block'});
});


pspath.mouseout(function(){
    $('.plans-percent').hide();
    $(this).css({'opacity': 0, 'fill': 'transparent'});
});


pspath.mouseover(function(event){
    var plansInfo = $('.plans-percent');
    plansInfo.css({'top' : 0, 'left' : 0, 'display': 'none'});

    $(this).css({'opacity': .6, 'fill': '#283B80'});

    var circle = Circles.create({
        id: 'circles-1',
        radius: getRadius(),
        width: getWidth(),
        colors: ['transparent', '#283B80'],
        value: $(this).data('percent'),
        maxValue: 100,
        styleText: false,
        text: function(value){return value + '%' + '<span>Готовность</span>';},
    });

    window.onresize = function(e) {
        circle.updateRadius(getRadius());
        circle.updateWidth(getWidth());
    };
    function getRadius() {
        return window.innerWidth / 30;
    }
    function getWidth() {
        return window.innerWidth / 190;
    }

});


var pfree =  $('[data-free]');

pfree.mousemove(function(e){
    var plansInfo = $('.plans-free');
    plansInfo.css({'top' : e.pageY, 'left' : e.pageX, 'display': 'block'});
});

pfree.mouseout(function(){
    var plansInfo = $('.plans-free');
    plansInfo.hide();
    $(this).css({'opacity': 0});
});

pfree.mouseover(function(){
    var counter = 0;

    var plansInfo = $('.plans-free');
    plansInfo.css({'top' : 0, 'left' : 0, 'display': 'none'});

    var el = $(this),
        av = el.data('free');

    /*if (av) {*/
    el.css({'opacity': .6, 'fill': '#283B80'});
    var studiosNum = el.data('studios');
    var oneNum = el.data('one');
    var twoNum = el.data('two');
    var merchantNum = el.data('merchant');

    if (studiosNum <= 0) {
        plansInfo.find('.room_counter-studio').next().hide()
    }
    else {
        plansInfo.find('.room_counter-studio').next().show()

    }
    if (oneNum <= 0) {
        plansInfo.find('.room_counter-one').next().hide()
    }
    else {
        plansInfo.find('.room_counter-one').next().show()

    }
    if (twoNum <= 0) {
        plansInfo.find('.room_counter-two').next().hide()
    }
    else {
        plansInfo.find('.room_counter-twox').next().show()

    }
    if (merchantNum <= 0) {
        plansInfo.find('.room_counter-merchant').next().hide()
    }
    else {
        plansInfo.find('.room_counter-merchant').next().show()

    }

    plansInfo
        .find('.plans-free__head-num').text(av).end()
        .find('.room_counter-studio').text(studiosNum).end()
        .find('.room_counter-one').text(oneNum).end()
        .find('.room_counter-two').text(twoNum).end()
        .find('.room_counter-merchant').text(merchantNum).end()
        .show();
    /*}*/
});

