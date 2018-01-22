$(document).ready(function(){
	$(".schiri_menu").click(function(){
		$(".schiri_sub_header").slideToggle();
		$(".schiri_menu img").toggleClass("schiri_menu_active");
	});
	$(".schiri_sub_header li a").click(function(){
		$(".schiri_sub_header").slideToggle();
	});
	$('a[href^="#"]').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-80
		}, 500);
		$(".schiri_menu img").removeClass("schiri_menu_active");
		return false;
	});
});