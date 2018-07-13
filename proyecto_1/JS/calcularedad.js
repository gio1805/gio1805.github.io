function calcularEdad() 
{
	console.log("Entrando a Calcular edad")
	var campo = document.getElementById("anyoN");
	var campo2 = document.getElementById("anyoactual")
	var anyoNacimiento = Number(campo.value);
	var anyoactual = Number(campo2.value);
	var edad = anyoactual - anyoNacimiento;
	var campoR = document.getElementById("resultado");
	campoR.value = edad;
	var textoMayor = document.getElementById("mayormenor");

	console.log(edad)

	if (edad<18) 
	{
		textoMayor.innerHTML="Eres Menor de Edad"
		console.log("Usted es menor de Edad");
	}
	else if (edad>18)
	{
		textoMayor.innerHTML="Eres Mayor de Edad"
		console.log("Usted es mayor de edad")
	}


	
}