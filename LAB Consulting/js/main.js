$(function() {

	// Прокрутка к следущей секции
	$('.scrollBtn').click(function(act) {
		act.preventDefault();
		elementCick = $(this).attr('href');
		destination = $(elementCick).offset().top;
		$('body, html').animate({scrollTop: destination}, 800);
	});

	// Параллакс фона 

	// Слайдер
	$('.reviews__wrap').slick({
		
	});
});