function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
	alert("abrigate q hace frio");
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert("ya pasamos el frio")
		break;
	default:
	alert("falta para el invierno")
		break;
}




}//FIN DE LA FUNCIÓN