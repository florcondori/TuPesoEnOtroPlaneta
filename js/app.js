var masa = parseFloat(document.getElementById("peso").value) / 9.8;
var planetaSolar = document.getElementById("sistemaSolar").value;
var msn = "";

switch(planetaSolar){
	case "Mercurio": peso = masa * 3.70; break;
	case "Venus": peso = masa * 8.87; break;
	case "Tierra": peso = masa * 9.80; break;
	case "Marte": peso = masa * 3.71; break;
	case "Jupiter": peso = masa * 23.12; break;
	case "Saturno": peso = masa * 8.96; break;
	case "Urano": peso = masa * 8.69; break;
	case "Neptuno": peso = masa * 11; break;
	case "Pluton": peso = masa * 0.81; break;
}
alert("Tu perso en  <b>" + planetaSolar + "</b> es: " + peso.toFixed(2));