function calcularPeso(){
	var peso = parseFloat(document.getElementById('peso').value);
	var planeta =document.getElementById('planetas').;
	var resultado;

 
	switch(planeta){
	case("mercurio"): resultado = peso*2.78; break;
	case("venus"): resultado = peso*8.87; break;
	case("tierra"): resultado = peso*9.78; break;
	case("marte"): resultado = peso*3.72; break;
	}
	
 alert("Tu peso en "+planeta+" es: "+resultado.toFixed(2));
}