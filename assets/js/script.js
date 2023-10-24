$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
    $('select').styler();
})

$(document).ready(function () {
    let openMenu = document.getElementsByClassName('open-menu')[0];
    let closeMenu = document.getElementsByClassName('close-menu')[0];
    let headerFix = document.getElementsByClassName('header__fix')[0];

    openMenu.addEventListener('click', function () {
        headerFix.classList.add('header__act');
    });
    closeMenu.addEventListener('click', function () {
        headerFix.classList.remove('header__act');
    });

    if ($('.head-fix__menu ul li').find('submenu')){
        $('.submenu').parent().addClass('submenu__block')
    }
    $('.head-fix__menu>ul>li>a').on('click',function () {
        if (!$('.head-fix__menu>ul>li').hasClass('submenu__active')){
            $(this).parent().addClass('submenu__active');
        }
        else{
            $('.head-fix__menu>ul>li').removeClass('submenu__active')
        }
    });

})










$(document).ready(function () {
    setTimeout(function () {
        $(".animate__style").addClass("in-viewport");
    }, 500);
});




$(window).scroll(function () {
    let $elemAdvantages = $('.location__main');
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();

    let elemTop = $elemAdvantages.offset().top;
    let elemBottom = elemTop + $elemAdvantages.height();

    if (elemTop + $elemAdvantages.height() / 4 <= docViewBottom && docViewBottom  < elemBottom + $elemAdvantages.height()) {
        $elemAdvantages.addClass('location-animation');
    } else {
        $elemAdvantages.removeClass('location-animation');
    }

    let $chooseAnim = $('.choose-anim');
    let $chooseAnimTop = $chooseAnim.offset().top;
    let $chooseAnimBottom = $chooseAnimTop + $chooseAnim.height();

    if ($chooseAnimTop + $chooseAnim.height() / 4 <= docViewBottom && docViewBottom  < $chooseAnimBottom + $chooseAnim.height()) {
        $chooseAnim.addClass('choose-animation');
    } else {
        $chooseAnim.removeClass('choose-animation');
    }

});






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




$('.construct__click strong').on('click', function (e) {
    $(this).parent().toggleClass('construct-click__open');
    e.stopPropagation()
});

$('.construct__det ul li').on('click', function () {
    var text_in = $('.construct__click strong').html();
    let selected_text = $(this).html();
    $('.construct__click strong').html(selected_text);
    $('.construct__click').removeClass('construct-click__open')
});
$(window).on('click', function (e) {
    let menuSort = $('.construct__click');
    if (e.target !== menuSort) {
        menuSort.removeClass('construct-click__open')
    }
});




$('.more-news-info').on('click',function () {
    $(this).addClass('more-news__none')
    $('.news-page__flex').addClass('news-block__act')
})



let queueClose = document.getElementsByClassName('queue-close')[0];
let queueModal = document.getElementsByClassName('queue-modal')[0];

    queueClose.addEventListener('click', function () {
        queueModal.classList.add('queue-modal__close');
    });




function slowScroll (id) {
    var offset = 0;
    $('html, body'). animate({
        scrollTop: $(id).offset ().top - offset
    },1000);
    return false;
};

jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 4000) {
        jQuery('.scrollup').fadeIn('slow');
    } else {
        jQuery('.scrollup').fadeOut('slow');
    }
});
jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 4000);
    return false;
});































let checkboxApartment = document.getElementsByClassName('checkbox-js')[0];

checkboxApartment.addEventListener('change', function () {
    if(checkboxApartment.checked){
        document.getElementsByClassName('design__item')[0].classList.add('remove-photo');
    }else{
        document.getElementsByClassName('design__item')[0].classList.remove('remove-photo');
    }
});
