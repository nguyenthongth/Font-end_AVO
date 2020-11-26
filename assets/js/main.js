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


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var headerInner = document.getElementById("header-inner");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerInner.style.animation = "small-to-big 0.3s 1";
    headerInner.style.padding = "10px 10px";
    headerInner.classList.add('bg-light');
    headerInner.classList.remove('navbar-dark');
    headerInner.classList.add('navbar-light');
  } else {
    headerInner.style.animation = "big-to-small 0.3s 1";
    headerInner.style.padding = "50px 10px";
    headerInner.classList.remove('bg-light');
    headerInner.classList.add('navbar-dark');
    headerInner.classList.remove('navbar-light');
  }
}

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