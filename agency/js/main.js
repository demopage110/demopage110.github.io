$(document).ready(function(){

	$('.slider-inner, .news__slider-inner').slick({
		nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});
	$('select').styler();
	
	$('.menu__burger').click(function(){
		$('.menu').toggleClass('menu__active');
		$('.menu__burger-bg').toggleClass('menu__burger-bg_active');
		
	});
	$('.menu__burger-bg').click(function(){
		$('.menu').removeClass('menu__active');
		$('.menu__burger-bg').removeClass('menu__burger-bg_active');
	});


	var newsTop = $('.news').offset().top;
	$(window).bind('scroll',function(){
		var windowTop = $(this).scrollTop();
		if (windowTop>newsTop) {
			$('.footer__map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.124208598269!2d30.364922015155003!3d50.45741169474517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc919501b4ef%3A0x71a476f68f4c8246!2z0YPQuy4g0KTQtdC-0LTQvtGA0Ysg0J_Rg9GI0LjQvdC-0LksIDEzLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2sru!4v1563800683514!5m2!1sru!2sru" frameborder="0" style="border:0" allowfullscreen></iframe>')
			$(this).unbind('scroll');
		}
	});


});

//https://codepen.io/fancyapps/pen/zJgXyg?editors=1100
  //https://icomoon.io/
  //https://necolas.github.io/normalize.css/
  //https://kenwheeler.github.io/slick/
//http://dimox.name/jquery-form-styler/


