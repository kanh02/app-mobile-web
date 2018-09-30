document.getElementById("login").addEventListener("click", login);
document.getElementById("logout").addEventListener("click", logout);
document.getElementById("submitmsg").addEventListener("click", writeNewPost);

var user = firebase.auth().currentUser;


fetch("https://api.myjson.com/bins/bv1v8", {
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

}).then(function () {

}).catch(function (error) {
	console.log("Request failed: " + error.message);
})

var btn = document.getElementById("chatbtn");
btn.addEventListener("click", showChat);

function showChat() {
	var menu = document.getElementById("botmenu");
	var chat = document.getElementById("chatsection");
	menu.style.display = "none";
	chat.style.display = "block";

}

//////////////////////////////////////////////////funciones///////////////////////////////////////////////////////////

function lista() {
	var list = document.getElementById("myUL");
	for (var a = 0; a < data.length; a++) {
		var complete = document.createElement("li");

		complete.setAttribute("data-time", data[a].hora)
		complete.setAttribute("data-date", data[a].fecha)
		complete.setAttribute("data-location", data[a].direccion)
		complete.setAttribute("data-name", data[a].equipo1.nombre)
		complete.setAttribute("data-name2", data[a].equipo2.nombre)
		complete.setAttribute("data-url", data[a].url)

		complete.textContent = data[a].equipo1.nombre + " VS " + data[a].equipo2.nombre;

		list.appendChild(complete);
	}
}

function table1() {

	var click = document.getElementById("myUL");
	click.onclick = function () {

		var list = document.getElementById("list");
		list.innerHTML = "";
		var z = event.target.getAttribute("data-date");
		console.log(z)

		var map = document.getElementById("mapa");
		var equip = document.createElement("li");
		var equip2 = document.createElement("li");
		var date = document.createElement("li");
		var site = document.createElement("li");
		var time = document.createElement("li");


		equip.textContent = event.target.getAttribute("data-name");
		equip2.textContent = event.target.getAttribute("data-name2");
		date.textContent = event.target.getAttribute("data-date");
		time.textContent = event.target.getAttribute("data-time");
		site.textContent = event.target.getAttribute("data-location");
		map.src = event.target.getAttribute("data-url");
		
		
		document.getElementById("primer").style.display = "none";
		
		
		list.appendChild(equip);
		list.appendChild(equip2);
		list.appendChild(date);
		list.appendChild(time);
		list.appendChild(site);
		list.style.display = "block";
		document.getElementById("dinamical").style.display="block";

	}
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

///////////////////////////////////////////////////////filtro//////////////////////////////////////////////////////////

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

////////////////////////////////////////////////show and hide//////////////////////////////////////////////////

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

function showlist(){
 var lis =document.getElementById("dinamical");
 var lisd =document.getElementById("myUL");
	if(lis.style.dislay = "block"){
	   lisd.style.dislay = "none";
	}
}

function button() {
	var z = document.getElementById("botmenu");

	var a = document.getElementById("primer");
	var b = document.getElementById("segundo");
	var c = document.getElementById("tercero");
	var d = document.getElementById("cuarto");
	var e = document.getElementById("quinto");
	var g = document.getElementById("info");
	var h = document.getElementById("list");
	var i = document.getElementById("chatsection");
	var j = document.getElementById("dinamical");

	z.style.display = "block";
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "none";
	e.style.display = "none";
	g.style.display = "none";
	h.style.display = "none";
	i.style.display = "none";
	j.style.display = "none";
}

var btn = document.getElementById("chatbtn");
btn.addEventListener("click", showChat);

function showChat() {
	var menu = document.getElementById("botmenu");
	var chat = document.getElementById("chatsection");
	var a = document.getElementById("primer");
	var b = document.getElementById("segundo");
	var c = document.getElementById("tercero");
	var d = document.getElementById("cuarto");
	var e = document.getElementById("quinto");
	var g = document.getElementById("info");
	var h = document.getElementById("list");
	var i = document.getElementById("dawn");
	
	menu.style.display = "none";
	chat.style.display = "block";
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
	d.style.display = "none";
	e.style.display = "none";
	g.style.display = "none";
	h.style.display = "none";
	i.style.display = "none";

}

///////////////////////////////////////////////////////chat////////////////////////////////////////////////////

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		getPosts();
	} else {
		var posts = document.getElementById("posts");
		posts.innerHTML = "";

	}
});

function login() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then(function () {
			console.log(firebase.auth());
		})
		.catch(function () {
			alert("Something went wrong");
		});
}

function logout() {

	firebase.auth().signOut()
		.then(function () {})
		.catch(function (error) {});
}

function writeNewPost() {

	var text = document.getElementById("textInput").value;

	var date = new Date();
	var date1 = date.getHours();
	var date2 = date.getMinutes();
	if (date2 < 10) {
		date2 = "0" + date2;
	}
	var p = ":";
	var fecha = date1 + p + date2;


	if (firebase.auth().currentUser == null) {
		alert(" little grasshopper login ^_^");
	} else {

		var userName = firebase.auth().currentUser.displayName;
		var post = {
			name: userName,
			body: text,
			date: fecha
		};

		var newPostKey = firebase.database().ref().child('general').push().key;

		var updates = {};
		updates[newPostKey] = post;

		document.getElementById("textInput").value = "";
		return firebase.database().ref('general').update(updates);
	}
}

function getPosts() {

	if (firebase.auth().currentUser == null) {
		alert("you must be logued");
	} else {

		firebase.database().ref('general').on('value', function (data) {
			var posts = document.getElementById("posts");
			posts.innerHTML = "";

			var messages = data.val();

			for (var key in messages) {

				var text = document.createElement("div");
				var name = document.createElement("h4");
				var date = document.createElement("h4");

				var element = messages[key];


				if (firebase.auth().currentUser.displayName == element.name) {
					text.setAttribute("class", "local");

				} else if (firebase.auth().currentUser.displayName != element.name) {
					text.setAttribute("class", "guest");
				}

				date.append(element.date);
				name.append(element.name);

				text.append(name);
				text.append(element.body);
				text.append(date);
				posts.append(text);


			}
		})
	}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//function updateScroll() {
//       var element = document.getElementById("post");
//       var elementHeight = element.scrollHeight;
//       element.scrollTop = elementHeight
//}
