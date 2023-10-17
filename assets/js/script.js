$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
    $('select').styler();
})

$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 280,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

if ($('.head-fix__menu ul li').find('submenu')){
    $('.submenu').parent().addClass('submenu__block')
}

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
        },

        '300': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 50,


        },
        '300': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 50,


        },
    },
});



let openMenu = document.getElementsByClassName('open-menu')[0];
let closeMenu = document.getElementsByClassName('close-menu')[0];
let headerFix = document.getElementsByClassName('header__fix')[0];

openMenu.addEventListener('click', function () {
    headerFix.classList.add('header__act');
});

closeMenu.addEventListener('click', function () {
    headerFix.classList.remove('header__act');
});


let chooseSwiper = new Swiper(".choose-apart__slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: "",
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
        '1200': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});




$(document).ready(function () {
    addActiveClass('choose-apart__href', 'active-href');
    changeCaseBlock(this, 'choose-apart__href', 'choose-apart__info', 'active-href', 'click-reviews');
    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'choose-apart__href', 'active-href')
        changeCaseBlock(this, 'choose-apart__href', 'choose-apart__info', 'active-href', 'click-reviews');
    })


    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }



    addActiveClass('choose-moved__href', 'active-moved');
    changeCaseBlock(this, 'choose-moved__href', 'choose-moved__info', 'active-moved', 'click-moved');
    $('.click-moved').on('click', function () {
        changeActiveClassWithClick(this, 'choose-moved__href', 'active-moved')
        changeCaseBlock(this, 'choose-moved__href', 'choose-moved__info', 'active-moved', 'click-moved');
    })


    addActiveClass('infrastructure__cnt', 'active-infrast');
    changeCaseBlock(this, 'infrastructure__cnt', 'infrastructure__info', 'active-infrast', 'click-infrast');
    $('.click-infrast').on('click', function () {
        changeActiveClassWithClick(this, 'infrastructure__cnt', 'active-infrast')
        changeCaseBlock(this, 'infrastructure__cnt', 'infrastructure__info', 'active-infrast', 'click-infrast');
    })

});









let checkboxApartment = document.getElementsByClassName('checkbox-js')[0];
checkboxApartment.addEventListener('change', function () {
    console.log(checkboxApartment.checked)
    if(checkboxApartment.checked){
        document.getElementsByClassName('design__item')[0].classList.add('remove-photo')

    }else{
        document.getElementsByClassName('design__item')[0].classList.remove('remove-photo')
    }
})






let queueClose = document.getElementsByClassName('queue-close')[0];
let queueModal = document.getElementsByClassName('queue-modal')[0];

    queueClose.addEventListener('click', function () {
        queueModal.classList.add('queue-modal__close');
    });









