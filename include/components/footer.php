<a name="contact"></a>
		<?php if(basename($_SERVER['PHP_SELF']) == "index.php"): ?>
		<div class="schiri_footer">
			<div class="schiri_container">
				<div class="schiri_footer_block_left">
					<a href="#home">
						<img src="img/logo_schiri_color_2.png">
					</a>
					<p>
						Schiri DevLabs è il mio sito personale, in cui racconto su di me,
						i miei progetti, interessi e viaggi.
					</p>
				</div>
				<div class="schiri_footer_block_center schiri_content">
					<h3>Mappa del sito</h3>
					<ul>
						<li><a href="#home"><img src="img/next.png">Home</a></li>
						<li><a href="#about"><img src="img/next.png">Chi sono</a></li>
						<li><a href="#skills"><img src="img/next.png">Competenze</a></li>
						<li><a href="#cv"><img src="img/next.png">CV</a></li>
						<li><a href="#interests"><img src="img/next.png">Interessi</a></li>
						<li><a href="#portfolio"><img src="img/next.png">Portfolio</a></li>
					</ul>
				</div>
				<div class="schiri_footer_block_right schiri_content">
					<h3>Contattami</h3>
					<label>Nome</label>
					<input type="text" id="nome_contatto" class="schiri_input">
					<label>Email</label>
					<input type="text" id="email_contatto" class="schiri_input">
					<label>Messaggio</label>
					<textarea type="text" rows="10" id="messaggio_contatto" class="schiri_input">Inserisci testo...</textarea>
					<button class="schiri_btn_form">Invia</button>
				</div>
			</div>
		</div>
		<?php endif;?>
		<div class="schiri_sub_footer">
			<div class="schiri_container">
				<div class="schiri_social_icon">
					<h3>Social</h3>
					<br/>
					<a href="https://github.com/RiccardoSchifaudo94/" target="_blank">
						<img src="img/github.png"> 
						<span>GitHub</span>
					</a>
					<a href="https://it.linkedin.com/in/riccardo-schifaudo-20345993" target="_blank">
							<img src="img/linkedin.png"> 
							<span>Linkedin</span>
					</a>
					<a href="mailto:riccardo.schifaudo@libero.it">
						<img src="img/email.png"> 
						<span>Email</span>
					</a>
				</div>
			</div>
		</div>
		<div class="schiri_sub_footer_2">
			<div class="schiri_container">
				<!--<div class="schiri_social_icon">
					<a href="#"><img src="img/github.png"></a>
					<a href="#"><img src="img/linkedin.png"></a>
				</div>-->
			</div>
		</div>	
		<a href="#top"><div class="schiri_btn_return_back"><img src="img/next.png"></div></a>
	</body>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/modal.js"></script>
	<script type="text/javascript" src="js/progress.js"></script>
	
	<?php if(basename($_SERVER['PHP_SELF'])=="viaggi.php"): ?>
		
		<script type="text/javascript" src="js/owl.carousel.min.js"></script>
		<script type="text/javascript" src="js/plugin.js"></script>	
	
	<?php endif; ?>	
	
	<script type="text/javascript">
	
	</script>
</html>