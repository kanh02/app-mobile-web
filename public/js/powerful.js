

fetch("https://api.jsonbin.io/b/5b977d6fd6fe677c48d896d6", {
	method: "GET",

}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw new Error(response.statusText);
}).then(function (json) {
	data = json.play
	console.log(data);

	lista();
	table1();
	lista2();
	filtro();
	f1();
	f2();
	f3();
	f4();
	f5();
	f6();
//	button();

}).then(function () {

}).catch(function (error) {
	console.log("Request failed: " + error.message);
})


///////////////////////////////////////////////funciones/////////////////////////////////////////////////////////


function lista() {
	var list = document.getElementById("myUL");
	for (var a = 0; a < data.length; a++) {
		var complete = document.createElement("li");

		complete.setAttribute("data-time", data[a].hora)
		complete.setAttribute("data-date", data[a].fecha)
		complete.setAttribute("data-location", data[a].direccion)
		complete.setAttribute("data-name", data[a].equipo1.nombre)
		complete.setAttribute("data-name2", data[a].equipo2.nombre)

		complete.textContent = data[a].equipo1.nombre + " VS " + data[a].equipo2.nombre;

		list.appendChild(complete);
	}
}


function table1() {

	var click = document.getElementById("myUL");

	click.onclick = function () {
		
//falta el onclick que borre la tabla de arriba//
		var list = document.getElementById("list");
		list.innerHTML= "";

		var z = event.target.getAttribute("data-date");

		console.log(z)
		
		var equip = document.createElement("li");
		var equip2 = document.createElement("li");
		var date = document.createElement("li");
		var site = document.createElement("li");
		var time = document.createElement("li");


		equip.textContent = event.target.getAttribute("data-name");
		list.appendChild(equip);

		equip2.textContent = event.target.getAttribute("data-name2");
		list.appendChild(equip2);

		date.textContent = event.target.getAttribute("data-date");
		list.appendChild(date);

		site.textContent = event.target.getAttribute("data-location");
		list.appendChild(site)

		time.textContent = event.target.getAttribute("data-time");
		list.appendChild(time);

	}
	/////////pendiente el remove///////////////

}

function lista2() {

	var list = document.getElementById("list1");
	var list2 = document.getElementById("list2");

	for (var a = 0; a < data.length; a++) {

		var lista = document.createElement("li");
		var listaul = document.createElement("ul");

		var lista2 = document.createElement("li");
		var listaul2 = document.createElement("ul");

		lista.textContent = data[a].equipo1.nombre + " " + data[a].fecha;
		lista2.textContent = data[a].equipo2.nombre + " " + data[a].fecha;


		for (var d = 0; d < data[a].equipo1.jugadores.length; d++) {

			var jugadores = document.createElement("li");
			jugadores.textContent = data[a].equipo1.jugadores[d].nombre + " " + data[a].equipo1.jugadores[d].posicion;
			listaul.appendChild(jugadores);
		}
		lista.appendChild(listaul);


		for (var f = 0; f < data[a].equipo2.jugadores.length; f++) {

			var jugadores2 = document.createElement("li");
			jugadores2.textContent = data[a].equipo2.jugadores[f].nombre + " " + data[a].equipo2.jugadores[f].posicion;
			listaul2.appendChild(jugadores2);
		}
		lista2.appendChild(listaul2);




		list.appendChild(lista);
		list2.appendChild(lista2);
	}
}

////////////////////////////filtro//////////////////////////////////////////////

function filtro() {

	var input = document.getElementById("search");
	var filter = input.value.toUpperCase();
	var table = document.getElementById("myUL");
	var tr = table.getElementsByTagName("li");
	for (var i = 0; i < tr.length; i++) {
		if (tr[i]) {
			if (tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

/////////////////////////////show and hide//////////////////////////////////////////////////

function f1() {
	var x = document.getElementById("primer");
	var z = document.getElementById("botmenu");

	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}

function f2() {
	var x = document.getElementById("segundo");
	var z = document.getElementById("botmenu");

	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}

function f3() {
	var x = document.getElementById("tercero");
	var z = document.getElementById("botmenu");


	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}

function f4() {
	var x = document.getElementById("cuarto");
	var z = document.getElementById("botmenu");


	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}

function f5() {
	var x = document.getElementById("quinto");
	var z = document.getElementById("botmenu");

	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}

function f6() {
	var x = document.getElementById("info");
	var z = document.getElementById("botmenu");


	if (x.style.display === "none" && z.style.display === "block") {
		x.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		z.style.display = "block";
	}
}
function button(){
	var z = document.getElementById("botmenu");
	if(z.style.display === "none")
		z.style.display = "block";
	else{
		z.style.display = "none";
	}
}
