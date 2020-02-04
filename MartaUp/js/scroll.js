$('.menu__list').on('click','a',function(event){
	 event.preventDefault();

	 var id = $(this).attr('href');

	 $('html,body').animate({
	 	scrollTop: $(id).offset().top+'px'
	 },1000)

});