


$(document).ready(function() {
writeBox();
writeBottle();
writeSpeed();
/*for (var i = 1; i < 9; i++) {
	$('#item'+i).click( function() { changeProcess(this.id); return false; } );
}*/

$("#item1").click(function(){
	changeProcess("item1");
});
$("#item2").click(function(){
	changeProcess("item2");
});
$("#item3").click(function(){
	changeProcess("item3");
});
$("#item4").click(function(){
	changeProcess("item4");
});
$("#item5").click(function(){
	changeProcess("item5");
});
$("#item6").click(function(){
	changeProcess("item6");
});
$("#item7").click(function(){
	changeProcess("item7");
});
$("#item8").click(function(){
	changeProcess("item8");
});

});

proceso_actual = 1;
tempo=1;
tempo2=1;
tempo3=1;
tempo4=1;
tempo5=1;
tempo6=1;
tempo7=1;
tempo8=1;
cajas_despachadas=0;
botellas_procesando=3;
speed=500;
started=false;

function showProcess(number){
	document.getElementById('proceso'+number).style.display="block";
	document.getElementById("item"+number).style.background="#e74c3c";

	for (var i = number+1; i < 8; i++) {
		document.getElementById('proceso'+i).style.display="none";
		document.getElementById("item"+i).style.background="#34495e";
	}
	for (var i = number-1; i > 0; i--) {
		document.getElementById('proceso'+i).style.display="none";
		document.getElementById("item"+i).style.background="#34495e";
	}
}

function changeProcess(process_number){

switch (process_number){
	case 'item1':
		showProcess(1);
		break;
	case 'item2':
			showProcess(2);
		break;
	case 'item3':
			showProcess(3);
		break;
	case 'item4':
			showProcess(4);
			break;
		break;
	case 'item5':
			showProcess(5);
		break;
	case 'item6':
			showProcess(6);
		break;
	case 'item7':
			showProcess(7);
			break;
	case 'item8':
			showProcess(8);
			break;
}


}

function isStarted(){
	return started;
}

function writeSpeed(){
	$ ("#speed").text(speed);
}

function speedDown(){

	speed+=200;
	writeSpeed();
	stop_process();
	start_process();

}

function speedUp(){
	if(speed>0){
	speed-=200;
	writeSpeed();
	stop_process();
	start_process();
	}
}

function writeBox() {
	$ ("#cajas_despachadas").text(cajas_despachadas);
}

function writeBottle(){
	$ ("#botellas_procesando").text(botellas_procesando);
}


function start_process(){
	$('#state').text("Funcionando");
	$('#state').css({
		"color":"green"
	});
 if(isStarted()==false){
	switch (proceso_actual) {
		case 1:
		/*$.ajax({
						type: "POST",
						url: "phpmodbus/read.php",
						success: function(data) {

							console.log(data);
						}
				});*/
				dataObj = {
	                led: 12290,
	                value: "false"
	              };

	              $.ajax({
	                  type: "POST",
	                  url: "phpmodbus/write.php",
	                  data: dataObj,
	                  success: function(data) {
	                      var dataRead = JSON.parse(data);
	                      changeValue(dataRead, type);
	                  },
	                  catch: function(err){
	                    console.log(err);
	                  }
	              });
	    document.getElementById("item8").style.background="#34495e";
	    	    document.getElementById('proceso8').style.display="none";
	    document.getElementById('proceso1').style.display="block";
      document.getElementById("item"+proceso_actual).style.background="#e74c3c";
      tempo=setInterval(checkBottle,speed);
			break;
		case 2:
		document.getElementById('proceso2').style.display="block";
		document.getElementById('proceso1').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
			tempo2=setInterval(cover,speed);
			break;
		case 3:
		document.getElementById('proceso2').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso3').style.display="block";
			tempo3=setInterval(tag,speed);
			break;
		case 4:
		document.getElementById('proceso3').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso4').style.display="block";
			tempo4=setInterval(fill,speed);
			break;
		case 5:
		document.getElementById('proceso4').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso5').style.display="block";
			tempo5=setInterval(pushing,speed);
			break;
		case 6:
		document.getElementById('proceso5').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso6').style.display="block";
		tempo6=setInterval(boxing,speed);
		break;
		case 7:
		document.getElementById('proceso6').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso7').style.display="block";
		tempo7=setInterval(sealing,speed);
		break;
		case 8:
		document.getElementById('proceso7').style.display="none";
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
		document.getElementById("item"+proceso_actual).style.background="#e74c3c";
		document.getElementById('proceso8').style.display="block";
		tempo8=setInterval(deliver,speed);
			break;
	}
	started=true;
	}
}

function stop_process(){
	if(isStarted()==true){
		$('#state').text("Detenido");
		$('#state').css({
			"color":"red"
		});
		switch (proceso_actual) {
			case 1:
				clearInterval(tempo);
				break;
			case 2:
				clearInterval(tempo2);
				break;
			case 3:
				clearInterval(tempo3);
				break;
			case 4:
				clearInterval(tempo4);
				break;
			case 5:
			clearInterval(tempo5);
				break;
			case 6:
				clearInterval(tempo6);
				break;
				case 7:
					clearInterval(tempo7);
					break;
				case 8:
					clearInterval(tempo8);
					break;
		}

	started=false;
	}
}

function move_process(){

	if(proceso_actual>1){
		document.getElementById("item"+(proceso_actual-1)).style.background="#34495e";
	}
	if(proceso_actual>8){ ///EMPIEZA EL RECORRIDO DE PROCESOS NUEVAMENTE
		proceso_actual=1;
		cajas_despachadas++;
		writeBox();
	}

	document.getElementById("item"+proceso_actual).style.background="#e74c3c";
	proceso_actual++;
}
