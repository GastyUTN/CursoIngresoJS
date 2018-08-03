
function mostrar()
{
	var base
	var altura
	var perimetro

	base=prompt("ingrese la base")
	altura=prompt("ingrese la altura")
	base=parseInt(base)
	altura=parseInt(altura)

	superficie=(base*altura)/2
	perimetro=base*3


	alert("la superficie es"+ superficie + "el perimetro es"+perimetro)


}
