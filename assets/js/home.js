
// Srcoll top
function showBtnScrollTop() {
    if($('.btnScrollTop').length) {
        var windowScrollTop = $(window).scrollTop();
        if(windowScrollTop > 1) $('.btnScrollTop').addClass('showBtnScrollTop');
        else $('.btnScrollTop').removeClass('showBtnScrollTop');
    }
}

$(".btnScrollTop").on('click', function(e){
    $('body,html').animate({
        scrollTop: 0
    }, 1000);

    e.preventDefault();
});
// end Srcoll top

// fixed menu
function fixedMenu() {
    if($('.wrapHeader').length) {
        var windowScrollTop = $(window).scrollTop();
        var heightHeader =  44;
        if($(window).width() <= 991) heightHeader = 1;
        if(windowScrollTop > heightHeader) $('.wrapHeader').addClass('fixedMenu');
        else $('.wrapHeader').removeClass('fixedMenu');
    }
}
// end fixed menu

// show  menu
function closeMenuHeaderMobile() {
    $('.wrapHeader').removeClass('showMenu');
}

$('.btnShowMenuHeaderMobile').on('click', function(e) {
    if($('body').hasClass('wrapHidden')) {        
        $('body').toggleClass('wrapHidden');
    } else {
        $('body').toggleClass('wrapHidden');
    }

    $('.wrapHeader').toggleClass('showMenu');

    e.preventDefault();
});

$('.wrapCloseMenuHeaderMobile').on('click', function(e) {
    $('body').removeClass('wrapHidden');
    closeMenuHeaderMobile();
});

$('.wrapMenuMainHeaderBottom .btnDropdowMenuSubHeaderBottom').on('click', function(e) {
    $(this).next('.wrapListMenuSubHeaderBottom').slideToggle();

    e.preventDefault();
});

$('.menuLanguageHeaderBottom').on('click', function(e) {
    $(this).find('.wrapListMenuSubHeaderBottom').slideToggle();

    e.preventDefault();
});
// end menu

// book a room
$('.btnShowBookRoom').on('click', function() {
    $('#modalFormBookRoom').modal('show')
});

$('.inputFrmNumberAdult').on('change', function() {
    if($('.inputNumberAdult').length) {
        var valNumber = $('.inputFrmNumberAdult').val();
        $('.inputNumberAdult').val(valNumber);
    }
});

$('.inputFrmNumberChildren').on('change', function() {
    if($('.inputNumberChildren').length) {
        var valNumber = $('.inputFrmNumberChildren').val();
        $('.inputNumberChildren').val(valNumber);
    }
});
// end book a room

window.addEventListener("load", function(event) {    
    showBtnScrollTop();

    fixedMenu();

    // select picker
    if($('.selectPciker').length) $('.selectPciker').selectpicker();
  
    // start slide main
    if($('.showSlideMain').length){
        $('.showSlideMain').slick({
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="btnSlideSlickPrevHome prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="btnSlideSlickPrevHome next"><i class="fas fa-chevron-right"></i></button>'
        });
    }
    // end start slide main

    // start slide promotion
    if($('.showSlidePromotionList').length){
        $('.showSlidePromotionList').slick({
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="btnSlideType1 left"></button>',
            nextArrow: '<button type="button" class="btnSlideType1 right"></button>'
        });
    }
    // end start slide promotion

    // start slide utilities
    if($('.showSlideUtilities').length){
        $('.showSlideUtilities').slick({
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="btnSlideType2 left"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="btnSlideType2 right"><i class="fas fa-chevron-right"></i></button>'
        });
    }
    // end start slide utilities

    // start slide service
    if($('.showSlideService').length){
        $('.showSlideService').slick({
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: false,
            slidesToShow: 3,
            swipeToSlide: true,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // end start slide service

    // start slide cmt
    if($('.showSlideTestimonials').length){
        $('.showSlideTestimonials').slick({
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            prevArrow: '<button type="button" class="btnSlideType3 left"></button>',
            nextArrow: '<button type="button" class="btnSlideType3 right"></button>'
        })
    }
    // end start slide cmt

    // date book room
    var languagePage = $('html').attr('lang');
    
    if($('.wrapFormBookRoom').length){
        $('.inputFrmChooseDateCheckIn').datepicker({
            format: 'dd/mm/yyyy',
            language: languagePage,
            startDate: new Date(),
            autoclose: true,
            }).on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('.inputFrmChooseDateCheckOut').datepicker('setStartDate', minDate);
            
            var valDate = $('.inputFrmChooseDateCheckIn').val();
            $('.inputChooseDateCheckIn').val(valDate);
        });

        $('.inputFrmChooseDateCheckOut').datepicker({
            format: 'dd/mm/yyyy',
            language: languagePage,
            startDate: new Date(),
            autoclose: true,
            }).on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('.inputFrmChooseDateCheckIn').datepicker('setEndDate', minDate);
            
            var valDate = $('.inputFrmChooseDateCheckOut').val();
            $('.inputChooseDateCheckOut').val(valDate);
        });
    }

    if($('.modalBodyFormBookRoom').length){
        $('.inputChooseDateCheckIn').datepicker({
            format: 'dd/mm/yyyy',
            language: languagePage,
            startDate: new Date(),
            autoclose: true,
            }).on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('.inputChooseDateCheckOut').datepicker('setStartDate', minDate);
        });

        $('.inputChooseDateCheckOut').datepicker({
            format: 'dd/mm/yyyy',
            language: languagePage,
            startDate: new Date(),
            autoclose: true,
            }).on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('.inputChooseDateCheckIn').datepicker('setEndDate', minDate);
        });
    }
    // end date book room
});

$(window).on('scroll', function() {
    fixedMenu();
    showBtnScrollTop();
});



/*slick-slider*/
  $('.SlideMain').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplayspeed: 1000,
    infinite: true, 
    fade: true,
    cssEase: 'linear',
  });
/*slick-slider*/


// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   var headerInner = document.getElementById("header-inner");
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     headerInner.style.animation = "small-to-big 0.3s 1";
//     headerInner.style.padding = "10px 10px";
//     headerInner.classList.add('bg-light');
//     headerInner.classList.remove('navbar-dark');
//     headerInner.classList.add('navbar-light');
//   } else {
//     headerInner.style.animation = "big-to-small 0.3s 1";
//     headerInner.style.padding = "50px 10px";
//     headerInner.classList.remove('bg-light');
//     headerInner.classList.add('navbar-dark');
//     headerInner.classList.remove('navbar-light');
//   }
// }

//Slide AboutUs
// $(document).ready(function(){

//   $('.sliderAboutUs').slick({
//   infinite: true,
//   prevArrow:'<button type="button" class="slick-prev"></button>',
//   nextArrow:'<button type="button" class="slick-next"></button>',
//   slidesToShow: 3,
//   slidesToScroll: 3
//   });
//   });

//aos: animate on scroll
AOS.init({
 duration: 700
});

//increase number navba slide main
var numberOne = setInterval(increaseNumberOne, 70);
var i = 0;

function increaseNumberOne(){
  i++;
  var number1 = document.getElementById("number1");
  number1.innerText = i.toString();
  if(i==21){
    clearInterval(numberOne);
  }
}

var numberTwo = setInterval(increaseNumberTwo, 30);
var x = 0;

function increaseNumberTwo() {
  x++;
  var number2 = document.getElementById("number2");
  number2.innerText = x.toString();
  if (x == 400) {
    clearInterval(numberTwo);
  }
}

$(window).on("load", function(){
    $(".loader-wraper").fadeOut("slow"); 
});