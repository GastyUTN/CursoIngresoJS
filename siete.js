function mostrar()
{
	var nombre
	var sexo
	var edad 
	var nota
	var peorNota
	var sexoPeorNota
	var vieje
	var nombreViejo
	var chico
	var notaChico
	var contador=0

	
	while(contador<6)
	{
		contador++
		nombre=prompt("ingrese un nombre")
		sexo=prompt("ingrese un sexo")
		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("ingrese un sexo")

		}
		edad=prompt("ingrese la edad")
		edad=parseInt(edad)
		
	while(edad<0 || edad>100)
	{
		edad=prompt("ingrese la edad")
		edad=parseInt(edad)
		

		}
		nota=prompt("ingrese la nota")
		nota=parseInt(nota)
	while(nota<0 || nota>10)
	{
		nota=prompt("ingrese la nota")
		nota=parseInt(nota)

		}
		if(contador==1)
		{
			peorNota=nota
			sexoPeorNota=sexo
			vieje=edad
			nombreViejo=nombre
			chico=edad
			notaChico=nota
		 }
		else if(nota<peorNota)
		{
			peorNota=nota
			sexoPeorNota=sexo

		}
		else if(edad>vieje)
		{
			vieje=edad
			nombreViejo=nombre

		}
		else if(edad<chico)
		{
			chico=edad
			notaChico=nota

		}

		}

		document.write("el sexo peorNota :"+sexoPeorNota)
		document.write("nombre del mas vieje :"+nombreViejo)
		document.write("nota del mas chico:"+notaChico)



		


	
	 }
