var array_items = [
	{"title":"Titolo 1", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://www.metamondo.it/%5C/_pix/loc/irlanda/Irlanda_Intro.jpg"},
	{"title":"Titolo 2", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"video", "url":"https://www.youtube.com/embed/wJnBTPUQS5A?autoplay=0"},
	{"title":"Titolo 3", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"video", "url":"http://www.youtube.com/embed/n4K1Qpj1Ljg?list=UU3qGUTKOSIKbp08itEn8VIA?autoplay=0"},
	{"title":"Titolo 6", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://www.lamappadeiviaggi.it/img_up/soggiornostudioirlanda.jpg"},
	{"title":"Titolo 5", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://offerte.caesartour.it/repository/pagine/caesar-tour-irlanda-del-sud-storia-arte-e-natura-si-incontrano-6942.jpg"},
	{"title":"Titolo 4", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"", "url":"http://d5qsyj6vaeh11.cloudfront.net/images/homepage/featured-module-hp/ioi/it-ioi/faro-590x340-636299245573601856.jpg"}
]

function Slider(){
   
	this.init = function(){
	   
	   var html_template  =   "<div class='lightbox'>";
	   	   html_template +=   "		<h3></h3>";
	       html_template +=   "		<div class='close'>&times;</div>";
	       html_template +=   "		<div class='viewer'>";
	       html_template +=   "				<img src='' class='hide'>";
	       html_template +=   "				<iframe src='' class='hide'></iframe>";
	       html_template +=   "		</div>";
	       html_template +=   "		<p></p>";
	       html_template +=   "</div>";

	    $("body").prepend(html_template);   

	    $(".lightbox .close").click(function(){
    		
    		$(this).parent().fadeOut(500);
    		$(".lightbox .viewer iframe").attr("src","");
		});

	   $('.owl-carousel').owlCarousel({
	        loop:true,
	        margin:10,
	        responsiveClass:true,
	        responsive:{
	            0:{
	                items:1,
	                nav:true
	            },
	            480:{
	                items:1,
	                nav:true
	            },
	            600:{
	                items:2,
	                nav:true
	            },
	            1000:{
	                items:4,
	                nav:true,
	                loop:false
	            }
	        },
	        navigation:true,
	        navText: ["<img src='img/arrow-prev.png'>","<img src='img/arrow-next.png'>"]
	    })

	}

	this.create = function(parent, array_items){

			var html_template  = "<div class='main_container'>";
			html_template += "<div class='owl-carousel owl-theme'>";
			for(var i=0;i<array_items.length;i++){
				html_template += "<div class='item'>";
					if(array_items[i].type=="image"){
						html_template += "<img src='"+array_items[i].url+"'>";
						html_template += "<p>"+array_items[i].title+"</p>";
						html_template += "<span>"+array_items[i].descr+"</span>";
					}else if(array_items[i].type=="video"){
						html_template += "<div class='overlay_video' onclick='this.openVideo();'></div>";
						html_template += "<iframe width='420' height='240' allowfullscreen='true' frameborder='0' src='"+array_items[i].url+"'></iframe>";
						html_template += "<p>"+array_items[i].title+"</p>";
						html_template += "<span>"+array_items[i].descr+"</span>";
					}
					else{
						html_template += "<img src='http://placehold.it/320x150'>";
						html_template += "<p>Nessun titolo</p>";
						html_template += "<span>Nessuna descrizione per questo contenuto perché non definito</span>";
					}
				html_template += "		</div>";	
			}

			html_template += "		</div>";
			html_template += "</div>";	



		    parent.append(html_template);

		    $(".item img").click(function(){
	   						 $(".lightbox").fadeIn(500);
	   						 var html_el = $(this)[0].currentSrc;
	    					 $(".lightbox .viewer img").attr("src",html_el);
	    					 $(".lightbox .viewer img").removeClass("hide");
	    					 $(".lightbox .viewer iframe").addClass("hide");
			});

			$(".overlay_video").click(function(){
    				         $(".lightbox").fadeIn(500);
   				             $(".lightbox .viewer iframe").removeClass("hide");
                             $(".lightbox .viewer img").addClass("hide");
                             $(".lightbox .viewer iframe").attr("src","");
                             $(".lightbox .viewer iframe").attr("src",$(this).siblings()[0].src);
            });


	}

}