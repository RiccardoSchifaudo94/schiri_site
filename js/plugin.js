var array_items = [
	{"title":"Titolo 1", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://www.metamondo.it/%5C/_pix/loc/irlanda/Irlanda_Intro.jpg"},
	{"title":"Titolo 2", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"video", "url":"https://www.youtube.com/embed/wJnBTPUQS5A?autoplay=0"},
	{"title":"Titolo 3", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"video", "url":"http://www.youtube.com/embed/n4K1Qpj1Ljg?list=UU3qGUTKOSIKbp08itEn8VIA?autoplay=0"},
	{"title":"Titolo 6", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://www.lamappadeiviaggi.it/img_up/soggiornostudioirlanda.jpg"},
	{"title":"Titolo 5", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"image", "url":"http://offerte.caesartour.it/repository/pagine/caesar-tour-irlanda-del-sud-storia-arte-e-natura-si-incontrano-6942.jpg"},
	{"title":"Titolo 4", "descr":"Lorem Ipsum is simply dummy text of the printing and typesetting ", "type":"", "url":"http://d5qsyj6vaeh11.cloudfront.net/images/homepage/featured-module-hp/ioi/it-ioi/faro-590x340-636299245573601856.jpg"}
]

var diabolo_tutorial_gallery = [
	{"title":"Lancio Diabolo", "descr":"Caricamento e scarica in aria del Diabolo. Tecnica di base di lancio, con recupero a 'Parafulmine' e conclusione con 'Colpo di Frusta'", "type":"video", "url":"https://scontent.cdninstagram.com/vp/3cbd4f9754b3be3ee415441ab8b8c1e3/5C9C98EB/t50.2886-16/54530062_2211218978935031_3197985511335526400_n.mp4?_nc_ht=scontent.cdninstagram.com"},
	{"title":"Eclissi Totale", "descr":"Trucco Diabolo che consiste in un circolare eseguito dietro la schiena. Fa parte delle techiche delle orbite.", "type":"video", "url":"https://scontent.cdninstagram.com/vp/b0ecd108d9b951c31892367c8b1fe84c/5C9C6305/t50.2886-16/55409026_436651017076799_1869445703471659209_n.mp4?_nc_ht=scontent.cdninstagram.com"},
	{"title":"Semi-circolari alternati", "descr":"Orbite semi-circolari alternate con ritorno in circolare di schiena e presa di polso.", "type":"video", "url":"https://scontent.cdninstagram.com/vp/dad1f9c90b04d6c8a7906c47f993d2f7/5C9C5BA5/t50.2886-16/55522939_649842625455423_8436571793875009536_n.mp4?_nc_ht=scontent.cdninstagram.com"},
	{"title":"Diabolo combo tricks", "descr":"Coreografia improvvisata con trucchi misti di trapezi, punto cieco con orbite di braccia e gambe.", "type":"video", "url":"https://scontent.cdninstagram.com/vp/e145aa0baea2921b460e6ae7a64260f5/5C9C2841/t50.2886-16/44361127_2014098961984264_5716345224637186048_n.mp4?_nc_ht=scontent.cdninstagram.com&autoplay=false"}		
];

var malta_gallery = [	
						{"title":"Valletta", "descr":"Capitale dell'arcipelago di Malta ", "type":"image", "url":"img/viaggi/tirocinio_malta/valletta.jpg"},
						{"title":"Popeye Village", "descr":"Parco tematico dedicato al film di Braccio di Ferro e set cinematografico dell'omonimo film", "type":"image", "url":"img/viaggi/tirocinio_malta/popeye_village.jpg"},
						{"title":"Vittoriosa", "descr":"Cittadina fortificata a est della Valletta", "type":"image", "url":"img/viaggi/tirocinio_malta/vittoriosa.jpg"},
						{"title":"Icon LTD", "descr":"Foto di gruppo aziendale nella compagnia IT in cui ho lavorato come web developer.", "type":"image", "url":"img/viaggi/tirocinio_malta/icon_company.jpg"},
						{"title":"Manuel Fort", "descr":"Vista di La Valletta dal forte di St. Manuel a Gzira", "type":"image", "url":"img/viaggi/tirocinio_malta/st_manuel_fort.jpg"},
						{"title":"Cabina Rossa", "descr":"Cambina rossa stile anglosassone a Valletta", "type":"image", "url":"img/viaggi/tirocinio_malta/phone_box.jpg"}
					];


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
	                items:3,
	                nav:true,
	                loop:false
	            }
	        },
	        navigation:true,
	        navText: ["<img src='img/arrow-next-w.png' style='transform:rotate(180deg);'>","<img src='img/arrow-next-w.png'>"]
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
						html_template += "<iframe width='420' height='240' allowfullscreen='true' frameborder='0' src='"+array_items[i].url+"' autoplay='0' controls autoStart=false></iframe>";
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