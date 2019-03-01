$(document).ready(function(){
	$(".schiri_menu").click(function(){
		$(".schiri_sub_header").slideToggle();
		$(".schiri_menu img").toggleClass("schiri_menu_active");
	});
	$(".schiri_sub_header li a").click(function(){
		$(".schiri_sub_header").slideToggle();
	});
	
	/*$(".schiri_sub_header li").hover(function(){
		
		//$(".schiri_sub_header li").removeClass("schiri_submenu_active");
		
		//$(".schiri_second_sub_header").hide();
		//$(".schiri_sub_header li,.schiri_sub_header li a").removeClass("schiri_submenu_active");
		//$(this).parent().addClass("schiri_submenu_active");
		
		if($(this).siblings().size()>0){
		//	$(this).parent().addClass("schiri_submenu_active");
		//	$(this).find(".schiri_second_sub_header").fadeIn(200);
		}
		
	});
	$(".schiri_second_sub_header").mouseout(function(){
		//	$(this).fadeOut(400);
		//	$(this).parent().find(".schiri_sub_header li").removeClass("schiri_submenu_active");
	});*/

	$('a[href^="#"]').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-80
		}, 500);
		$(".schiri_menu img").removeClass("schiri_menu_active");
		return false;
	});
});