function mostrar()
{
	var precio
	var descuento
	var precioDescuento
	var descuentoDinero
	var iva
	var ivaDescuento


	precio=prompt("ingrese el precio")
	precio=parseInt(precio)

	descuento=prompt("ingrese el descuento")
	descuento=parseInt(descuento)


	descuentoDinero=precio*descuento/100
	precioDescuento=descuentoDinero+precio
	iva=precioDescuento*0.21

		alert("el descuento en dinero es" + descuentoDinero + " " + "el precio con descuento es" + precioDescuento + " " + " el iva es" + iva)

		ivaDescuento=precioDescuento+iva

	document.getElementById('elPrecioFinal').value=ivaDescuento





}
