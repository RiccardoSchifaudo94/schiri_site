$(".schiri_btn_modal").click(function(){
	$("body").addClass("disable_overflow");
	var tipo_pagina = $(this).find("input").val();
	$(".schiri_modal_header h1").text("");
	$(".schiri_modal_body").html("");
	$(".schiri_modal_body").load("include/modal_pages/"+tipo_pagina+".html");
	var title_article = $(".schiri_modal_body h1").html();
	$(".schiri_modal_header h1").text(title_article);
	$(".schiri_modal").fadeIn();
});
$(".schiri_btn_modal_close").click(function(){
	$("body").removeClass("disable_overflow");
	$(".schiri_modal").fadeOut();
});