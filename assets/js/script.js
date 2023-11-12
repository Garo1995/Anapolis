

jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1600) {
        jQuery('.scrollup').fadeIn('slow');
    } else {
        jQuery('.scrollup').fadeOut('slow');
    }
});
jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
});





$('html, body').animate({
    scrollTop: $('body').offset().top
}, 1500);




$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
    $('select').styler();


    $('.open-menu').on('click', function () {
        $('.header__fix').addClass('header__act');
        $('body').addClass('body__fix');
    });
    $('.close-menu').on('click', function () {
        $('.header__fix').removeClass('header__act');
        $('body').removeClass('body__fix');
    });
})



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





$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});


var $animation_element = $('.anim-newSing');
var $window = $(window);
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = ( window_height + window_top_position );
    $.each($animation_element, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_height + element_top_position);
        if((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



$(document).ready(function () {
    setTimeout(function () {
        $(".animate__style").addClass("in-viewport");
        $('.contact__main').addClass("contact__act");
        $('.news-page').addClass("news__act");
        $('.news-single').addClass("news-single__act");
        $('.maintained__main').addClass("maintained__acts");
        $('.animate-brt').addClass("animate-brt__acts");
    }, 500);
});


$(window).scroll(function () {
    let $elemAdvantages = $('.location__main');
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();

    if ($('.locationHasClass').hasClass('location__main')){

        let elemTop = $elemAdvantages.offset().top;
        let elemBottom = elemTop + $elemAdvantages.height();

        if (elemTop + $elemAdvantages.height() / 3 < docViewBottom && docViewBottom < elemBottom + $elemAdvantages.height()) {
            $elemAdvantages.addClass('location-animation');
        } else {
        }

    }

    let $chooseAnim = $('.choose-anim');

    if ($('.chooseHasClass').hasClass('choose-anim')){
        let $chooseAnimTop = $chooseAnim.offset().top;
        let $chooseBottom = $chooseAnimTop + $chooseAnim.height();
        if ($chooseAnimTop + $chooseAnim.height() / 3 < docViewBottom && docViewBottom < $chooseBottom + $chooseAnim.height()) {
            $chooseAnim.addClass('choose-animation');
        } else {
        }
    }



    let $premisesAnim = $('.prem-for-anim');
    if ($('.premises__main').hasClass('prem-for-anim')) {
        let $premisesAnimTop = $premisesAnim.offset().top;
        let $premisesAnimBottom = $premisesAnimTop + $premisesAnim.height();

        if ($premisesAnimTop + $premisesAnim.height() / 2 < docViewBottom && docViewBottom / 6 < $premisesAnimBottom + $premisesAnim.height()) {
            $premisesAnim.addClass('premises-animation');
        } else {
        }
    }

    let $designAnim = $('.design__main');
    if ($('.desingHasClass').hasClass('design__main')){
        let $designAnimTop = $designAnim.offset().top;
        let $designAnimBottom = $designAnimTop + $designAnim.height();

        if ($designAnimTop + $designAnim.height() / 3 < docViewBottom && docViewBottom  < $designAnimBottom + $designAnim.height()) {
            $designAnim.addClass('design-animation');
        } else {
        }
    }


    let $desSerAnim = $('.design-series');
    if ($('.designHasClass').hasClass('design-series')){
        let $desSerAnimTop = $desSerAnim.offset().top;
        let $desSerAnimBottom = $desSerAnimTop + $desSerAnim.height();

        if ($desSerAnimTop + $desSerAnim.height() / 3 < docViewBottom && docViewBottom  < $desSerAnimBottom + $desSerAnim.height()) {
            $desSerAnim.addClass('deser-animation');
        } else {
        }
    }



    let $countlessAnim = $('.countless__padd');
    if ($('.countHasClass').hasClass('countless__padd')) {
        let $countlessTop = $countlessAnim.offset().top;
        let $countlessBottom = $countlessTop + $countlessAnim.height();

        if ($countlessTop + $countlessAnim.height() / 3 < docViewBottom && docViewBottom < $countlessBottom + $countlessAnim.height()) {
            $countlessAnim.addClass('infrast-sec-animation');
        } else {
        }
    }


    let $invesTmentsAnim = $('.inves-an');

    if ($('.investments__main').hasClass('inves-an')){
        let $invesTmentsTop = $invesTmentsAnim.offset().top;
        let $invesTmentsBottom = $invesTmentsTop + $invesTmentsAnim.height();

        if ($invesTmentsTop + $invesTmentsAnim.height() / 3 < docViewBottom && docViewBottom  < $invesTmentsBottom + $invesTmentsAnim.height() ) {
            $invesTmentsAnim.addClass('investments___active');
        } else {
        }
    }







    let $latestAwardsAnim = $('.latest-awards-sec');

    if ($('.latestHasClass').hasClass('latest-awards-sec')){
        let $latestAwardsTop = $latestAwardsAnim.offset().top;
        let $latestAwardsBottom = $latestAwardsTop + $latestAwardsAnim.height();

        if ($latestAwardsTop + $latestAwardsAnim.height() / 2 < docViewBottom && docViewBottom  < $latestAwardsBottom + $latestAwardsAnim.height() / 2) {
            $latestAwardsAnim.addClass('latest-awards__act');
        } else {
        }
    }





    let $developerAnim = $('.developer__main');

    if ($('.developerHasClass').hasClass('developer__main')){

        let $developerTop = $developerAnim.offset().top;
        let $developerBottom = $developerTop + $developerAnim.height();

        if ($developerTop + $developerAnim.height() / 3 < docViewBottom && docViewBottom  < $developerBottom + $developerAnim.height() / 2 ) {
            $developerAnim.addClass('developer__act');
        } else {
        }
    }


    let $devTowAnim = $('.devTowAnim');

    if ($('.devTowHasClass').hasClass('devTowAnim')){

        let $devTowTop = $devTowAnim.offset().top;
        let $devTowBottom = $devTowTop + $devTowAnim.height();

        if ($devTowTop + $devTowAnim.height() / 3 < docViewBottom && docViewBottom  < $devTowBottom + $devTowAnim.height() / 2 ) {
            $devTowAnim.addClass('developer__act');
        } else {
        }
    }


    let $perspecAnim = $('.perspective__anim');

    if ($('.perspectiveHasClass').hasClass('perspective__anim')){

        let $perspecTop = $perspecAnim.offset().top;
        let $perspecBottom = $perspecTop + $perspecAnim.height();

        if ($perspecTop + $perspecAnim.height() / 3 < docViewBottom && docViewBottom  < $perspecBottom + $perspecAnim.height() / 2 ) {
            $perspecAnim.addClass('perspective__act');
        } else {
        }
    }

    let $architeAnim = $('.architectural__main');

    if ($('.architecHasClass').hasClass('architectural__main')){

        let $architeTop = $architeAnim.offset().top;
        let $architeBottom = $architeTop + $architeAnim.height();

        if ($architeTop + $architeAnim.height() / 3 < docViewBottom && docViewBottom  < $architeBottom + $architeAnim.height() ) {
            $architeAnim.addClass('architec__act');
        } else {
        }
    }



    let $buildingsAnim = $('.buildings__sec');

    if ($('.buildingsHasClass').hasClass('buildings__sec')){

        let $buildingsTop = $buildingsAnim.offset().top;
        let $buildingsBottom = $buildingsTop + $buildingsAnim.height();

        if ($buildingsTop + $buildingsAnim.height() / 2 < docViewBottom && docViewBottom  < $buildingsBottom + $buildingsAnim.height() / 2 ) {
            $buildingsAnim.addClass('buildings__act');
        } else {
        }
    }

    let $communicAnim = $('.communications__main');

    if ($('.communicHasClass').hasClass('communications__main')){

        let $communicTop = $communicAnim.offset().top;
        let $communicBottom = $communicTop + $communicAnim.height();

        if ($communicTop + $communicAnim.height() / 2 < docViewBottom && docViewBottom  < $communicBottom + $communicAnim.height() / 2 ) {
            $communicAnim.addClass('communic__act');
        } else {
        }
    }




    let $compAnim = $('.comp__main');

    if ($('.compHasClass').hasClass('comp__main')){

        let $compTop = $compAnim.offset().top;
        let $compBottom = $compTop + $compAnim.height();

        if ($compTop + $compAnim.height()  < docViewBottom && docViewBottom  < $compBottom + $compAnim.height() ) {
            $compAnim.addClass('comp__act');
        } else {
        }
    }






    let $contsecHasAnim = $('.contact__sec');

    if ($('.contsecHasClass').hasClass('contact__sec')){

        let $contsecHasTop = $contsecHasAnim.offset().top;
        let $contsecHasBottom = $contsecHasTop + $contsecHasAnim.height();

        if ($contsecHasTop + $contsecHasAnim.height() / 3 < docViewBottom && docViewBottom  < $contsecHasBottom + $contsecHasAnim.height() ) {
            $contsecHasAnim.addClass('contact__act');
        } else {
        }
    }


    let $documentAnim = $('.document-page');

    if ($('.documentHasClass').hasClass('document-page')){

        let $documentTop = $documentAnim.offset().top;
        let $documentBottom = $documentTop + $documentAnim.height();

        if ($documentTop + $documentAnim.height() / 3 < docViewBottom && docViewBottom  < $documentBottom + $documentAnim.height() / 2 ) {
            $documentAnim.addClass('document__act');
        } else {
        }
    }


    let $productAnim = $('.product-apart');

    if ($('.productHasClass').hasClass('product-apart')){

        let $productTop = $productAnim.offset().top;
        let $productBottom = $productTop + $productAnim.height();


        if ($productTop + $productAnim.height() / 2 < docViewBottom && docViewBottom  < $productBottom + $productAnim.height() / 2 ) {
            $productAnim.addClass('product__act');
        } else {
        }
    }



    let $swimmingAnim = $('.swimming__anim');

    if ($('.swimmingHasClass').hasClass('swimming__anim')){

        let $swimmingTop = $swimmingAnim.offset().top;
        let $swimmingBottom = $swimmingTop + $swimmingAnim.height();

        if ($swimmingTop + $swimmingAnim.height() / 2 < docViewBottom && docViewBottom  < $swimmingBottom + $swimmingAnim.height() ) {
            $swimmingAnim.addClass('swimming__act');
        } else {
        }
    }



    let $acquisitAnim = $('.acquisitions__main');

    if ($('.acquisitionsHasClass').hasClass('acquisitions__main')){
        let $acquisitTop = $acquisitAnim.offset().top;
        let $acquisitBottom = $acquisitTop + $acquisitAnim.height();

        if ($acquisitTop + $acquisitAnim.height() / 3 < docViewBottom && docViewBottom  < $acquisitBottom + $acquisitAnim.height() ) {
            $acquisitAnim.addClass('acquisitions__acts');
        }
    }




});


$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 280,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        autoplay: true,
        fixedContentPos: false
    });
});


$('.queue-close').on('click',function () {
    $(this).parent().addClass('queue-modal__close')
})

$('.click-row-reverse').on('click',function () {
    $(this).parent().addClass('click-reverse__part')
})
$('.click-none-reverse').on('click',function () {
    $(this).parent().removeClass('click-reverse__part')
})



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




let checkboxApartment = document.getElementsByClassName('checkbox-js')[0];
checkboxApartment.addEventListener('change', function () {
    if(checkboxApartment.checked){
        document.getElementsByClassName('add-check__des')[0].classList.add('remove-photo');
    }
    else{
        document.getElementsByClassName('add-check__des')[0].classList.remove('remove-photo');
    }
});

