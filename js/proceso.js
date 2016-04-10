
//
 top_botella_1_1 = top_botella_2_1 = top_botella_3_1 = 6;
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



function checkBottle() {

  if(document.getElementById("botella_1_3").style.left=='39em'){
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

  if(document.getElementById("botella_2_3").style.left=='39em'){
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

  if(document.getElementById("botella_3_3").style.left=='39em'){
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

function pushing(){}

function boxing(){}

function sealing(){}

function deliver(){}

$( document ).ready(function() {
  /*------------------------------------- Proceso 1 -------------------------------------------*/

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



});
