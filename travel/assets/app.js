// slider
$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 300,
    variableWidth: true
  });
});

// log in and sign up pop up
$('.open-popup').click(function() {
  $('.popup-bg').fadeIn(200);
  $('.popup-login').fadeIn(200);
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(200);
  $('.popup-login').fadeOut(200);
  $('.popup-signup').fadeOut(200);
});

$('.open-signup').click(function() {
  $('.popup-signup').fadeIn(200);
  $('.popup-login').fadeOut(200);
});

$('.open-login').click(function() {
  $('.popup-login').fadeIn(200);
  $('.popup-signup').fadeOut(200);
});



	