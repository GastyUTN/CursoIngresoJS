function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero
	var promedio
	var sumaAcumulada

	
	while(contador<5)
	{
		numero=prompt("ingrese un numero")
		contador++
		numero=parseInt(numero)
		acumulador+=numero



	}


document.getElementById('suma').value=acumulador
document.getElementById('promedio').value=acumulador/5
}//FIN DE LA FUNCIÓN