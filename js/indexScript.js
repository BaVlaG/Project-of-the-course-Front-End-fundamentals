
$(document).ready(function(){
	
	$('.bxslider').bxSlider({
		pagerCustom:'#bx-pager',
		auto: true,
		pause: 3000
	});
	
	var small=false;
	$('.logoMenu').click(function(){
		if (!small) {
		$('aside div.menu').fadeIn(1000);
		$('aside div.menu').css('display','inline-block');
		$('.topMenu').css('display','block');
		$('.logoMenu').css('transform','scale(0.5)');
		small=true;
		} else {
			$('aside div.menu').fadeOut(1000);
			$('aside div.menu').css('display','none');
			$('.topMenu').css('display','none');
			$('.logoMenu').css('transform','scale(1)');
			small = false;
		  };
	});
	
	$(window).scroll(function(){
		
		if ($(window).scrollTop()>100) {
			$('#pageUp').fadeIn(1000);
		} else {
			$('#pageUp').fadeOut(2000);
		}
	});
	
	$('#pageUp').click(function () {
		$('body,html').animate({scrollTop: 0}, 400); 
	});
	
	$('footer h3').click(function(){
		$('footer form').slideDown(600);
		$('footer img').fadeIn(600);
	});
	
	$('footer img').click(function(){
		$('footer form').slideUp(600);
		$(this).fadeOut(600);
	});
		
	$('.region').click(function(){
		$('#region').slideToggle();
	});
	
	$('.equipment').click(function(){
		$('#equipment').slideToggle();
	});
	
	$('.contentSvitok, .menu, menuLink').on('click','a.scrollTo',function(event){
			event.preventDefault();
			var href=$(this).attr('href');
			var about=$(href).offset();
		    var	top=about.top;
			$('body, html').animate({scrollTop:top}, 800);
	});
	
	$('#gallery img').click(function(){
		$('.gallerySlider').find('img').attr('scr',$(this).attr('src'));
		$('.popUp').show();
		$('.layout').show();
		afterShow:(function(){
			reloadSlider();
		});
		var numberSlide=$(this).attr('data-number');
		var gallerySlider=$('.gallerySlider').bxSlider({startSlide:numberSlide});
	});
	
	$('.layout').click(function(){
		$('.popUp').hide();
		$('.layout').hide();
	});
	
});
		

	

