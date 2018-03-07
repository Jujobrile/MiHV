
$(document).ready(function(){

	function ampliarInfo(texto_competencias, boton_competencias){
		var texto = document.getElementById(texto_competencias);
		var boton = document.getElementById(boton_competencias);

		if(texto.style.display == 'none' || texto.style.display == ''){
			$('#'+texto_competencias).show();
			$('#'+boton_competencias).text('Ver menos');
		}else{
			$('#'+texto_competencias).hide();
			$('#'+boton_competencias).text('Ver más');
		}
	}


	$('#botonCompetencias').on('click', function(e){
		ampliarInfo('texto_competencias', 'botonCompetencias');
	});

	$('#botonLenguajes').on('click', function(e){
		ampliarInfo('texto_lenguajes', 'botonLenguajes');
	});

	$('#botonIdiomas').on('click', function(e){
		ampliarInfo('texto_idiomas', 'botonIdiomas');
	});

});