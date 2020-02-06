jQuery(document).ready(function($){
  

	$('.slider__top').slick({
		arrows:false,
		asNavFor: '.slider__bottom-inner',
		fade:true,
		speed: 500,
	});
	$('.slider__bottom-inner').slick({
		asNavFor: '.slider__top',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/right_arrow.png" alt=""></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/left_arrow.png" alt=""></button>'		
	})




});