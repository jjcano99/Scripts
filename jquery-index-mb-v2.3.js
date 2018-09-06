
/*------------------------------------------------------------------------*/
/*---------------------- INDEX MOBILE ------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
//var sMascaraMaster;
var sOlvidoClave;

var sTbBuscador;
var sBNuevaBusqueda;
var sLiteralResultados;
var imgLupaBuscadorInicio;

//NOTIFICACION TOP
var tdTexto;
var bTexto;
var tbInput;
var bInput;
var tbId;
var tdTitulo;
var tableTexto;
var tableTb;
var tdBotonTexto;
var tdTbInput;
var tdAspa;


var notTop;
var cuenta;
var inicio;
var busqueda;

//FORMULARIO
var sNombre;
var sApellidos;
var sEmail;
var sEmailBis;
var sFechaNac;
/*
var sDia;
var sMes;
var sAnio;
*/
var sCiudadNac;
var sCiudadRes;
var sClave;
var sClaveBis;
var sHombre;
var sMujer;
var sImgFotoCargada;
var sRecordar;

var sBSubirFoto;
var sBEliminarFoto;
var sBTerminado;
var sBCancelar;

//SEARCH
//var sColResultados;
var sSearchResultados;
var sSearchRegistrarte;
var sSearchSolicitudEnviada;
var sSearchSolicitudEntrada;
var sRbFamiliar;
var sRbRelacionado;



/***************************************************************************/
/******************* VARIABLES GLOBALES ************************************/
/***************************************************************************/

var jqSelectedFiles;
var fotoDisponible;
var fotoCargada;
var fotoPresentada;

var gImgB64Usuario;

var primerClick;

//var jqNot; //Definida en MASTER
var jqCabecera;
var jqCab;
var jqNotTop;
var jqPaginaIndex;
var jqPresentacion;
var jqEmail;
var jqSexo;

var gTextoBus;
var gTextoBusSql;
var gLiteralResultados;
var gLiteralResultadosIni;
var gRol;
var gEstado;
var gFotoAntes;
var gFotoDespues;
var gNombreImgUsuario;
var gFotoEliminar;
var gPaginaOrigen;
var gCirculoEntrada;
var gCirculoSol;
var gCirculo;
var gCirculoPropio;

var gWinW;
var gWinH;

var listCirculosBusqueda;
var registro;

var hayFotoAntes;
var hayFotoDespues;
var hayNuevaFoto;
var estaClickActivo;

var regexNombreFichero;
var emailRegex;

var arrRefNotSearch;
var arrSelNotSearch;

/*------------------------------------------------------------------------*/
/*----------------------INICIO 1 - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {

    console.log("JQ width: " + $(window).width());
    console.log("JQ height: " + $(window).height());
    console.log("JS width: " + window.innerWidth);
    console.log("JS height: " + window.innerHeight);


/*
    console.log('INICIO INDEX-MB');
    console.log('Scroll 1: ' + $('#cphMobile_cuentamb_mb_ventanaCuenta').scrollTop());
    console.log('Scroll 2: ' + $('#cphMobile_cuentamb_cuenta').scrollTop());
    console.log('Scroll 3: ' + $(window).scrollTop());
    console.log('Scroll 4: ' + $('#mb_pagina').scrollTop());
    console.log('Scroll 5: ' + $('.ui-pag-active').scrollTop());
    console.log('Scroll 6: ' + $(document).scrollTop());
    console.log('Scroll 7: ' + $.mobile.silentScroll());
*/
     
 //   $('#mb_subcab_circuloFamiliar').attr('style', 'display:inline;');

    //PROVISIONAL: Presentar Inicio / Ocultar Search
  //  $('#cphMobile_mb_inicio').show();
   // $('#cphMobile_mb_search').hide();
    //----------------------------------

    AsignarSelectores();
   // LeerSesion();
    InicializarVariables();

    //Presentar Notificación Top si existe    
    if (notTop.css('display') != 'none') {
        notTop.hide();
        //sMascaraMaster.show();
        notTop.fadeIn(1000);
    };

    //Detectar si hay Foto en el Formulario
    var srcImgFotoCargada = sImgFotoCargada.attr('src');
    //alert('srcImgFotoCargada: ' + srcImgFotoCargada);
    hayFotoAntes = srcImgFotoCargada.indexOf('/support/silueta') == -1;
    if (hayFotoAntes) {
        gFotoAntes = srcImgFotoCargada.match(regexNombreFichero);
        sBEliminarFoto.show();
        sBSubirFoto.hide();
    }
    else {
        gFotoAntes = '';
        sBEliminarFoto.hide();
        sBSubirFoto.show();
        // alert('sHombre? '+sHombre.prop('checked'));
        if (sHombre.prop('checked') || sMujer.prop('checked')) {
            PonerFotoUsuario(sImgFotoCargada, '', ((sHombre.prop('checked')) ? "H" : "M"), W_FOTO_USUARIO_MB);
        }
        else {
            console.log('No hay foto antes, poner silueta hombre y seleccionar sMujer');
            PonerFotoUsuario(sImgFotoCargada, '', "M", W_FOTO_USUARIO_MB);
            //sHombre.prop('checked', true);
            sMujer.parent().find('label').click();

           // sHombre.parent().trigger('vclick');
        };
    };





    //Cargar Notificaciones
    LifeBook.LibreriaWebService.CargarNot("index", function (result) {
        jqNot = result;
        LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
            jqNot = $.merge(jqNot, resultMaster);

        });

    });


    LifeBook.LibreriaWebService.CargarNotTop("index", function (result) {
        jqNotTop = result;

 

    });

   // LifeBook.LibreriaWebService.CargarNot("index", jqCargarNot);
   // LifeBook.LibreriaWebService.CargarNotTop("index", jqCargarNotTop);

   ActivarEventosBase();

    ActivarEventosFormulario();
    //----------Nuevo
    //ACCIONES INICIALES TRAS LA CARGA DE PÁGINA SEGÚN jqStatus (accionIndex)
    console.log('jqStatus: ' + jqStatus);
    switch (jqStatus) {

        case 'search':
            if (gTextoBusSql) {
                PresentaIndex(jqStatus);
                GetServerCirculos(gTextoBusSql);
            };

            break;

        case 'entrarEnCirculoAutenticado':
        case 'entrarEnCirculoNoAutenticado':
            if (sesCirculoSol > 0) {
                PresentaIndex(jqStatus);
                PresentarCirculoSolicitado(sesCirculoSol);
            };
            break;

        case 'confirmarRegistro':
            jqStReg = 2;

            break;
            /*
        case 'inicioNoAut':
            PresentaIndex('inicio');
            break;
            */
    };
    //---------------Fin Nuevo

    /*
    //Presentar Resultados de Búsqueda si sesPresentacion=='search'
    if (sesPresentacion == 'search' && gTextoBusSql) {
        PresentaIndex("search");
        $('.res').remove();
        GetServerCirculos(gTextoBusSql);
    }
    else if (sesPresentacion == 'entrarEnCirculo' && sesCirculoSol > 0) {
        PresentaIndex("entrarEnCirculo");
        $('.res').remove();
        LifeBook.LibreriaWebService.WsGetCirculoSol(sesCirculoSol,
            function (result) {
                gCirculoSol = result;
                $('#res_').show();
                var res = $('#res_').clone();
                res.attr('class', 'res');
                res.attr('id', 'res_' + gCirculoSol.IdCirculo);
                var imgFile = res.find('img').attr('src');
                PonerFotoUsuario(res.find('img'), gCirculoSol.Foto, gCirculoSol.Sexo, 100);
                res.find('#nombreRes_').text(gCirculoSol.Nombre);
                res.find('#apellidosRes_').text(gCirculoSol.Apellidos);
                $('#resultados').append(res);
                $('#res_').hide();
                gCirculoEntrada = gCirculoSol.IdCirculo;
            });
    }
    else if (sesPresentacion == 'account') {

        LifeBook.LibreriaWebService.WsGetUserFechaNac(function (result) {
            sFechaNac.val(result);
            PresentaIndex("account");
        });

        sRecordar.click();

    };
    */
}); //FIN DOCUMENT READY

/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES *********************************/
/***************************************************************************/
function AsignarSelectores() {

    
    sOlvidoClave = $('#olvidoClave_mb');
 
    

//SECCIONES
inicio = $('#cphMobile_mb_inicio');
busqueda = $('#cphMobile_searchmb_busqueda');
cuenta = $('#cphMobile_cuentamb_cuenta');
notTop = $('#cphMobile_notificacionTopmb_notTop');

/* Variables de NotTop    
    tdBotonTexto = $('td#cphPagina_notificacionTop_tdBNotTopTexto');
*/
//NOTIFICACION TOP
tdTitulo = $('td#tdCabNotTopTitulo');
tdAspa = $('td#tdCabNotTopAspa');
tableTexto = $('div#cphMobile_notificacionTopmb_notTopTextoBGris');
tdTexto = $('div#notTopTexto');
bTexto = $('#cphMobile_notificacionTopmb_notTopBGris');//BOTON GRIS
tableTb = $('table#cphMobile_notificacionTopmb_tableNotTopTb');
tdTbInput = $('td#cphMobile_notificacionTopmb_tdTbNotTop');//TD INPUT
tbInput = $('#cphMobile_notificacionTopmb_tbNotTop');
bInput = $('#bNotTopTb');//BOTON NARANJA
tbId = $('#cphMobile_notificacionTopmb_tbNotTopId');

//BUSQUEDAS
sTbBuscador = $('#cphMobile_tbBuscador_mb');
sBNuevaBusqueda = $('#bNuevaBusqueda');
sLiteralResultados = $('#divLiteralResultados');
imgLupaBuscadorInicio = $('#mb-inicio-buscador-tdImg img');
  
    //FORMULARIO

sNombre = $('#cphMobile_cuentamb_tbNombre');
sApellidos = $('#cphMobile_cuentamb_tbApellidos');
sEmail = $('#cphMobile_cuentamb_tbEmailCuenta');
sEmailBis = $('#cphMobile_cuentamb_tbEmailCuentaBis');
sFechaNac = $('#inFechaNac');
    /*
    sDia = $('#cphPagina_cuenta_tbDia');
    sMes = $('#cphPagina_cuenta_ddlMeses');
    sAnio = $('#cphPagina_cuenta_tbAnio');
    */
sCiudadNac = $('#cphMobile_cuentamb_tbCiudadNac');
sCiudadRes = $('#cphMobile_cuentamb_tbCiudadRes');
sClave = $('#cphMobile_cuentamb_tbClaveCuenta');
sClaveBis = $('#cphMobile_cuentamb_tbClaveCuentaBis');
sHombre = $('#cphMobile_cuentamb_rbHombre');
sMujer = $('#cphMobile_cuentamb_rbMujer');
//sImgFotoCargada = $('#cphMobile_cuentamb_imgFotoCargada');
sImgFotoCargada = $('#fotoCargada img');
sRecordar = $('#inRecordar');

    sBSubirFoto = $('#bSubirFoto');
    sBEliminarFoto = $('#bEliminarFoto');
    sBTerminado = $('#bTerminado');;
    sBCancelar = $('#bCancelar');;


    //SEARCH
  
   // sColResultados = $('#col_resultados');
    sSearchResultados = $('#cphMobile_searchmb_ventana_resultados');
    sSearchRegistrarte = $('#cphMobile_searchmb_ventana_registrarte');
    sSearchSolicitudEnviada = $('#cphMobile_searchmb_ventana_solicitud');
    sSearchSolicitudEntrada = $('#cphMobile_searchmb_ventana_peticion');
    sRbFamiliar = $('#cphMobile_searchmb_rbFamiliar');
    sRbRelacionado = $('#cphMobile_searchmb_rbRelacionado');

};

/***************************************************************************/
/******************* LEER SESION   *****************************************/
/***************************************************************************/
/* Leída Sesión en Master

function LeerSesion() {
    sesTextoBusCirculo = $('#tbCabSesTextoBusCirculo').val();
    sesPresentacion = $('#tbCabSesPresentacion').val();
    sesPaginaOrigen = $('#tbCabSesPaginaOrigen').val();
    sesUsu = parseInt($('#tbCabSesUsuario').val());
    sesCirculo = parseInt($('#tbCabSesCirculo').val());
    sesCirculoSol = parseInt($('#tbCabSesCirculoSol').val());
    sesCirculoPropio = $('#tbCabSesCirculoPropio').val();
    sesRol = $('#tbCabSesRol').val();
};
*/
/***************************************************************************/
/******************* INICIALIZAR VARIABLES      *************************/
/***************************************************************************/
function InicializarVariables() {

    $('.ui-btn').css('text-align', 'center');
    $('.ui-radio').css('margin-left', '5%');

    gPaginaOrigen = sesPaginaOrigen;
    if (gPaginaOrigen == '') gPaginaOrigen = '/Tree.aspx';

    jqSelectedFiles = null;
    fotoDisponible = false;
    fotoCargada = false;
    fotoPresentada = false;
    hayFotoAntes = false;
    hayFotoDespues = false;
    hayNuevaFoto = false;
    primerClick = true;
    jqPaginaIndex = true;
    gTextoBus = "";
    gLiteralResultadosIni = sLiteralResultados.html();
    gTextoBus = sesTextoBusCirculo;
    gTextoBusSql = NorPatronSql(gTextoBus);
    gEstado = sesPresentacion;
    gFotoAntes = '';
    gFotoDespues = '';
    gCirculo = parseInt(sesCirculo);
    gCirculoPropio = parseInt(sesCirculoPropio);
    gRol = ValorRol(sesRol);
    regexNombreFichero = /[^\/]+$/;
    emailRegex = /\S+@(\S+\.)+[A-z]{2,4}/;
    regexFecha = /(\d{4})[-\/ .]([01]?\d)[-\/ .]([0123]?\d)/;

    gWinH = $(window).height();
    gWinW = $(window).width();

    sSearchRegistrarte.attr('tabIndex', 1);
  
    /*
    //FORMULARIO
    sNombre.attr('tabIndex', 1);
    sApellidos.attr('tabIndex', 2);
    sEmail.attr('tabIndex', 3);
    sEmailBis.attr('tabIndex', 4);
    sDia.attr('tabIndex', 5);
    sMes.attr('tabIndex', 6);
    sAnio.attr('tabIndex', 7);
    sMujer.attr('tabIndex', 8);
    sHombre.attr('tabIndex', 9);
    sClave.attr('tabIndex', 10);
    sCiudadNac.attr('tabIndex', 11);
    sCiudadRes.attr('tabIndex', 12);
    sBSubirFoto.attr('tabIndex', 13);
    $('#bTerminado').attr('tabIndex', 14);
    */
    registro = new LifeBook.Settings();

    //SEARCH
    arrRefNotSearch = ["Resultados", "Registrarte", "SolicitudEnviada", "SolicitudEntrada"];
    arrSelNotSearch = [sSearchResultados, sSearchRegistrarte, sSearchSolicitudEnviada, sSearchSolicitudEntrada];

    arrPaginas = ["/Tree.aspx", "/Life.aspx", "/Album.aspx"]; //Nuevo

    gImgB64Usuario = {};
    estaClickActivo = true;

};

/*------------------------------------------------------------------------*/
/*--------------------  EVENTOS  -----------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* ACTIVAR EVENTOS BASE    *************************/
/***************************************************************************/

function ActivarEventosBase() {


    //NOTIFICACIONES

    tbInput.click(function () {
        tbInput.val("");
        tbInput.css('font-size', '100%');
    });

    ActivarEventoBotonInputNotificacionTop();

    ActivarEventoBotonTextoNotificacionTop();

    //Click para ocultar la NotificacionTop
    tdAspa.click(function () {
        notTop.hide();
        //sMascaraMaster.hide();
    });

    //EVENTOS BÚSQUEDA

    //Evento Hover en Buscador
    $('#mb-inicio-buscador-tableBus').hover(
        function () {
            imgLupaBuscadorInicio.attr('src', '/Images/support/lupa_magenta.gif');
           sTbBuscador.css('border', 'solid 2px #f024bb');
        },
        function () {
            imgLupaBuscadorInicio.attr('src', '/Images/support/lupa_verde.gif');
           sTbBuscador.css('border', 'solid 2px #0377aa');
        });
    //Evento Click en Caja Buscador  
    sTbBuscador.click(function () {
     /*   //Pantalla completa
                var el = document.documentElement,
                rfs = el.requestFullscreen
                      || el.webkitRequestFullScreen
                      || el.mozRequestFullScreen
                      || el.msRequestFullscreen
                        ;
                        rfs.call(el);
        */
        if (primerClick) {
           sTbBuscador.val('');
            sTbBuscador.css('color', 'black');
        }
        primerClick = false;
    });
    //Evento Click en Lupa
    imgLupaBuscadorInicio.click(function () {
        gTextoBus = sTbBuscador.val();
        if (gTextoBus != '' && !primerClick) {
            PresentaIndex("search");
            $('.res').remove();
            gTextoBusSql = NorPatronSql(gTextoBus);
            GetServerCirculos(gTextoBusSql);
        }
        else if (!primerClick && gTextoBus == '') {
            sTbBuscador.focus();
        };
    });
    //Evento Click en Nueva Búsqueda
    sBNuevaBusqueda.click(function () {
        PresentaIndex('inicio');
        if (!jqEsAutenticado) $('#mb_tableBotonesCab').show();
        jqOrientacionVertical = $(window).width() < $(window).height();
        if (jqOrientacionVertical) {
             $('#mb-tdLogoCabecera img').hide();
             $('#mb-tdLogoCabecera').css('width', '210px');

        }
        else {
            $('#mb-tdLogoCabecera img').show();
            $('#mb-tdLogoCabecera').css('width', '60%');

        };

        sTbBuscador.val('');
        sTbBuscador.css('color', 'black');
        primerClick = false;
        sTbBuscador.focus();
    });


 /*
    $('#mb-inicio-buscador-tdImg img').click(function () {

        console.log('Click en lupa mobile');
        $('#cphMobile_mb_inicio').hide();
        $('#cphMobile_mb_search').show();

        //  window.location.href = '#mb-search';

    });
*/
    //Evento Click en Registrarte
    $('#mb-bRegistrarte, #bSearchRegistrarte').click(function () {
        // gEstado = 'registro'; //REVISAR
        jqStatus = 'registro';
        PresentaIndex("account");
    });

    sOlvidoClave.click(function () {
        console.log('click en sOlvidoClave');
        console.log('email: ' + $('#mb_tbEmailEntrar').val());
        var emailEntrar = $('#mb_tbEmailEntrar').val();
        sVentanaEntrar.hide();
        PresentaIndex('inicio');
       $('#mb_pagina').show();
        NotificaTop("RestauracionClave", jqNotTop);
        if(emailEntrar) $('#cphMobile_notificacionTopmb_tbNotTop').val(emailEntrar);
        
    });


    //  CANCELAR ENTRADA EN CIRCULO FAMILIAR
    $('#bSearchCancelar').click(function () {

        sBNuevaBusqueda.click(); //Nuevo
        /*
        if (gEstado == 'entrarEnCirculo') window.location.href = '/Tree.aspx';
        else {
            NotificaSearch("Resultados");
            $('.res').show();
        };
        */
    });
    // ENVIAR SOLICITUD PARA ENTRAR EN CIRCULOS FAMILIAR
    $('#bEnviarPeticion').click(function () {
        var tipoSolicitud;
        if (sRbFamiliar.prop('checked')) tipoSolicitud = 1; //FAMILIAR
        else tipoSolicitud = 2; //RELACIONADO
        var circuloA;
        if (gRol < 4) circuloA = gCirculoPropio; //Revisado
        else circuloA = gCirculo;
        //  LifeBook.LibreriaWebService.WsRegistrarPeticion(circuloA, gCirculoEntrada, tipoSolicitud, RegistrarPeticionCorrecto);
        LifeBook.LibreriaWebService.WsRegistrarPeticion(circuloA, gCirculoEntrada, tipoSolicitud, function () { NotificaSearch("SolicitudEnviada"); }); //Revisado
    });
    //CONTINUAR TRAS ENVIAR SOLICITUD ENTRADA CIRCULO -> TREE-SOLICITUDES ENVIADAS
    $('#bSearchContinuar').click(function () {
        LifeBook.LibreriaWebService.WsActualizarSesionTree('solicitudesEnviadas',
                            function () {
                              //  window.location.href = '/Tree.aspx';
                                window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo //Nuevo
                            });

       // window.location.href = '/tree/solicitudesEnviadas';
    });


    //Eventos Click en cajas CREA
    $('.mb-inicio-crea').click(function (e) {
        //------------ Nuevo ----------------
        if (sesUsu > 0) {
            if (jqStatus == "confirmarRegistro") {
                NotificaTop("ConfirmarRegistro", jqNotTop);
                jqNombre = $('#mb_tdUserName').html().split('<br>', 1)[0].replace(' ', '');
                tdTexto.html(tdTexto.html().replace('_user', jqNombre));

                //console.log('Nombre: ' + $('#userName').html().split('<br>',1)[0].replace(' ',''));
            }
            else window.location.href = '/' + sDdlPaginas.find('option')[$('.mb-inicio-crea').index(this)].innerText + '/' + sesAliasCirculo;
        }
        else {
            jqStatus = 'registro';
            PresentaIndex("account");
        }
        //------------------------------
        /*
       // jqPeticion = $(this).parent().find('a').attr('href');
        jqPeticion = $(this).parent().attr('href');

        console.log('jqStatus: ' + jqStatus);
        console.log('jqPeticion: ' + jqPeticion);


        switch (jqStatus) {
            case "NAV_AUT":
                window.location.href = jqPeticion;
                break;

            case "CONFIRM":
                e.preventDefault();
                NotificaTop("ConfirmarRegistro", jqNotTop);
                break;

            default:
                e.preventDefault();
                PresentaIndex("account");
                break;
        };
        */
    });



};

/***************************************************************************/
/******************* ACTIVAR EVENTOS FORMULARIO    ****************/
/***************************************************************************/
function ActivarEventosFormulario() {
   
    $('#cphMobile_cuentamb_rbHombre, #cphMobile_cuentamb_rbMujer').change(function () {
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada, '', ((sHombre.prop('checked')) ? "H" : "M"), W_FOTO_USUARIO_MB);
    });
   
/*
    cuenta.keypress(function (e) {
        var tab;
        if (e.which == 13) {
            $(":focus").each(function () {
                tab = Number($(this).attr('tabIndex')) + 1;
            });
            $('[tabIndex="' + tab + '"]').focus();
        }
    });
   
    sHombre.mousedown(function () {
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada, '', "H", 110);
    });
    sMujer.mousedown(function () {
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada, '', "M", 110);
    });
 */
    /* EVENTO CLICK EN TERMINADO */
    sBTerminado.click(function () {
       
        if (estaClickActivo) {

            registro = new LifeBook.Settings();
            var camposCorrectos = true;
            LeerFormulario();
            // Notifica("Registro_CamposErroneos", jqNot);

            // document.body.scrollTop = 200;
            //console.log('document.body.scrollTop: ' + document.body.scrollTop);
            //$.mobile.silentScroll(0);


            console.log('Desde Terminado - gNombreImgUsuario: ' + gNombreImgUsuario);
            if (camposCorrectos) {
                estaClickActivo = false;
                if (gNombreImgUsuario != '') {
                    gImgB64Usuario = sImgFotoCargada.attr('src');

                    PonerImgB64($('#mb_tdFotoCab img'), gImgB64Usuario, 40);
                    // $('#mb_tdFotoCab img').attr('src', gImgB64Usuario);

                }
                else {
                    PonerFotoUsuario($('#mb_tdFotoCab img'), '', jqSexo, 40);
                    //$('#mascaraMaster').hide();
                };
                PostImgB64ToServer(sImgFotoCargada.attr('src'), gNombreImgUsuario, "/Images/users/",
                    function () { //success
                        if (hayNuevaFoto) $('#fotoCab img').attr('src', gImgB64Usuario);
                        //--- Nuevo ---------------------------------------------
                        console.log('jqStatus: ' + jqStatus);
                        switch (jqStatus) {
                            case 'registro':
                                LifeBook.LibreriaWebService.WsRegistrar(registro,
                                   function (result) { //RegistroCorrecto
                                       sesUsu = parseInt(result[0]);
                                       sesAliasCirculo = result[1];

                                       if (sesUsu > 0) {
                                           if ($('#inRecordar').prop('checked')) PonerCookies();
                                           InicioAutenticado();
                                       }
                                       else {
                                           sEmail.val('');
                                           sEmailBis.val('');
                                           sNombre.focus();
                                           Notifica("Registro_EmailExistente", jqNot);
                                           estaClickActivo = true;
                                       };
                                   },
                                    function () {//RegistroIncorrecto
                                        sNombre.focus();
                                        Notifica("Registro_ErrorBBDD", jqNot);
                                        estaClickActivo = true;
                                    });

                                break;

                            case 'registroInvitado':

                                LifeBook.LibreriaWebService.WsRegistrar(registro,
                                  function (result) { //RegistroCorrecto

                                      sesUsu = parseInt(result[0]);
                                      sesAliasCirculo = result[1];
                                      if (sesUsu > 0) {
                                          if ($('#inRecordar').prop('checked')) PonerCookies();
                                          window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculoSol;
                                      }
                                      else {
                                          sEmail.val('');
                                          sEmailBis.val('');
                                          sNombre.focus();
                                          Notifica("Registro_EmailExistente", jqNot);
                                          estaClickActivo = true;
                                      };
                                  },
                                   function () {//RegistroIncorrecto
                                       sNombre.focus();
                                       Notifica("Registro_ErrorBBDD", jqNot);
                                       estaClickActivo = true;
                                   });


                                break;



                            case 'account':
                                LifeBook.LibreriaWebService.WsModificarUsuario(registro,
                                  function (result) { //ModificarCuentaCorrecto


                                      jqStReg = parseInt(result[1]);
                                      //jqCodigoConf = parseInt(result[2]);

                                      //   if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                      //   else QuitarCookies();
                                      console.log('stReg= ' + jqStReg);

                                      switch (jqStReg) {

                                          case 4: //Usuario confirmado - No ha habido cambio de Email
                                              sesAliasCirculo = result[0];
                                              if ($('#inRecordar').prop('checked')) PonerCookies();
                                              else QuitarCookies();
                                              window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
                                              break;

                                          case 2: //Cambio de Email - Pendiente Confirmar Email
                                              sesAliasCirculo = result[0];
                                              if ($('#inRecordar').prop('checked')) PonerCookies();
                                              else QuitarCookies();
                                              //InicioAutenticado();
                                              window.location.href = '/Index.aspx';
                                              break;

                                          case 1: //Cambio de Email - Email existente
                                              sEmail.val('');
                                              sEmailBis.val('');
                                              sNombre.focus();
                                              Notifica("Registro_EmailExistente", jqNot);
                                              break;

                                          case 0: //Error BBDD
                                          default:
                                              sNombre.focus();
                                              Notifica("Registro_ErrorBBDD", jqNot);
                                              break;
                                      };

                                  });

                                break;

                        };

                        //-------------------------------------------------------
                        /*
                        if (gEstado == 'registro') {
                            LifeBook.LibreriaWebService.WsRegistrar(registro,
    
                                    function (result) { //RegistroCorrecto
                                        if (result > 0) {
                                            if ($('#inRecordar').prop('checked')) PonerCookies();
                                            InicioAutenticado();
                                        }
                                        else {
                                            sEmail.val('');
                                            sEmailBis.val('');
                                            Notifica("Registro_EmailExistente", jqNot);
                                        };
                                    },
                                     function () {//RegistroIncorrecto
                                         Notifica("Registro_ErrorBBDD", jqNot);
                                     });
                        }
                        else {
                            LifeBook.LibreriaWebService.WsModificarUsuario(registro,
                               function () { //ModificarCuentaCorrecto
                                   if ($('#inRecordar').prop('checked')) PonerCookies();
                                   else QuitarCookies();
    
                                   if (jqStatus == 'CONFIRM') window.location.href = '/Index.aspx';
                                   else window.location.href = gPaginaOrigen;
                               });
                        };
                        */
                    },
                    function () {//error en Post
                        //alert("Error uploading fotos!!! ");
                        sNombre.focus();
                        Notifica("Registro_ErrorUploadFoto", jqNot);
                        estaClickActivo = true;
                    });
            }
            else {
                sNombre.focus();
                Notifica("Registro_CamposErroneos", jqNot);
            };

            function LeerFormulario() {

                // var email;
                camposCorrectos = true;
                jqSexo = "";



                // Quitar campos en rojo
                $('.tbEntrada, .dtEntrada, .ui-radio').each(function () {
                    NoResaltar($(this));
                });
                /*
                
                            $('.rbSexo').css('border', 'none');
                            */



                // Nombre
                jqNombre = registro.Nombre = sNombre.val();
                console.log('Nombre: ' + jqNombre);
                if (!jqNombre) {
                    Resaltar(sNombre);
                    camposCorrectos = false;
                };
                //Apellidos
                jqApellidos = registro.Apellidos = sApellidos.val();
                console.log('Apellidos: ' + jqApellidos);
                if (!jqApellidos) {
                    Resaltar(sApellidos);
                    camposCorrectos = false;
                };
                //Email
                jqEmail = registro.Email = sEmail.val();
                console.log('Email: ' + jqEmail);
                var emailBis = sEmailBis.val();
                // var emailRegex = /\S+@(\S+\.)+[A-z]{2,4}/;
                if (!jqEmail.match(emailRegex) || !jqEmail) {
                    Resaltar(sEmail);
                    camposCorrectos = false;
                };
                if (!emailBis || jqEmail != emailBis) {
                    Resaltar(sEmailBis);
                    camposCorrectos = false;
                };

                registro.Email = NormalizaEmail(jqEmail);
                /*
                // Día
                var dia = sDia.val();
                var nDia = parseInt(dia);
                if (nDia < 10) { dia = '0' + dia };
                if (!(nDia > 0 && nDia < 32)) {
                    Resaltar(sDia);
                    camposCorrectos = false;
                };
                //Mes
                var mes = (sMes.get(0).selectedIndex + 1).toString();
                if (parseInt(mes) < 10) { mes = '0' + mes };
                if (sMes.find("option").length == 13) {
                    Resaltar(sMes);
                    camposCorrectos = false;
                };
                //Año
                var anio = sAnio.val();
                var anioRegex = /(19)|(20)\d{2}/;
                if (!anio.match(anioRegex) | anio == '') {
                    Resaltar(sAnio);
                    camposCorrectos = false;
                };
                registro.FechaNac = anio + mes + dia;
                */
                var fechaNac = sFechaNac.val();
                //alert('fechaNac1: ' + fechaNac);
                if (fechaNac) fechaNac = fechaNac.replace(regexFecha, '$1$2$3');
                else fechaNac = "";
                //alert('fechaNac2: ' + fechaNac);
                registro.FechaNac = fechaNac;
                console.log('Fecha de nacimiento: ' + registro.FechaNac);

                //Ciudad de nacimiento
                var ciudadNac = registro.CiudadNac = sCiudadNac.val();
                /*  //Revisado
                console.log('Ciudad de Nacimiento: ' + ciudadNac);
                if (!ciudadNac) {
                    Resaltar(sCiudadNac);
                    camposCorrectos = false;
                };
                */
                //Ciudad de residencia
                var ciudadRes = registro.CiudadRes = sCiudadRes.val();
                /* //Revisado
                console.log('Ciudad de Residencia: ' + ciudadRes);
                if (!ciudadRes) {
                    Resaltar(sCiudadRes);
                    camposCorrectos = false;
                };
                */
                //Clave
                var clave = sClave.val();
                var claveBis = sClaveBis.val();
                var hash = CryptoJS.HmacSHA256(clave, "CryptoBase64");
                jqClave = registro.Clave = CryptoJS.enc.Base64.stringify(hash);
                console.log('Clave: ' + jqClave);

                if (!clave) {
                    Resaltar(sClave);
                    camposCorrectos = false;
                }
                else if (clave.length > 0 && clave.length < 6) {
                    Resaltar(sClave);
                    camposCorrectos = false;
                }
                else if (!claveBis || clave != claveBis) {
                    Resaltar(sClaveBis);
                    camposCorrectos = false;
                };
                //Sexo
                if (sHombre.prop('checked')) {
                    console.log('sHombre checked: ' + sHombre.prop('checked'));
                    jqSexo = registro.Sexo = "H";
                }
                else if (sMujer.prop('checked')) {
                    console.log('sMujer checked: ' + sMujer.prop('checked'));
                    jqSexo = registro.Sexo = "M";
                }
                else {
                    //Resaltar($('.ui-radio'));
                    // $('.ui-radio').css('background-color', '#f024bb');
                    camposCorrectos = false;
                };
                console.log('Sexo: ' + jqSexo);
                //Foto
                if (jqSelectedFiles) {
                    gNombreImgUsuario = "U" + FechaHora() + jqSelectedFiles[0].name;
                    registro.Foto = gNombreImgUsuario;
                    hayNuevaFoto = true;
                    hayFotoDespues = true;
                    gFotoDespues = gNombreImgUsuario;
                }
                else {
                    var srcImgFotoCargada = sImgFotoCargada.attr('src');
                    hayFotoDespues = srcImgFotoCargada.indexOf('/support/silueta') == -1;
                    if (hayFotoDespues) gFotoDespues = srcImgFotoCargada.match(regexNombreFichero);
                    else gFotoDespues = '';
                    gNombreImgUsuario = '';
                    registro.Foto = '';
                };
                registro.ClaveBus = NorTexto(registro.Nombre + registro.Apellidos + registro.CiudadNac + registro.CiudadRes);
                registro.CodigoConf = jqCodigoConf = (Math.random() * 10000).toFixed(0); //Revisado
                //alert('Código de Confirmación: ' + jqCodigoConf);
                /*
                if (gEstado == 'registro') {
                    // Generar Código de Confirmación
                    registro.CodigoConf = jqCodigoConf = (Math.random() * 10000).toFixed(0);
                    alert('Código de Confirmación: ' + jqCodigoConf);
                }
                else
                    */
                if (jqStatus == 'account') { //gEstado=='modificarCuenta'     jqStatus='account' || jqStatus='confirmarRegistro'     
                    if (hayNuevaFoto) {
                        registro.Foto = gFotoDespues;
                    }
                    else if (hayFotoDespues) {
                        registro.Foto = gFotoAntes;
                    }
                    else {
                        registro.Foto = "";
                    };
                    if (hayFotoAntes && (!hayFotoDespues || hayNuevaFoto)) gFotoEliminar = gFotoAntes;
                };
                registro.Foto = String(registro.Foto);
                registro.ClaveBus = String(registro.ClaveBus);
                registro.Sexo = String(registro.Sexo);
                registro.Email = String(registro.Email);
                registro.FechaNac = String(registro.FechaNac);


            };
        };
    });
    /* Fin Evento TERMINADO */
    /* EVENTO CLICK EN CANCELAR */
    sBCancelar.click(function () {

        if (estaClickActivo) {

            var indice = arrPaginas.indexOf(gPaginaOrigen);
            //--- Nuevo
            if (indice > 0 && sesAliasCirculo) window.location.href = '/' + sDdlPaginas.find('option')[indice].innerText + '/' + sesAliasCirculo;
            else window.location.href = '/Index.aspx';
            //------------------
            /*
            if (sesUsu == 0 || jqStatus == 'CONFIRM') window.location.href = '/Index.aspx';
            else window.location.href = gPaginaOrigen;
            */
        };
    });
    /* EVENTO CLICK EN BAJA USUARIO 
    $('#cphPagina_cuenta_bBaja').click(function () {
        NotificaTop("BajaUsuario", jqNotTop);
    });

    var fotoDrop;
    fotoDrop = document.getElementById("fotoDrop");
    fotoDrop.ondrop = function (e) {
        e.preventDefault();
        jqSelectedFiles = e.dataTransfer.files;
        CargarImagenUsuario();
    };
    */

  $('#inputFile').change(function () {
      jqSelectedFiles = this.files;

      CargarFicheroImg(jqSelectedFiles[0], $('#fotoDrop'), function () {
          CargarImagenUsuario();

      });
      //  CargarImagenUsuario();
    });

    function CargarImagenUsuario() {
       
        $('#fotoDrop').css('border', 'dashed 3px #7596a5');
        var reader = new FileReader();

      $('#loading-mb').show();


        reader.onload = function (e) {
  
            var n = e.target.result.length;

            if (n > 30) n = 30;
            console.log('reader.onload: ' + e.target.result.length + " - " + e.target.result.substring(0, n));

            sImgFotoCargada.attr('src', e.target.result);

            sImgFotoCargada.on('load', function () {
              
                console.log('Desde CargarImagenUsuario: Imagen cargada');

              

                    AjustarImagen(sImgFotoCargada, sBSubirFoto, sBEliminarFoto, cuenta);

             
                
                sImgFotoCargada.off('load');
            });
        };

        reader.readAsDataURL(jqSelectedFiles[0]);
    };





    sBSubirFoto.click(function () {
        //$('#loading').css('display', 'block');

        // alert('click SubirFoto');
        document.getElementById('inputFile').click();
    });

    sBEliminarFoto.click(function () {

        sImgFotoCargada.on('load', function () {

            sImgFotoCargada.removeAttr('style');
            sImgFotoCargada.attr('width', W_FOTO_USUARIO_MB);
            sImgFotoCargada.attr("style", "margin-left:0px;margin-top:0px;");
            gFotoDespues = '';
            hayFotoDespues = false;
            hayNuevaFoto = false;
            sBSubirFoto.show();
            sBEliminarFoto.hide();
        });

        sImgFotoCargada.attr('src', '/Images/support/silueta' + ((sHombre.prop('checked')) ? 'H' : 'M') + '.jpg');

    });

  
    /* EVENTO CLICK EN Día 
    var iniDia = true;
    sDia.focus(function () {
        NoResaltar(sDia);
        $(this).autocomplete({ source: [] });
        if (iniDia) {
            sDia.val('');
            iniDia = false;
        };
    });

    var iniMes = true;
    sMes.blur(function () {
        NoResaltar(sMes);
        $(this).autocomplete({ source: [] });
        if (iniMes) {
            sMes.find("option")[0].remove();
            iniMes = false;
        };
    });

    var iniAnio = true;
    sAnio.focus(function () {
        NoResaltar(sAnio);
        $(this).autocomplete({ source: [] });
        if (iniAnio) {
            sAnio.val('');
            iniAnio = false;
        };
    });



    $('.tbEntrada').focus(function (e) {
        NoResaltar($(this));
        $(this).autocomplete({ source: [] });
    });

    $('.rbSexo').change(function () {
        $('.rbSexo').css('border', 'none');
    });

    sClave.change(function () {
        var ncar = $(this).val().length;
        if (ncar > 0 && ncar < 8) {
            sClave.focus();
            Notifica("Registro_ClaveErronea", jqNot);
        };
    });

*/

};









/*------------------------------------------------------------------------*/
/*--------------------  FUNCIONES  -----------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/***** FUNCTION PresentaIndex("inicio" | "account" | "search") **************/
/***************************************************************************/
function PresentaIndex(apartadoPresentar) {
    console.log('Apartado: '+apartadoPresentar);
    var apartados = [inicio, cuenta, busqueda, notTop];
    $.each(apartados, function (i, apartado) {
        apartado.hide();
    });
    sesPresentacion = apartadoPresentar;
    switch (apartadoPresentar) {
        case "inicio":
            inicio.show();
            break;
        case "account":
            cuenta.show();
            $('#mb-tdLogoCabecera img').css('display', 'block');
            $('#mb-tdDchaCabecera').hide();
            
                $('#mb-tdLogoCabecera').css('width', '90%');
                $('#mb-tdMenuCabecera').css('width', '10%');
           
          //  $('#mb-bEntrar').hide();
           // $('#mb-bRegistrarte').hide();

           // $('#cphPagina_cuenta_bBaja').hide();
            break;
        case "search":
            busqueda.show();
            $('#mb-tdLogoCabecera img').css('display', 'block');
            if (!jqEsAutenticado) {
                $('#mb-tdLogoCabecera').css('width', '90%');
                $('#mb-tdMenuCabecera').css('width', '10%');
            };

            $('#mb_tableBotonesCab').hide();
          NotificaSearch("Resultados"); //Revisado
            break;
     /*   case "entrarEnCirculo":
            busqueda.show();
            NotificaSearch("SolicitudEntrada");
            break;
*/
            //------- Nuevo ------
        case "entrarEnCirculoAutenticado":
            busqueda.show();
            NotificaSearch("SolicitudEntrada");
            break;

        case "entrarEnCirculoNoAutenticado":
            busqueda.show();
            NotificaSearch("Registrarte");
            break;
            //--------------------


        case "cuentaConfirmada":
            //$('#mascaraMaster').hide();
            inicio.show();
            NotificaTop("CuentaConfirmada", jqNotTop);
            break;

        case "claveIncorrecta":
            //alert('claveIncorrecta');
            NotificaTop("ClaveIncorrecta", jqNotTop);
            break;

        case "peticionClave":
            NotificaTop("PeticionClave", jqNotTop);
            break;

       
    };
    jqPresentacion = apartadoPresentar;
   // ActualizarCabecera();

};

/***************************************************************************/
/******** FUNCTION INICIO AUTENTICADO TRAS UN REGISTRO CORRECTO ************/
/***************************************************************************/
function InicioAutenticado() {
    //  Poner _Nombre y _Apellidos 
    var user = $('#mb_tdUserName');
   user.html(user.html().replace('_Nombre', jqNombre));
   user.html(user.html().replace('_Apellidos', jqApellidos));
    //jqAutenticado = true;
    // jqStatus = "CONFIRM";
    jqStatus = "confirmarRegistro";//Revisado
    PresentaIndex("inicio");
    NotificaTop("ConfirmarRegistro", jqNotTop);
   tdTexto.html(tdTexto.html().replace('_user', jqNombre).replace('_email', jqEmail));
};






/***************************************************************************/
/*************** FUNCTION GetServerCirculos (Replicar Círculos) ************/
/***************************************************************************/
function GetServerCirculos(textoBus) {
    LifeBook.LibreriaWebService.CargarInfoCirculosBusqueda(textoBus, CargarInfoCirculosBusquedaCorrecto);
};


/***************************************************************************/
/******************* FUNCTIONES NotificaTopIndex y NotificaTop **************/
/***************************************************************************/

function NotificaTopIndex(titulo, texto, boton, textBox, botonTb, id) {
  console.log('titulo: ' + titulo + ' texto: ' + texto + ' boton: ' + boton + ' textBox: ' + textBox + ' botonTb: ' + botonTb + ' id: ' + id);
    /* Secciones */
   
    /* Inicialización */
    //tableTexto.removeAttr("style");
    //tbInput.show();
    //tableTb.css('display', 'inline');
    //tableTexto.css('display', 'inline');
    //tdBotonTexto.show();
    bTexto.show();
    tdTbInput.show();
    tbInput.val('');
    /*
    if (id == 'PeticionClave') tbInput.attr('type', 'password');
    else tbInput.attr('type', 'text');
    */
    bInput.off('click');
    bTexto.off('click');


    /* Valores */
    tdTitulo.html(titulo);
    tdTexto.html(texto);
    if (boton) bTexto.html(boton);
    else bTexto.hide();
    //if (textBox) tbInput.attr('value', textBox);
    if (textBox) tbInput.val(textBox);
    else tdTbInput.hide();
    //else tbInput.hide();
    bInput.html(botonTb);
    tbId.attr('value', id);

    /* Eventos */
   
    if (botonTb != "") ActivarEventoBotonInputNotificacionTop(); //BOTÓN DERECHO DE NotificacionTop
   
    if (boton != "") ActivarEventoBotonTextoNotificacionTop();  //BOTÓN CENTRAL DE NotificacionTop

    /* Formato y presentación */

    notTop.fadeIn(1000);
    //$('#mascaraMaster').show();
    /*
    if (botonTb == "") {
        tableTb.hide();
        tableTexto.css('display', 'block');
    }
    else {
        tableTexto.css('display', 'inline');
        tableTb.css('display', 'inline');
        tableTb.css('z-index', '20');
        if (boton == "") {
            tdBotonTexto.css('display', 'none');
            tableTexto.attr('style', 'top:-30px;text-align:center');
        };
    };
    */
};

/*-------------------------------------------------------------------------*/

function NotificaTop(ref, notificacionesTop) {
    console.log('BUSCAR NotificaTop - ref: ' + ref);
    $.each(notificacionesTop, function (i, notificacionTop) {
        //console.log(notificacionTop.NotTopId);
        if (notificacionTop.NotTopId == ref) {
            var nT = notificacionesTop[i];
            // alert('Encontrada notificacion ' + nT);
            if (nT.BotonTb == '') {
                nT.BotonTb = nT.Boton;
                nT.Boton = '';
            };
            NotificaTopIndex(nT.Titulo, nT.Texto, nT.Boton, nT.TextoInput, nT.BotonTb, ref);
            return;
        };
    });
};

/***************************************************************************/
/***** FUNCIONES DE ACTIVACION DE EVENTOS EN BOTONES DE NOTIFICACIONTOP  ***/
/***************************************************************************/

function ActivarEventoBotonInputNotificacionTop() { //BOTÓN DERECHO DE NotificacionTop - NARANJA
    bInput.on('click', function () { 
        console.log('Click en botón NARANJA: ' + tbId.val());
        switch (tbId.val()) {

            case "CuentaConfirmada":
                //-------Nuevo ------------------
                window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
                //--------------------------------
                /*
                LifeBook.LibreriaWebService.WsActualizarStatus("NAV_AUT",
                    function () {
                        notTop.hide();
                        // sMascaraMaster.hide();
                        jqStatus = "NAV_AUT";
                        window.location.href = '/Tree.aspx';
                    });
                */
                break;

            case "RestauracionClave":
                var email = tbInput.val();
                if (!email.match(emailRegex)) {
                  //  alert('email incorrecto');
                    Notifica("Email_Erroneo", jqNot);
                }
                else {
                    //alert('email correcto');
                    LifeBook.LibreriaWebService.WsRestaurarClave(tbInput.val(),
                        function (result) {
                            if (result > 0) {

                                PresentaMaster();
                                PresentaIndex('inicio');
                               // notTop.hide();
                               // sMascaraMaster.hide();
                                //  alert('Email enviado');
                                
                                Notifica("Email_Enviado", jqNot); //Se notifica Email enviado en cualquier caso
                            }
                            else {
                            };
                        });
                };
                break;

            case "ConfirmarRegistro":
            case "CodigoIncorrecto":
                notTop.hide();
                //sMascaraMaster.hide();
                // LifeBook.LibreriaWebService.WsConfirm(tbInput.val(), Confirmacion); //Revisado
                //Nuevo -----------------
                LifeBook.LibreriaWebService.WsConfirm(tbInput.val(),
                    function (result) {
                        if (result) {
                            jqStatus = "navegacionAut";
                            jqStReg = 4;
                            NotificaTop("CuentaConfirmada", jqNotTop);
                        }
                        else {
                            jqStReg = 2;
                            NotificaTop("CodigoIncorrecto", jqNotTop);
                        }
                    });
                //---------------------------------------------------
                break;

            case "AceptarCookies":
            case "EmailClaveIncorrecto":
            case "RegistroInvitado_mb": //Nuevo

                notTop.hide();
                //sMascaraMaster.hide();
                break;
           
            case "ClaveIncorrecta":
                notTop.hide();
                //sMascaraMaster.hide();
                NotificaTop("PeticionClave", jqNotTop);
                break;

            case "PeticionClave":
                notTop.hide();
               // sMascaraMaster.hide();
                // tbInput.attr('type', 'password');
                var clave = tbInput.val();
                var hash = CryptoJS.HmacSHA256(clave, "CryptoBase64");
                jqClave = CryptoJS.enc.Base64.stringify(hash);
                LifeBook.LibreriaWebService.WsEntrarClaveYConfirmar(jqClave,
                    function (result) { //success
                        if (result > 0) { //clave correcta
                            //jqStatus = 'START_AUT';
                            //location.reload();
                            window.location.href = '/index/cuentaConfirmada';
                        }
                        else { //clave incorrecta
                            jqStatus = 'inicioNoAut'; //Revisado
                            sesPresentacion = 'claveIncorrecta';
                            NotificaTop("ClaveIncorrecta", jqNotTop);
                        };
                    },
                    function () { //fail

                    });
                break;

            case "BajaUsuario": //ACEPTAR Dar de Baja
                notTop.hide();
               // sMascaraMaster.hide();
                LifeBook.LibreriaWebService.WsBajaUsuario(
                    function () {
                        QuitarCookies();
                        /*
                        if ($.removeCookie('e', { path: '/' }) && $.removeCookie('p', { path: '/' })) {
                            console.log('Cookies eliminadas');
                        }
                        else {
                            console.log('No hay Cookies que eliminar');
                        };
                        */
                        window.location.href = '/index/end_session';

                    });
                break;
        }
    });
};

/*-------------------------------------------------------------------------*/

function ActivarEventoBotonTextoNotificacionTop() {//BOTÓN CENTRAL DE NotificacionTop
    bTexto.on('click', function () { 
        console.log('Click en botón GRIS: ' + tbId.val());
        switch (tbId.val()) {
            case "ConfirmarRegistro":
            case "CodigoIncorrecto":
                // REENVIAR EMAIL
                LifeBook.LibreriaWebService.WsReenviarEmailCodigoConfirmacion(function () {
                //    alert('Email Reenviado');
                Notifica("Email_Reenviado", jqNot);
                });
                break;

            case "BajaUsuario": //Cancelar
                notTop.hide();
                //sMascaraMaster.hide();
                break;

            
        }
    });
};

/***************************************************************************/
/*************** FUNCIONES CSS ***************/
/***************************************************************************/
function Resaltar(selector) {
    selector.css('border', 'solid 1px #f024bb');
};

function NoResaltar(selector) {
    selector.css('border', 'solid 1px #7596a5');
};

/***************************************************************************/
/*************** FUNCIONES SEARCH ******************************************/
/***************************************************************************/
function NotificaSearch(ref) {
    busqueda.find('.ventana').hide();
    arrSelNotSearch[arrRefNotSearch.indexOf(ref)].show();

};











/*------------------------------------------------------------------------*/
/*--------------------Respuestas WS -----------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* BInput.click - WsConfirm Correcto *********************/
/***************************************************************************/
/*
function Confirmacion(result) {

    if (result) {
        jqStatus = "NAV_AUT";
        NotificaTop("CuentaConfirmada", jqNotTop);
    }
    else {
        NotificaTop("CodigoIncorrecto", jqNotTop);
    }
};*/
/***************************************************************************/
/******************* WsCargarNot Correcto *********************/
/***************************************************************************/
/*
function jqCargarNot(result) {
    jqNot = result;
};
*/
/***************************************************************************/
/******************* WsCargarNotTop Correcto *********************/
/***************************************************************************/
/*
function jqCargarNotTop(result) {
   
    jqNotTop = result;
};
*/

/***************************************************************************/
/******************* WsCargarInfoCirculosBusqueda Correcto *********************/
/***************************************************************************/
function CargarInfoCirculosBusquedaCorrecto(result) {

    sLiteralResultados.html(gLiteralResultadosIni);
    listCirculosBusqueda = result;
    $('#res_').show();

    var nRes = listCirculosBusqueda.length;



    Sustituir(sLiteralResultados, "_nRes", nRes);
    Sustituir(sLiteralResultados, '#claveBus', '"' + gTextoBus + '"');
    $.each(listCirculosBusqueda, function (i, circulo) {
        var res = $('#res_').clone();
        res.attr('class', 'res');
        res.attr('id', 'res_' + circulo.IdCirculo);
       // var imgFile = res.find('img').attr('src');

        PonerFotoUsuario(res.find('img'), circulo.Foto, circulo.Sexo, 83);
        res.find('#nombreRes_').text(circulo.Nombre);
        res.find('#apellidosRes_').text(circulo.Apellidos);
        res.click(function () {
            window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + circulo.Alias; //Nuevo
            /*
            console.log('Círculo: ' + circulo.IdCirculo);
            if (sesUsu > 0) {
                gCirculoEntrada = circulo.IdCirculo;
                LifeBook.LibreriaWebService.WsEntrarEnCirculo(gCirculoEntrada, EntrarEnCirculoCorrecto);
            }
            else
                NotificaSearch("Registrarte");
            sSearchRegistrarte.focus();

            */
        });
      
        $('#resultados').append(res);
    });

    $('#res_').hide();
    
    var n = Math.floor(gWinW / 155);
    var resto = gWinW % 155;
    var ml = Math.floor(resto / (n + 1));
    $('.res').css('margin-left', ((ml>8)?ml:0) + 'px');

    //if (ml > 8) $('.res').css('margin-left', ml + 'px');

    $(window).on("orientationchange", function () {
        console.log("The orientation has changed!");
        gWinH = $(window).height();
        gWinW = $(window).width();
        var n = Math.floor(gWinW / 155);
        var resto = gWinW % 155;
        var ml = Math.floor(resto / (n + 1));
        $('.res').css('margin-left', ((ml > 8) ? ml : 0) + 'px');

    });

};


function PresentarCirculoSolicitado(circuloSol) {
    $('.res').remove();
    LifeBook.LibreriaWebService.WsGetCirculoSol(sesCirculoSol,
        function (result) {
            gCirculoSol = result;
            $('#res_').show();
            var res = $('#res_').clone();
            res.attr('class', 'res');
            res.attr('id', 'res_' + gCirculoSol.IdCirculo);
            //var imgFile = res.find('img').attr('src');
            PonerFotoUsuario(res.find('img'), gCirculoSol.Foto, gCirculoSol.Sexo, 83);
            res.find('#nombreRes_').text(gCirculoSol.Nombre);
            res.find('#apellidosRes_').text(gCirculoSol.Apellidos);
            $('#resultados').append(res);
            $('#res_').hide();
            gCirculoEntrada = gCirculoSol.IdCirculo;
        });
};



/***************************************************************************/
/******************* WsEntrarEnCirculo Correcto *********************/
/***************************************************************************/
/*
function EntrarEnCirculoCorrecto(result) {
    console.log('EntrarEnCirculoCorrecto result= ' + result);
    if (result > 0) {
        gRol = result;
        window.location.href = '/Tree.aspx';
    }
    else {
        NotificaSearch("SolicitudEntrada");
        console.log('EntrarEnCirculoCorrecto gCirculoEntrada= ' + gCirculoEntrada);
        $('.res').hide();
        $('#res_' + gCirculoEntrada).show();
    };
};
*/
/***************************************************************************/
/******************* WsModificarCuenta Correcto *********************/
/***************************************************************************/
/*
function RegistrarPeticionCorrecto(result) {
    NotificaSearch("SolicitudEnviada");
};
*/