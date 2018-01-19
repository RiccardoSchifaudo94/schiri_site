$(document).ready(function(){
	$(".schiri_menu").click(function(){
		$(".schiri_sub_header").slideToggle();
		$(".schiri_menu img").toggleClass("schiri_menu_active");
	});
});