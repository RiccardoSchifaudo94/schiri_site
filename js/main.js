$(document).ready(function(){
	$(".schiri_menu").click(function(){
		$(".schiri_sub_header").slideToggle();
		$(".schiri_menu img").toggleClass("schiri_menu_active");
	});
	$('a[href^="#"]').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top-100
		}, 500);

		return false;
	});
});