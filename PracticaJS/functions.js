var a;
var b;
var resultado;

function suma(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	resultado = parseInt(a,10) + parseInt(b,10);

	document.getElementById("resultado").innerHTML = resultado;
	alert("Resultado: " + resultado);
}
			
function resta(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	resultado = parseInt(a,10) - parseInt(b,10);

	document.getElementById("resultado").innerHTML = resultado;
	document.write("Resultado: " + resultado);
}

function multiplicacion(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	resultado = parseInt(a,10) + parseInt(b,10);

	document.getElementById("resultado").innerHTML = resultado;
	console.log("Resultado: " + resultado);
}

function division(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	resultado = parseInt(a,10) + parseInt(b,10);

	document.getElementById("resultado").innerHTML = resultado;
}