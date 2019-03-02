<?php require_once("include/helpers/Utility.php"); ?>
<html>
	<head>
		<title>Riccardo Schifaudo - Web Developer</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/modal.css">
		<?php if(basename($_SERVER['PHP_SELF']!="index.php")): ?>
			<link rel="stylesheet" type="text/css" href="css/post.css">
		<?php endif;?>
		<link rel="stylesheet" type="text/css" href="css/media.css">
		<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

	</head>
	<body>
		<div class="schiri_modal">
			<div class="schiri_container">
				<div class="schiri_modal_header">
					<h1></h1>
					<div class="schiri_btn_modal_close">
						<img src="img/chiudi.png">
					</div>
				</div>
				<div class="schiri_modal_body">

				</div>
			</div>
		</div>
		<div class="schiri_header">
			<div class="schiri_container">
				<div class="schiri_brand"><a href="index.php"><img src="img/logo_schiri_white.png"></a></div>
				<div class="schiri_menu"><img src="img/menu.png"></div>	
			</div>
			<div class="schiri_sub_header">
				<div class="schiri_container">
					<?php if(basename($_SERVER['PHP_SELF'])=="index.php"): ?>
					<ul>
						<li><a href="#home"><img src="img/home.png"><div id="home">Home</div></a></li>
						<li><a href="#about"><img src="img/avatar.png"><div id="about">Chi sono</div></a></li>
						<li><a href="#skills"><img src="img/skills.png"><div id="skills">Skills</div></a></li>
						<li><a href="#cv"><img src="img/cv.png"><div id="skills">CV</div></a></li>
						<li><a href="#interests"><img src="img/arte.png"><div id="interests">Interessi</div></a></li>
						<li><a href="#portfolio"><img src="img/portfolio.png"><div id="portfolio">Portfolio</div></a></li>
						<li><a href="#contact"><img src="img/home.png"><div id="contacts">Contatti</div></a></li>
					</ul>
					<?php endif;?>
					<?php if(basename($_SERVER['PHP_SELF'])!="index.php"): ?>
					<ul>
						<li>
							<a href="index.php">
								<img src="img/home.png"><div id="home">Home</div>
							</a>
						</li>
						<li class="<?php if(basename($_SERVER['PHP_SELF'])=='viaggi.php') echo 'schiri_submenu_active'; ?>">
							<a href="viaggi.php">
								<img src="img/world.png"><div>Viaggi</div>
							</a>
							<?php if(basename($_SERVER['PHP_SELF'])=='viaggi.php') :?>
							<ul class="schiri_second_sub_header">
		 						<div class="schiri_container">     
		 							<li><a>Malta</a></li>
		        					<li><a>Interrail</a></li>
		        					<li><a>Erasmus Plus</a></li>
		     						<li><a>Fuori Porta</a></li>
		     					</div>	
		    				</ul>
		    				<?php endif; //chiudi endif per mostrare submenu per item viaggi ?>
						</li>
						<li  class="<?php if(basename($_SERVER['PHP_SELF'])=='diabolo.php') echo 'schiri_submenu_active'; ?>">
							<a href="diabolo.php">
								<img src="img/diabolo.png"><div>Diabolo</div>
							</a>
						</li>
						<li  class="<?php if(basename($_SERVER['PHP_SELF'])=='ninjutsu.php') echo 'schiri_submenu_active'; ?>">
							<a href="ninjutsu.php">
								<img src="img/ninja.png"><div id="home">Ninjutsu</div>
							</a>
							<?php if(basename($_SERVER['PHP_SELF'])=='ninjutsu.php') :?>
							<ul class="schiri_second_sub_header">
		 						<div class="schiri_container">  
		 							<li><a>Storia</a></li>   
		 							<li><a>Taijutsu</a></li>
		        					<li><a>Kujikiri</a></li>
		     					</div>	
		    				</ul>
		    				<?php endif; //chiudi endif per mostrare submenu per item ninjutsu ?>
						</li>
					</ul>
					<?php endif;?>
				</div>
			</div>	
		</div>