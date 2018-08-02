function mostrar()
{
	var numero
	var aa=0
	var contador

	

	numero=prompt("ingrese un numero")
	nuumero=parseInt(numero)


	for(contador=1;contador<(numero+1);contador++)
	{
		if(numero % contador == 0)
	{			
		
				aa++

		}
	
	}

			if(aa>2)
		{
			alert(" no es primo")
		}
			else
			{	
				alert(" es primo")

			}
		






}//FIN DE LA FUNCIÓN