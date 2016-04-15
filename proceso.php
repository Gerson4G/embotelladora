 <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Embotelladora GM</title>

	<link rel="stylesheet" type="text/css" href="styles/style.css">
  <link rel="stylesheet" type="text/css" href="styles/styles.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
  <script type="text/javascript" src="js/proceso.js"></script>
</head>

<body>

	<section class="container">

	<article class="controls">
    <div class="process_state">
      <h2>Estado del proceso:</h2>
      <h3 id="state">Esperando inicio</h3>
    </div>
    <div class="tobor">
		<button onclick="start_process()" class="start">Iniciar</button>
		<button onclick="stop_process()" class="stop">Detener</button>
		<p >Botellas en proceso: <text id="botellas_procesando"></text></p>
		<p>Cajas despachadas: <text  id="cajas_despachadas"></text> </p>

		<div class="speed-control">
		<h4>Velocidad de procesos</h4>
    <h3 id="speed"></h3>
    <div class="arrows">
  		<a onclick="speedDown()"href="#"><img class="down" src="images/down.png"></a>
  		<a onclick="speedUp()" href="#"><img class="up" src="images/up.png"></a>
    </div>
		</div>
    </div>
	</article>


	<article class="process">
		<ul class="menu">
			<li id="item1"><a class="Procesosmenu" href="#">Proceso 1</a></li>
			<li id="item2"><a class="Procesosmenu" href="#">Proceso 2</a></li>
			<li id="item3"><a class="Procesosmenu" href="#">Proceso 3</a></li>
			<li id="item4"><a class="Procesosmenu" href="#">Proceso 4</a></li>
			<li id="item5"><a class="Procesosmenu" href="#">Proceso 5</a></li>
			<li id="item6"><a class="Procesosmenu" href="#">Proceso 6</a></li>
			<li id="item7"><a class="Procesosmenu" href="#">Proceso 7</a></li>
			<li id="item8"><a class="Procesosmenu" href="#">Proceso 8</a></li>
		</ul>
    <div class="proceso">
    <div id="proceso1" class="proceso1">
      <img id="botella_1_1" src="images/botella.png" alt="">
      <img id="botella_1_2" src="images/botella.png" alt="">
      <img id="botella_1_3" src="images/botella.png" alt="">
      <img id="cinta_1_1"src="images/cinta.png" alt="">
      <img id="cinta_1_2"src="images/cinta.png" alt="">
      <img id="maquina_1_1"src="images/maquina.png" alt="">
    </div>
    <div id="proceso2" class="proceso2">
      <img id="botella_2_1" src="images/botella.png" alt="">
      <img id="botella_2_2" src="images/botella.png" alt="">
      <img id="botella_2_3" src="images/botella.png" alt="">
      <img id="tapa_2_1" src="images/tapa.png" alt="">
      <img id="tapa_2_2" src="images/tapa.png" alt="">
      <img id="tapa_2_3" src="images/tapa.png" alt="">
      <img id="cinta_2_1"src="images/cinta.png" alt="">
      <img id="cinta_2_2"src="images/cinta.png" alt="">
      <img id="maquina_2_1"src="images/maquina.png" alt="">
    </div>
    <div id="proceso3" class="proceso3">
      <img id="botella_3_1" src="images/botella_tapada.png" alt="">
      <img id="botella_3_2" src="images/botella_tapada.png" alt="">
      <img id="botella_3_3" src="images/botella_tapada.png" alt="">
      <img id="etiqueta_3_1" src="images/etiqueta.png" alt="">
      <img id="etiqueta_3_2" src="images/etiqueta.png" alt="">
      <img id="etiqueta_3_3" src="images/etiqueta.png" alt="">
      <img id="cinta_3_1"src="images/cinta.png" alt="">
      <img id="cinta_3_2"src="images/cinta.png" alt="">
      <img id="maquina_3_1"src="images/maquina.png" alt="">
    </div>
    <div id="proceso4" class="proceso4">
      <img id="botella_4_1" src="images/botella_final.png" alt="">
      <img id="botella_4_2" src="images/botella_final.png" alt="">
      <img id="botella_4_3" src="images/botella_final.png" alt="">
      <img id="cinta_4_1"src="images/cinta.png" alt="">
      <img id="cinta_4_2"src="images/cinta.png" alt="">
      <img id="cinta_4_3"src="images/cinta.png" alt="">
      <img id="cinta_4_4"src="images/cinta.png" alt="">
      <img id="maquina_4_1"src="images/tanque.png" alt="">
      <img id="maquina_4_2"src="images/tanque.png" alt="">
      <img id="maquina_4_3"src="images/tanque.png" alt="">
      <div id="etiqueta_tanque"><h3>El porcentaje del tanque es: </h3><br><h3 id="lleno_tanque"></h3><h3>%</h3></div>
    </div>
      <div id="proceso5" class="proceso5">
      <img id="botella_5_1" src="images/botella_top.png" alt="">
      <img id="botella_5_2" src="images/botella_top.png" alt="">
      <img id="botella_5_3" src="images/botella_top.png" alt="">
      <img id="botella_5_4" src="images/botella_top.png" alt="">
      <img id="cinta_5_1" src="images/cinta_top.png" alt="">
      <img id="cinta_5_2" src="images/cinta_top.png" alt="">
      <img id="cinta_5_3" src="images/cinta_top.png" alt="">
      <img id="brazo_top" src="images/brazo_top.png" alt="">
      <img id="brazo_bot" src="images/brazo_bot.png" alt="">
    </div>
    <div id="proceso6" class="proceso6">
      <img id="botella_6_1" src="images/botella_tapada.png" alt="">
      <img id="botella_6_2" src="images/botella_tapada.png" alt="">
      <img id="botella_6_3" src="images/botella_tapada.png" alt="">
      <img id="cinta_6_1"src="images/cinta_diagonal.png" alt="">
      <img id="caja_6"src="images/caja.png" alt="">
      <img id="cinta_6_2"src="images/cinta.png" alt="">
      <img id="cinta_6_3"src="images/cinta.png" alt="">
    </div>
    <div id="proceso7" class="proceso7">
      <img id="caja_7"src="images/caja.png" alt="">
      <img id="cinta_7"src="images/cinta.png" alt="">
      <img id="selladora_cabeza"src="images/selladora_cabeza.png" alt="">
      <img id="selladora_cuerpo"src="images/selladora_cuerpo.png" alt="">
    </div>
     <div id="proceso8" class="proceso8">
      <img id="caja_8_1"src="images/caja.png" alt="">
      <img id="caja_8_2"src="images/caja.png" alt="">
      <img id="cinta_8"src="images/cinta_diagonal.png" alt="">
      <img id="camion"src="images/camion.png" alt="">
      <img id="fabrica"src="images/fabrica.png" alt="">
    </div>
    </div>

	</article>

	</section>

</body>

</html>
