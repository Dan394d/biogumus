$(document).ready(function(){
	$('.header__slider').slick({
		fade: true,
		easing: 'linear',
		autoplay: true, 
		autoplaySpeed: 1500,
		responsive:[
			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}
		]
	});
	$('.plants_slider').slick({
		variableWidth: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 1800,
		easing: 'ease-in-out'
	});
	$('.menu__burger').click(function(event){
		$('.header__menu_bar, .header__menu_items').toggleClass('active');
	});
});
