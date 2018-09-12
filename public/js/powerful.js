//console.log(data)

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
	
				table1();
				table2();
				filtro();
		

			}).then(function () {

			}).catch(function (error) {
				console.log("Request failed: " + error.message);
			})


///////////////////////////////////////////////funciones/////////////////////////////////////////////////////////



function table1(){
	var table =document.getElementById("table");

	for(var x = 0; x < data.length; x++){
		var tr = document.createElement("tr");
		
		var equip=document.createElement("td");
		equip.textContent=data[x].equipo1.nombre;
		tr.appendChild(equip);
		
		var equip2=document.createElement("td");
		equip2.textContent=data[x].equipo2.nombre;
		tr.appendChild(equip2);
		
		var date=document.createElement("td");
		date.textContent=data[x].fecha;
		tr.appendChild(date);
		
		var site=document.createElement("td");
		site.textContent=data[x].direccion;
		tr.appendChild(site)
		
		var time=document.createElement("td");
		time.textContent=data[x].hora;
		tr.appendChild(time);
		table.appendChild(tr)
		
	}
}
function table2(){
	
	var table= document.getElementById("table2");
	for(var a = 0; a < data.length; a++){
		var tr =document.createElement("tr");
		var tr2 =document.createElement("tr");
		var tr3 =document.createElement("tr");
		var tr4 =document.createElement("tr");
		var versus= document.createElement("tr");
		var versuspos= document.createElement("tr");
		
		var ver =document.createElement("td");
		var fech =document.createElement("td");
		
		var Name =document.createElement("td");
		var Position  =document.createElement("td");
		var Versus =document.createElement("td");
		var Position2 =document.createElement("td");
		var VersusTeam =document.createElement("td");
		var Fecha =document.createElement("td");
		
		Name.textContent="Player";
		tr.appendChild(Name);
		
		Position.textContent="Position";
		tr2.appendChild(Position);
		
		Versus.textContent="Versus PLayer";
		tr3.appendChild(Versus);
		
		Position2.textContent="Position";
		tr4.appendChild(Position2);
		
		VersusTeam.textContent="Team Oponent"
		versus.appendChild(VersusTeam);
		
		Fecha.textContent="Date";
		versuspos.appendChild(Fecha);
		
		ver.textContent=data[a].equipo2.nombre;
		versus.appendChild(ver);
		
		fech.textContent = data[a].fecha;
		versuspos.appendChild(fech);
	
		for( var d =0; d< data[a].equipo1.jugadores.length; d++ ){
			
			var nametd = document.createElement("td");
			nametd.textContent=data[a].equipo1.jugadores[d].nombre;
			tr.appendChild(nametd);
			
			var positd = document.createElement("td");
			positd.textContent=data[a].equipo2.jugadores[d].posicion;
			tr2.appendChild(positd);
		}
		for( var f =0; f< data[a].equipo2.jugadores.length; f++ ){
			var nametd2 = document.createElement("td");
			nametd2.textContent=data[a].equipo2.jugadores[f].nombre;
			tr3.appendChild(nametd2);
			
			var positd2 = document.createElement("td");
			positd2.textContent=data[a].equipo2.jugadores[f].posicion;
			tr4.appendChild(positd2);
			
		}
		table.appendChild(tr);
		table.appendChild(tr2);
		table.appendChild(tr3);
		table.appendChild(tr4);
		table.appendChild(versus);
		table.appendChild(versuspos);
		}
}




function filtro() {
  
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
 





















// Side navigation
//function w3_open() {
//    var x = document.getElementById("mySidebar");
//    x.style.width = "100%";
//    x.style.fontSize = "40px";
//    x.style.paddingTop = "10%";
//    x.style.display = "block";
//}
//function w3_close() {
//    document.getElementById("mySidebar").style.display = "none";
//}
//
//
//
//
//
//
//

//
//// Tabs
//function openCity(evt, cityName) {
//  var i;
//  var x = document.getElementsByClassName("city");
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//  }
//  var activebtn = document.getElementsByClassName("testbtn");
//  for (i = 0; i < x.length; i++) {
//      activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
//  }
//  document.getElementById(cityName).style.display = "block";
//  evt.currentTarget.className += " w3-dark-grey";
//}
//
//var mybtn = document.getElementsByClassName("testbtn")[0];
//mybtn.click();
//
//// Accordions
//function myAccFunc(id) {
//    var x = document.getElementById(id);
//    if (x.className.indexOf("w3-show") == -1) {
//        x.className += " w3-show";
//    } else { 
//        x.className = x.className.replace(" w3-show", "");
//    }
//}
//
//// Slideshows
//var slideIndex = 1;
//
//function plusDivs(n) {
//slideIndex = slideIndex + n;
//showDivs(slideIndex);
//}
//
//function showDivs(n) {
//  var x = document.getElementsByClassName("mySlides");
//  if (n > x.length) {slideIndex = 1}    
//  if (n < 1) {slideIndex = x.length} ;
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//  }
//  x[slideIndex-1].style.display = "block";  
//}
//
//showDivs(1);
//
//// Progress Bars
//function move() {
//  var elem = document.getElementById("myBar");   
//  var width = 5;
//  var id = setInterval(frame, 10);
//  function frame() {
//    if (width == 100) {
//      clearInterval(id);
//    } else {
//      width++; 
//      elem.style.width = width + '%'; 
//      elem.innerHTML = width * 1  + '%';
//    }
//  }
//}