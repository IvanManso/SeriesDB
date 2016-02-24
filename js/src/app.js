$(document).ready(function(){//Cuando la página se ha cargado por completo

	$(".auto-focus").focus();//ponemos el foco en el primer input

	$("form").on("submit", function(){ //cuando se intente enviar
		var title = $.trim($("#title").val());
		if(title == ""){ //validación del título
			alert("El título no puede ser vacío");
			return false;
		}

		var url = $.trim($("#cover_url").val());
		var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ig;

		if( url !="" && pattern.test(url) == false){
			alert("La url no es válida");
			return false;
		}

		//validación de categorías
		var selectedCategories = $('input[name="category"]:checked');
		if(selectedCategories.length == 0){
			alert("Selecciona al menos una categoría");
		}

		return true; //jquery cancela el envío del formulario

	});


});