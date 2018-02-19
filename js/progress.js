$(document).ready(function(){
	$(window).scroll(function(){
		var height_scroll = $("body").scrollTop();
		if(height_scroll>500){
			$("#HTML").css({"width":"90%"});
			$("#jQuery").css({"width":"50%"});
			$("#PHP").css({"width":"30%"});
			$("#MySQL").css({"width":"10%"});
			$("#Web_Design").css({"width":"70%"});
			$("#Cordova").css({"width":"20%"});
			$("#AngularJS").css({"width":"15%"});
			$("#Bootstrap").css({"width":"60%"});
			$("#UX_Design").css({"width":"25%"});
			$(".schiri_progress_blue div ").fadeIn(4000);
		}	
	});
});