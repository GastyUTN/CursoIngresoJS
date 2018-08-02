function mostrar()
{
	var numero
	var numdivisores=0
	var contador

	

	numero=prompt("ingrese un numero")
	nuumero=parseInt(numero)


	for(contador=1;contador<=numero;contador++)
	{
		if(numero % contador == 0)
	{			
		
		document.write(" "+contador+" ")
		numdivisores++
		}
	
		
	}
		document.write("los divisores son " +numdivisores)






}//FIN DE LA FUNCIÓN