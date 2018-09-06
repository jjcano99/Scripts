/*------------------------------------------------------------------------*/
/*---------------------- INDEX DESKTOP ------------------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
//var sMascaraMaster;
var sOlvidoClave;

var sTbBuscador;
var sBNuevaBusqueda;
var sLiteralResultados;

//NOTIFICACION TOP

var bNotTopGris;
var bNotTopNaranja;

var tbInput;

var tbId;

var tdTitulo;
var tdTexto;
var tdInput;
var tdBGris;
var tdBNaranja;

//var tableTexto;
//var tableTb;


var notTop;
var cuenta;
var inicio;
var busqueda;

//FORMULARIO
var sNombre;
var sApellidos;
var sEmail;
var sEmailBis;
var sDia;
var sMes;
var sAnio;
var sCiudadNac;
var sCiudadRes;
var sClave;
var sHombre;
var sMujer;
var sImgFotoCargada;

var sBSubirFoto;
var sBEliminarFoto;

//SEARCH
var sColResultados;
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

var jqNot;
var jqCabecera;
var jqCab;
var jqNotTop;
//var jqPaginaIndex;
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


var listCirculosBusqueda;
var registro;

var hayFotoAntes;
var hayFotoDespues;
var hayNuevaFoto;

var estaClickActivo;

var regexNombreFichero;
var emailRegex;
var anioRegex;

var arrRefNotSearch;
var arrSelNotSearch;

var arrPaginas;

var iniMes;
var iniDia;
var iniAnio;

var dia;
var mes;
var anio;
var nDia;
var ciudadNac;
var ciudadRes;

/*------------------------------------------------------------------------*/
/*----------------------INICIO 1 - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {
 
    console.log("JQ width: " + $(window).width());
    console.log("JQ height: " + $(window).height());
    console.log("JS width: " + window.innerWidth);
    console.log("JS height: " + window.innerHeight);

    $('.cabMenuOpcion').css("background-color", "none");

    AsignarSelectores();
    LeerSesion();
    InicializarVariables();
    //Presentar Notificación Top si existe    
    if (notTop.css('display') != 'none') {
        notTop.hide();
        //sMascaraMaster.show();
        notTop.fadeIn(1000);
    };
    //Detectar si hay Foto en el Formulario
    var srcImgFotoCargada = sImgFotoCargada.attr('src');
   
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
     
        if (sHombre.prop('checked') || sMujer.prop('checked')) {
            PonerFotoUsuario(sImgFotoCargada, '', ((sHombre.prop('checked')) ? "H" : "M"), 110);
        }
        else {
            PonerFotoUsuario(sImgFotoCargada, '', "H", 110);
            sHombre.prop('checked', true);
        };
    };
    //Cargar Notificaciones
    LifeBook.LibreriaWebService.CargarNot("index", function (result) {
        jqNot = result;

        LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
            jqNot = $.merge(jqNot, resultMaster);          
        });
    });

   // LifeBook.LibreriaWebService.CargarNot("master", function (result) { jqNot = $.merge(jqNot, result); });
    LifeBook.LibreriaWebService.CargarNotTop("index", function (result) { jqNotTop = result; });

    ActivarEventosBase();
    ActivarEventosFormulario();  
    sNombre.focus(); //?????????
    
    //ACCIONES INICIALES TRAS LA CARGA DE PÁGINA SEGÚN jqStatus (accionIndex)

    switch (jqStatus) {

        case 'search':
            if (gTextoBusSql) {
                PresentaIndex(jqStatus);
                GetServerCirculos(gTextoBusSql);
            };

            break;

        case 'entrarEnCirculoAutenticado':
            if (sesCirculoSol > 0) {
                PresentaIndex(jqStatus);
                PresentarCirculoSolicitado(sesCirculoSol);
            }
            else {
                /*
                var apartados = [inicio, cuenta, busqueda, notTop];
                $.each(apartados, function (i, apartado) {
                    apartado.hide();
                });
                */
                OcultarApartadosIndex();

                if (sesUsu > 0) {
                    
                    window.location.href = '/index/navegacionAut';
                }
                else {
                    window.location.href = '/index/inicioNoAut';
                };

            };
            break;

        case 'entrarEnCirculoNoAutenticado':
            if (sesCirculoSol > 0) {
                PresentaIndex(jqStatus);
                PresentarCirculoSolicitado(sesCirculoSol);
            }
            else {
                OcultarApartadosIndex();
                window.location.href = '/index/inicioNoAut';
            };
            break;

        case 'confirmarRegistro':      
            jqStReg = 2;

            break;
    };

});
//FIN DOCUMENT READY

/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES *********************************/
/***************************************************************************/
function AsignarSelectores() {
    sOlvidoClave = $('#olvidoClave');

    notTop = $('#cphPagina_notificacionTop_notTop');
    cuenta = $('#cphPagina_cuenta_cuenta');
    inicio = $('#cphPagina_inicio');
    busqueda = $('#cphPagina_search_busqueda');

    /* Variables de NotTop*/

    tdTitulo = $('td#tdCabNotTopTitulo');
    tdTexto = $('#cphPagina_notificacionTop_tdTexto');
    tdBGris = $('#cphPagina_notificacionTop_tdBGris');
    tdInput = $('#cphPagina_notificacionTop_tdInput');
    tdBNaranja = $('#cphPagina_notificacionTop_tdBNaranja');

    bNotTopNaranja = $('#bNotTopTb'); //Botón NARANJA
    bNotTopGris = $('#bNotTopTexto'); //Botón GRIS

    tbInput = $('#cphPagina_notificacionTop_tbNotTopInput');
    
    tbId = $('#cphPagina_notificacionTop_tbNotTopId');
    //tableTexto = $('table#cphPagina_notificacionTop_tableNotTopTexto'); //REVISAR
    //tableTb = $('table#cphPagina_notificacionTop_tableNotTopTb');
    


    sTbBuscador = $('#cphPagina_tbBuscador');
    sBNuevaBusqueda = $('#bNuevaBusqueda');
    sLiteralResultados = $('#divLiteralResultados');

    //FORMULARIO
    sNombre = $('#cphPagina_cuenta_tbNombre');
    sApellidos = $('#cphPagina_cuenta_tbApellidos');
    sEmail = $('#cphPagina_cuenta_tbEmailCuenta');
    sEmailBis = $('#cphPagina_cuenta_tbEmailCuentaBis');
    sDia = $('#cphPagina_cuenta_tbDia');
    sMes = $('#cphPagina_cuenta_ddlMeses');
    sAnio = $('#cphPagina_cuenta_tbAnio');
    sCiudadNac = $('#cphPagina_cuenta_tbCiudadNac');
    sCiudadRes = $('#cphPagina_cuenta_tbCiudadRes');
    sClave = $('#cphPagina_cuenta_tbClaveCuenta');
    sHombre = $('#cphPagina_cuenta_rbHombre');
    sMujer = $('#cphPagina_cuenta_rbMujer');
    sImgFotoCargada = $('#cphPagina_cuenta_imgFotoCargada');

    sBSubirFoto = $('#bSubirFoto');
    sBEliminarFoto = $('#bEliminarFoto');

    //SEARCH
    sColResultados = $('#tdBusquedaResultados');
    sSearchResultados=$('#cphPagina_search_ventana_resultados');
    sSearchRegistrarte = $('#cphPagina_search_ventana_registrarte');
    sSearchSolicitudEnviada = $('#cphPagina_search_ventana_solicitud');
    sSearchSolicitudEntrada = $('#cphPagina_search_ventana_peticion');
    sRbFamiliar = $('#cphPagina_search_rbFamiliar');
    sRbRelacionado = $('#cphPagina_search_rbRelacionado');

};

/***************************************************************************/
/******************* LEER SESION   *****************************************/
/***************************************************************************/
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
/***************************************************************************/
/******************* INICIALIZAR VARIABLES      *************************/
/***************************************************************************/
function InicializarVariables() {

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
    //jqPaginaIndex = true;
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
    anioRegex = /(19)|(20)\d{2}/;


    //FORMULARIO
    sNombre.attr('tabIndex', 1);
    sApellidos.attr('tabIndex', 2);
    sEmail.attr('tabIndex', 3);
    sEmailBis.attr('tabIndex', 4);
    sClave.attr('tabIndex', 5);
    sMujer.attr('tabIndex', 6);
    sHombre.attr('tabIndex', 7);
    $('#bTerminado').attr('tabIndex', 8);

    registro = new LifeBook.Settings();

    //SEARCH
    arrRefNotSearch=["Resultados","Registrarte","SolicitudEnviada","SolicitudEntrada"];
    arrSelNotSearch = [sSearchResultados, sSearchRegistrarte, sSearchSolicitudEnviada, sSearchSolicitudEntrada];

    arrPaginas = ["/Tree.aspx", "/Life.aspx", "/Album.aspx"];

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
     
    //Notificaciones
    tbInput.click(function () {
        tbInput.val("");
        tbInput.css('font-size', '100%');
    });
    
    ActivarEventosBNaranjaNotificacionTop();
    ActivarEventosBGrisNotificacionTop();

    //Click para ocultar la NotificacionTop
    $('#tdCabNotTopAspa').click(function () {
        notTop.hide();
    });
    
    sOlvidoClave.hover(
          function () {
              $(this).css('color', '#f024bb');
              $(this).css('cursor', 'pointer');
          },
          function () {
              $(this).css('color', 'white');
              $(this).css('cursor', 'normal');
          });

    sOlvidoClave.click(function () {
        NotificaTop("RestauracionClave", jqNotTop);
    });
   
    //Evento Click en CREA
    $('.crea').click(function (e) {
       // console.log(this.id);
       // console.log($('.crea').index(this));
       // console.log('/' + sDdlPaginas.find('option')[$('.crea').index(this)].innerText + '/' + sesAliasCirculo);

        if (sesUsu > 0) {
            if (jqStatus == "confirmarRegistro") {
                NotificaTop("ConfirmarRegistro", jqNotTop);
                jqNombre = $('#userName').html().split('<br>', 1)[0].replace(' ', '');
                tdTexto.html(tdTexto.html().replace('_user', jqNombre));
            }
            else window.location.href = '/' + sDdlPaginas.find('option')[$('.crea').index(this)].innerText + '/' + sesAliasCirculo;
        }
        else {
            jqStatus = 'registro';
            PresentaIndex("account");
        }

        /*  REVISAR
        jqPeticion = $(this).find('a').attr('href');
        //alert(jqStatus);
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
    //Evento Hover en Buscador
    $('#buscador').hover(
        function () {
            $('#buscador img').attr('src', '/Images/support/lupa_magenta.gif');
            $('#cphPagina_tbBuscador').css('border', 'solid 2px #f024bb');
        },
        function () {
            $('#buscador img').attr('src', '/Images/support/lupa_verde.gif');
            $('#cphPagina_tbBuscador').css('border', 'solid 2px #0377aa');
        });
    //Evento Click en Caja Buscador  
    $('#cphPagina_tbBuscador').click(function () {
        if (primerClick) {
                $('#cphPagina_tbBuscador').val('');
                $('#cphPagina_tbBuscador').css('color', 'black');
            }
            primerClick = false;
        });
    //Evento Click en Lupa
    $('#lupa').click(function () {   
        gTextoBus = sTbBuscador.val();
        if (gTextoBus != '' && !primerClick) {
            PresentaIndex("search");
           // $('.res').remove();
            gTextoBusSql = NorPatronSql(gTextoBus);
            GetServerCirculos(gTextoBusSql);
        }
        else if(!primerClick && gTextoBus =='') {
            sTbBuscador.focus();
        };
    });
    //Evento Click en Nueva Búsqueda
    sBNuevaBusqueda.click(function () {
        PresentaIndex('inicio');
        sTbBuscador.val('');
        sTbBuscador.css('color', 'black');
        primerClick = false;
        sTbBuscador.focus();
    });
    //Evento Click en Registrarte
    $('#bRegistrarte,#bSearchRegistrarte').click(function () {
         //gEstado = 'registro';
        console.log('Registrarte - jqStatus: ' + jqStatus);

      /*  if (jqStatus != 'confirmarRegistro') */ jqStatus = 'registro';
        PresentaIndex("account");
    });
    //  CANCELAR ENTRADA EN CIRCULO FAMILIAR
    $('#bSearchCancelar').click(function () {
        sBNuevaBusqueda.click();
    });
    // ENVIAR SOLICITUD PARA ENTRAR EN CIRCULOS FAMILIAR
    $('#bEnviarPeticion').click(function () {
        var tipoSolicitud;
        if (sRbFamiliar.prop('checked')) tipoSolicitud = 1; //FAMILIAR
        else tipoSolicitud = 2; //RELACIONADO
        var circuloA;
        if (gRol < 4) circuloA = gCirculoPropio;
        else circuloA = gCirculo;
        LifeBook.LibreriaWebService.WsRegistrarPeticion(circuloA, gCirculoEntrada, tipoSolicitud, function () { NotificaSearch("SolicitudEnviada"); });
  
    });
    //CONTINUAR TRAS ENVIAR SOLICITUD ENTRADA CIRCULO -> TREE-SOLICITUDES ENVIADAS
    $('#bSearchContinuar').click(function () {
        LifeBook.LibreriaWebService.WsActualizarSesionTree('solicitudesEnviadas',
                             function () {
                                 window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo;
                             });
    }); 
};

/***************************************************************************/
/******************* ACTIVAR EVENTOS FORMULARIO    ****************/
/***************************************************************************/
function ActivarEventosFormulario() {
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
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada,'',"H",110);
    });
    sMujer.mousedown(function () {
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada, '', "M", 110);
    });

    /* EVENTO CLICK EN TERMINADO */
    $('#bTerminado').click(function () {

        if (estaClickActivo) {

            registro = new LifeBook.Settings();
            var camposCorrectos = true;
            LeerFormulario();
            console.log('Desde Terminado - gNombreImgUsuario: ' + gNombreImgUsuario);
            if (camposCorrectos) {
                estaClickActivo = false;
                if (gNombreImgUsuario != '') {
                    gImgB64Usuario = sImgFotoCargada.attr('src');
                    $('#fotoCab img').attr('src', gImgB64Usuario);
                }
                else {
                    PonerFotoUsuario($('#fotoCab img'), '', jqSexo, 40);
                    $('#mascaraMaster').hide();
                };
                PostImgB64ToServer(sImgFotoCargada.attr('src'), gNombreImgUsuario, "/Images/users/",
                    function () { //success
                        if (hayNuevaFoto) $('#fotoCab img').attr('src', gImgB64Usuario);

                        switch (jqStatus) {
                            case 'registro':
                                LifeBook.LibreriaWebService.WsRegistrar(registro,
                                   function (result) { //RegistroCorrecto
                                       sesUsu = parseInt(result[0]);
                                       sesAliasCirculo = result[1];

                                       if (sesUsu > 0) {
                                           if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                           InicioAutenticado();

                                           /*
                                           //  Poner _Nombre y _Apellidos 
                                           var user = $('#userName');
                                           user.html(user.html().replace('_Nombre', jqNombre));
                                           user.html(user.html().replace('_Apellidos', jqApellidos));
                                           jqAutenticado = true;
                                           jqStatus = "confirmarRegistro";
                                           PresentaIndex("inicio");
                                           NotificaTop("ConfirmarRegistro", jqNotTop);
                                           tdTexto.html(tdTexto.html().replace('_user', jqNombre).replace('_email', jqEmail));
                                           */
                                       }
                                       else {
                                           sEmail.val('');
                                           sEmailBis.val('');
                                           Notifica("Registro_EmailExistente", jqNot);
                                           estaClickActivo = true;
                                       };
                                   },
                                    function () {//RegistroIncorrecto
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
                                          if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                          window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculoSol;
                                      }
                                      else {
                                          sEmail.val('');
                                          sEmailBis.val('');
                                          Notifica("Registro_EmailExistente", jqNot);
                                          estaClickActivo = true;
                                      };
                                  },
                                   function () {//RegistroIncorrecto
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
                                              if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                              else QuitarCookies();
                                              window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
                                              break;

                                          case 2: //Cambio de Email - Pendiente Confirmar Email
                                              sesAliasCirculo = result[0];
                                              if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                              else QuitarCookies();
                                              //InicioAutenticado();
                                              window.location.href = '/Index.aspx';
                                              break;

                                          case 1: //Cambio de Email - Email existente
                                              sEmail.val('');
                                              sEmailBis.val('');
                                              Notifica("Registro_EmailExistente", jqNot);
                                              estaClickActivo = true;
                                              break;

                                          case 0: //Error BBDD
                                          default:
                                              Notifica("Registro_ErrorBBDD", jqNot);
                                              estaClickActivo = true;
                                              break;
                                      };
                                      /*
                                      if (jqStReg == 4)
                                          window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
                                      else InicioAutenticado();
                                      */

                                  });

                                break;
                                /*
                            case 'confirmarRegistro':
                                LifeBook.LibreriaWebService.WsModificarUsuario(registro,
                                 function () { //ModificarCuentaCorrecto
                                     if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                     else QuitarCookies();
                                     window.location.href = '/index/confirmarRegistro';
                                 });
                                break;
                                */
                        };

                        /*
                                            if (jqStatus == 'registro') {
                                                // if (gEstado == 'registro') {
                                                LifeBook.LibreriaWebService.WsRegistrar(registro,
                        
                                                        function (result) { //RegistroCorrecto
                                                            if (result > 0) {
                                                                if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
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
                                                       if ($('#cphPagina_cuenta_cbRecordar').prop('checked')) PonerCookies();
                                                       else QuitarCookies();
                          
                                                       if (jqStatus == 'confirmarRegistro') window.location.href = '/Index.aspx';
                                                       else window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
                                                      // else window.location.href = gPaginaOrigen;
                                                   });
                                            };
                        */



                    },
                    function () {//error en Post
                        // alert("Error uploading fotos!!! ");
                        Notifica("Registro_ErrorUploadFoto", jqNot);
                        estaClickActivo = true;
                    });
            }
            else {
                Notifica("Registro_CamposErroneos", jqNot);
            };

            function LeerFormulario() {

                // var email;
                camposCorrectos = true;
                /* Quitar campos en rojo */
                $('.tbEntrada, .tbDia, .tbAnio, .ddlMeses').each(function () {
                    NoResaltar($(this));
                });
                $('.rbSexo').css('border', 'none');
                /* Nombre */
                jqNombre = registro.Nombre = sNombre.val();
                if (!jqNombre) {
                    Resaltar(sNombre);
                    camposCorrectos = false;
                };
                /* Apellidos */
                jqApellidos = registro.Apellidos = sApellidos.val();
                if (!jqApellidos) {
                    Resaltar(sApellidos);
                    camposCorrectos = false;
                };
                /* Email */
                jqEmail = registro.Email = sEmail.val();
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

                /* Día */

                if (!iniDia) {
                    dia = sDia.val();
                    nDia = parseInt(dia);
                    if (nDia < 10) { dia = '0' + dia };
                    if (!(nDia > 0 && nDia < 32)) {
                        Resaltar(sDia);
                        camposCorrectos = false;
                    };
                }
                else dia = '00';

                /* Mes */
                if (!iniMes) {
                    mes = (sMes.get(0).selectedIndex + 1).toString();
                    if (parseInt(mes) < 10) { mes = '0' + mes };
                    if (sMes.find("option").length == 13) {
                        Resaltar(sMes);
                        camposCorrectos = false;
                    };
                }
                else mes = '00';

                /* Año */
                if (!iniAnio) {
                    anio = sAnio.val();
                    // anioRegex = /(19)|(20)\d{2}/;
                    if (!anio.match(anioRegex) | anio == '') {
                        Resaltar(sAnio);
                        camposCorrectos = false;
                    };
                }
                else anio = '0000';

                registro.FechaNac = anio + mes + dia;
                /* Ciudad de nacimiento */
                ciudadNac = registro.CiudadNac = sCiudadNac.val();
                /*
                if (!ciudadNac) {
                    Resaltar(sCiudadNac);
                    camposCorrectos = false;
                };
                */
                /* Ciudad de residencia */
                ciudadRes = registro.CiudadRes = sCiudadRes.val();
                /*
                if (!ciudadRes) {
                    Resaltar(sCiudadRes);
                    camposCorrectos = false;
                };
                */
                /* Clave */
                //   var hash = CryptoJS.HmacSHA256("Message", "secret");
                //   var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
                //  alert(hashInBase64);
                var clave = sClave.val();
                var hash = CryptoJS.HmacSHA256(clave, "CryptoBase64");
                jqClave = registro.Clave = CryptoJS.enc.Base64.stringify(hash);

                if (!clave) {
                    Resaltar(sClave);
                    camposCorrectos = false;
                }
                else if (clave.length > 0 && clave.length < 6) {
                    Resaltar(sClave);
                    camposCorrectos = false;
                };
                /* Sexo */
                if (sHombre.prop('checked'))
                    jqSexo = registro.Sexo = "H";
                else if (sMujer.prop('checked'))
                    jqSexo = registro.Sexo = "M";
                else {
                    Resaltar($('.rbSexo'));
                    camposCorrectos = false;
                };
                /* Foto */
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
                // Generar Código de Confirmación
                registro.CodigoConf = jqCodigoConf = (Math.random() * 10000).toFixed(0);
                // alert('Código de Confirmación: ' + jqCodigoConf);


                //  if (gEstado == 'registro') {
                //      if (jqStatus == 'registro' || jqStatus =='registroInvitado') {
                // }
                //     else

                if (jqStatus == 'account') { //gEstado=='modificarCuenta'    jqStatus='account' || jqStatus='confirmarRegistro'
                    //alert('jqStatus: ' + jqStatus + ' gEstado: ' + gEstado);
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
    $('#bCancelar').click(function () {

        if (estaClickActivo) {

            console.log('jqStReg: ' + jqStReg);
            console.log('sesUsu: ' + sesUsu);
            console.log('jqStatus: ' + jqStatus);
            console.log('gPaginaOrigen: ' + gPaginaOrigen);

            var indice = arrPaginas.indexOf(gPaginaOrigen);

            if (indice > 0 && sesAliasCirculo) window.location.href = '/' + sDdlPaginas.find('option')[indice].innerText + '/' + sesAliasCirculo;
            else window.location.href = '/Index.aspx';

            /*
            if (sesUsu == 0 || jqStatus == 'confirmarRegistro') window.location.href = '/Index.aspx';
            else window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
            */
            //else  window.location.href = gPaginaOrigen;  
        };
    });
    /* EVENTO CLICK EN BAJA USUARIO */
    $('#cphPagina_cuenta_bBaja').click(function () {
        NotificaTop("BajaUsuario", jqNotTop);
    });

    var fotoDrop;
    fotoDrop = document.getElementById("fotoDrop");
    fotoDrop.ondrop = function (e) {
        e.preventDefault();
        jqSelectedFiles = e.dataTransfer.files;

        CargarFicheroImg(jqSelectedFiles[0], $('#fotoDrop'), function () {
            CargarImagenUsuario();

        });


      //  CargarImagenUsuario();
    };

    function CargarImagenUsuario() {
//$('#loading').css('display', 'block');

     //   $('#loading').html('<img src="/Images/support/loading.gif" />');

        $('#fotoDrop').css('border', 'dashed 3px #7596a5');
        var reader = new FileReader();

$('#loading').show();
   /*     //----------LOADING---------------------------------------------------------
        
        $('#loading img').on('load', function () {
            $('#loading img').attr('width', 500);
            setTimeout(function () {
                $('#loading').hide();
            }, 2000);
            $('#loading img').off('load');
        });
        $('#loading img').attr('src', '/Images/orderedList0.png');
        //----------fin LOADING--------------------------------------------------------- */
        reader.onload = function (e) {
        /*    //----------LOADING---------------------------------------------------------
            $('#loading').show();
            $('#loading img').on('load', function () {
                $('#loading img').attr('width', 500);
                setTimeout(function () {
                    $('#loading').hide();
                }, 2000);
                $('#loading img').off('load');
            });
            $('#loading img').attr('src', '/Images/orderedList1.png');
            //----------fin LOADING---------------------------------------------------------*/

            var n = e.target.result.length;

            if (n > 30) n = 30;
            console.log('reader.onload: ' + e.target.result.length + " - " + e.target.result.substring(0,n));

            sImgFotoCargada.attr('src', e.target.result);

            sImgFotoCargada.on('load', function () {
               // $('#loading img').attr('src', '/Images/orderedList2.png');
                AjustarImagen(sImgFotoCargada, sBSubirFoto, sBEliminarFoto);
                sImgFotoCargada.off('load');
            });
        };

        reader.readAsDataURL(jqSelectedFiles[0]);
    };
   
    fotoDrop.ondragover = function () {
        $('#fotoDrop').css('border', 'dashed 3px #f024bb');
        return false;
    };
    fotoDrop.ondragleave = function () {
        $('#fotoDrop').css('border', 'dashed 3px #7596a5');
        return false;
    };

    sBSubirFoto.click(function () {
        //$('#loading').css('display', 'block');
        
       // alert('click SubirFoto');
        document.getElementById('inputFile').click();
    });
    sBEliminarFoto.click(function () {
        sImgFotoCargada.attr('src', '/Images/support/silueta' + ((sHombre.prop('checked')) ? 'H' : 'M') + '.jpg');
        sImgFotoCargada.attr('width', '110');
        //sImgFotoCargada.attr('width', '110px');
        sImgFotoCargada.attr("style", "margin-left:0px;margin-top:0px;");
        gFotoDespues = '';
        hayFotoDespues = false;
        hayNuevaFoto = false;
        sBSubirFoto.show();
        sBEliminarFoto.hide();
    });

    $('#inputFile').change(function () {
        jqSelectedFiles = this.files;

        CargarFicheroImg(jqSelectedFiles[0], $('#fotoDrop'), function () {
            CargarImagenUsuario();
           
        });

        //CargarImagenUsuario();
    });

    /* EVENTO CLICK EN Día */
    iniDia = true;
    sDia.focus(function () {
        NoResaltar(sDia);
        $(this).autocomplete({ source: [] });
        if (iniDia) {
            sDia.val('');
            iniDia = false;
        };
    });

    iniMes = true;
    sMes.blur(function () {
        NoResaltar(sMes);
        $(this).autocomplete({ source: [] });
        if (iniMes) {
            sMes.find("option")[0].remove();
            iniMes = false;
        };
    });

    iniAnio = true;
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

};

/*------------------------------------------------------------------------*/
/*--------------------  FUNCIONES  -----------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* FUNCTION NotificaTopIndex *****************************/
/***************************************************************************/
function NotificaTopIndex(titulo, texto, textoBGris, textoInput, textoBNaranja, id) {
  //  console.log('NotificaTopIndex');
  //  console.log('titulo: ' + titulo + ' texto: ' + texto + ' textoBGris: ' + textoBGris + ' textoInput: ' + textoInput + ' textoBNaranja: ' + textoBNaranja + ' id: ' + id);
    /* Secciones */
    /*
    var tableTexto = $('table#cphPagina_notificacionTop_tableNotTopTexto');
    var tableTb = $('table#cphPagina_notificacionTop_tableNotTopTb');
    var tdBotonTexto = $('td#cphPagina_notificacionTop_tdBNotTopTexto');

    */
    /* Inicialización */
    //tableTexto.removeAttr("style");
    //tbInput.show();
    //tableTb.css('display', 'inline');
    //tableTexto.css('display', 'inline');
    //tdBGris.show();
    //tbInput.val('');
    /*
    if (id == 'PeticionClave') tbInput.attr('type', 'password');
    else tbInput.attr('type', 'text');
    */
   
   

    /* Valores */
    tdTitulo.html(titulo);
    tdTexto.html(texto);
    
    if (!textoBGris) tdBGris.hide();
    else {
        tdBGris.show();
        bNotTopGris.html(textoBGris);
        bNotTopGris.off('click');
        ActivarEventosBGrisNotificacionTop();
    };

    if (!textoInput) tbInput.hide();
    else {
        tdInput.show();
        tbInput.val(textoInput);
    };

    if (!textoBNaranja) tdBNaranja.hide();
    else {
        tdBNaranja.show();
        bNotTopNaranja.html(textoBNaranja);
        bNotTopNaranja.off('click');
        ActivarEventosBNaranjaNotificacionTop();
    };
   // if (textoInput != "") tbInput.attr('value', textoInput);
   

   // bNotTopNaranja.html(textoBNaranja);
    tbId.attr('value', id);

    console.log('tbInput: ' + tbInput.val());

    /* Eventos */
    //   bInput.click(function () { //BOTÓN DERECHO DE NotificacionTop
   // if (textoBNaranja != "") ActivarEventosBNaranjaNotificacionTop();
 /*   {
        bInput.on('click',function () { //BOTÓN DERECHO DE NotificacionTop
            alert('Botón Derecho');
            switch (tbId.val()) {
                case "ClaveIncorrecta":
                    alert('Clave incorrecta');
                    notTop.hide();
                    sMascaraMaster.hide();
                    //sesPresentacion = 'peticionClave';
                    //PresentaIndex('peticionClave');
                    NotificaTop("PeticionClave", jqNotTop);
                    break;

                case "ConfirmarRegistro":
                case "CodigoIncorrecto":
                    notTop.hide();
                    sMascaraMaster.hide();
                    LifeBook.LibreriaWebService.WsConfirm(tbInput.val(), Confirmacion);
                    break;
                case "PeticionClave":
                    notTop.hide();
                    sMascaraMaster.hide();
                    //tbInput.attr('type', 'text');
                    var clave = tbInput.val();
                    var hash = CryptoJS.HmacSHA256(clave, "CryptoBase64");
                    jqClave = CryptoJS.enc.Base64.stringify(hash);
                    LifeBook.LibreriaWebService.WsEntrarClave(jqClave,
                        function (result) { //success
                            if (result > 0) { //clave correcta
                                jqStatus = 'START_AUT';
                                location.reload();
                                // sesPresentacion = 'cuentaConfirmada';
                                // PresentaIndex('cuentaConfirmada');
                            }
                            else { //clave incorrecta
                                jqStatus = 'CONF_NO_AUT';
                                sesPresentacion = 'claveIncorrecta';
                                NotificaTop("ClaveIncorrecta", jqNotTop);
                                //PresentaIndex('claveIncorrecta');
                            };
                        },
                        function () { //fail


                        });
                    break;
                case "BajaUsuario": //ACEPTAR Dar de Baja
                    notTop.hide();
                    sMascaraMaster.hide();
                    LifeBook.LibreriaWebService.WsBajaUsuario();

                    if ($.removeCookie('e', { path: '/' }) && $.removeCookie('p', { path: '/' })) {
                        alert('Cookies eliminadas');
                    }
                    else {
                        alert('No hay Cookies que eliminar');
                    };
                    window.location.href = '/index/end_session';
                    break;
            }
        });
    };
    */
    //  bNotTopGris.click(function () { //BOTÓN CENTRAL DE NotificacionTop
   // if (textoBGris != "") ActivarEventosBGrisNotificacionTop();
/*
    {
        bNotTopGris.on('click',function () { //BOTÓN CENTRAL DE NotificacionTop
            alert('Botón Central');
            switch (tbId.val()) {
                case "ConfirmarRegistro":
                case "CodigoIncorrecto":
                    alert('Reenviar Email');//*************** REENVIAR EMAIL **************************************



                    //  Reenviar Email 
                    break;

                case "CuentaConfirmada":

                    alert('Click Botón Central CuentaConfirmada');
                    LifeBook.LibreriaWebService.WsActualizarStatus("NAV_AUT",
                        function () {
                            notTop.hide();
                            sMascaraMaster.hide();
                            jqStatus = "NAV_AUT";
                            window.location.href = '/Tree.aspx';
                        });

                    break;
                case "AceptarCookies":
                case "EmailClaveIncorrecto":
                    notTop.hide();
                    sMascaraMaster.hide();
                    break;
                case "BajaUsuario": //Cancelar
                    notTop.hide();
                    sMascaraMaster.hide();
                    break;

            }
        });
    };
    */

    /* Formato y presentación */
    //notTop.show();
    notTop.fadeIn(1000);
    //$('#mascaraMaster').show();
    /*
    if (textoBNaranja == "") {
        tableTb.hide();
        tableTexto.css('display', 'block');
    }
    else {
        tableTexto.css('display', 'inline');
        tableTb.css('display', 'inline');
        tableTb.css('z-index', '20');
        if (textoBGris == "") {
            tdBGris.css('display', 'none');
            tableTexto.attr('style', 'top:-30px;text-align:center');
        };
    };
    */
};

/***************************************************************************/
/******************* FUNCTION NotificaTop **********************************/
/***************************************************************************/
function NotificaTop(ref, notificacionesTop) {
   // alert('NotificaTop - ref: ' + ref);
    $.each(notificacionesTop, function (i, notificacionTop) {
        if (notificacionTop.NotTopId == ref) {
            var nT = notificacionesTop[i];
            // alert('Encontrada notificacion ' + nT);
            //console.log('nT.TextoInput: ' + nT.TextoInput);
            NotificaTopIndex(nT.Titulo, nT.Texto, nT.TextoBGris, nT.TextoInput, nT.TextoBNaranja, ref);
            return;
        };
    });
};

/***************************************************************************/
/***** FUNCTION PresentaIndex("inicio" | "account" | "search") **************/
/***************************************************************************/
function PresentaIndex(apartadoPresentar) {
    /*
    var apartados = [inicio, cuenta, busqueda, notTop];
    $.each(apartados, function (i, apartado) {
        apartado.hide();
    });
    */
    OcultarApartadosIndex();

    estaClickActivo = true;

    switch (apartadoPresentar) {
        case "inicio":
            inicio.show();
            break;
        case "account":
            cuenta.show();
            $('#cphPagina_cuenta_bBaja').hide();
            break;
        case "search":
            busqueda.show();
            NotificaSearch("Resultados");
            break;
        case "entrarEnCirculoAutenticado":
            busqueda.show();
            NotificaSearch("SolicitudEntrada");
            break;

        case "entrarEnCirculoNoAutenticado":
            busqueda.show();
            NotificaSearch("Registrarte");
            break;

        case "cuentaConfirmada":
            //$('#mascaraMaster').hide();
            inicio.show();
            NotificaTop("CuentaConfirmada", jqNotTop);
            break;

        case "claveIncorrecta":
           // alert('claveIncorrecta');
            //$('#mascaraMaster').hide();
            //inicio.show();
            NotificaTop("ClaveIncorrecta", jqNotTop);
            break;

        case "peticionClave":
            NotificaTop("PeticionClave", jqNotTop);
            break;

            
    };
    jqPresentacion = apartadoPresentar;
   ActualizarCabecera();

};

/***************************************************************************/
/******** FUNCTION INICIO AUTENTICADO TRAS UN REGISTRO CORRECTO ************/
/***************************************************************************/

function InicioAutenticado() {
    //  Poner _Nombre y _Apellidos 
    //REVISAR
    /*
    console.log('InicioAutenticado: ' + jqNombre + ' ' + jqApellidos);
    
    jqAutenticado = true;
    jqStatus = "confirmarRegistro";
    PresentaIndex("inicio");
    NotificaTop("ConfirmarRegistro", jqNotTop);
    tdTexto.html(tdTexto.html().replace('_user', jqNombre));
    var user = $('#userName');
     user.html(user.html().replace('_Nombre', jqNombre));
     user.html(user.html().replace('_Apellidos', jqApellidos));
    */
     window.location.href = '/index/confirmarRegistro';
};

/***************************************************************************/
/*************** FUNCTION GetServerCirculos (Replicar Círculos) ************/
/***************************************************************************/
function GetServerCirculos(textoBus) {
    $('.res').remove();
    LifeBook.LibreriaWebService.CargarInfoCirculosBusqueda(textoBus, CargarInfoCirculosBusquedaCorrecto);
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
            var imgFile = res.find('img').attr('src');
            PonerFotoUsuario(res.find('img'), gCirculoSol.Foto, gCirculoSol.Sexo, 100);
            res.find('#nombreRes_').text(gCirculoSol.Nombre);
            res.find('#apellidosRes_').text(gCirculoSol.Apellidos);
            $('#resultados').append(res);
            $('#res_').hide();
            gCirculoEntrada = gCirculoSol.IdCirculo;
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
    sColResultados.find('.ventana').hide();
    arrSelNotSearch[arrRefNotSearch.indexOf(ref)].show();

};

/***************************************************************************/
/***** FUNCIONES DE ACTIVACION DE EVENTOS EN BOTONES DE NOTIFICACIONTOP  ***/
/***************************************************************************/


//   bNotTopNaranja.click(function () { //BOTÓN DERECHO DE NotificacionTop
function ActivarEventosBNaranjaNotificacionTop(){
    bNotTopNaranja.on('click', function () { //BOTÓN DERECHO DE NotificacionTop
        //alert('Botón Derecho');
        switch (tbId.val()) {

         /*   case "ClaveIncorrecta":
                alert('Clave incorrecta');
                notTop.hide();
                sMascaraMaster.hide();
                //sesPresentacion = 'peticionClave';
                //PresentaIndex('peticionClave');
                NotificaTop("PeticionClave", jqNotTop);
                break;
                */
            case "ClaveIncorrecta":
                //  alert('Clave incorrecta');
                notTop.hide();
                //sMascaraMaster.hide();
                //sesPresentacion = 'peticionClave';
                //PresentaIndex('peticionClave');
                NotificaTop("PeticionClave", jqNotTop);
                break;

            case "RestauracionClave":
               // alert('click botón derecho RestauracionClave: '+tbInput.val());
                var email = tbInput.val();
                if (!email.match(emailRegex)) {

                   // alert('email incorrecto');

                    Notifica("Email_Erroneo",jqNot);
                }
                else {

                    alert('email correcto');

                    LifeBook.LibreriaWebService.WsRestaurarClave(tbInput.val(),
                        function (result) {
                            if (result > 0) {
                            notTop.hide();
                            //sMascaraMaster.hide();
                            Notifica("Email_Enviado", jqNot); //Se notifica Email enviado en cualquier caso
                            }
                            else {
                            };
                        });
                    
                };
                
                break;


            case "ConfirmarRegistro":
            case "CodigoIncorrecto":
                //alert('ConfirmarRegistro');
                notTop.hide();
                //sMascaraMaster.hide();
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

        
                //LifeBook.LibreriaWebService.WsConfirm(tbInput.val(), Confirmacion);



                break;
            case "PeticionClave":
                notTop.hide();
                //sMascaraMaster.hide();
               // tbInput.attr('type', 'password');
                var clave = tbInput.val();
                var hash = CryptoJS.HmacSHA256(clave, "CryptoBase64");
                jqClave = CryptoJS.enc.Base64.stringify(hash);
                LifeBook.LibreriaWebService.WsEntrarClaveYConfirmar(jqClave,
                    function (result) { //success
                        console.log('WsEntrarClaveYConfirmar: ' + result);
                        if (result > 0) { //clave correcta
                           // jqStatus = 'navegacionAut';
                            //location.reload();
                            window.location.href = '/index/cuentaConfirmada';
                            // sesPresentacion = 'cuentaConfirmada';
                            // PresentaIndex('cuentaConfirmada');
                        }
                        else { //clave incorrecta
                            jqStatus = 'inicioNoAut';
                            sesPresentacion = 'claveIncorrecta';
                            NotificaTop("ClaveIncorrecta", jqNotTop);
                            //PresentaIndex('claveIncorrecta');
                        };
                    },
                    function () { //fail


                    });
                break;
            case "BajaUsuario": //ACEPTAR Dar de Baja
                notTop.hide();
                //sMascaraMaster.hide();
                LifeBook.LibreriaWebService.WsBajaUsuario(function () {

                    QuitarCookies();

                    /*
                    $.removeCookie('e', { path: '/' });
                    $.removeCookie('p', { path: '/' });
                    */
                    /*
                 if ($.removeCookie('e', { path: '/' }) && $.removeCookie('p', { path: '/' })) {
                    // alert('Cookies eliminadas');
                                }
                                else {
                    // alert('No hay Cookies que eliminar');
                 };
                    */

                                window.location.href = '/index/end_session';

                });
                break;
        }
    });
};
//  bNotTopGris.click(function () { //BOTÓN CENTRAL DE NotificacionTop
function ActivarEventosBGrisNotificacionTop() {
    bNotTopGris.on('click', function () { //BOTÓN CENTRAL DE NotificacionTop
      //  alert('Botón Central');
        switch (tbId.val()) {
            case "ConfirmarRegistro":
            case "CodigoIncorrecto":
                //alert('Reenviar Email');//*************** REENVIAR EMAIL **************************************
                LifeBook.LibreriaWebService.WsReenviarEmailCodigoConfirmacion(function () {
                    //alert('Email Reenviado');
                    Notifica("Email_Reenviado", jqNot);
                });

                //  Reenviar Email 
                break;

            case "CuentaConfirmada":

             //   alert('gPaginaOrigen: ' + gPaginaOrigen + ' sesAliasCirculo: ' + sesAliasCirculo + ' sesAliasCirculoSol: ' + sesAliasCirculoSol);
               

                window.location.href = '/' + sDdlPaginas.find('option')[arrPaginas.indexOf(gPaginaOrigen)].innerText + '/' + sesAliasCirculo;
              //  window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo
                //  alert('Click Botón Central CuentaConfirmada');
                /*
                LifeBook.LibreriaWebService.WsActualizarStatus("NAV_AUT",
                    function () {
                        notTop.hide();
                        sMascaraMaster.hide();
                        jqStatus = "NAV_AUT";
                        window.location.href = '/Tree.aspx';
                    });
                */

                break;
                /*
            case "RestauracionClave":
                //lifeBook.LibreriaWebService.WsRestaurarClave();
                notTop.hide();
                sMascaraMaster.hide();
                break;
                */
            case "AceptarCookies":
            case "EmailClaveIncorrecto":
            case "RegistroInvitado":
            case "BajaUsuario": //Cancelar
                notTop.hide();
                //sMascaraMaster.hide();
                break;

            case "ClaveIncorrecta":
                
                notTop.hide();
                //sMascaraMaster.hide();
                window.location.href = '/Index.aspx';
                break;


            /*
//CAMBIO
            case "ClaveIncorrecta":
              //  alert('Clave incorrecta');
                notTop.hide();
                sMascaraMaster.hide();
                //sesPresentacion = 'peticionClave';
                //PresentaIndex('peticionClave');
                NotificaTop("PeticionClave", jqNotTop);
                break;
                */
        }
    });
};

/*------------------------------------------------------------------------*/
/*--------------------Respuestas WS -----------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* BInput.click - WsConfirm Correcto *********************/
/***************************************************************************/
/*  ANÓNIMA
function Confirmacion(result) {

    if (result) {
        jqStatus = "navegacionAut";
        NotificaTop("CuentaConfirmada", jqNotTop);
    }
    else {
        NotificaTop("CodigoIncorrecto", jqNotTop);
    }
};
*/
/***************************************************************************/
/******************* WsCargarNot Correcto *********************/
/***************************************************************************/
/*
function jqCargarNot(result) {
    jqNot = result;
}; */
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
        //res.attr('id', 'res_' + circulo.Alias);

        var imgFile = res.find('img').attr('src');
       
        PonerFotoUsuario(res.find('img'), circulo.Foto, circulo.Sexo, 100);
        res.find('#nombreRes_').text(circulo.Nombre);
        res.find('#apellidosRes_').text(circulo.Apellidos);
        res.click(function () {

            window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + circulo.Alias;
            /*
            if (sesUsu > 0) {
                gCirculoEntrada = circulo.IdCirculo;
                LifeBook.LibreriaWebService.WsEntrarEnCirculo(gCirculoEntrada, EntrarEnCirculoCorrecto);
            }
            else
                NotificaSearch("Registrarte");
            */
        });
        $('#resultados').append(res);
    });

    $('#res_').hide();
};

/***************************************************************************/
/******************* WsEntrarEnCirculo Correcto *********************/
/***************************************************************************/
/*
function EntrarEnCirculoCorrecto(result) {
    if (result > 0) {
        gRol = result;
        window.location.href = '/Tree.aspx';
    }
    else {
        NotificaSearch("SolicitudEntrada");
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

function HelloWorldCorrecto(result) {
    alert(result);
};
*/

function OcultarApartadosIndex() {
    var apartados = [inicio, cuenta, busqueda, notTop];
    $.each(apartados, function (i, apartado) {
        apartado.hide();
    });
};