window.addEventListener('load',function(){
	var calcular = document.getElementById('convertir');
	calcular.addEventListener('click',function () {

	var peso = parseFloat(document.getElementById('peso').value);
	var planeta =document.getElementById('planeta').value;
	var resultado;

 
	switch(planeta){
	case("Mercurio"): resultado = peso*2.78; break;
	case("venus"): resultado = peso*8.87; break;
	case("Tierra"): resultado = peso*9.78; break;
	case("Marte"): resultado = peso*3.72; break;

	}
	
 alert("Tu peso en "+planeta+" es: "+resultado);
});
});


