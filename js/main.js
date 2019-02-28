$(document).ready(function(){
	$(".schiri_menu").click(function(){
		$(".schiri_sub_header").slideToggle();
		$(".schiri_menu img").toggleClass("schiri_menu_active");
	});
	$(".schiri_sub_header li a").click(function(){
		$(".schiri_sub_header").slideToggle();
	});
	$(".schiri_sub_header li a").hover(function(){
		if($(this).siblings().size()>0){
			$(this).parent().addClass("schiri_submenu_active");
			$(this).parent().children().find("ul li").css("backgorund-color","red");
		}
		
	});
	$('a[href^="#"]').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-80
		}, 500);
		$(".schiri_menu img").removeClass("schiri_menu_active");
		return false;
	});
});