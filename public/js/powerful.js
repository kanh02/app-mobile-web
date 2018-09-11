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
		

			}).then(function () {

			}).catch(function (error) {
				console.log("Request failed: " + error.message);
			})






function table1(){
	var table =document.getElementById("table");
//		var equipo1 = document.createElement("tr");
//		var equipo2 = document.createElement("tr");
//		var fecha = document.createElement("tr");
//		var tiempo = document.createElement("tr");
//		var sitio = document.createElement("tr");
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
		var ver =document.createElement("td");
		var fech =document.createElement("td");
	
	
	for(var a = 0; a < data.length; a++){
		var tr =document.createElement("tr");
//		var fecha = document.createElement("tr");
//		var nametr = document.createElement("tr");
//		var nametr2 = document.createElement("tr");
//		var versus= document.createElement("tr");
		
		
		ver.textContent=data[a].equipo2.nombre;
		tr.appendChild(ver);
		
		fech.textContent = data[a].fecha;
		tr.appendChild(fech);
		
		for( var d =0; d< data[a].equipo1.jugadores.length; d++ ){
			
			var nametd = document.createElement("td");
			nametd.textContent=data[a].equipo1.jugadores[d].nombre;
			tr.appendChild(nametd);
			
			var positd = document.createElement("td");
			positd.textContent=data[a].equipo2.jugadores[d].posicion;
			tr.appendChild(positd);
			
		}
		
		for( var f =0; f< data[a].equipo2.jugadores.length; f++ ){
			
			var nametd2 = document.createElement("td");
			nametd2.textContent=data[a].equipo2.jugadores[f].nombre;
			tr.appendChild(nametd2);
			
			var positd2 = document.createElement("td");
			positd2.textContent=data[a].equipo2.jugadores[f].posicion;
			tr.appendChild(positd2);
			
			
			
			
			
			
			
			
		}
		table.appendChild(tr);
//		table.appendChild(nametr);
//		table.appendChild(nametr2);
//		table.appendChild(fecha);
//		table.appendChild(versus);
		}
}




//
//
// 	function filter (){
//	 
//	 	var selec = document.getElementById("Search");
//		var fil= selec.value.toUpperCase();
//		
//	 
//	 console.log(selec);
//	 for(var x = 0; x < data.length; x ++){
//		 var a = data[x];
//		 if(data[x].indexOf(fil)>-1){
//			 data[x].style.display="";}
//		 else if(data[x].style.display = "none"){
//			 
//		 }
//		 }
//		 
//		 console.log(data)
//	 }
//		
//	

 





















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