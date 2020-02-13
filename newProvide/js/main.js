$(function(){
  $('.menu-burg').click(function(){
  	$('.menu__left').addClass('menu__left-active');
  });
  $('.menu-close').click(function(){
  	$('.menu__left').removeClass('menu__left-active');
  });

  $('.slider__top').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: true,
  	asNavFor: '.slider__bottom',
  	focusOnSelect: true,
     responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.slider__bottom').slick({
  	asNavFor: '.slider__top',
  	prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.png" alt=""></button>',
  	nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.png" alt=""></button>'
  });

  $(window).scroll(function(){
		if($(window).scrollTop()>10){
			$('.header__wrapper').addClass('header_active')
		}else{
			$('.header__wrapper').removeClass('header_active')
		}
	});

  $('.plan__switch').each(function(){
  	if ($(this).find('input').attr('checked')) {
  		$(this).find('.plan__switch-bg').css({'left':'155px'});
  		$('.starter').addClass('disable');
  	}else{
  		$('.pro').addClass('disable');
  	}
  });
  $('.plan__switch').click(function(){
  	if ($(this).find('input').attr('checked')) {
  		$(this).find('.plan__switch-bg').css({'left':'8px'});
  		$(this).find('input').attr('checked',false);
  		$('.starter').removeClass('disable');
  		$('.pro').addClass('disable');
  	}else{
  		$(this).find('.plan__switch-bg').css({'left':'155px'});
  		$(this).find('input').attr('checked',true);
  		$('.starter').addClass('disable');
  		$('.pro').removeClass('disable');
  	}
  });

  AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 140, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});