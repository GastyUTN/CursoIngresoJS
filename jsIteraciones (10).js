function Mostrar()
{

	var contador=0;
	var numero
	var negativo=0
	var positivo=0
	var cantNeg=0
	var cantPos=0
	var cantCeros=0
	var cantPares=0
	var promNeg
	var promPos
	var diferencia

	var respuesta="si";

	while(respuesta!="no")
	{

		numero=prompt("ingrese un numero")
		numero=parseInt(numero)

		
		if(numero<0)
		{
			negativo+=numero
			cantNeg++
		}
		else if(numero>0)
		{
			positivo+=numero
			cantPos++
		}
		else if(numero==0)
		{
			cantCeros++
		}
		else (numero %2==0  && numero!=0)
		{
			cantPares++
		}


		

		respuesta=prompt("ingrese no para salir")
		
	}
		promNeg=negativo/cantNeg
		promPos=positivo/cantPos
		diferencia=negativo+positivo
	


	document.write("la suma de los negativo es:"+ negativo)
	document.write("la suma de los positivo es:"+ positivo)
	document.write("la cantidad de los negativo es:"+ cantNeg)
	document.write("la cantidad de los positivo es:"+ cantPos)
	document.write("la cantidad de los ceros es:"+ cantCeros)
	document.write("la cantidad de numero pares es:"+ cantPares)
	document.write("el promedio de negativo es:"+ promNeg)
	document.write("el promedio de positivo es:"+ promPos)
	document.write("LA Diferencia es :"+ diferencia)




}//FIN DE LA FUNCIÓN