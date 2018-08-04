$(function() {

	// Прокрутка к следущей секции
	$('.scrollBtn').click(function(act) {
		act.preventDefault();
		elementCick = $(this).attr('href');
		destination = $(elementCick).offset().top;
		$('body, html').animate({scrollTop: destination}, 800);
	});

	// Параллакс фона
	$window = $(window);

	$('[data-type="background"]').each(function() {
		var $bgobj = $(this);

		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			var coords = '50% ' + yPos + 'px';

			$bgobj.css({backgroundPosition: coords});
		});
	});

	// Слайдер
	$('.slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
	});
});