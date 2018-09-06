/*------------------------------------------------------------------------*/
/*---------------------- LIFE --------------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
var sPortada;
var sDropFotoTitular;
var sFotoPortadaLife;
var inputFilePortada;
var inputFileComentario;
var sBAniadirFotoPortada;
var sBEliminarFotoPortada;
var sBSubirFotoLife;
var sBEliminarFotoLife;
var imgFotoPortada;
var imgFotoCargadaLife;
var imgFotoAutorPortada;
var imgFotoUserCab;
var sArrastrarFotoPortada;
var sTbResumenLife;
var sBGuardarPortada;
var sBCancelarPortada;
var sBEditarPortada;
var sBHacerComentario;
var dropPortada;
var dropFotoTitular;
var sEntradaComentario;
var sTbEntradaCom;
var sEntradaCom;
var dropEntradaCom;
var sBPublicarCom;
var sDdlEtapa;
var sBCancelarCom;
var sTextoComYEtaX;
var sEtaX;
var sComYEtaX;
var sEtapas;

/***************************************************************************/
/******************* VARIABLES GLOBALES ************************************/
/***************************************************************************/
var rol;
var arrSelectedFilesTitular;
var arrSelectedFilesPortada;
var arrSelectedFilesEntradaCom;
var nuevaImagenTitular;
var nuevaImagenPortada;
var nuevoTextoPortada;
var imgB64Titular;
var imgB64Portada;
var nombreImgTitular;
var nombreImgPortada;
var circulo8;
var reader;
var textoInicialPortada;
var textoPortada;
var textoInicialEntradaCom;
var htmlEntradaCom;
var htmlSalidaCom;
var editor;
var instancia;
var esperarImgPosted;
var regCom;
var jqNot;
var listComEtapa;

var etapa; //Etapa actual
//var etapaAnt; //Provisional
var etapaListCom; //Etapa cargada en ListCom
var etapaMostrada; //Etapa mostrada

var iframeBase;
var iframeBody;

var actualizarCom;
var regCom;

var imagenesComIniEdicion;
var imagenesComFinEdicion;
var imagenesComEliminar;

var imgEditadasRegex;

var estaClickActivo;
/*------------------------------------------------------------------------*/
/*-------------------------- DOCUMENT READY ------------------------------*/
/*------------------------------------------------------------------------*/
$(function () {
    $('.cabMenuOpcion').css("background-color", "none");
    $('#celdaLife').css("background-color", "#eff8e0");
    $('#celdaLife a').css("color", "#f024bb");
    $('#celdaTree, #celdaAlbum').hover(
        function () {
            $(this).find('a').css('color', '#f024bb');
        },
        function () {
            $(this).find('a').css('color', 'white');
        });

    estaClickActivo = true;

    AjustarFotoCargadaLife();

  



    AsignarSelectoresBase();
    LeerSesion();
    CargarNotificacionesLife();
    rol = ValorRol(sesRol);
    console.log('rol: ' + rol);
    listComEtapa = new Array();
    InicializarVariables();
    /**************  Rol >= EDITOR  *****************************************/
    if (rol >= ROL_EDITOR) {
        AsignarSelectoresEditor();
        ActivarEventosBaseEditor();

        sBGuardarPortada.click(function () {
            if (estaClickActivo) {
                esperarImgPosted = 0; //Número de respuestas que habrá que esperar del servidor (una por imagen posteada)
                if (!nuevaImagenPortada) nombreImgPortada = "";
                if (!nuevaImagenTitular) nombreImgTitular = "";
                if (!nuevoTextoPortada) textoPortada = "";

                if (nuevaImagenPortada || nuevaImagenTitular || nuevoTextoPortada) {
                    estaClickActivo = false;
                    if (nuevaImagenPortada && nombreImgPortada != "#") {
                        nombreImgPortada = circulo8 + nombreImgPortada;
                        esperarImgPosted++;
                        PostImgB64ToServer(imgB64Portada, nombreImgPortada, "/App_Data/portadas/", ImgPortadaPostedCorrecto, GuardarIncorrecto);
                    };
                    if (nuevaImagenTitular && nombreImgTitular != "#") {
                        nombreImgTitular = circulo8 + nombreImgTitular;
                        esperarImgPosted++;
                        //console.log('imgB64Titular: ' + imgFotoCargadaLife.attr('src'));
                        //console.log('imgB64Titular.src: ' + imgB64Titular.src);
                        PostImgB64ToServer(imgFotoCargadaLife.attr('src'), nombreImgTitular, "/Images/users/", ImgTitularPostedCorrecto, GuardarIncorrecto);
                    };
                    if (esperarImgPosted == 0) {
                        LifeBook.LibreriaWebService.WsGuardarPortada(nombreImgTitular, nombreImgPortada, textoPortada, GuardarPortadaCorrecto);
                        //GuardarPortadaCorrecto();
                    };
                }
                else {
                    GuardarPortadaCorrecto();
                };
            };

        }); //FIN Guardar Portada

        sBEditarPortada.click(function () {

            ActivarEventosPortada();
            sesPresentacion = "editarPortada";
            PresentaLife();
        });

        sBCancelarPortada.click(function () {
            location.reload();
        });

        //alert(sesPresentacion);
        if(sesPresentacion == "editarPortada")
        {
          ActivarEventosPortada();
        };
        //alert('fin rol>=3');
     };
    /**************  Rol >= MIEMBRO  *****************************************/  
    if (rol >= ROL_MIEMBRO) {
        AsignarSelectoresMiembro();
        InicializarCKEDITOR();
    ActivarEventosMiembro();

    };
    /***********  sesPresentacion == "navegacion"  ************************/

    console.log('INICIO - sesPresentacion: ' + sesPresentacion);

    if(sesPresentacion=="navegacion"){
        PresentaLife();
        //GenerarEtapas();
        console.log('Antes de generar títulos');
        GenerarTitulos();
    };
 
});
/*------------------------------------------------------------------------*/
/*-------------------------- FIN DOCUMENT READY -------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* LEER VARIABLES SESION ************************************/
/***************************************************************************/
function LeerSesion() {

    sesCirculo = $('#tbCabSesCirculo').val();
    circulo8 = strNumber(sesCirculo, 8);
    sesCirculoPropio = $('#tbCabSesCirculoPropio').val();
    sesRol = $('#tbCabSesRol').val();
    sesPresentacion = $('#tbCabSesPresentacion').val();
    sesSexoTitular = $('#tbCabSesSexoTitular').val();
    sesPortadaEditada = $('#tbCabSesPortadaEditada').val();
    sesNComTotal = $('#tbCabSesNComLifeTotal').val();
    sesNComStr = $('#tbCabSesNComLifeEtapa').val();
    sesNEtapas = sDdlEtapa.find('option').size() - 1;
    sesNCom = sesNComStr.split("#");
    sesUsu = parseInt($('#tbCabSesUsuario').val());

};
/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES BASE *************************/
/***************************************************************************/
function AsignarSelectoresBase() {
    sPortada = $('#cphPagina_portada');
    sFotoPortadaLife=$('#cphPagina_fotoPortadaLife');
    imgFotoPortada = $('#cphPagina_imgFotoPortadaLife');
    sDdlEtapa = $('#cphPagina_ddlEtapas');
    sDdlRol = $('#cphPagina_ddlRol');
    sTextoComYEtaX = $('#textoComYEtaX');
    sEtaX = $('#etaX');
    sComYEtaX = $('#comYEtaX');
    sEtapas = $('#etapas');
    imgFotoCargadaLife = $('#cphPagina_imgFotoCargadaLife');
    sDropFotoTitular = $('#cphPagina_dropFotoTitularLife');
    sEntradaComentario = $('#cphPagina_entradaComentario');
    sTbResumenLife = $('#cphPagina_tbResumenLife');
};
/***************************************************************************/
/******************* CARGAR NOTIFICACIONES LIFE*********** *********************/
/***************************************************************************/
function CargarNotificacionesLife() {
   
    LifeBook.LibreriaWebService.CargarNot("life", jqCargarNot);
    
};
function jqCargarNot(result) {
  
    jqNot = result;

    LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
        jqNot = $.merge(jqNot, resultMaster);
        if (jqStatus == 'registroInvitado') {
            Notifica("ConfirmarRegistro", jqNot);
            LifeBook.LibreriaWebService.WsActualizarStatus("life");
            jqStatus = 'life';

        };
    });



};

/***************************************************************************/
/******************* FUNCION ValorRol *************************/
/***************************************************************************/
/*
function ValorRol(sesRol) {
    switch (sesRol) {
        case 'NONE':
            return 0;     
        case 'RELACIONADO':
            return 1;          
        case 'MIEMBRO':
            return 2;          
        case 'EDITOR':
            return 3;
        case 'ADMIN':
            return 4;           
        case 'SUPERADMIN':
            return 5;        
        default:
            return 0;           
    };
};
*/

/***************************************************************************/
/******************* FUNCION AsignarSelectoresEditor *************************/
/***************************************************************************/
function AsignarSelectoresEditor() {
    sArrastrarFotoPortada = $('#cphPagina_arrastrarFotoPortada');
    sBAniadirFotoPortada = $('#cphPagina_bAniadirFotoPortada');
    sBEliminarFotoPortada = $('#cphPagina_bEliminarFotoPortada');
    inputFilePortada = $('#inputFilePortada');
   
    
    inputFileLife = $('#inputFileLife');
    sBSubirFotoLife = $('#cphPagina_bSubirFotoLife');
    sBEliminarFotoLife = $('#cphPagina_bEliminarFotoLife');
   
    sBGuardarPortada = $('#cphPagina_bGuardarPortadaLife');
    dropPortada = document.getElementById("cphPagina_portada");
    dropFotoTitular = document.getElementById("cphPagina_dropFotoTitularLife");
    sBCancelarPortada=$('#cphPagina_bCancelarPortadaLife');
    sBEditarPortada = $('#cphPagina_bEditarPortadaLife');
    imgFotoAutorPortada = $('#cphPagina_imgFotoAutorPortada');
    imgFotoUserCab = $('#fotoCabImg');
};
/***************************************************************************/
/******************* FUNCION AsignarSelectoresMiembro *************************/
/***************************************************************************/
function AsignarSelectoresMiembro() {

    sBHacerComentario = $('#cphPagina_bHacerComPortadaLife');
   
    sTbEntradaCom = $('#cphPagina_tbEdicionEntradaCom');
    sEntradaCom = $('#entradaCom');
    dropEntradaCom = document.getElementById("entradaCom");
    inputFileComentario = $('#inputFileLifeCom');  
    sBPublicarCom = $('#bPublicarCom');
    sBCancelarCom = $('#bCancelarCom');
};
/***************************************************************************/
/******************* FUNCION InicializarVariables *************************/
/***************************************************************************/
function InicializarVariables() {
    nuevaImagenTitular = false;
    nuevaImagenPortada = false;
    nuevoTextoPortada = false;
    nombreImgPortada = "";
    nombreImgTitular = "";
    textoPortada = "";
    etapa = null;
    etapaListCom = null;
    etapaMostrada = null;
    actualizarCom = false;
    regCom = null;
    imagenesComIniEdicion = new Array();
    imagenesComFinEdicion = new Array();
    imagenesComEliminar = new Array();
    htmlEntradaCom = null;
    htmlSalidaCom = null;
    imgEditadasRegex = /App_Data\/fotosCom\/[^"]*"/g; 
};
/***************************************************************************/
/******************* FUNCION ActivarEventosBaseEditor *************************/
/***************************************************************************/
function ActivarEventosBaseEditor() {

    /********************* EVENTO AÑADIR FOTO TITULAR *********************************************/
    sBSubirFotoLife.click(function () {
        // inputFilePortada.click();
        console.log('click SubirFoto');
        document.getElementById('inputFileLife').click();
    });
    inputFileLife.change(function () {
        //alert('click Añadir foto de portada');
        arrSelectedFilesTitular = this.files;

     CargarFicheroImg(arrSelectedFilesTitular[0], sDropFotoTitular, function () {
        CargarImagenTitular();
        reader.readAsDataURL(arrSelectedFilesTitular[0]);
      });

       
    });

    /********************* EVENTO ELIMINAR FOTO TITULAR *********************************************/
    sBEliminarFotoLife.click(function () {
        console.log('click Eliminar');
        if (sesSexoTitular == "M")
            imgFotoCargadaLife.attr('src', "/Images/support/siluetaM.jpg");
        else imgFotoCargadaLife.attr('src', "/Images/support/siluetaH.jpg");
        sBSubirFotoLife.show();
        sBEliminarFotoLife.hide();
        nuevaImagenTitular = true;
        nombreImgTitular = "#";

    });
    
    /********************* EVENTO AÑADIR FOTO PORTADA *********************************************/  
    sBAniadirFotoPortada.click(function () {
        // inputFilePortada.click();
        document.getElementById('inputFilePortada').click();
    });
    inputFilePortada.change(function () {
        //alert('click Añadir foto de portada');
        arrSelectedFilesPortada = this.files;

           CargarFicheroImg(arrSelectedFilesPortada[0], sPortada, function () {
               CargarImagenPortada();
               reader.readAsDataURL(arrSelectedFilesPortada[0]);
          });





     //   CargarImagenPortada();
      //  reader.readAsDataURL(arrSelectedFilesPortada[0]);
    });

    /********************* EVENTO ELIMINAR FOTO PORTADA *********************************************/
    sBEliminarFotoPortada.click(function () {
        imgFotoPortada.attr('src', "/Images/support/fotoLife300.jpg");
        sArrastrarFotoPortada.show();
        sBAniadirFotoPortada.show();
        sBEliminarFotoPortada.hide();
        nuevaImagenPortada = true;
        nombreImgPortada = "#";

    });
};
/***************************************************************************/
/******************* FUNCION ActivarEventosPortada *************************/
/***************************************************************************/
function ActivarEventosPortada() {
    //alert('ActivarEventosPortada');
    /*************FOTO TITULAR: EVENTOS ONDRAGOVER, ONDRAGLEAVE, y ONDROP  ************************/
   
    dropFotoTitular.ondragover = function (e) {
        e.stopPropagation();
        sDropFotoTitular.css('border', 'dashed 3px #f024bb');
        sPortada.css('border', 'dashed 3px #7596a5');

        return false;
    };
    dropFotoTitular.ondragleave = function (e) {
        e.stopPropagation();
        sDropFotoTitular.css('border', 'dashed 3px #7596a5');
        sPortada.css('border', 'dashed 3px #f024bb');
        return false;
    };
    dropFotoTitular.ondrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        arrSelectedFilesTitular = e.dataTransfer.files;

        CargarFicheroImg(arrSelectedFilesTitular[0], sDropFotoTitular, function () {
            CargarImagenTitular();
            reader.readAsDataURL(arrSelectedFilesTitular[0]);
        });


       // CargarImagenTitular();
       //reader.readAsDataURL(arrSelectedFilesTitular[0]);
    };
    
    /*************FOTO PORTADA: EVENTOS ONDRAGOVER, ONDRAGLEAVE, y ONDROP  ************************/
    
    dropPortada.ondragover = function () {
        sPortada.css('border', 'dashed 3px #f024bb');
        return false;
    };
    dropPortada.ondragleave = function () {
        sPortada.css('border', 'dashed 3px #7596a5');
        return false;
    };
    dropPortada.ondrop = function (e) {
        e.preventDefault();
        arrSelectedFilesPortada = e.dataTransfer.files;

        CargarFicheroImg(arrSelectedFilesPortada[0], sPortada, function () {
            CargarImagenPortada();
            reader.readAsDataURL(arrSelectedFilesPortada[0]);
        });






      //  CargarImagenPortada();
      //  reader.readAsDataURL(arrSelectedFilesPortada[0]);
    };


    /********************** EVENTO TEXTAREA RESUMEN LIFE ***************************************/

    sTbResumenLife.removeAttr("readonly");

    textoInicialPortada = sTbResumenLife.val();

    sTbResumenLife.mousedown(function () {
        if ((sTbResumenLife.val() == textoInicialPortada) && (parseInt(sesPortadaEditada)% 2 ==0)) {
            sTbResumenLife.val('');
            sTbResumenLife.css('color', '#0377aa');
        };
    });
    sTbResumenLife.focusout(function () {
        if ((sTbResumenLife.val() == null || sTbResumenLife.val() == "") && (parseInt(sesPortadaEditada) % 2 == 0)) {
            sTbResumenLife.val(textoInicialPortada);
            sTbResumenLife.css('color', '#999999');
            nuevoTextoPortada = false;
        }
        else if (sTbResumenLife.val() != textoInicialPortada) {
            sTbResumenLife.css('color', '#0377aa');
            nuevoTextoPortada = true;
            textoPortada = sTbResumenLife.val();
        }
        else nuevoTextoPortada = false;
    });



    //alert('FIN ActivarEventosPortada');

};


/***************************************************************************/
/******************* FUNCION DesactivarEventosPortada *************************/
/***************************************************************************/
function DesactivarEventosPortada() {
    //alert('Soy DesactivarEventosPortada');
    sTbResumenLife.attr("readonly", "readonly");
   // alert('Soy DesactivarEventosPortada: Tras readonly');
    sTbResumenLife.off("mousedown focusout");
    //alert('Soy DesactivarEventosPortada: Tras desactivar sTbResumenLife');
    // dropFotoTitular.off("ondragover ondragleave ondrop");//FALLA
    sDropFotoTitular.off("ondragover ondragleave ondrop");
  //alert('Soy DesactivarEventosPortada: Tras desactivar dropFotoTitular');
    sPortada.off("ondragover ondragleave ondrop");
   //alert('Soy DesactivarEventosPortada: Tras desactivar dropPortada');
};
/***************************************************************************/
/******************* FUNCION CargarImagenTitular *************************/
/***************************************************************************/
function CargarImagenTitular() {
    //console.log('CargarImagenTitular');
    sDropFotoTitular.css('border', 'dashed 3px #7596a5'); //Gris azulado
    reader = new FileReader();
    $('#loading').show();
    reader.onload = function (e) {
        console.log('reader.onload');
        nuevaImagenTitular = true;
        nombreImgTitular = arrSelectedFilesTitular[0].name;
        console.log('Antes de poner imgFotoCargadaLife');
        imgFotoCargadaLife.attr('src', e.target.result);

        imgFotoCargadaLife.on('load', function () {
            console.log('Antes de AjustarImagen');
            AjustarImagen(imgFotoCargadaLife, sBSubirFotoLife, sBEliminarFotoLife,
                function () {
                   AjustarFotoCargadaLife();

                });
            imgFotoCargadaLife.off('load');
        });


       // console.log('Antes de AjustarImagen');
       // AjustarImagen(imgFotoCargadaLife, sBSubirFotoLife, sBEliminarFotoLife);

    };
    
};
/**********************************************************************************************/
/********************** FUNCTION CargarImagenPortada ***************************************/
/**********************************************************************************************/
function CargarImagenPortada() {

    sPortada.css('border', 'dashed 3px #7596a5');
    reader = new FileReader();
    reader.onload = function (e) {
        nuevaImagenPortada = true;
        var canvas;
        var img = new Image();
        imgFotoPortada.attr('src', e.target.result);
        img.src = imgFotoPortada[0].src;

        img.addEventListener('load', function (ev) {
            ev.target.removeEventListener(ev.type, arguments.callee);
            console.log('ev.type: ' + ev.type);

            /**************************************************/
            var W = 720;
            var H = 300;
            var wIni = imgFotoPortada.prop('naturalWidth');
            var hIni = imgFotoPortada.prop('naturalHeight');
            var P = W / H;
            var pIni = wIni / hIni;
            var encuadreX = 2;
            var encuadreY = 3;
            var sw;
            var sh;
            var sx;
            var sy;

            if (pIni < P) {
                sx = 0;
                sw = wIni;
                sh = sw / P;
                sy = (hIni - sh) / encuadreY;
            }
            else {
                sh = hIni;
                sw = sh * P;
                sx = (wIni - sw) / encuadreX;
                sy = 0;
            };
            sx = sx.toFixed();
            sy = sy.toFixed();
            sw = sw.toFixed();
            sh = sh.toFixed();

            canvas = document.createElement('canvas');
            canvas.width = W;
            canvas.height = H;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
            imgB64Portada = canvas.toDataURL("image/jpeg");
            imgFotoPortada.attr('src', imgB64Portada);
            nombreImgPortada = arrSelectedFilesPortada[0].name;
            sArrastrarFotoPortada.hide();
            sBAniadirFotoPortada.hide();
            sBEliminarFotoPortada.show();
            /**************************************************/
        }, false);
    }
};
/**********************************************************************************************/
/********************** FUNCTION InicializarCKEDITOR ***************************************/
/**********************************************************************************************/
function InicializarCKEDITOR() {
    //alert('inicializarCKEDITOR');
    editor = CKEDITOR.replace('cphPagina_tbEdicionEntradaCom', {
        height: 150 /*,
        format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div'*/
    });
    console.log('editor: ' + editor);
   // alert('instancia CKEDITOR');
    instancia = CKEDITOR.instances['cphPagina_tbEdicionEntradaCom'];
    
    //alert(instancia.getData());

    //var editor = CKEDITOR.replace('cphPagina_tbEdicionEntradaCom');

    editor.addCommand("cargarImagen", {
        exec: function (edt) {
           // alert(edt.getData());
            BCargarImagenCKEDITOR();
        }
    });
 //   editor.addCommand("comando", {
 //       exec: function (edt) {

 //           htmlEntradaCom = instancia.getData();
 //           var altRegex = /alt\s*=\s*"[^"]*/g;
 //           var altImagenes = htmlEntradaCom.match(altRegex);
 //           $.each(altImagenes, function (iImg, img) {

 //               alert(img.replace(' ','').replace('alt="',''));
 //           });
            //alert(edt.getData());
           // alert(instancia.getData());
            //CargarImagenComentario();
 //       }
 //   });
/*
    editor.ui.addButton('SuperButton', {
        label: "Click me",
        command: 'comando',
        toolbar: 'tools',
        icon: '/favicon.ico'
    });*/
    editor.ui.addButton('InsertImage', {
        label: "Insert Image",
        command: 'cargarImagen',
        toolbar: 'tools',
        icon: '/Images/support/insertImage.ico'
    });

    CKEDITOR.on('instanceReady', function () {
        iframeBase = document.querySelector('iframe').contentDocument.querySelector('html');
        iframeBody = iframeBase.querySelector('body');
     //   alert('eventos CKEDITOR');
        iframeBody.ondragover = dragoverHandler;
        iframeBody.ondragleave = dragleaveHandler;
        iframeBody.ondrop = dropHandler;
       // alert('tras eventos CKEDITOR');
        paddingToCenterBody = ((iframeBase.offsetWidth - iframeBody.offsetWidth) / 2) + 'px';
        iframeBase.style.height = '100%';
        iframeBase.style.width = '100%';

        iframeBase.style.overflowX = 'hidden';

        iframeBody.style.height = '100%';
        iframeBody.style.margin = '0';
        iframeBody.style.paddingLeft = paddingToCenterBody;
        iframeBody.style.paddingRight = paddingToCenterBody;
        iframeBody.style.color = '#999999';
        
/*
 iframeBody.ondrop( function (evt) {
        var reader = new FileReader();
        alert('tras new reader');
        reader.onload = function (event) {
            alert('reader.onload');
        };
        alert('tras reader onload');

    });
      
        iframeBody.mousedown(function () {
            if (iframeBody.val() == textoInicialEntradaCom) {
                iframeBody.val('');
                iframeBody.css('color', 'black');
            };

*/
        $('.cke_contents iframe').contents().one("click", function () {
            //alert('click');
            //instancia.setData('');
            editor.document.getBody().setHtml('');
            //iframeBody.val('');
            //instancia.setText(' ');
            //iframeBody.innerText('Hola Caracola');
            iframeBody.style.color = 'black';
            
        });


    });


    function dropHandler(e) {
       e.preventDefault();
       var file = e.dataTransfer.files[0];
        
       CargarFicheroImg(file, sEntradaCom, function () {
           CargarImagenComentario(file);
       });



      // CargarImagenComentario(file);

      // alert(file.name);
       // alert('tras reader onloadend');
        //instancia.setData('<br>Hola<br>');
        //instancia.insertHtml('<br>Hola<br>');
        //  instancia.insertHtml('<img src="/Images/support/siluetaH.jpg"/>');

       };
       
    function dragoverHandler() {
        //alert('dragoverHandler');
        sEntradaCom.css('border', 'dashed 3px #f024bb');
        return false;
    }
    function dragleaveHandler() {
        sEntradaCom.css('border', '2px dashed #82a542');
        return false;
    }

};

function CargarImagenComentario(file) {
   //alert(file.name);
    var image = document.createElement("img");
   
    var reader = new FileReader();
    
    reader.readAsDataURL(file);
 
        reader.onloadend = function () {
 
        image.src = reader.result;
        image.addEventListener('load', function (ev) {
            ev.target.removeEventListener(ev.type, arguments.callee);
        instancia.insertHtml('<img src="' + ResizeImgCom(image.src,600) + '" width="400" alt="'+ file.name+'">');
        }, false);
        sEntradaCom.css('border', '2px dashed #82a542');
    };


};
/**********************************************************************************************/
/**************** ACTIVAR EVENTOS MIEMBRO     *************************************************/
/**********************************************************************************************/


function ActivarEventosMiembro() {
   // alert('Activar Eventos Miembro');
    /********* ENTRADA COMENTARIO:  EVENTOS ONDRAGOVER, ONDRAGLEAVE, y ONDROP**********************/
   // document.getElementById('inputFileLifeCom').click();

    inputFileComentario.change(function () {
        //alert('inputFileComentario.change');
        arrSelectedFilesEntradaCom = this.files;

        CargarFicheroImg(arrSelectedFilesEntradaCom[0], sEntradaCom, function () {
            CargarImagenComentario(arrSelectedFilesEntradaCom[0]);
        });

     //   CargarImagenComentario(arrSelectedFilesEntradaCom[0]);
        //reader.readAsDataURL(arrSelectedFilesEntradaCom[0]);
    });
    sBPublicarCom.click(function () {
        //sBPublicarCom.on('click',regCom,function(e){
        if (estaClickActivo) {
            estaClickActivo = false;
            etapa = sDdlEtapa.prop('selectedIndex') - 1;
            htmlEntradaCom = instancia.getData();
            //alert('Etapa: ' + etapa);
            if (actualizarCom) {
                // ActualizarComentario(e.data.IdComentario);
                ActualizarComentario(regCom.IdComentario);
            }
            else {
                if (etapa > -1) {
                    LifeBook.LibreriaWebService.WsInsertarComentario(etapa, InsertarComentarioCorrecto);
                }
                else {
                    // alert('Configura la Etapa a la que corresponde el comentario');
                    Notifica("ConfigurarEtapa", jqNot);
                    estaClickActivo = true;
                };
            };

        };
    });//FIN PublicarCom.click

    sBCancelarCom.click(function () {
        sesPresentacion = "navegacion";
        PresentaLife();
        GenerarTitulos();
    });

    sBHacerComentario.click(function () {
        sesPresentacion = "hacerComentario";
        PresentaLife();

    });


};

function BCargarImagenCKEDITOR() {
    document.getElementById('inputFileLifeCom').click();
};

/**********************************************************************************************/
/********************** FUNCTION PresentaLife ***************************************/
/**********************************************************************************************/
function PresentaLife() {
    //alert('Soy PresentaLife');

    estaClickActivo = true;

    var patron = "/Images/support/";

    console.log('imgFotoCargadaLife: ' + imgFotoCargadaLife);
    var hayFotoTitular=(imgFotoCargadaLife.attr('src').indexOf(patron)==-1);
    var hayFotoPortada=(imgFotoPortada.attr('src').indexOf(patron)==-1);
   // alert('hayFotoPortada ' + hayFotoPortada);

    if (!hayFotoPortada) {     
        imgFotoPortada.attr('src', "/Images/support/fotoLife" + ((sesPresentacion == "editarPortada") ? "300" : "160") + ".jpg");
        //alert(imgFotoPortada.attr('src'));
       // alert(sFotoPortadaLife);
      //alert(sFotoPortadaLife.height());
        //sFotoPortadaLife.height =325;
        // sFotoPortadaLife.height((presentacion == "editarPortada") ? 325 : 160);
      //alert((sesPresentacion == "editarPortada") ? '325px' : '160px');
      sFotoPortadaLife.css('height', ((sesPresentacion == "editarPortada") ? '325px' : '160px'));
      //sFotoPortadaLife.css('height', '325px');
       //alert(sFotoPortadaLife.height());
       sDropFotoTitular.css('top', ((sesPresentacion == "editarPortada") ? '160px' : '30px'));
      // alert(sDropFotoTitular.css('top'));
    }
    /*
    console.log('window.innerHeight: ' + window.innerHeight);
    console.log('$(window).height(): ' + $(window).height());
    console.log('window.parent.innerHeight: ' + window.parent.innerHeight);
    console.log('$(document).height(): ' + $(document).height());
    */

    /*
    console.log('fotoCargadaLife.heigth: ' + $('#fotoCargadaLife').height());
    console.log('fotoCargadaLife img.heigth: ' + $('#fotoCargadaLife img').height());

    var lFotoCargadaLife = $('#fotoCargadaLife').width();
    var hFotoCargadaLifeImg = $('#fotoCargadaLife img').height();
    var wFotoCargadaLifeImg = $('#fotoCargadaLife img').width();
    var lFotoCargadaLifeImg = Math.max(hFotoCargadaLifeImg, wFotoCargadaLifeImg);
    if (lFotoCargadaLife != lFotoCargadaLifeImg) {
        if (wFotoCargadaLifeImg > hFotoCargadaLifeImg) 
            $('#fotoCargadaLife img').css('width',lFotoCargadaLife)
        else
            $('#fotoCargadaLife img').css('height', lFotoCargadaLife)
    };

   */

    

    //alert('Antes del switch');
    // alert(sesPresentacion);
    console.log('Presentación: ' + sesPresentacion);
    switch (sesPresentacion) {
        
        case "editarPortada":
     
            sEntradaComentario.hide();
            sPortada.css('border', '2px dashed #82a542');
            sDropFotoTitular.css('border', '2px dashed #82a542');
            sTbResumenLife.css('border', '1px solid #82a542');
            sBGuardarPortada.show();
            sBCancelarPortada.show();
            sBEditarPortada.hide();
            sBHacerComentario.hide();
            sBSubirFotoLife.css('display', (!hayFotoTitular? 'block':'none'));
            sBEliminarFotoLife.css('display', (!hayFotoTitular ? 'none' : 'block'));
            sBAniadirFotoPortada.css('display', (!hayFotoPortada ? 'block' : 'none'));
            sBEliminarFotoPortada.css('display', (!hayFotoPortada ? 'none' : 'block'));
            if (!hayFotoPortada) sArrastrarFotoPortada.show();
            sEtapas.hide();
            break;

        case "navegacion":
            sEntradaComentario.hide(); 
            sPortada.css('border', '2px solid #0377aa');
            sDropFotoTitular.css('border', 'none');
            sTbResumenLife.css('border', 'none');

            if (rol >= ROL_EDITOR) {
                sBGuardarPortada.hide();
                sBCancelarPortada.hide();
                sBEditarPortada.show();
                sBSubirFotoLife.hide();
                sBEliminarFotoLife.hide();
                sBAniadirFotoPortada.hide();
                sBEliminarFotoPortada.hide();
                sArrastrarFotoPortada.hide();
            };
            if (rol >=ROL_MIEMBRO) sBHacerComentario.show();
           
            sEtapas.show();

            break;

        case "hacerComentario":
            sEntradaComentario.show();
            sPortada.css('border', '2px solid #0377aa');
            sDropFotoTitular.css('border', 'none');
            sTbResumenLife.css('border', 'none');
            if (rol >= ROL_EDITOR) {
                sBGuardarPortada.hide();
                sBCancelarPortada.hide();
                sBEditarPortada.show();
                sBSubirFotoLife.hide();
                sBEliminarFotoLife.hide();
                sBAniadirFotoPortada.hide();
                sBEliminarFotoPortada.hide();
                sArrastrarFotoPortada.hide();
            };
            if (rol >= ROL_MIEMBRO) sBHacerComentario.hide();
            sEtapas.hide();
            editor.document.getBody().setHtml('');
            sDdlEtapa.prop('disabled', false);
            sDdlEtapa.prop('selectedIndex', 0);
           // instancia.setData('');
            break;

    };

};

function GenerarTitulos() {
    actualizarCom = false;
    etapaMostrada = null;
    listComEtapa = new Array();
    etapaListCom = null;
    imagenesComIniEdicion = new Array();
    imagenesComFinEdicion = new Array();
    imagenesComEliminar = new Array();
    htmlEntradaCom = null;
    htmlSalidaCom = null;

    $('.etaX').not('#etaX').remove();
   
    console.log('GenerarTitulos - sesNComTotal: ' + sesNComTotal);
    console.log('GenerarTitulos - sesNEtapas: ' + sesNEtapas);

    if (sesNComTotal > 0) {
        sEtaX.show();
        for (var i = 0; i < sesNEtapas; i++) {
            if (sesNCom[i] > 0) {
                GenerarTitulo(i)
            }
        }
        sEtaX.hide();
    }
    else {
        if (rol >= ROL_MIEMBRO)
            sesPresentacion = "hacerComentario";
        else
            sesPresentacion = "navegacion";

        PresentaLife();
    }
};

function GenerarTitulo(etp) {
    console.log('GenerarTitulo: ' + etp);
    var clonEtaX = sEtaX.clone();
    var clonTdTituloEtaX = clonEtaX.find('#tdTituloEtaX');
    var clonTdBotonEtaX = clonEtaX.find('#tdBotonMostrarOcultarEtaX');
    var clonComEtaX = clonEtaX.find('#comEtaX');
    var clonImgBotonEtaX = clonEtaX.find('#imgBotonMostrarOcultarEtaX');
    clonTdTituloEtaX.text(sDdlEtapa.find('option')[etp + 1].innerText);
    clonImgBotonEtaX.attr('src', "/Images/support/botonMostrar.gif");
    clonComEtaX.html('');
    clonEtaX.attr('id', 'eta' + etp);
    clonComEtaX.attr('id', 'comEta' + etp);
    // alert( clonComEtaX.attr('id'));
    clonComEtaX.hide();

    clonTdBotonEtaX.click(function () {   
        etapa = etp;
        if (etapa==etapaMostrada) {
            //clonImgBotonEtaX.attr('src', "Images/support/botonMostrar.gif");
            OcultarEtapa(etapaMostrada);
        }
        else {         
           // clonImgBotonEtaX.attr('src', "Images/support/botonOcultar.gif");
            GenerarEtapa();
        };
    });

    sEtapas.append(clonEtaX);
};

function OcultarEtapa(etp) {
    var sComEta = $('#comEta' + etp);
    var sEta = $('#eta' + etp);
    var imgBotonEta = sEta.find('#imgBotonMostrarOcultarEtaX');
    imgBotonEta.attr('src', "/Images/support/botonMostrar.gif");
    sComEta.html('');
    sComEta.hide();
    etapaMostrada = null;
};

function MostrarEtapa() {
    if (etapaMostrada>=0) {
        OcultarEtapa(etapaMostrada);
    };
    var sComEtapa = $('#comEta' + etapa);
    var sEta = $('#eta' + etapa);
    var imgBotonEta = sEta.find('#imgBotonMostrarOcultarEtaX');
    imgBotonEta.attr('src', "/Images/support/botonOcultar.gif");
    sComEtapa.show();
    var sBEliminarCom;
    var sBEditarCom;
    var idCom;
    var sComYEtaXClon;
    for (var i = sesNCom[etapa] - 1; i >= 0; i--) {
        sComYEtaXClon = sComYEtaX.clone();
        //alert(listComEtapa[i].Comentario);
        sComYEtaXClon.find('#textoComYEtaX').html(listComEtapa[i].Comentario);
        var sImgAutorCom = sComYEtaXClon.find('#imgAutorComYEtaX');
        PonerFotoUser(sImgAutorCom, listComEtapa[i].FotoAutor, listComEtapa[i].SexoAutor);
        var sTdNombreApeAutorCom = sComYEtaXClon.find('#tdNombreApeAutorComYEtaX');
        //var sTdRolAutorCom = sComYEtaXClon.find('#tdRolAutorComYEtaX');
        sTdNombreApeAutorCom.html(sTdNombreApeAutorCom.html().replace('_Nombre', listComEtapa[i].NombreAutor).replace('_Apellidos', listComEtapa[i].ApeAutor));
        //sTdRolAutorCom.html(sTdRolAutorCom.html().replace('_Rol', sDdlRol.find('option')[rol].innerText));
        sBEliminarCom = sComYEtaXClon.find('#bEliminarComYEtaX');
        sBEditarCom = sComYEtaXClon.find('#bEditarComYEtaX');
        //idCom = listComEtapa[i].IdComentario;
        //alert(idCom);
        //BOTONES COMENTARIO ETAPA
        //BOTON ELIMINAR
        if (sesUsu == listComEtapa[i].IdAutor || rol > ROL_EDITOR) {
            sBEliminarCom.show();
            //  CrearEventoEliminarComentario(sBEliminarCom, idCom); 
            CrearEventoEliminarComentario(sBEliminarCom, listComEtapa[i].IdComentario);

        }
        else {
            sBEliminarCom.hide();

        };
        //alert(i + ' ' + (sesNCom[etapa] - 1));
        //BOTON EDITAR
      //  if ((sesUsu == listComEtapa[i].IdAutor) && (i == sesNCom[etapa] - 1)) {
        if ((sesUsu == listComEtapa[i].IdAutor)) {
            sBEditarCom.show();
            regCom = listComEtapa[i];
            CrearEventoEditarComentario(sBEditarCom, regCom);
            
        }
        else {
            sBEditarCom.hide();
        };
        sComEtapa.append(sComYEtaXClon);
    };
    etapaMostrada = etapa;
};

function CrearEventoEliminarComentario(selector, idComentario) {

    var nComent = { indice:idComentario, etapa:etapa, circulo:sesCirculo };
    selector.on('click', nComent, EliminarComentario);
    function EliminarComentario(e) {
        //alert(evt.data.indice);
        LifeBook.LibreriaWebService.WsEliminarComentarioLife(e.data.indice,e.data.etapa,e.data.circulo, EliminarComentarioLifeCorrecto, EliminarComentarioLifeIncorrecto);
        //alert('Tras WS');
    };
    function EliminarComentarioLifeCorrecto() {
        sesNCom[etapa]--;
        sesNComTotal--;
        GenerarTitulos();
        GenerarEtapa();
    };
    function EliminarComentarioLifeIncorrecto() {
        alert('Eliminar Comentario Incorrecto');
    };
};

function CrearEventoEditarComentario(selector, regComEtapa) {

    selector.on('click', regComEtapa, EditarComentario);
    function EditarComentario(e) {
       // var imgEditadasRegex = /<img[^>]*\/>/g;
        imagenesComIniEdicion = e.data.Comentario.match(imgEditadasRegex);
        $.each(imagenesComIniEdicion, function (iImg, img) {
            imagenesComIniEdicion[iImg] = img.replace('App_Data/fotosCom/', '').replace('"', '');
            //alert(imagenesComIniEdicion[iImg]);
        });

        sesPresentacion = "hacerComentario";
        PresentaLife();
       // $('.cke_contents iframe').contents().off("click");
        $('.cke_contents iframe').contents().click();
        editor.document.getBody().setHtml(e.data.Comentario);
        iframeBody.style.color = 'black';
        sDdlEtapa.prop('selectedIndex', etapa + 1);
        sDdlEtapa.prop('disabled', 'disabled');
        actualizarCom = true;
        //alert(evt.data.indice);
       // LifeBook.LibreriaWebService.WsEditarComentarioLife(evt.data, EditarComentarioLifeCorrecto, EditarComentarioLifeIncorrecto);
        //alert('Tras WS');
    };
    /*
    function EditarComentarioLifeCorrecto() {
        
        GenerarTitulos();
        GenerarEtapa();
    };
    function EditarComentarioLifeIncorrecto() {
        alert('Editar Comentario Incorrecto');
    };
    */
};

function GenerarEtapa() {
    //alert(' Desde Generar Etapa: ' + etapa);

    if (!etapaListCom || etapa != etapaListCom || !listComEtapa.length) {

        LifeBook.LibreriaWebService.WsCargarComentariosEtapa(etapa, CargarComentariosEtapaCorrecto, CargarComentariosEtapaIncorrecto);
    }
    else {
        MostrarEtapa();
    };
    function CargarComentariosEtapaCorrecto(result) {
        //alert('cargarComentariosEtapaCorrecto');
        listComEtapa = new Array;
        etapaListCom = null;
        listComEtapa = result;
        etapaListCom = etapa;
        MostrarEtapa();
    };
    function CargarComentariosEtapaIncorrecto(result) {
        alert('Error al cargar los comentarios de la etapa');
    };
};

function AjustarFotoCargadaLife() {
    console.log('AjustarFotoCargadaLife()');
    console.log('fotoCargadaLife.heigth: ' + $('#fotoCargadaLife').height());
    console.log('fotoCargadaLife img.heigth: ' + $('#fotoCargadaLife img').height());

    var lFotoCargadaLife = $('#fotoCargadaLife').width();
    var hFotoCargadaLifeImg = $('#fotoCargadaLife img').height();
    var wFotoCargadaLifeImg = $('#fotoCargadaLife img').width();
    var lFotoCargadaLifeImg = Math.max(hFotoCargadaLifeImg, wFotoCargadaLifeImg);
    if (lFotoCargadaLife != lFotoCargadaLifeImg) {
        if (wFotoCargadaLifeImg > hFotoCargadaLifeImg) {
            $('#fotoCargadaLife img').css('width', lFotoCargadaLife)
            $('#fotoCargadaLife img').css('height', 'auto')
        }
        else {
            $('#fotoCargadaLife img').css('height', lFotoCargadaLife)
            $('#fotoCargadaLife img').css('width', 'auto')
        };
    };




};




/*------------------------------------------------------------------------*/
/*-------------------------- FUNCIONES CALL BACK -------------------------*/
/*------------------------------------------------------------------------*/
function ImgPortadaPostedCorrecto(result) {
    //alert('ImgPortadaPostedCorrecto');
    esperarImgPosted--;

    if (esperarImgPosted == 0) {
        LifeBook.LibreriaWebService.WsGuardarPortada(nombreImgTitular,nombreImgPortada,textoPortada, GuardarPortadaCorrecto, GuardarIncorrecto);
    };

};

function ImgTitularPostedCorrecto(result) {

    esperarImgPosted--;
    if (esperarImgPosted == 0) {
        LifeBook.LibreriaWebService.WsGuardarPortada(nombreImgTitular, nombreImgPortada, textoPortada, GuardarPortadaCorrecto, GuardarIncorrecto);
    };

    /*
    if ((nuevaImagenPortada && imgPortadaPostedCorrecto) || !nuevaImagenPortada)
        LifeBook.LibreriaWebService.WsGuardarPortada(nombreImgTitular, (nuevaImagenPortada) ? nombreImgPortada : "", (nuevoTextoPortada) ? textoPortada : "", GuardarPortadaCorrecto);
    else
        imgTitularPostedCorrecto = true;
    */


};

function GuardarPortadaCorrecto() {
    //alert('GuardarPortadaCorrecto');
    location.reload();
    
}

function GuardarIncorrecto() {
    DesactivarEventosPortada();
    sesPresentacion = "navegacion";
    PresentaLife();
};

function InsertarComentarioCorrecto(result) {
    // alert('Comentario Insertado correctamente. Id_Comentario= ' + result);
    var idCom = result;
    ActualizarComentario(idCom);
} //Fin InsertarComentarioCorrecto

function ActualizarComentario(idCom) {
    //alert('ActualizarComentario ' + idCom);
    var idCom11 = strNumber(idCom, 11);
    var raizNombreFotoCom = circulo8 + etapa + idCom11;
    // alert(raizNombreFotoCom);
    var altRegex = /alt\s*=\s*"[^"]*/;
    var srcRegex = /src\s*=\s*"[^"]*/;
   // var imgRegex = /<img[^>]*\/>/g;
    var imgRegex = /<img[^>]*\salt="[^>]*\/>/g;
    var imagenes = htmlEntradaCom.match(imgRegex);
    
    var nImgPosted = 0;
    htmlSalidaCom = htmlEntradaCom;
    //alert(htmlSalidaCom);
    if (imagenes) {
        $.each(imagenes, function (iImg, img) {
            //alert(imagenes.length);
            var nomImgIni = img.match(altRegex).toString().replace(/alt\s*=\s*"/, '');
            var nomImg = raizNombreFotoCom + strNumber(iImg, 2) + nomImgIni;
            var imgIniRegex = new RegExp("<img[^>]*" + nomImgIni + "[^>]*\/>");
            //alert(nomImg);
            // alert(imgIniRegex);
            LifeBook.LibreriaWebService.WsRegistrarFoto(idCom, nomImg);
            PostImgB64ToServer(img.match(srcRegex).toString().replace(/src\s*=\s*"/, ''), nomImg, "/App_Data/fotosCom/", ImgFotoLifePostedCorrecto, ImgFotoLifePostedIncorrecto);

            function ImgFotoLifePostedCorrecto(result) {
                //alert('ImgFotoLifePostedCorrecto !!!  ' + nomImg);
                nImgPosted++;
                htmlSalidaCom = htmlSalidaCom.replace(imgIniRegex, '<img src="/image.axd?w=400&h=400&src=/App_Data/fotosCom/' + nomImg + '"/>');
                //alert(htmlSalidaCom);
                if (nImgPosted == imagenes.length) GuardarComentario();
            }
            function ImgFotoLifePostedIncorrecto(result) {
                // alert('ImgFotoLifePostedCorrecto !!!  ' + result);
                Notifica("ErrorImgPosted", jqNot);
                nImgPosted++;
                if (nImgPosted == imagenes.length) GuardarComentario();
            }

        });//Fin $.each
    }
    else
        GuardarComentario();

    function GuardarComentario() {
        // alert('GuardarComentario');
        LifeBook.LibreriaWebService.WsGuardarComentario(idCom, htmlSalidaCom, GuardarComentarioCorrecto);

    }
    function GuardarComentarioCorrecto() {
        // alert('GuardarComentarioCorrecto!');
        //etapaAnt = null;
        if (!actualizarCom) {
            sesNCom[etapa]++;
            sesNComTotal++;
        }
        else { //Actualización
            actualizarCom = false;
           // var imgEditadasRegex = /<img[^>]*\/>/g;
            //alert('tras imgEditadasRegex');
            //alert(htmlSalidaCom);
            imagenesComFinEdicion = htmlSalidaCom.match(imgEditadasRegex);
            $.each(imagenesComFinEdicion, function (iImg, img) {
                imagenesComFinEdicion[iImg] = img.replace('App_Data/fotosCom/', '').replace('"', '');
                //alert(imagenesComFinEdicion[iImg]);
            });

            if(imagenesComFinEdicion)
            $.each(imagenesComFinEdicion, function (iImg, Img) {
                //alert('Fin: '+Img);
            });

            if (imagenesComIniEdicion)
            $.each(imagenesComIniEdicion, function (iImg, Img) {
                //alert('ini: '+Img);
            });


            if (!imagenesComFinEdicion) {
                //alert('imagenesComFinEdicion.length == 0)');
                imagenesComEliminar = imagenesComIniEdicion;
            }
            else if (imagenesComIniEdicion) {
                //alert('imagenesComIniEdicion > 0 ');
                imagenesComEliminar = $.grep(imagenesComIniEdicion, function (imagen) {
                    return ($.inArray(imagen, imagenesComFinEdicion) == -1);
                });
                //alert('tras grep');
            }
            else {
                imagenesComEliminar = null;
            };

            if (imagenesComEliminar) {
                $.each(imagenesComEliminar, function (iImg, Img) {
                    //alert('Eliminar: ' + Img);
                });
                LifeBook.LibreriaWebService.WsEliminarFotosCom(imagenesComEliminar);
            };
        };
        sesPresentacion = "navegacion";
        PresentaLife();
        GenerarTitulos();
        GenerarEtapa();

    }



}; //Fin Actualizar Comentario


/*------------------------------------------------------------------------*/
/*--------------------- FIN FUNCIONES CALL BACK -------------------------*/
/*------------------------------------------------------------------------*/