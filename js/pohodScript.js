
$(document).ready(function(){
	
	$('.bxslider').bxSlider({
		pagerCustom:'#bx-pager',
		auto: true,
		pause: 3000
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
		
	$('.text img').click(function(){
		$('.popUp img').attr('src',$(this).attr('src'));
		$('.popUp').show();
		$('.layer').show();
	});
	
	$('.layer, .popUpClose').click(function(){
		$('.popUp').hide();
		$('.layer').hide();
	});
		

});