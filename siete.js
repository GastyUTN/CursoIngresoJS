function mostrar()
{	
	var nombre
	var sexo
	var nota
	var contador=0
	var notaBaja
	var promedio
	var sexoNotaBaja
	var cantidadVarones=0
	var acumuladorNota=0
	

	while(contador<5)
	{
		contador++
		nombre=prompt("ingrese un nombre")
		sexo=prompt("ingrese un sexo")

		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("ingrese un sexo")

		}
		nota=prompt("ingrese la nota")
		nota=parseInt(nota)

		while(isNaN(nota) || nota<0 || nota>10)
		{
		nota=prompt("ingrese la nota")
		nota=parseInt(nota)

		}
		

		if(contador==1)
		{
			notaBaja=nota
			sexoNotaBaja=sexo
			cantidadVarones

		}
		else if(nota<notaBaja)
		{
			notaBaja=nota
			sexoNotaBaja=sexo


		}
		if(sexo=="m" && nota>5)
		{
			cantidadVarones++

		}
		acumuladorNota+=nota
			

		
	}
		 
		 
	promedio=acumuladorNota/contador

	alert( "el promedio de las notas es:" + promedio)
	alert(  "la nota mas baja" + notaBaja + " " + "y el sexo de la perosa es:"  + sexoNotaBaja)
	alert( "la cantidad de varones q su nota haya sido mayor a 6 es:" + cantidadVarones)



}
