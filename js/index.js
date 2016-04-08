$(document).ready(function() {
writeBox();
writeBottle();
writeSpeed();
});

proceso_actual = 1;
tempo=1;
cajas_despachadas=0;
botellas_procesando=3;
speed=1000;
started=false;

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
	if(isStarted()==false){
	tempo=setInterval(move_process,speed);
	started=true;
	}
} 

function stop_process(){
	if(isStarted()==true){
	clearInterval(tempo);
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