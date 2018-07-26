function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numero

	while(respuesta=="si")
	{
		numero=prompt("ingrese un numero")
		contador++
		
		
	if(numero<0)
	{
		numero=parseInt(numero)
		negativo*=numero
	}

	else
	{
		numero=parseInt(numero)
		positivo+=numero
	}
	respuesta=prompt("qieres segir")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN