function mostrar()
{
	var numero
	var numPares=0
	var contador

	

	numero=prompt("ingrese un numero")
	nuumero=parseInt(numero)


	for(contador=numero;contador>0;contador--)
	{
		if(contador%2==0)
	{			
		
		document.write(" "+contador+" ")
		numPares++
		}
	
		
	}
		document.write("la cantidad de pares" +numPares)





}//FIN DE LA FUNCIÓN