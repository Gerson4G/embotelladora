
//
 top_botella_1_1 = top_botella_2_1 = top_botella_3_1 = top_botella_4_1 = 6;
 left_botella_1_1 = left_botella_2_1 = left_botella_3_1 = -1;
 left_botella_1_2 = left_botella_2_2 = left_botella_3_2 = -3;
 left_botella_1_3 = left_botella_2_3 = left_botella_3_3 = -5;


//VARIABLES PROCESO 2

top_tapa_2_1 = 6;
left_tapa_2_1 = 0;
left_tapa_2_2 = 2;
left_tapa_2_3 = -2;

//VARIABLES PROCESO 3

 top_etiqueta_3_1 = 9;
 left_etiqueta_3_1 = 0;
 left_etiqueta_3_2 = 2;
 left_etiqueta_3_3 = -2;

///VARIABLES PROCESO 4
left_maquina_4_1 = 10;
left_maquina_4_2 = 15.5;
left_maquina_4_3 = 21;
top_maquina_4 = -7;

left_botella_4_1 = -1;
left_botella_4_2 = -6.3;
left_botella_4_3 = -11.8;

lleno_tanque=100;

//VARIABLES PROCESO 5
top_botella_5_1 = top_botella_5_2 = 2.5;
top_botella_5_3 = top_botella_5_4 = 16.5;
left_botella_5_1 = 0;
left_botella_5_2 = 3;
 left_botella_5_3 = 1.5;
left_botella_5_4 = 4.5;
top_brazo_top=-6;
top_brazo_bot=11;
already_pushed=false;
regresar_brazos=false;
regresando=0;

///VARIABLES PROCESO 6
top_botella_6_1 = top_botella_6_2 = top_botella_6_3=- 2.3;
left_botella_6_1 =4;
left_botella_6_2 =2;
left_botella_6_3=0;
cambio_cinta=false;
empacado=false;
left_caja_6=29;
bajar_botella_1=bajar_botella_2=bajar_botella_3=false;

//VARIABLES PROCESO 7
top_selladora=15; //cabeza
left_caja_7=22;
sellado=false;
regresando_selladora=1;
aux=false;
aux1=1;
movercaja7=true;

//VARIABLES PROCESO 8
top_caja_8_1 = 4.8;
top_caja_8_2 =6.7;
left_caja_8_1=14;
left_caja_8_2=17;
left_camion=25.5;

function checkBottle() {

  if(left_botella_1_3>=39){
  stop_process();
  proceso_actual++;
  start_process();
  }
  else{

  left_botella_1_1+=1;
  left_botella_1_2+=1;
  left_botella_1_3+=1;
  $("#botella_1_1").css({
    "left": left_botella_1_1+"em"
  })
  $("#botella_1_2").css({
    "left": left_botella_1_2+"em"
  })
  $("#botella_1_3").css({
    "left": left_botella_1_3+"em"
  })
 }
}

function cover(){

  if(left_botella_2_3>=39){
  stop_process();
  proceso_actual++;
  start_process();
  }

  left_botella_2_1+=1;
  left_botella_2_2+=1;
  left_botella_2_3+=1;
  left_tapa_2_1+=1;
  left_tapa_2_2+=1;
  left_tapa_2_3+=1;
  if(left_botella_2_1 == 21){
    $("#tapa_2_1").css({
      "display":"block"
    })
    $("#tapa_2_2").css({
      "display":"block"
    })
    $("#tapa_2_3").css({
      "display":"block"
    })
  }
  $("#botella_2_1").css({
    "left": left_botella_2_1+"em"
  })
  $("#botella_2_2").css({
    "left": left_botella_2_2+"em"
  })
  $("#botella_2_3").css({
    "left": left_botella_2_3+"em"
  })
  $("#tapa_2_1").css({
    "left": left_tapa_2_1+"em"
  })
  $("#tapa_2_2").css({
    "left": left_tapa_2_2+"em"
  })
  $("#tapa_2_3").css({
    "left": left_tapa_2_3+"em"
  })
}

function tag(){

  if(left_botella_3_3>=39){
  stop_process();
  proceso_actual++;
  start_process();
  }

  left_botella_3_1+=1;
  left_botella_3_2+=1;
  left_botella_3_3+=1;
  left_etiqueta_3_1+=1;
  left_etiqueta_3_2+=1;
  left_etiqueta_3_3+=1;
  if(left_botella_3_1 == 21){
    $("#etiqueta_3_1").css({
      "display":"block"
    })
    $("#etiqueta_3_2").css({
      "display":"block"
    })
    $("#etiqueta_3_3").css({
      "display":"block"
    })
  }
  $("#botella_3_1").css({
    "left": left_botella_3_1+"em"
  })
  $("#botella_3_2").css({
    "left": left_botella_3_2+"em"
  })
  $("#botella_3_3").css({
    "left": left_botella_3_3+"em"
  })
  $("#etiqueta_3_1").css({
    "left": left_etiqueta_3_1+"em"
  })
  $("#etiqueta_3_2").css({
    "left": left_etiqueta_3_2+"em"
  })
  $("#etiqueta_3_3").css({
    "left": left_etiqueta_3_3+"em"
  })
}

function fill(){

  if(left_botella_4_3>=39){
  console.log("LLEGA")
  stop_process();
  proceso_actual++;
  start_process();
  }

      if(left_botella_4_1 != 25){
        left_botella_4_1+=1;
        left_botella_4_2+=1;
        left_botella_4_3+=1;
      $("#botella_4_1").css({
        "left": left_botella_4_1+"em"
      })
      $("#botella_4_2").css({
        "left": left_botella_4_2+"em"
      })
      $("#botella_4_3").css({
        "left": left_botella_4_3+"em"
      })
    }else{
      lleno_tanque-=1;
      $("#lleno_tanque").html(lleno_tanque);
      if(lleno_tanque == 75 || lleno_tanque == 50 || lleno_tanque == 25){
        left_botella_4_1+=1;
        left_botella_4_2+=1;
        left_botella_4_3+=1;
      }
    }
}


function retrieveArms() {
  top_brazo_top--;
  top_brazo_bot++;

  $("#brazo_top").css({
    "top": top_brazo_top+"em"
  })
  $("#brazo_bot").css({
    "top": top_brazo_bot+"em"
  })
}


function pushing(){

if(left_botella_5_1>=28){
  stop_process();
  proceso_actual++;
  start_process();
}
else{
if(already_pushed==true && top_brazo_top>=-6 && regresar_brazos==false){
retrieveArms();
//regresar_brazos=true;
}
//if(top_brazo_top<=-6)
//clearInterval(regresando);

left_botella_5_1+=0.2;
left_botella_5_2+=0.2;
left_botella_5_3+=0.2;
left_botella_5_4+=0.2;

if(top_botella_5_1>=9){
already_pushed=true;
}

if(document.getElementById("botella_5_1").style.left=='12.2em' && already_pushed==false){
  top_brazo_top++;
  top_brazo_bot--;
  top_botella_5_1++;
  top_botella_5_2++;
  top_botella_5_3--;
  top_botella_5_4--;

  $("#brazo_top").css({
    "top": top_brazo_top+"em"
  })
  $("#brazo_bot").css({
    "top": top_brazo_bot+"em"
  })
  $("#botella_5_1").css({
    "top": top_botella_5_1+"em"
  })
  $("#botella_5_2").css({
    "top": top_botella_5_2+"em"
  })
  $("#botella_5_3").css({
    "top": top_botella_5_3+"em"
  })
  $("#botella_5_4").css({
    "top": top_botella_5_4+"em"
  })

}
  else{
  $("#botella_5_1").css({
    "left": left_botella_5_1+"em"
  })
  $("#botella_5_2").css({
    "left": left_botella_5_2+"em"
  })
  $("#botella_5_3").css({
    "left": left_botella_5_3+"em"
  })
  $("#botella_5_4").css({
    "left": left_botella_5_4+"em"
  })
  }
 }
}

function boxing(){

  if(document.getElementById("caja_6").style.left=='40em'){
  stop_process();
  proceso_actual++;
  start_process();
  }

  if(left_botella_6_1>=11){
    $("#botella_6_1").css({
    "-webkit-transform": "rotate(30deg)"
    })
    bajar_botella_1=true;
  }
  if(left_botella_6_2>=11){
    $("#botella_6_2").css({
    "-webkit-transform": "rotate(30deg)"
    })
    bajar_botella_2=true;
  }
  if(left_botella_6_3>=11){
    $("#botella_6_3").css({
    "-webkit-transform": "rotate(30deg)"
    })
    bajar_botella_3=true;
  }


if(bajar_botella_1==true){
  top_botella_6_1++;
  $("#botella_6_1").css({
    "top": top_botella_6_1+"em"
  })
    left_botella_6_1+=0.5;
}
if(bajar_botella_2==true){
  top_botella_6_2++;
  $("#botella_6_2").css({
    "top": top_botella_6_2+"em"
  })
  left_botella_6_2+=0.5
}
if(bajar_botella_3==true){
  top_botella_6_3++;
  $("#botella_6_3").css({
    "top": top_botella_6_3+"em"
  })
  left_botella_6_3+=0.5
}

if(top_botella_6_1>=14)
$("#botella_6_1").css({
  "display": "none"
})
if(top_botella_6_2>=14)
$("#botella_6_2").css({
  "display": "none"
})
  if(top_botella_6_3>=14){
    $("#botella_6_3").css({
      "display": "none"
    })
    empacado=true;
  }

  if(empacado==true){
    left_caja_6++;
    $("#caja_6").css({
      "left": left_caja_6+"em"
    })
  }
  else{
  left_botella_6_1++;
  left_botella_6_2++;
  left_botella_6_3++;

  $("#botella_6_1").css({
    "left": left_botella_6_1+"em"
  })
  $("#botella_6_2").css({
    "left": left_botella_6_2+"em"
  })
  $("#botella_6_3").css({
    "left": left_botella_6_3+"em"
  })
  }
}

function bajar_selladora(){
  top_selladora++;
  $("#selladora_cabeza").css({
    "top": top_selladora+"em"
  })
}

function subir_selladora(){
  top_selladora--;
  $("#selladora_cabeza").css({
    "top": top_selladora+"em"
  })
}

cambio_caja=false;
regresar_selladora=false;

function sealing(){

  if(left_caja_7>=50){
  stop_process();
  proceso_actual++;
  start_process();    
  }

  if(regresar_selladora==true)
    subir_selladora();

  if(top_selladora<=15)
    regresar_selladora=false;

  if(top_selladora>=19){
    if(cambio_caja==false){
    $("#caja_7").attr("src","images/caja2.png");
    cambio_caja=true;
    }
    regresar_selladora=true;
    movercaja7=true;
  }

  if(left_caja_7>=38 && regresar_selladora==false){
   bajar_selladora();
   // sellado=true;
    movercaja7=false;
  }

  if(movercaja7==true){
  left_caja_7++;

  $("#caja_7").css({
    "left": left_caja_7+"em"
  })
  }
}

function deliver(){

  if(left_camion>=37){
     stop_process();
    proceso_actual=1;
    cajas_despachadas+=2;
    writeBox();
    valoresIniciales();
   start_process();
  }

  if(top_caja_8_1>=11){
    $("#caja_8_1").css({
    "display": "none"
    })
    $("#caja_8_2").css({
    "display": "none"
    })

    left_camion++;
    $("#camion").css({
    "left": left_camion+"em"
  })
  }
  else{
  top_caja_8_1+=0.1;
  top_caja_8_2+=0.1;
  left_caja_8_1+=0.2;
  left_caja_8_2+=0.2;

  $("#caja_8_1").css({
    "top": top_caja_8_1+"em",
    "left": left_caja_8_1+"em"
  })
  $("#caja_8_2").css({
    "top": top_caja_8_2+"em",
    "left": left_caja_8_2+"em"
  })
  }//FIN ELSE
}

function valoresIniciales(){

   top_botella_1_1 = top_botella_2_1 = top_botella_3_1 = top_botella_4_1 = 6;
 left_botella_1_1 = left_botella_2_1 = left_botella_3_1 = -1;
 left_botella_1_2 = left_botella_2_2 = left_botella_3_2 = -3;
 left_botella_1_3 = left_botella_2_3 = left_botella_3_3 = -5;


//VARIABLES PROCESO 2

top_tapa_2_1 = 6;
left_tapa_2_1 = 0;
left_tapa_2_2 = 2;
left_tapa_2_3 = -2;

//VARIABLES PROCESO 3

 top_etiqueta_3_1 = 9;
 left_etiqueta_3_1 = 0;
 left_etiqueta_3_2 = 2;
 left_etiqueta_3_3 = -2;

///VARIABLES PROCESO 4
left_maquina_4_1 = 10;
left_maquina_4_2 = 15.5;
left_maquina_4_3 = 21;
top_maquina_4 = -7;

left_botella_4_1 = -1;
left_botella_4_2 = -6.3;
left_botella_4_3 = -11.8;


//VARIABLES PROCESO 5
top_botella_5_1 = top_botella_5_2 = 2.5;
top_botella_5_3 = top_botella_5_4 = 16.5;
left_botella_5_1 = 0;
left_botella_5_2 = 3;
 left_botella_5_3 = 1.5;
left_botella_5_4 = 4.5;
top_brazo_top=-6;
top_brazo_bot=11;
already_pushed=false;
regresar_brazos=false;
regresando=0;

///VARIABLES PROCESO 6
top_botella_6_1 = top_botella_6_2 = top_botella_6_3=- 2.3;
left_botella_6_1 =4;
left_botella_6_2 =2;
left_botella_6_3=0;
cambio_cinta=false;
empacado=false;
left_caja_6=29;
bajar_botella_1=bajar_botella_2=bajar_botella_3=false;

//VARIABLES PROCESO 7
top_selladora=15; //cabeza
left_caja_7=22;
sellado=false;
regresando_selladora=1;
aux=false;
aux1=1;
movercaja7=true;

//VARIABLES PROCESO 8
top_caja_8_1 = 4.8;
top_caja_8_2 =6.7;
left_caja_8_1=14;
left_caja_8_2=17;
left_camion=25.5;

  $("#botella_1_1").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_1_1+"em",
      "left": left_botella_1_1+"em"
    })
    $("#botella_1_2").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_1_1+"em",
      "left": left_botella_1_2+"em"
    })
    $("#botella_1_3").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_1_1+"em",
      "left": left_botella_1_3+"em"
    })
    $("#cinta_1_1").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "0"
    })
    $("#cinta_1_2").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "30em"
    })
    $("#maquina_1_1").css({
      "height":"15em",
      "width":"20em",
      "z-index":"3",
      "top": "1em",
      "left": "12em"
    })

/*------------------------------------- Proceso 2 -------------------------------------------*/

    $("#tapa_2_1").css({
      "height":"0.8em",
      "width":"0.8em",
      "z-index":"2",
      "top": top_tapa_2_1+"em",
      "left": left_tapa_2_1+"em",
      "display":"none"
    })
    $("#tapa_2_2").css({
      "height":"0.8em",
      "width":"0.8em",
      "z-index":"2",
      "top": top_tapa_2_1+"em",
      "left": left_tapa_2_2+"em",
      "display":"none"
    })
    $("#tapa_2_3").css({
      "height":"0.8em",
      "width":"0.8em",
      "z-index":"2",
      "top": top_tapa_2_1+"em",
      "left": left_tapa_2_3+"em",
      "display":"none"
    })
    $("#botella_2_1").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_2_1+"em",
      "left": left_botella_2_1+"em"
    })
    $("#botella_2_2").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_2_1+"em",
      "left": left_botella_2_2+"em"
    })
    $("#botella_2_3").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_2_1+"em",
      "left": left_botella_2_3+"em"
    })
    $("#cinta_2_1").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "0"
    })
    $("#cinta_2_2").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "30em"
    })
    $("#maquina_2_1").css({
      "height":"15em",
      "width":"20em",
      "z-index":"3",
      "top": "1em",
      "left": "12em"
    })

/*------------------------------------- Proceso 3 -------------------------------------------*/

      $("#etiqueta_3_1").css({
        "height":"3em",
        "width":"1em",
        "z-index":"2",
        "top": top_etiqueta_3_1+"em",
        "left": left_etiqueta_3_1+"em",
        "display":"none"
      })
      $("#etiqueta_3_2").css({
        "height":"3em",
        "width":"1em",
        "z-index":"2",
        "top": top_etiqueta_3_1+"em",
        "left": left_etiqueta_3_2+"em",
        "display":"none"
      })
      $("#etiqueta_3_3").css({
        "height":"3em",
        "width":"1em",
        "z-index":"2",
        "top": top_etiqueta_3_1+"em",
        "left": left_etiqueta_3_3+"em",
        "display":"none"
      })
      $("#botella_3_1").css({
        "height":"8em",
        "width":"7em",
        "z-index":"2",
        "top": top_botella_3_1+"em",
        "left": left_botella_3_1+"em"
      })
      $("#botella_3_2").css({
        "height":"8em",
        "width":"7em",
        "z-index":"2",
        "top": top_botella_3_1+"em",
        "left": left_botella_3_2+"em"
      })
      $("#botella_3_3").css({
        "height":"8em",
        "width":"7em",
        "z-index":"2",
        "top": top_botella_3_1+"em",
        "left": left_botella_3_3+"em"
      })
      $("#cinta_3_1").css({
        "height":"3em",
        "width":"15em",
        "z-index":"1",
        "top": "13em",
        "left": "0"
      })
      $("#cinta_3_2").css({
        "height":"3em",
        "width":"15em",
        "z-index":"1",
        "top": "13em",
        "left": "30em"
      })
      $("#maquina_3_1").css({
        "height":"15em",
        "width":"20em",
        "z-index":"3",
        "top": "1em",
        "left": "12em"
      })
//----------------------------------- Proceso 4 ---------------------------------------
    $("#botella_4_1").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_4_1+"em",
      "left": left_botella_4_1+"em"
    })
    $("#botella_4_2").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_4_1+"em",
      "left": left_botella_4_2+"em"
    })
    $("#botella_4_3").css({
      "height":"8em",
      "width":"7em",
      "z-index":"2",
      "top": top_botella_4_1+"em",
      "left": left_botella_4_3+"em"
    })
    $("#maquina_4_1").css({
      "height":"14em",
      "width":"15em",
      "z-index":"2",
      "top": top_maquina_4+"em",
      "left": left_maquina_4_1+"em"
    })
    $("#maquina_4_2").css({
      "height":"14em",
      "width":"15em",
      "z-index":"2",
      "top": top_maquina_4+"em",
      "left": left_maquina_4_2+"em"
    })
    $("#maquina_4_3").css({
      "height":"14em",
      "width":"15em",
      "z-index":"2",
      "top": top_maquina_4+"em",
      "left": left_maquina_4_3+"em"
    })
    $("#cinta_4_1").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "0"
    })
    $("#cinta_4_2").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "9em"
    })
    $("#cinta_4_3").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "20em"
    })
    $("#cinta_4_4").css({
      "height":"3em",
      "width":"15em",
      "z-index":"1",
      "top": "13em",
      "left": "30em"
    })

    $("#lleno_tanque").html(lleno_tanque);

   $("#camion").css({
    "top": "11em",
    "left": "27em",
    "width": "14em",
    "height": "6em"
    })
  $("#caja_8_1").css({
  "top": "4.8em",
    "left": "14em",
    "display": "block"
    })

  $("#caja_8_2").css({
    "top": "6.7em",
    "left": "17em",
    "display": "block"
    })

    $("#caja_7").css({
      "width": "11em",
      "height": "8em",
      "top": "18em",
      "left": "22em"
    })

    $("#caja_6").css({
    "left": "29em",
    "top": "12em"
    })

    $("#botella_6_1").css({
      "left": "4em",
      "top":"-2.3em",
      "-webkit-transform": "rotate(0deg)",
      "display": "block"
    })

    $("#botella_6_2").css({
      "left": "2em",
      "top":"-2.3em",
      "display": "block",
      "-webkit-transform": "rotate(0deg)"
    })
    
    $("#botella_6_3").css({
      "left": "0em",
      "top":"-2.3em",
      "display": "block",
      "-webkit-transform": "rotate(0deg)"
    })

    $("#botella_5_2").css({
    "top": "2.5em",
    "left": "3em"
    })

    $("#botella_5_3").css({
    "top": "16.5em",
    "left": "1.5em"
    })

    $("#botella_5_4").css({
    "top": "16.5em",
    "left": "4.5em"
    })

    $("#botella_5_1").css({
      "top": "2.5em",
    "left": "0em"
    })

}

$( document ).ready(function() {
  /*------------------------------------- Proceso 1 -------------------------------------------*/
  valoresIniciales();

});
