var app = angular.module("calculatorApp",[]);
	app.controller("CalcCtrl",CalcCtrl);
	function CalcCtrl(){
		
		this.result = 0;
		
		this.buttonClicked = function(option){
			this.selectedOperation = option;
			
			if(this.selectedOperation=="!"||this.selectedOperation=="1/x"||this.selectedOperation=="^2"){
				document.querySelector('.secondInput').style.display = 'none';
			}else{
				document.querySelector('.secondInput').style.display = '';
			}

		}
		
		this.computeResult = function(){
			var number1 = parseFloat(this.input1);
			var number2 = parseFloat(this.input2);
			console.log(this.input1);
			console.log(this.input2);
			
			if(this.selectedOperation=="+")
				this.result = number1 + number2;
			
			if(this.selectedOperation=="-")
				this.result = number1 - number2;
			
			if(this.selectedOperation=="x")
				this.result = number1 * number2;
			
			if(this.selectedOperation=="/")
				this.result = number1 / number2;
			
			if(this.selectedOperation=="%")
					this.result = number1 % number2;
				
			if(this.selectedOperation=="!")
				this.result = -(number1);
				
			if(this.selectedOperation=="1/x")
				this.result = 1 / number1;
			
			if(this.selectedOperation=="^2")
				this.result = number1 * number1;
			
				
		}
	}