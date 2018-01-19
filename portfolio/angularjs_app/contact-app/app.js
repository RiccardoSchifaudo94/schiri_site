var app = angular.module("todoApp",[]);
	app.value("appTitle","Contact App");
	app.value("appFooterText","Contact App is a webtool which let you \n to manage your contact \n into a register")
	app.value("objValue",{nome:"Riccardo",cognome:"Schifaudo"});
	app.factory("serviceFactory",function(){console.log("Log function");return null;});
	app.controller("ContactController",ContactCntrl);
	app.controller("HeaderController",HeaderContr);
	app.controller("FooterController",FooterContr)
	
	function paramConfigurations(){
		
		var value = {};
		
		value.nome = "Riccardo";
		value.cognome = "Schifaudo";
		value.email = "riccardo.schifaudo@inrebus.it";
		value.ruolo = "junior web developer";
		
		value.skills = new Array();
		
		value.skills.push("HTML");
		value.skills.push("CSS");
		value.skills.push("Javascript");
		value.skills.push("jQuery");
		value.skills.push("PHP");
		value.skills.push("MySQL");
		value.skills.push("AngularJS");
		value.skills.push("Angular2");
		value.skills.push("JSON");
		value.skills.push("Ajax");
		value.skills.push("Cordova");
		value.skills.push("Ionic2");
		value.skills.push("C++");
		value.skills.push("Java");
		value.skills.push("Bootstrap");
		value.skills.push("Git");
		
		return value;
		
	}
	
	app.value("myAppServiceFactory",paramConfigurations());
	
	function ContactCntrl($scope,objValue,myAppServiceFactory){
		this.state = false;
		this.contacts = 
							[  
						      
						      {"gender":"female","name":{"title":"mrs","first":"helmi","last":"mikkola"},"location":{"street":"4085 tahmelantie","city":"puumala","state":"satakunta","postcode":72388},"email":"helmi.mikkola@example.com","login":{"username":"ticklishcat175","password":"boozer","salt":"EXFzxAK1","md5":"0925b1e685059b2faf517aedcd59dd5e","sha1":"6ff46e14fcba40128e35b9b9c0b58b1bcb05a5ef","sha256":"3459d23ba891fb400e5581fabc5e9892f839877dfcb5b68f5f9a47ccfeaa571d"},"dob":"1991-08-10 15:16:05","registered":"2012-12-28 07:52:38","phone":"02-808-824","cell":"048-377-85-07","id":{"name":"HETU","value":"1391-960X"},"picture":{"large":"https://randomuser.me/api/portraits/women/45.jpg","medium":"https://randomuser.me/api/portraits/med/women/45.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/45.jpg"},"nat":"FI"},
						      {  
						         "gender":"female",
						         "name":{  
						            "title":"mrs",
						            "first":"julie",
						            "last":"long"
						         },
						         "location":{  
						            "street":"2337 spring st",
						            "city":"brisbane",
						            "state":"western australia",
						            "postcode":5161
						         },
						         "email":"julie.long@example.com",
						         "login":{  
						            "username":"bigtiger382",
						            "password":"brown",
						            "salt":"oOgZ8wtQ",
						            "md5":"cecd2542411ba158654a4d81b3ad7aac",
						            "sha1":"3988beac570d0d4814fedff91fbc755f303a5d1f",
						            "sha256":"38796d63b7794824582ae6656f460da750b90d86d9c3d36f93380ae615bdfdf8"
						         },
						         "dob":"1991-10-01 23:40:01",
						         "registered":"2012-11-04 02:36:29",
						         "phone":"06-8891-2583",
						         "cell":"0435-625-311",
						         "id":{  
						            "name":"TFN",
						            "value":"386837905"
						         },
						         "picture":{  
						            "large":"https://randomuser.me/api/portraits/women/83.jpg",
						            "medium":"https://randomuser.me/api/portraits/med/women/83.jpg",
						            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/83.jpg"
						         },
						         "nat":"AU"
						      },
						      {  
								   "gender":"female",
								   "name":{  
								      "title":"miss",
								      "first":"lena",
								      "last":"vincent"
								   },
								   "location":{  
								      "street":"3742 rue andré-gide",
								      "city":"clermont-ferrand",
								      "state":"hautes-alpes",
								      "postcode":74598
								   },
								   "email":"lena.vincent@example.com",
								   "login":{  
								      "username":"blueleopard674",
								      "password":"kkkkkk",
								      "salt":"zs6NFqqa",
								      "md5":"6d648014a1a3ea02e852759ae4225322",
								      "sha1":"583a811c9e9a0d6909410b9cc4f88520d38af168",
								      "sha256":"4c416ca9f07e0daf5e6ae25e1d5df2b944cad543fdd23fee75d034bb257f9338"
								   },
								   "dob":"1966-12-31 11:32:54",
								   "registered":"2015-01-29 16:52:49",
								   "phone":"01-38-94-92-13",
								   "cell":"06-31-66-71-55",
								   "id":{  
								      "name":"INSEE",
								      "value":"2661114744575 60"
								   },
								   "picture":{  
								      "large":"https://randomuser.me/api/portraits/women/90.jpg",
								      "medium":"https://randomuser.me/api/portraits/med/women/90.jpg",
								      "thumbnail":"https://randomuser.me/api/portraits/thumb/women/90.jpg"
								   },
								   "nat":"FR"
							},
							{  
								   "gender":"male",
								   "name":{  
								      "title":"mr",
								      "first":"jeffery",
								      "last":"butler"
								   },
								   "location":{  
								      "street":"5971 eason rd",
								      "city":"mildura",
								      "state":"south australia",
								      "postcode":241
								   },
								   "email":"jeffery.butler@example.com",
								   "login":{  
								      "username":"smallbutterfly459",
								      "password":"bunny",
								      "salt":"Ffmja11g",
								      "md5":"e37da9353ce0ca684eb8f3d7020472ef",
								      "sha1":"1fd1a231f2186b0e092ccedec8e7f1e3c480c4b9",
								      "sha256":"f2faf121cb8df848b975aae296ca2aabf0e71534ad953c88eed6db27dcd2e87b"
								   },
								   "dob":"1968-10-04 22:48:30",
								   "registered":"2014-09-19 15:28:48",
								   "phone":"04-7612-1942",
								   "cell":"0484-640-610",
								   "id":{  
								      "name":"TFN",
								      "value":"032166381"
								   },
								   "picture":{  
								      "large":"https://randomuser.me/api/portraits/men/48.jpg",
								      "medium":"https://randomuser.me/api/portraits/med/men/48.jpg",
								      "thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"
								   },
								   "nat":"AU"
							},
							{"gender":"female","name":{"title":"ms","first":"silke","last":"jørgensen"},"location":{"street":"9421 rødtjørnevej","city":"nykøbing f","state":"danmark","postcode":35767},"email":"silke.jørgensen@example.com","login":{"username":"beautifulgoose449","password":"king","salt":"rzrx5qPd","md5":"ec298dc9ca5eb1721c90f6bb073b81a7","sha1":"05053b322bdb4944c13ad32b20c6acb8a7643bf6","sha256":"9d8bcb6934acb5bedeceed7d3766e6b1d6aa078fcedfee3e37c2f048883f8288"},"dob":"1987-04-27 02:08:40","registered":"2014-08-29 22:44:56","phone":"40186207","cell":"24063840","id":{"name":"CPR","value":"830509-1912"},"picture":{"large":"https://randomuser.me/api/portraits/women/44.jpg","medium":"https://randomuser.me/api/portraits/med/women/44.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/44.jpg"},"nat":"DK"},
							{"gender":"female","name":{"title":"mrs","first":"angie","last":"moore"},"location":{"street":"9430 school lane","city":"chichester","state":"northumberland","postcode":"C0D 3YZ"},"email":"angie.moore@example.com","login":{"username":"lazymouse288","password":"money1","salt":"PoVylJFa","md5":"b7144d0b2add0e5b2dce507670b6d78b","sha1":"2128cbfe549a7a6666d2e7866ed2936d3236e0c2","sha256":"c5ae3469b3cbc1d28e399d316aad89e8ec82ccdb7d546933cc2418803a0e3f71"},"dob":"1970-09-03 00:29:51","registered":"2011-07-08 07:30:59","phone":"016974 71432","cell":"0770-570-182","id":{"name":"NINO","value":"AN 99 65 25 Q"},"picture":{"large":"https://randomuser.me/api/portraits/women/51.jpg","medium":"https://randomuser.me/api/portraits/med/women/51.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/51.jpg"},"nat":"GB"},
							{"gender":"male","name":{"title":"mr","first":"ernesto","last":"blanco"},"location":{"street":"7593 calle de la almudena","city":"burgos","state":"extremadura","postcode":34960},"email":"ernesto.blanco@example.com","login":{"username":"goldenswan903","password":"scrapper","salt":"3inY6R0J","md5":"12b572e34ace9f210bdc15072beb9fb8","sha1":"5ee1924a6b2fa296da465c72c200d8befbd934a9","sha256":"b4a9a60f5a64063d1a7644d686788800c88872b6e960b92ecd91475f60c6f1db"},"dob":"1954-08-13 06:38:59","registered":"2014-06-23 05:37:33","phone":"909-654-939","cell":"642-060-509","id":{"name":"DNI","value":"78831015-N"},"picture":{"large":"https://randomuser.me/api/portraits/men/61.jpg","medium":"https://randomuser.me/api/portraits/med/men/61.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/61.jpg"},"nat":"ES"}
						];

						$scope.skills = myAppServiceFactory.skills;  
						
						this.selectContact = function(index){
							this.state = true;
							this.selectedContact = this.contacts[index];

						}

						this.closeDetail = function(){
							this.state = false;
							alert("Ciao "+objValue.nome+" "+objValue.cognome);
						}
				
	}

	function HeaderContr(appTitle,serviceFactory){
		this.appTitle = appTitle;
		serviceFactory;
	
	}
	
	function FooterContr(appTitle,appFooterText){
		this.appTitle = appTitle;
		this.textFooter = appFooterText;
		
	}
	