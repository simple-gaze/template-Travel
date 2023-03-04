	/* Menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#header__navbar").toggleClass("active");
	});

// slider for desktop
$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 300,
    variableWidth: true
  });
});

// slider for mobile
$(document).ready(function(){
  $('.slider-nav--mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
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



	