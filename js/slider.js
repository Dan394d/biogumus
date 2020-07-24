$(document).ready(function(){
	$('.header__slider').slick({
		fade: true,
		easing: 'linear',
		autoplay: true, 
		autoplaySpeed: 1500
	});
	$('.plants_slider').slick({
		variableWidth: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 1800,
		easing: 'ease-in-out'
	});
});