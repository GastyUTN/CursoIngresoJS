function mostrar()
{
	var datoUno;
	var datoDos;
	var respuesta="si";
	var cantPares=0;
	var cantImpares=0;
	var cantCeros=0;
	var NumPositivos=0;
	var numNegativo=0;
	var numMax;
	var letraMax;
	var numMin;
	var letraMin;
	var acumuladorPositivos=0;
	var contador=0;
	var sumaNegativos;


while(respuesta!="no")
{
		contador++;
		datoUno=prompt("ingrese la letra");
		datoDos=prompt("ingrese el numero");
		datoDos=parseInt(datoDos);

	while(isNaN(datoDos)|| datoDos>100 || datoDos<0)
	{
			datoDos=prompt("ingrese el numero");
			datoDos=parseInt(datoDos);
	}
	 
	if(datoDos%2==0)
	{
		cantPares++;

	}
	else
	{
		cantImpares++;

	}
	if(datoDos==0)
	{

		cantCeros++;

	}
	if(datoDos>0)
	{

		NumPositivos++;

	}
	if(datoDos<0)
	{
		
		numNegativo++;
		sumaNegativos+=numNegativo;

	}
	if(contador==1)
	{
		
		numMax=datoDos;
		letraMax=datoUno;
		numMin=datoDos;
		letraMin=datoUno;

	}
	else if(datoDos>numMax)
	{
		numMax=datoDos;
		letraMax=datoUno;

	}
	else if(datoDos<numMin)
	{
		numMin=datoDos;
		letraMin=datoUno;

	}
	
	respuesta=prompt("ingrese no para no segir");
	
}
	
	 
	 acumuladorPositivos+=NumPositivos;
	 promedio=acumuladorPositivos/NumPositivos;
	
	document.write("la cantidad de numeros pares son"+ cantPares)

	document.write("<br>" +"la cantidad de numeros cantImpares son" + cantImpares)

	document.write("<br>" +"la cantidad de ceros  son"+ cantCeros)

	document.write("<br>" +"el primedio de los positivos es"+ promedio)

	document.write("<br>" +"la suma de todos los negativos es:" + sumaNegativos)

	document.write("<br>" +"el numero max es:" + numMax + " y la letra :" + letraMax)

	document.write("<br>" +"el numero min es:" + numMin + " y la letra :" + letraMin)



}
