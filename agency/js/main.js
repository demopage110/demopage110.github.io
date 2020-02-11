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
	})

















});

//https://codepen.io/fancyapps/pen/zJgXyg?editors=1100
  //https://icomoon.io/
  //https://necolas.github.io/normalize.css/
  //https://kenwheeler.github.io/slick/
//http://dimox.name/jquery-form-styler/


