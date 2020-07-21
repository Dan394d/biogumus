$(document).ready(function(){
	$('.header__slider').slick({
		fade: true,
		easing: 'linear',
		autoplay: true, 
		autoplaySpeed: 2000
	});
	$('.plants_slider').slick({
		variableWidth: true,
		centerMode: true,
	});
});