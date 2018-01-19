var app = angular.module("todoApp",[]);
	app.controller("todoController",TodoCntrl);

	function TodoCntrl ($scope) {
		this.status = false;
		this.nameBtnEdit = "Edit";
		this.todos = [
			"Apri editor",
			"Scrivi HTML e CSS",
			"Visualizza la pagina sul browser"
		];

		this.addNewTodo = function(){
			this.todos.push(this.newTodo);
			this.check_item = false;
		}
		this.editMode = function(){
			if (this.status==true){
				this.nameBtnEdit = "Edit";
				this.status = false;
			}
			else{ 
				this.nameBtnEdit = "Done";
				this.status = true;
			}
		}

		this.deleteTodo = function(index){
			this.todos.splice(index,1);
			if(this.todos.length<=0)
				this.check_item = true;
			else{
				this.check_item = false;
			}
		}
	}