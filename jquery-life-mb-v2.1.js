/*------------------------------------------------------------------------*/
/*---------------------- LIFE MOBILE -------------------------------------*/
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
var sBotonesPortadaLife;

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
var etapaListCom; //Etapa cargada en ListCom
var etapaMostrada; //Etapa mostrada

var iframeBase;
var iframeBody;

var actualizarCom;


var imagenesComIniEdicion;
var imagenesComFinEdicion;
var imagenesComEliminar;

var imgEditadasRegex;

var presentacionAnterior;

var estaClickActivo;
/*------------------------------------------------------------------------*/
/*-------------------------- DOCUMENT READY ------------------------------*/
/*------------------------------------------------------------------------*/

$(function () {

    
    LeerSesion();
    CargarNotificacionesLife();
    rol = ValorRol(sesRol);
    AsignarSelectores();
    InicializarVariables();
    if (rol >= ROL_MIEMBRO) InicializarCKEDITOR();
    ActivarEventosMenu();
    if (rol >= ROL_MIEMBRO) ActivarEventosMiembro();
    if (rol >= ROL_EDITOR) ActivarEventosEditor();
  
});

/*------------------------------------------------------------------------*/
/*-------------------------- FIN DOCUMENT READY -------------------------*/
/*------------------------------------------------------------------------*/
/*------------------------------------------------------------------------*/
/*-------------------------- FUNCIONES PRINCIPALES -------------------------*/
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
    console.log('LeerSesion - sesNComTotal: ' + sesNComTotal);
    sesNComStr = $('#tbCabSesNComLifeEtapa').val();
    sesNEtapas = $('#cphMobile_ddlEtapas_mb').find('option').size() - 1;
    sesNCom = sesNComStr.split("#");
    sesUsu = parseInt($('#tbCabSesUsuario').val());

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
/******************* ASIGNACIÓN SELECTORES *************************/
/***************************************************************************/
function AsignarSelectores() {

    AsignarSelectoresBase();
    if (rol >= ROL_EDITOR) AsignarSelectoresEditor();
    if (rol >= ROL_MIEMBRO) AsignarSelectoresMiembro();

};

function AsignarSelectoresBase() {
    sPortada = $('#cphMobile_portada_mb');
    sEtapas = $('#cphMobile_etapas_mb');
    sMenuLife = $('#cphMobile_menuLife_mb');
    sBPortadaLife = $('#bPortadaLife_mb');
    sMenuEtapasLife = $('#menuEtapasLife_mb');
    sBTituloEtaX = $('#bTituloEtaX_mb');
    sFotoPortadaLife = $('#cphMobile_fotoPortadaLife_mb');
    imgFotoPortada = $('#cphMobile_imgFotoPortadaLife_mb');
    sDdlEtapa = $('#cphMobile_ddlEtapas_mb');
    sDdlRol = $('#cphMobile_ddlRol_mb');
    sTextoComYEtaX = $('#textoComYEtaX_mb');
   // sEtaX = $('#etaX_mb');
    sComYEtaX = $('#comYEtaX_mb');
    sDropFotoTitular = $('#cphMobile_dropFotoTitularLife_mb');
    imgFotoCargadaLife = $('#cphMobile_imgFotoCargadaLife_mb');
    sEntradaComentario = $('#cphMobile_entradaComentario_mb');
    sTbResumenLife = $('#cphMobile_tbResumenLife_mb');
};

function AsignarSelectoresEditor() {
   
    sBAniadirFotoPortada = $('#cphMobile_bAniadirFotoPortada_mb');
    sBEliminarFotoPortada = $('#cphMobile_bEliminarFotoPortada_mb');
    inputFilePortada = $('#inputFilePortada_mb');
    
    inputFileLife = $('#inputFileLife_mb');
    sBSubirFotoLife = $('#cphMobile_bSubirFotoLife_mb');
    sBEliminarFotoLife = $('#cphMobile_bEliminarFotoLife_mb');
   
    sBGuardarPortada = $('#cphMobile_bGuardarPortadaLife_mb');
    dropPortada = document.getElementById("cphMobile_portada_mb");
    dropFotoTitular = document.getElementById("cphMobile_dropFotoTitularLife_mb");
    sBCancelarPortada = $('#cphMobile_bCancelarPortadaLife_mb');
    sBEditarPortada = $('#cphMobile_bEditarPortada_mb');
    imgFotoAutorPortada = $('#cphMobile_imgFotoAutorPortada_mb');
    imgFotoUserCab = $('#fotoCabImg_mb');
    sBotonesPortadaLife = $('#cphMobile_botonesPortadaLife_mb');


};

function AsignarSelectoresMiembro() {
    sBNuevoComentario = $('#cphMobile_bNuevoComentario_mb');
   
    sTbEntradaCom = $('#cphMobile_tbEdicionEntradaCom_mb');
    sEntradaCom = $('#entradaCom_mb');
    dropEntradaCom = document.getElementById("entradaCom_mb");
    inputFileComentario = $('#inputFileLifeCom_mb');
    sBPublicarCom = $('#cphMobile_bPublicarNuevoComentarioLife_mb');
    sBCancelarCom = $('#cphMobile_bCancelarNuevoComentarioLife_mb');
};

/***************************************************************************/
/******************* FUNCION InicializarVariables *************************/
/***************************************************************************/
function InicializarVariables() {
  //  $.support.touchOverflow = true;
   // $.mobile.touchOverflowEnabled = true;

    if (!("url" in window) && ("webkitURL" in window)) {
        window.URL = window.webkitURL;
    };

    $('#cphMobile_resumenLife_mb').css('min-height', '45%');
    $('#cphMobile_portada_mb').css('min-height', '90%');
    $('#cphMobile_resumenLife_mb').css('height', 'auto');
    $('#cphMobile_portada_mb').css('height', 'auto');

   // var hTexto = $('#cphMobile_tbResumenLife_mb').height();
   // var hCaja = $('#cphMobile_resumenLife_mb').height();
    /*
    var hTexto = $('#cphMobile_tbResumenLife_mb').css('height');
    var hCaja = $('#cphMobile_resumenLife_mb').css('height');


    console.log('hTexto= ' + hTexto + ' - hCaja= ' + hCaja);

   // console.log('texto - css: '+ $('#cphMobile_tbResumenLife_mb').css('height')); //OK
   

    if (hTexto > hCaja) {
        $('#cphMobile_resumenLife_mb').css('height', 'auto');
        $('#cphMobile_portada_mb').css('height', 'auto');
    };
    */
  //  $('#cphMobile_tbResumenLife_mb').textinput('enable');
  //  $('#cphMobile_tbResumenLife_mb').css('overflow-y', 'scroll');
   // $('#cphMobile_tbResumenLife_mb').css('-webkit-overflow-scrolling', 'touch');

    $('#mb_subcab_biografia').attr('style', 'display:inline;');
    // $('#cphMobile_tbResumenLife_mb').height(130);
   /* 
    $("#cphMobile_tbResumenLife_mb").textinput({
        autogrow: true 
    });
    */
   $('#cphMobile_tbResumenLife_mb').css('cursor', 'not-allowed');
   // $('#cphMobile_tbResumenLife_mb').attr('style', 'height:96%;resize:none;color:rgb(3,119,170);');
   // $('#cphMobile_tableAutorPortada_mb').show();
    $('#cphMobile_tbResumenLife_mb').attr("readonly", "readonly");
    
    $('#cphMobile_tbResumenLife_mb').focus(function () {
        $(this).is('[readonly]') ? this.blur() : "";
    });
    
  //  $('#cphMobile_tbResumenLife_mb').css('box-sizing', 'border-box');

    console.log('Inicializar Variables');

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

    presentacionAnterior = "";

    estaClickActivo = true;
    
};

/**********************************************************************************************/
/********************** FUNCTION InicializarCKEDITOR ***************************************/
/**********************************************************************************************/
function InicializarCKEDITOR() {
   
    editor = CKEDITOR.replace('cphMobile_tbEdicionEntradaCom_mb', {
        height: 200 /*,
        format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div'*/
    });
    instancia = CKEDITOR.instances['cphMobile_tbEdicionEntradaCom_mb'];
    editor.addCommand("cargarImagen", {
        exec: function (edt) {

            BCargarImagenCKEDITOR();
        }
    });
//    editor.addCommand("comando", {
//        exec: function (edt) {
//            console.log('comando');
//            htmlEntradaCom = instancia.getData();
//            var altRegex = /alt\s*=\s*"[^"]*/g;
//            var altImagenes = htmlEntradaCom.match(altRegex);
//            $.each(altImagenes, function (iImg, img) {
//            console.log(img.replace(' ', '').replace('alt="', ''));
//            });
//        }
//    });
/*
    editor.ui.addButton('SuperButton', {
        label: "Click me",
        command: 'comando',
        toolbar: 'tools',
        icon: '/favicon.ico'
    });

*/
    editor.ui.addButton('InsertImage', {
        label: "Insert Image",
        command: 'cargarImagen',
        toolbar: 'tools',
        icon: '/Images/support/insertImage.ico'
    });

    CKEDITOR.on('instanceReady', function () {
        iframeBase = document.querySelector('iframe').contentDocument.querySelector('html');
        iframeBody = iframeBase.querySelector('body');
        paddingToCenterBody = ((iframeBase.offsetWidth - iframeBody.offsetWidth) / 2) + 'px';
        iframeBase.style.height = '100%';
        iframeBase.style.width = '100%';
        iframeBase.style.overflowX = 'hidden';
        iframeBody.style.height = '100%';
        iframeBody.style.margin = '0';
        iframeBody.style.paddingLeft = paddingToCenterBody;
        iframeBody.style.paddingRight = paddingToCenterBody;
        iframeBody.style.color = '#999999';

        $('.cke_contents iframe').contents().one("click", function () {
            editor.document.getBody().setHtml('');
            iframeBody.style.color = 'black';
        });
    });
};

/**********************************************************************************************/
/**************** ACTIVAR EVENTOS MENU     *************************************************/
/**********************************************************************************************/
function ActivarEventosMenu() {
    // ---- Menu Subcabecera -----------
    sIcoMenuSubcab.click(function () {
        if (esMenuSubcabActivo) {
            esMenuSubcabActivo = false;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            sesPresentacion = presentacionAnterior;
        }
        else { //Presentar Menú Subcabecera
            if (esMenuCabActivo) {
                sMenuCab.click();
            };
            esMenuSubcabActivo = true;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraRojo.png');
            presentacionAnterior = sesPresentacion;
            sesPresentacion = "menuLife";
        };
        PresentaLife();
    });

    sBPortadaLife.click(function () {
        if (sesPortadaEditada > 0) {
            presentacionAnterior = "navegacion";
            sIcoMenuSubcab.click();
        }
        else {
            //Notifica('Portada no editada');
            Notifica("PortadaNoEditada", jqNot);
            console.log('Portada no editada');
        };
      //  sesPresentacion = "navegacion";
      //  PresentaLife();

    });
    if(rol>=ROL_MIEMBRO)
        sBNuevoComentario.click(function () {
            presentacionAnterior = "editarComentario";
            sIcoMenuSubcab.click();
          
            sDdlEtapa.prop('disabled', false);
            sDdlEtapa.prop('selectedIndex', 0);
       // sesPresentacion = "editarComentario";
       // PresentaLife();
    });
    if (rol >= ROL_EDITOR)
        sBEditarPortada.click(function () {
            presentacionAnterior = "editarPortada";
            sIcoMenuSubcab.click();
            ActivarEventosPortada();
           // sesPresentacion = "editarPortada";
           // PresentaLife();
        });
    console.log('GenerarTitulos');
   GenerarTitulos();
};

/**********************************************************************************************/
/**************** ACTIVAR EVENTOS MIEMBRO     *************************************************/
/**********************************************************************************************/
function ActivarEventosMiembro() {

    inputFileComentario.change(function () {
        arrSelectedFilesEntradaCom = this.files;

        CargarFicheroImg(arrSelectedFilesEntradaCom[0], null, function () {
            CargarImagenComentario(arrSelectedFilesEntradaCom[0]);
        });

      //  CargarImagenComentario(arrSelectedFilesEntradaCom[0]);
    });
    sBPublicarCom.click(function () {
        console.log('click en Publicar');
        if (estaClickActivo) {

            estaClickActivo = false;
            etapa = sDdlEtapa.prop('selectedIndex') - 1;

            console.log('etapa: ' + etapa);

            htmlEntradaCom = instancia.getData();
            console.log('actualizarCom : ' + actualizarCom);
            if (actualizarCom) {
                ActualizarComentario(regCom.IdComentario);
            }
            else {
                if (etapa > -1) {
                    console.log('Antes de WsInsertarComentario');
                    LifeBook.LibreriaWebService.WsInsertarComentario(etapa, InsertarComentarioCorrecto);
                }
                else {
                    Notifica("ConfigurarEtapa", jqNot);
                    estaClickActivo = true;
                };
            };
        };
    });//FIN Publicar

    sBCancelarCom.click(function () {
       
        location.reload();
       // sesPresentacion = "navegacion";
       // PresentaLife();
       // GenerarTitulos();
    });
    /*
    sBNuevoComentario.click(function () {
        sesPresentacion = "nuevoComentario";
        PresentaLife();

    });
    */

};

/***************************************************************************/
/******************* FUNCION ActivarEventosEditor *************************/
/***************************************************************************/

function ActivarEventosEditor() {
    console.log('ActivarEventosEditor');
    console.log('sesPresentacion: '+sesPresentacion);

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
                };
            }
            else {
                GuardarPortadaCorrecto();
            };
        };

    });

    sBCancelarPortada.click(function () {
        location.reload();
    });

    if (sesPresentacion == "editarPortada") {
        ActivarEventosPortada();
    };
    /********************* EVENTO AÑADIR FOTO TITULAR *********************************************/
    sBSubirFotoLife.click(function () {
        console.log('click SubirFoto');
        document.getElementById('inputFileLife_mb').click();
    });

    inputFileLife.change(function () {
        arrSelectedFilesTitular = this.files;

        CargarFicheroImg(arrSelectedFilesTitular[0], null, function () {
            CargarImagenTitular();
            reader.readAsDataURL(arrSelectedFilesTitular[0]);
        });



      //  CargarImagenTitular();
       // reader.readAsDataURL(arrSelectedFilesTitular[0]);
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
        document.getElementById('inputFilePortada_mb').click();
    });

    inputFilePortada.change(function () {
        arrSelectedFilesPortada = this.files;

        CargarFicheroImg(arrSelectedFilesPortada[0], null, function () {
            CargarImagenPortada();
            reader.readAsDataURL(arrSelectedFilesPortada[0]);
        });

       // CargarImagenPortada();
       // reader.readAsDataURL(arrSelectedFilesPortada[0]);
    });

    /********************* EVENTO ELIMINAR FOTO PORTADA *********************************************/
    sBEliminarFotoPortada.click(function () {
        imgFotoPortada.attr('src', "/Images/support/fotoLife300.jpg");
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
 
    console.log('ActivarEventosPortada');
    $("#cphMobile_tbResumenLife_mb").textinput({
        autogrow: false
    });
    $('#cphMobile_tbResumenLife_mb').css('overflow-y', 'scroll');
    $('#cphMobile_tbResumenLife_mb').attr('style', 'height:96%;resize:none;color:rgb(3,119,170);');
    if (jqOrientacionVertical) {
        $('#cphMobile_resumenLife_mb').css('height', '45%');
        $('#cphMobile_portada_mb').css('height', (jqEsMovil) ? '90%' : '94%');
    }
    else {
        $('#cphMobile_resumenLife_mb').css('height', '53.4%');
        $('#cphMobile_portada_mb').css('height', (jqEsMovil) ? '200%' : '110%');
    };
    $('#cphMobile_tableAutorPortada_mb').hide();
    sTbResumenLife.removeAttr("readonly");
    textoInicialPortada = sTbResumenLife.val();
   

    sTbResumenLife.mousedown(function () {
        console.log('sTbResumenLife.mousedown');
        console.log('textoInicialPortada ' + textoInicialPortada);
        console.log('sesPortadaEditada ' + sesPortadaEditada);

        if ((sTbResumenLife.val() == textoInicialPortada) && (parseInt(sesPortadaEditada) % 2 == 0)) {
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


};

/***************************************************************************/
/******************* FUNCION DesactivarEventosPortada *************************/
/***************************************************************************/
function DesactivarEventosPortada() {
    $('#cphMobile_tbResumenLife_mb').css('overflow-y', 'scroll');
    $('#cphMobile_tbResumenLife_mb').attr('style', 'height:96%;resize:none;color:rgb(3,119,170);');
    $('#cphMobile_tableAutorPortada_mb').show();
    sTbResumenLife.attr("readonly", "readonly");
    sTbResumenLife.off("mousedown");
   // sTbResumenLife.off("mousedown focusout");
   // sDropFotoTitular.off("ondragover ondragleave ondrop");
   // sPortada.off("ondragover ondragleave ondrop");
    $("#cphMobile_tbResumenLife_mb").textinput({
        autogrow: false /*,
        preventFocusZoom: true */
    });
};

/**********************************************************************************************/
/********************** FUNCTION PresentaLife ***************************************/
/**********************************************************************************************/
function PresentaLife() {
    console.log('PresentaLife: ' + sesPresentacion);
    estaClickActivo = true;
    var patron = "Images/support/";
    var hayFotoTitular = (imgFotoCargadaLife.attr('src').indexOf(patron) == -1);
    var hayFotoPortada = (imgFotoPortada.attr('src').indexOf(patron) == -1);
    
    if (!hayFotoPortada) {
        imgFotoPortada.attr('src', "/Images/support/fotoLife" + ((sesPresentacion == "editarPortada") ? "300" : "300") + ".jpg");
        sFotoPortadaLife.css('height', ((sesPresentacion == "editarPortada") ? '140px' : '140px'));
        sDropFotoTitular.css('top', ((sesPresentacion == "editarPortada") ? '20px' : '20px'));
    }

    $('.fragmentLife').hide();

    switch (sesPresentacion) {

        case "menuLife":
            sMenuLife.show();
            if (rol >= ROL_EDITOR && sesPortadaEditada == 0) sBPortadaLife.hide();
            else sBPortadaLife.show();
            if (rol >= ROL_MIEMBRO) sBNuevoComentario.show();
           // else sBNuevoComentario.hide();
            if (rol >= ROL_EDITOR) sBEditarPortada.show();
            //else sBEditarPortada.hide();
            break;

        case "etapaLife":
            sEtapas.show();
            break;

        case "editarPortada":

            sPortada.show();
           // sPortada.css('border', '2px dashed #82a542');
            // sDropFotoTitular.css('border', '2px dashed #82a542');
            sBotonesPortadaLife.show();
            sTbResumenLife.css('border', '1px solid #82a542');
            sBGuardarPortada.show();
            sBCancelarPortada.show();
           
            sBSubirFotoLife.css('display', (!hayFotoTitular ? 'block' : 'none'));
            sBEliminarFotoLife.css('display', (!hayFotoTitular ? 'none' : 'block'));
            sBAniadirFotoPortada.css('display', (!hayFotoPortada ? 'block' : 'none'));
            sBEliminarFotoPortada.css('display', (!hayFotoPortada ? 'none' : 'block'));
            
            //ActivarEventosPortada();
            break;

        case "navegacion":
            sPortada.show();
            sPortada.css('border', '2px solid #0377aa');
            sDropFotoTitular.css('border', 'none');
            sTbResumenLife.css('border', 'none');
            if (rol >= ROL_EDITOR) {
                sBGuardarPortada.hide();
                sBCancelarPortada.hide();
                sBSubirFotoLife.hide();
                sBEliminarFotoLife.hide();
                sBAniadirFotoPortada.hide();
                sBEliminarFotoPortada.hide();
            };

            break;

        case "editarComentario":
            sEntradaComentario.show();
            editor.document.getBody().setHtml('');

            sDdlEtapa.prop('disabled', false);
            $('.ddlEtapas:first').text(sDdlEtapa.find('option')[0].innerText);
   
            //sDdlEtapa.prop('selectedIndex', 0);
            break;

    };

};

/*------------------------------------------------------------------------*/
/*-------------------------- FUNCIONES AUXILIARES -------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* FUNCION CargarImagenTitular *************************/
/***************************************************************************/
function CargarImagenTitular() {
    //console.log('CargarImagenTitular');
    //sDropFotoTitular.css('border', 'dashed 3px #7596a5'); //Gris azulado
    reader = new FileReader();
    $('#loading-mb').show();
    reader.onload = function (e) {
        console.log('reader.onload');
        nuevaImagenTitular = true;
        nombreImgTitular = arrSelectedFilesTitular[0].name;
        console.log('Antes de poner imgFotoCargadaLife');
        imgFotoCargadaLife.attr('src', e.target.result);

        imgFotoCargadaLife.on('load', function () {
            console.log('Antes de AjustarImagen');
            AjustarImagen(imgFotoCargadaLife, sBSubirFotoLife, sBEliminarFotoLife,sPortada);

            imgFotoCargadaLife.off('load');
        });
    };

};

/**********************************************************************************************/
/********************** FUNCTION CargarImagenPortada ***************************************/
/**********************************************************************************************/
function CargarImagenPortada() {

    //sPortada.css('border', 'dashed 3px #7596a5');
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
            sBAniadirFotoPortada.hide();
            sBEliminarFotoPortada.show();
        }, false);

    }
};

/**********************************************************************************************/
/********************** FUNCTION CargarImagenComentario ***************************************/
/**********************************************************************************************/
function CargarImagenComentario(file) {
    //alert(file.name);
    var image = document.createElement("img");
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        console.log('leido fichero');
        image.src = reader.result;

       image.addEventListener('load', function (ev) {
           ev.target.removeEventListener(ev.type, arguments.callee);
           console.log('onload img');
           instancia.insertHtml('<img src="' + ResizeImgCom(image.src, 600) + '" width="400" alt="' + file.name + '">');
       }, false);
    };
};

/**********************************************************************************************/
/********************** FUNCTION BCargarImagenCKEDITOR ***************************************/
/**********************************************************************************************/
function BCargarImagenCKEDITOR() {
    document.getElementById('inputFileLifeCom_mb').click();
};

/**********************************************************************************************/
/********************** FUNCTION GenerarTitulos ***************************************/
/**********************************************************************************************/
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

    $('.bTituloEtaX_mb').not('#bTituloEtaX_mb').remove();

    console.log('GenerarTitulos - sesNComTotal: ' + sesNComTotal);
    if (sesNComTotal > 0) {
        sBTituloEtaX.show();
        for (var i = 0; i < sesNEtapas; i++) {
            console.log('GenerarTitulos - sesNCom '+i+' : ' + sesNCom[i]);
            if (sesNCom[i] > 0) {
                GenerarTitulo(i)
            }
        }
        sBTituloEtaX.hide();
    }
   
};

/**********************************************************************************************/
/********************** FUNCTION GenerarTitulo ***************************************/
/**********************************************************************************************/
function GenerarTitulo(etp) {
    /*
    var clonEtaX = sEtaX.clone();
    var clonTdTituloEtaX = clonEtaX.find('#tdTituloEtaX');
    var clonTdBotonEtaX = clonEtaX.find('#tdBotonMostrarOcultarEtaX');
    var clonComEtaX = clonEtaX.find('#comEtaX');
    var clonImgBotonEtaX = clonEtaX.find('#imgBotonMostrarOcultarEtaX');
    */
    var clonBTituloEtaX = sBTituloEtaX.clone();

    clonBTituloEtaX.text(sDdlEtapa.find('option')[etp + 1].innerText);

    clonBTituloEtaX.attr('id', 'bTituloEta' + etp);

 
    clonBTituloEtaX.click(function () {
        etapa = etp;
    console.log("Etapa: " + sDdlEtapa.find('option')[etapa + 1].innerText);
        if (etapa == etapaMostrada) {
            console.log("etapa == etapaMostrada");
         //   OcultarEtapa(etapaMostrada);
        }
        else {
            console.log("etapa != etapaMostrada");
           GenerarEtapa();
        };
        presentacionAnterior = "etapaLife";
        sIcoMenuSubcab.click();
    });

    sMenuEtapasLife.append(clonBTituloEtaX);
};

/**********************************************************************************************/
/********************** FUNCTION OcultarEtapa / MostrarEtapa **********************************/
/**********************************************************************************************/
function OcultarEtapa(etp) {
    var sComEta = $('#comEta' + etp);
    var sEta = $('#eta' + etp);
    var imgBotonEta = sEta.find('#imgBotonMostrarOcultarEtaX');
    imgBotonEta.attr('src', "Images/support/botonMostrar.gif");
    sComEta.html('');
    sComEta.hide();
    etapaMostrada = null;
};

function MostrarEtapa() {
    console.log('MostrarEtapa: ' + etapa);
    var sBEliminarCom;
    var sBEditarCom;
    var idCom;
    var sComYEtaXClon;
    
    $('#tituloEtaX_mb').html(sDdlEtapa.find('option')[etapa + 1].innerText);
    $('.comYEtaX_mb').not('#comYEtaX_mb').remove();
    sComYEtaX.show();
    for (var i = sesNCom[etapa] - 1; i >= 0; i--) {
        sComYEtaXClon = sComYEtaX.clone();
        sComYEtaXClon.attr('id', 'com' + i);
        var sTextoComYEtaX = sComYEtaXClon.find('#textoComYEtaX_mb');
        sTextoComYEtaX.html(listComEtapa[i].Comentario);
        var sImgAutorCom = sComYEtaXClon.find('#imgAutorComYEtaX_mb');
        PonerFotoUser(sImgAutorCom, listComEtapa[i].FotoAutor, listComEtapa[i].SexoAutor);
        var sTdNombreApeAutorCom = sComYEtaXClon.find('#tdNombreApeAutorComYEtaX_mb');
        var sTdRolAutorCom = sComYEtaXClon.find('#tdRolAutorComYEtaX_mb');
        sTdNombreApeAutorCom.html(sTdNombreApeAutorCom.html().replace('_Nombre', listComEtapa[i].NombreAutor).replace('_Apellidos', listComEtapa[i].ApeAutor));
        sTdRolAutorCom.html(sTdRolAutorCom.html().replace('_Rol', sDdlRol.find('option')[rol].innerText));
        sBEliminarCom = sComYEtaXClon.find('#bEliminarComYEtaX_mb');
        sBEditarCom = sComYEtaXClon.find('#bEditarComYEtaX_mb');
        
        console.log('IdComentario: ' + listComEtapa[i].IdComentario);

        if (sesUsu == listComEtapa[i].IdAutor || rol > ROL_EDITOR) {
            sBEliminarCom.show();
           
          CrearEventoEliminarComentario(sBEliminarCom, listComEtapa[i].IdComentario);

        }
        else {
            sBEliminarCom.hide();

        };
       
        if ((sesUsu == listComEtapa[i].IdAutor) /* && (i == sesNCom[etapa] - 1) */) {
            sBEditarCom.show();
            regCom = listComEtapa[i];
            CrearEventoEditarComentario(sBEditarCom, regCom);

        }
        else {
            sBEditarCom.hide();
        };
        sEtapas.append(sComYEtaXClon);
    };
    sComYEtaX.hide();
    etapaMostrada = etapa;

};

/**********************************************************************************************/
/********************** FUNCTION CrearEventoEliminarComentario ***************************************/
/**********************************************************************************************/
function CrearEventoEliminarComentario(selector, idComentario) {

    var nComent = { indice: idComentario, etapa: etapa, circulo: sesCirculo };
    selector.on('click', nComent, EliminarComentario);
    function EliminarComentario(e) {
        //alert(evt.data.indice);
        LifeBook.LibreriaWebService.WsEliminarComentarioLife(e.data.indice, e.data.etapa, e.data.circulo, EliminarComentarioLifeCorrecto, EliminarComentarioLifeIncorrecto);
        //alert('Tras WS');
    };
    function EliminarComentarioLifeCorrecto() {
        sesNCom[etapa]--;
        sesNComTotal--;
        GenerarTitulos();
        GenerarEtapa();
        console.log('etapa: ' + etapa + ' sesNCom: ' + sesNCom[etapa]);
        if (sesNCom[etapa]==0){
            sesPresentacion = "navegacion";
            PresentaLife();
        };
       
    };
    function EliminarComentarioLifeIncorrecto() {
        console.log('Eliminar Comentario Incorrecto');
        Notifica("EliminarComentarioIncorrecto", jqNot);
    };
};

/**********************************************************************************************/
/********************** FUNCTION CrearEventoEditarComentario ***************************************/
/**********************************************************************************************/
function CrearEventoEditarComentario(selector, regComEtapa) {

    selector.on('click', regComEtapa, EditarComentario);
    function EditarComentario(e) {
        // var imgEditadasRegex = /<img[^>]*\/>/g;
        imagenesComIniEdicion = e.data.Comentario.match(imgEditadasRegex);
        $.each(imagenesComIniEdicion, function (iImg, img) {
            imagenesComIniEdicion[iImg] = img.replace('App_Data/fotosCom/', '').replace('"', '');
            //alert(imagenesComIniEdicion[iImg]);
        });

        sesPresentacion = "editarComentario";
        PresentaLife();
        // $('.cke_contents iframe').contents().off("click");
        $('.cke_contents iframe').contents().click();
        editor.document.getBody().setHtml(e.data.Comentario);
        iframeBody.style.color = 'black';
       
        sDdlEtapa.prop('disabled', 'false');
        sDdlEtapa.prop('selectedIndex', etapa + 1);
        $('.ddlEtapas:first').text(sDdlEtapa.find('option')[etapa+1].innerText);
        sDdlEtapa.prop('disabled', 'disabled');
        actualizarCom = true;
     
        regCom = e.data;
    };
  
};

/**********************************************************************************************/
/********************** FUNCTION GenerarEtapa ***************************************/
/**********************************************************************************************/
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

        listComEtapa.sort(function (comA, comB) {
            if (comA.IdComentario > comB.IdComentario) return 1;
            else return -1;
        });

        etapaListCom = etapa;
        MostrarEtapa();
    };
    function CargarComentariosEtapaIncorrecto(result) {
        console.log('Error al cargar los comentarios de la etapa');
        Notifica("ErrorCargaComentarios", jqNot);
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
    console.log('ActualizarComentario ' + idCom);
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
        console.log('GuardarComentario');
        LifeBook.LibreriaWebService.WsGuardarComentario(idCom, htmlSalidaCom, GuardarComentarioCorrecto);

    }
    function GuardarComentarioCorrecto() {
        console.log('GuardarComentarioCorrecto!');
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

        console.log('Antes de GenerarTitulos');
        GenerarTitulos();

        sesPresentacion = "etapaLife";
        PresentaLife();
       
        console.log('Antes de GenerarEtapa');
        GenerarEtapa();
        console.log('Tras de GenerarEtapa');
       
    }



}; //Fin Actualizar Comentario


/*------------------------------------------------------------------------*/
/*--------------------- FIN FUNCIONES CALL BACK -------------------------*/
/*------------------------------------------------------------------------*/
