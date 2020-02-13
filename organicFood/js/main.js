$(function(){
  $('.slider__inner').slick({
    arrows:false,
    dots:true,
    dotsClass:'slider-dots',
  });
  $('.menu__burger').click(function(){
  	$('.menu').toggleClass('menu-active');
  	$('.menu__burger').toggleClass('menu__burger-active')
  });


  var blog = $('.blog');
  var blogTop = blog.offset().top;
  $(window).bind('scroll',function(){
  	var windowTop = $(this).scrollTop();
  	if (windowTop>blogTop) {
  		$('.footer__right').html('<iframe defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429173.54259905504!2d-97.01174187764353!3d32.820929606890424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2z0JTQsNC70LvQsNGBLCDQotC10YXQsNGBLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1580024767715!5m2!1sru!2sru" width="615" height="503" style="border:0;" allowfullscreen=""></iframe>');
  		$(window).unbind('scroll');
  	}
  });
});