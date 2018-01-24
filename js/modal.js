$(".schiri_btn_modal_cv").click(function(){
	$("body").addClass("disable_overflow");
	$(".schiri_modal").fadeIn();
});
$(".schiri_btn_modal_close").click(function(){
	$("body").removeClass("disable_overflow");
	$(".schiri_modal").fadeOut();
});