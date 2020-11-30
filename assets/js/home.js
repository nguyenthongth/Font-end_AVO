
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

//btn onScrollTop
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//Get button:
