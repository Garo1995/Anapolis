

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







$(document).ready(function () {
    setTimeout(function () {
        $(".animate__style").addClass("in-viewport");
    }, 500);
});




$(document).ready(function () {
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




        let $premisesAnim = $('.premises__main');
        let $premisesAnimTop = $premisesAnim.offset().top;
        let $premisesAnimBottom = $premisesAnimTop + $premisesAnim.height();

        if ($premisesAnimTop + $premisesAnim.height() / 2 < docViewBottom && docViewBottom / 6 < $premisesAnimBottom + $premisesAnim.height()) {
            $premisesAnim.addClass('premises-animation');
        } else {
            $premisesAnim.removeClass('premises-animation');
        }


        let $designAnim = $('.design__main');
        let $designAnimTop = $designAnim.offset().top;
        let $designAnimBottom = $designAnimTop + $designAnim.height();

        if ($designAnimTop + $designAnim.height() / 4 < docViewBottom && docViewBottom  < $designAnimBottom + $designAnim.height()) {
            $designAnim.addClass('design-animation');
        } else {
            $designAnim.removeClass('design-animation');
        }


        let $desSerAnim = $('.design-series');
        let $desSerAnimTop = $desSerAnim.offset().top;
        let $desSerAnimBottom = $desSerAnimTop + $desSerAnim.height();

        if ($desSerAnimTop + $desSerAnim.height() / 4 < docViewBottom && docViewBottom  < $desSerAnimBottom + $desSerAnim.height() / 4) {
            $desSerAnim.addClass('deser-animation');
        } else {
            $desSerAnim.removeClass('deser-animation');
        }



        let $infraSecAnim = $('.infrast-sec');
        let $infraSecTop = $infraSecAnim.offset().top;
        let $infraSecBottom = $infraSecTop + $infraSecAnim.height();

        if ($infraSecTop + $infraSecAnim.height() / 2 < docViewBottom && docViewBottom  < $infraSecBottom + $infraSecAnim.height() / 2) {
            $infraSecAnim.addClass('infrast-sec-animation');
        } else {
            $infraSecAnim.removeClass('infrast-sec-animation');
        }


        let $countlessAnim = $('.countless__padd');
        let $countlessTop = $countlessAnim.offset().top;
        let $countlessBottom = $countlessTop + $countlessAnim.height();

        if ($countlessTop + $countlessAnim.height() / 2 < docViewBottom && docViewBottom  < $countlessBottom + $countlessAnim.height() / 2) {
            $countlessAnim.addClass('infrast-sec-animation');
        } else {
            $countlessAnim.removeClass('infrast-sec-animation');
        }


        let $invesTmentsAnim = $('.inves-an');
        let $invesTmentsTop = $invesTmentsAnim.offset().top;
        let $invesTmentsBottom = $invesTmentsTop + $invesTmentsAnim.height();

        if ($invesTmentsTop + $invesTmentsAnim.height() / 2 < docViewBottom && docViewBottom  < $invesTmentsBottom + $invesTmentsAnim.height() ) {
            $invesTmentsAnim.addClass('investments___active');
        } else {
            $invesTmentsAnim.removeClass('investments___active');
        }







        let $latestAwardsAnim = $('.latest-awards-sec');
        let $latestAwardsTop = $latestAwardsAnim.offset().top;
        let $latestAwardsBottom = $latestAwardsTop + $latestAwardsAnim.height();

        if ($latestAwardsTop + $latestAwardsAnim.height() / 2 < docViewBottom && docViewBottom  < $latestAwardsBottom + $latestAwardsAnim.height() / 2) {
            $latestAwardsAnim.addClass('latest-awards__act');
        } else {
            $latestAwardsAnim.removeClass('latest-awards__act');
        }



        let $answerQuestAnim = $('.answer-quest');
        let $answerQuestTop = $answerQuestAnim.offset().top;
        let $answerQuestBottom = $answerQuestTop + $answerQuestAnim.height();

        if ($answerQuestTop + $answerQuestAnim.height()  < docViewBottom && docViewBottom  < $answerQuestBottom + $answerQuestAnim.height() ) {
            $answerQuestAnim.addClass('answer-quest__act');
        } else {
            $answerQuestAnim.removeClass('answer-quest__act');
        }


        let $footerAnim = $('.footer');
        let $footerTop = $footerAnim.offset().top;
        let $footerBottom = $footerTop + $answerQuestAnim.height();

        if ($footerTop + $footerAnim.height() / 2 < docViewBottom && docViewBottom  < $footerBottom + $footerAnim.height() / 2 ) {
            $footerAnim.addClass('footer__act');
        } else {
            $footerAnim.removeClass('footer__act');
        }
    });
})




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






//  CALCULATION


let addNumber = document.getElementsByClassName('amount-credit')[0];
let range = document.getElementsByClassName("getValue")[0];
let firstPayPrice = document.getElementsByClassName("first-pay-price")[0];
let getInput = document.getElementsByClassName("getInput")[0];
let realEstate = document.getElementsByClassName('real-estate-js')[0]
let dateRange = document.getElementsByClassName('date-range')[0]
let dateRangeValue = document.getElementsByClassName('date-range-value')[0]
let monthlyPayment = document.getElementsByClassName('monthly-payment')[0]
let percents = document.getElementsByClassName('percent__number')


let mainValue = 0

range.addEventListener("input", function () {
    realEstate.innerText = numberWithSpaces(range.value)
    getInput.setAttribute('max', range.value)
    updateMainValue()
    mounthPay()
});

getInput.addEventListener('input', function () {
    firstPayPrice.innerText = numberWithSpaces(getInput.value)
    updateMainValue()
    mounthPay()
})
dateRange.addEventListener('input', function () {
    dateRangeValue.innerText = numberWithSpaces(dateRange.value)
    updateMainValue()
    mounthPay()
})


for (let i = 0; i < percents.length; i++) {
    percents[i].addEventListener('click', function () {
        let dataPercent = percents[i].dataset.percent
        console.log(dataPercent);
        firstPayPrice.innerText = +range.value * +dataPercent / 100
        getInput.value = +range.value * +dataPercent / 100
        updateMainValue()
        mounthPay()
        for (let j = 0; j < percents.length; j++) {
            percents[j].classList.remove('percent__active')
        }
        percents[i].classList.add('percent__active')
    })
}





function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

}


function updateMainValue() {
    mainValue = +range.value - +getInput.value
    addNumber.innerText = numberWithSpaces(mainValue) + ' ₽'
}



function mounthPay() {
    let x = mainValue / (+dateRange.value * 12)
    monthlyPayment.innerHTML = numberWithSpaces(x.toFixed(2)) + ' ₽'
}








let checkboxApartment = document.getElementsByClassName('checkbox-js')[0];
checkboxApartment.addEventListener('change', function () {
    if(checkboxApartment.checked){
        document.getElementsByClassName('add-check__des')[0].classList.add('remove-photo');
    }
    else{
        document.getElementsByClassName('add-check__des')[0].classList.remove('remove-photo');
    }
});

















