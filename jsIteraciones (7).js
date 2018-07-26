function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero

	



	while(respuesta=="si")
	{
		numero=prompt("ingrese un numero")
		contador++
		respuesta=prompt("qieres segir")
		numero=parseInt(numero)
		acumulador+=numero



	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN