/*  MASTER MOBILE */
/***************************************************************************/
/******************* CONSTANTES ************************************/
/***************************************************************************/
const W_FOTO_USUARIO_MB = 220;

const ROL_NONE = 0,
    ROL_INVITADO=1,
    ROL_ANFITRION=2,
    ROL_RELACIONADO=3,
    ROL_MIEMBRO=4,
    ROL_EDITOR=5,
    ROL_ADMIN=6,
    ROL_SUPERADMIN = 7;


/***************************************************************************/
/******************* VARIABLES ************************************/
/***************************************************************************/

var sesCirculo;
var sesCirculoPropio;
var sesRol;
var sesNFotosAlbumTotal;
var sesNFotosAlbumCompartidas;
var sesAlbumBus;
var sesParamBusTexto;
var sesParamBusLugar;
var sesParamBusFecha;
var sesParamBusAnio;
var sesParamBusMes;
var sesParamBusDia;
var sesParamBusPrivacidad;
var sesPresentacion;
var nSegAlbum;
var sesSexoTitular;
var sesPortadaEditada;
var sesNComTotal;
var sesNComStr;
var sesNCom;
var sesNEtapas;
var sesUsu;
var sesNMiembrosCirculo;
var sesMiembroSeleccionado;
var sesPresentacionTree;
var sesOpcionTree;
var sesTipoMiembroSeleccionado;
var sesTextoBusCirculo;
var sesPaginaOrigen;
var sesCirculoSol;
var sesAliasCirculo;
var sesAliasCirculoSol;
var sesIdSolicitud;

var jqCabAut;
var jqUsu;
var jqClave;
var jqStReg;
var jqPeticion;
var jqNombre;
var jqApellidos;
var jqFoto;
var jqCodigoConf;
var jqLocationAnt;
var jqIdioma;
//var jqAutenticado;
var jqStatus;

var jqNot;

var jqEsPaginaIndex;
var jqEsPaginaCirculo;
var jqEsPaginaPie;
var jqEsAutenticado;

var jqOrientacionVertical;
var jqPresentacionMaster;

var jqEsTablet;
var jqEsTabletMini;
var jqEsMovil;

var cuerpo;

var sTbBusCab;
var sLupaCab;

var sAjusteImg;
var sImgFotoAjuste;
var sBGuardarAjuste;
var sBCancelarAjuste;

var sMascaraMaster;


var sVentanaMenuCab;

var sDdlPaginas;
var arrRoles;

//NOTIFICACIÓN GENERAL

var sNotGen;
var sTdTituloNotGen;
var sTextoNotGen;
var sBNaranjaNotGen;

//SELECTORES

var sPagina;
var sIndexInicio;
var sIndexCuenta;
var sImgLogoCab;
var sDchaCab;

var sVentanaMenuCabAut;
var sVentanaMenuCabNoAut;
var sVentanaConfiguracion;
var sVentanaEntrar;
var sDchaCabBotones;
var sDchaCabUsuario;
var sSubcabecera;
var sMenuCab;
var sImgMenuCab;

var sTableCompartir;
var sTableAyudaMenu;

//GLOBALES
var esMenuCabActivo;
var esMenuUsuActivo;
var esMenuSubcabActivo;

var nAjustesImagen;

//ARRAYS

var arrSelectoresMaster;

$(function () {
/*
    setTimeout(function(){
        window.scrollTo(0,1);},100);
    */
    //console.log('document.URL: ' + document.URL);
    //console.log('window.location.pathname: '+window.location.pathname);
    //console.log('window.location.href: '+window.location.href);

    var displayCabAut;
    var displayCabNoAut;
    var primerClickBusCab;

    nAjustesImagen=0;

    esMenuCabActivo=false;
    esMenuUsuActivo=false;
    esMenuSubcabActivo = false;


    primerClickBusCab = true;
    $.mobile.ajaxEnabled = false;
  $.mobile.touchOverflowEnabled = true;

    sDdlPaginas = $('#ddlPaginas'); //Nuevo
    sAjusteImg = $('#ajusteImg-mb');
    sBGuardarAjuste = $('#bGuardarAjuste-mb');
    sBCancelarAjuste = $('#bCancelarAjuste-mb');

    //console.log('MASTER: Antes de LeerSesionMaster');
    LeerSesionMaster();

    //console.log('Usuario: ' + sesUsu);
    jqPresentacionMaster=0;

    jqOrientacionVertical=$(window).width()<$(window).height();

    jqEsMovil=jqOrientacionVertical && $(window).width()<475 || !jqOrientacionVertical && $(window).width() <800;
    jqEsTabletMini=jqOrientacionVertical && $(window).width()>=475 && $(window).width()<=765 || !jqOrientacionVertical && $(window).width() >=800 && $(window).width()<=1020;
    jqEsTablet=jqOrientacionVertical && $(window).width()>765 || !jqOrientacionVertical && $(window).width() >1020;

    //console.log("jqEsTablet: " + jqEsTablet);

    jqEsAutenticado=sesUsu>0;

    var regexPaginaIndex = /\/(Index.aspx|index\/)/;
    var regexPaginaPie = /\/(Condiciones|Cookies|Privacidad|Quienes|Ayuda|Contacto).aspx/;
    var regexPaginaCirculo = new RegExp("\/(" + sDdlPaginas.find('option')[0].innerText + "|" +
                                                 sDdlPaginas.find('option')[1].innerText + "|" +
                                                 sDdlPaginas.find('option')[2].innerText + ")\/");

    jqEsPaginaIndex = location.pathname.search(regexPaginaIndex) > -1;
    jqEsPaginaCirculo = location.pathname.search(regexPaginaCirculo) > -1;
    jqEsPaginaPie = location.pathname.search(regexPaginaPie) > -1;

    if(!jqEsPaginaIndex && !jqEsPaginaCirculo && !jqEsPaginaPie) jqEsPaginaIndex=true;

    console.log('location.pathname: ' + location.pathname);
    console.log('jqEsPaginaIndex: ' + jqEsPaginaIndex);
    console.log('jqEsPaginaCirculo: ' + jqEsPaginaCirculo);
    console.log('jqEsPaginaPie: ' + jqEsPaginaPie);

    sPagina=$('#mb_pagina');
    sIndexInicio=$('#cphMobile_mb_inicio');
    sIndexCuenta=$('#cphMobile_cuentamb_cuenta');
    sImgLogoCab=$('#mb-tdLogoCabecera img');
    sDchaCab=$('#mb-tdDchaCabecera');
    sVentanaEntrar=$('#mb_ventanaEntrar');
    sVentanaMenuCabAut=$('#mb_menuCabecera');
    sVentanaMenuCabNoAut=$('#mb_menuCabeceraNoAut');
    sVentanaConfiguracion=$('#mb_ventanaConfiguracion');
    sDchaCabBotones=$('#mb_tableBotonesCab');
    sDchaCabUsuario=$('#mb_tableUser');
    sMenuCab=$('#mb-tdMenuCabecera');
    sImgMenuCab=$('#mb-tdMenuCabecera img');
    sMenuConfiguracion=$('#mb_tableUser');
    sImgIcoMenuSubcab = $('#mb-tdIcoMenuSubcab img');
    sIcoMenuSubcab = $('#mb-tdIcoMenuSubcab');

    sTableCompartir=$('.tableCompartir_mb');
    sTableAyudaMenu=$('#ayudaMenu_mb');

    sSubcabecera=$('#mb_subcabecera');
    sVentanaIdioma=$('#mb_ventanaIdioma');

    arrSelectoresMaster=[sPagina,sImgLogoCab,sDchaCab,sVentanaEntrar,sVentanaMenuCabAut,
        sVentanaMenuCabNoAut,sVentanaConfiguracion,sSubcabecera,sVentanaIdioma];
    arrRoles = ["NONE", "INVITADO", "ANFITRION", "RELACIONADO", "MIEMBRO", "EDITOR", "ADMIN", "SUPERADMIN"];//Nuevo
  
    if(!jqEsPaginaCirculo) sTableCompartir.css('display','none');
    else{
        //COMPARTIR
        //console.log('COMPARTIR');
        $.ajaxSetup({ cache: true });

        //Leemos la url con invitación desde el server
        LifeBook.LibreriaWebService.WsGetGuestCode(function (result) {
            //console.log('GetGuestCode: ' + result[0]);

            if (result[0]) { //En sesión && Usuario encontrado en BBDD && urlInvitacion correcta

                var enlaceInvitacion = 'http://www.famytree.net' + result[0];
                console.log('enlaceInvitacion: '+enlaceInvitacion);
                //Facebook
                $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
                    FB.init({
                        appId: 474668796251311,
                        version: 'v2.7' // or v2.1, v2.2, v2.3, ...
                    });
          
                    FB.getLoginStatus(function (resultGetLoginStatus) {
                        console.log('getLoginStatus: ' + resultGetLoginStatus);
                    });

                    $('.imgIconoFacebook_mb').click(function () {
                        //console.log('Click Compartir Facebook');
                        FB.ui({
                            method: 'share',
                            href: enlaceInvitacion,
                            mobile_iframe: true,
                        }, function (response) {
                            //console.log(response);
                        });
                        //console.log('Tras Click Compartir Facebook');
                    });         
                });
                //var texto='http://www.famytree.net'+result;

                //Whatsapp
                $('.aCompartirWhatsapp_mb').attr('href','whatsapp://send?text=' + enlaceInvitacion);

                //Email
                var asunto = $(document).find("title").text();
                // var cuerpo = 'http://www.famytree.net' + result;
                //console.log('cuerpo: ' + cuerpo);
                $('.aCompartirEmail_mb').attr('href', 'mailto:?subject=' + asunto + '&body=' + enlaceInvitacion);

                //Copiar
                $('.imgIconoCopiar_mb').click(
                   function () {
                       $(this).css('width', '54px');

                       var aux = document.createElement("input");
                       aux.setAttribute("value", enlaceInvitacion);
                       aux.setAttribute("id","idAux");
                       document.body.appendChild(aux);
                       $input=$('#idAux');

                       if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                           var el = $input.get(0);
                           var editable = el.contentEditable;
                           var readOnly = el.readOnly;
                           el.contentEditable = true;
                           // el.readOnly = false;
                           el.readOnly = true;

                           var range = document.createRange();
                           range.selectNodeContents(el);
                           var sel = window.getSelection();
                           sel.removeAllRanges();
                           sel.addRange(range);
                           el.setSelectionRange(0, 999999);
                           el.contentEditable = editable;
                           el.readOnly = readOnly;
                       }
                       else {
                           aux.select();
                       };
                       document.execCommand("copy");
                       $input.blur();
                       document.body.removeChild(aux);

                       $(this).animate(
                           { width: '50px' },
                           200);
               
                   });
            }
            else{
                if (result[1]) // En sesión && Usuario correcto && NO urlInvitacion : redireccionamos al círculo propio
                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + result[1];
                else //Aseguramos el cierre de sesión
                   // window.location.href = '/index/inicioNoAut';
                QuitarCookies();
                window.location.href = '/index/end_session';
            };


       }); //Fin WsGetGuestCode     

    };//FIN else
 

  //  sesUsu = parseInt($('#tbCabSesUsuario').val());
    jqStatus = $('#tbCabStatus').val();

    sNotGen=$('#notificacion');
    sTdTituloNotGen=$('#tdCabNotGenTitulo');
    sTextoNotGen=$('#notGenTexto');
    sBNaranjaNotGen=$('#notGenBNaranja');

    sNotGen.attr('tabIndex',1);

    // $('#mb_menuCabecera').hide();

    PresentaMaster();
    //--------------- EVENTOS ------------------------------------------
    //*****************EVENTOS CABECERA*********************************

    // CLICK EN BOTON ENTRAR DE LA CABECERA NO AUTENTICADA
    $('#mb-bEntrar').click(function () {

 /*
        $('#mb_pagina').hide();
        $('#mb_ventanaEntrar').show();
        $('#mb-tdDchaCabecera').hide();
      $('#mb-tdLogoCabecera img').css('display', 'block');
       */
        sPagina.hide();
        sVentanaEntrar.show();
        sDchaCab.hide();
        sImgLogoCab.css('display', 'block');
        $('#mb-tdLogoCabecera').css('width','90%');
        $('#mb-tdMenuCabecera').css('width','10%');
    });

    // CLICK EN MENU DE LA CABECERA AUTENTICADA / NO AUTENTICADA

    sMenuCab.click(function () {

        if(esMenuUsuActivo){
            sMenuConfiguracion.click(); 
        };

       

        if(esMenuCabActivo){ //Cerrar menú
           
           // sImgMenuCab.attr('src', '/Images/support/menuCabeceraBlanco.png');
            esMenuCabActivo=false;
            PresentaMaster();
        }
        else{ //Abrir menú
             if(esMenuSubcabActivo){
                        sIcoMenuSubcab.click();
                    };
           // sImgMenuCab.attr('src', '/Images/support/menuCabeceraRojo.png');
            esMenuCabActivo=true;
            PresentaMaster();
        };

/*
        if(esMenuUsuActivo){
            sMenuConfiguracion.click(); 
        };

        if(esMenuCabActivo){ //Cerrar menú
           
            if (jqEsAutenticado) {
                sVentanaMenuCabAut.hide();
            }
            else {
                sVentanaMenuCabNoAut.hide();
                sImgLogoCab.hide();
                sDchaCab.show();
                sIndexCuenta.hide();
                sIndexInicio.show();
            };
     
            sPagina.show();
            sMenuCab.attr('src', '/Images/support/menuCabeceraBlanco.png');
            esMenuCabActivo=false;
        }
        else{ //Abrir menú

            if (jqEsAutenticado) {
                sVentanaMenuCabAut.show();
                sDchaCab.show();
            }
            else {
                sVentanaMenuCabNoAut.show();
                sDchaCab.hide();
                sVentanaEntrar.hide();
            };
            sImgLogoCab.show();
           
            if($('#mb_subcabecera').css('display')=='none') sVentanaMenuCab.attr('style', 'top:55px');
            else sVentanaMenuCab.attr('style', 'top:95px')

            $('#mb_pagina').hide();
            $('#mb-tdMenuCabecera img').attr('src', '/Images/support/menuCabeceraRojo.png');
             sVentanaMenuCab.show();
            esMenuCabActivo=true;
        };
        */


        });

    //MENU PRINCIPAL CABECERA

    $('.mb-bMenuAzul').click(function (e) {
        //console.log(this.id);
        //console.log($('.mb-bMenuAzul').index(this));
        //console.log('/' + sDdlPaginas.find('option')[$('.mb-bMenuAzul').index(this)].innerText + '/' + sesAliasCirculo);
        //$('.cabMenuOpcion .pagina h2').css('color', 'white');
        //$(this).find('h2').css('color', '#f024bb');
        //e.preventDefault();
        if(sesAliasCirculo){
            var iPagina=$('.mb-bMenuAzul').index(this);

            if (iPagina==0 && sesPresentacionTree != 'navegacion')
                LifeBook.LibreriaWebService.WsActualizarSesionTree('navegacion',
                                function () {
                                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo;
                                });
            else
                window.location.href = '/' + sDdlPaginas.find('option')[iPagina].innerText + '/' + sesAliasCirculo;
        }
    });





    //CLICK EN USUARIO - CABECERA AUTENTICADA

        sMenuConfiguracion.click(function () {
           
            if(esMenuCabActivo){
               sMenuCab.click(); 
            };

            if(esMenuUsuActivo){ //Cerrar menú

              //  $('#mb_tdUserName').css('color','white');
                esMenuUsuActivo=false;
                PresentaMaster();
            }
            else{ //Abrir menú
                if(esMenuSubcabActivo){
                    sIcoMenuSubcab.click();
                };
   
               // $('#mb_tdUserName').css('color','#f024bb');
                esMenuUsuActivo=true;
                PresentaMaster();
            };


            /*
            if(esMenuCabActivo){
                $('#mb-tdMenuCabecera').click(); 
            };

            if(esMenuUsuActivo){ //Cerrar menú
                $('#mb_ventanaConfiguracion').hide();
                $('#mb_pagina').show();
                $('#mb_tdUserName').css('color','white');

                if($('#mb_subcabecera').css('display')=='none')
                    $('#mb-tdLogoCabecera img').css('display', 'none');

                esMenuUsuActivo=false;
            }
            else{ //Abrir menú
               
                $('#mb_pagina').hide();
                $('#mb_tdUserName').css('color','#f024bb');

                if($('#mb_subcabecera').css('display')=='none')
                    $('#mb_ventanaConfiguracion').attr('style', 'top:55px');
                else
                    $('#mb_ventanaConfiguracion').attr('style', 'top:95px');

                $('#mb-tdLogoCabecera img').css('display', 'block');

                 $('#mb_ventanaConfiguracion').show();
                esMenuUsuActivo=true;
            };
            */

        });
   


    //*****************EVENTOS MENU *********************************


    //CERRAR SESIÓN

        $('#mb-cerrarSesion').click(function () {
           
            $('#mb_ventanaConfiguracion').hide();
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

        $('#mb-cuentaUsuario').click(function () {
            //console.log('click en cuentaUsuario');
            //configuracion.hide();
            jqLocationAnt = document.URL;
            window.location.href = '/index/account';
        });
    //CAMBIAR IDIOMA

       $('#mb-cambiarIdioma').click(function () {
        $('#mb_ventanaConfiguracion').hide();
        //$('#mb_ventanaIdioma').show();

        sVentanaIdioma.show();
    });

    //CLICK EN COOKIES
       $('#mb-politicaCookies ,#mb-politicaCookiesMenuCab').click(function () {
           $('#mb_ventanaConfiguracion').hide();
           window.location.href='/Cookies.aspx';
       });

    //CLICK EN CONDICIONES
       $('#mb-condicionesUso,#mb-condicionesUsoMenuCab').click(function () {
           $('#mb_ventanaConfiguracion').hide();
           window.location.href='/Condiciones.aspx';
       });

    //CLICK EN PRIVACIDAD
       $('#mb-politicaPrivacidad,#mb-politicaPrivacidadMenuCab').click(function () {
           $('#mb_ventanaConfiguracion').hide();
           window.location.href='/Privacidad.aspx';
       });

    //CLICK EN QUIENES SOMOS
       $('#mb-quienesSomos,#mb-quienesSomosMenuCab').click(function () {
           $('#mb_ventanaConfiguracion').hide();
           window.location.href='/Quienes.aspx';
       });

    //CLICK EN CONTACTAR
       $('#mb-contactar,#mb-contactarMenuCab').click(function () {
           $('#mb_ventanaConfiguracion').hide();
           window.location.href='/Contacto.aspx';
       });

    //EVENTOS BÚSQUEDA

    //Evento Hover en Buscador
    $('#mb-menuCab-buscador-tableBus').hover(
        function () {
            $('#mb_lupaCabecera img').attr('src', '/Images/support/lupa_magenta.gif');
            $('#mb_menuCab_tbBuscador').css('border', 'solid 2px #f024bb');
        },
        function () {
            $('#mb_lupaCabecera img').attr('src', '/Images/support/lupa_verde.gif');
            $('#mb_menuCab_tbBuscador').css('border', 'solid 2px #0377aa');
        });
    //Evento Click en Caja Buscador  
    $('#mb_menuCab_tbBuscador').click(function () {
        if (primerClickBusCab) {
            $('#mb_menuCab_tbBuscador').val('');
            $('#mb_menuCab_tbBuscador').css('color', 'black');
        }
        primerClickBusCab = false;
    });

    
        $('#tdCabNotGenAspa').bind('vclick click',function(){
            sNotGen.hide();
        });

    //*****************EVENTO CAMBIO DE ORIENTACIÓN *********************************

        $( window ).on( "orientationchange", function( event ) {

            
           
            jqOrientacionVertical = !jqOrientacionVertical;
        //console.log( "This device is in " + event.orientation + " mode! " + jqOrientacionVertical + " jqPresentacionMaster= "+jqPresentacionMaster);
            //if(jqOrientacionVertical) jqOrientacionVertical=false; else jqOrientacionVertical=true;
            
        //console.log('sesPresentacion: '+sesPresentacion);

        PresentaMaster();
  /*      
        if(jqPresentacionMaster==1 || jqPresentacionMaster==6)
            {
                if(jqOrientacionVertical) {
                    sImgLogoCab.hide();
                    $('#mb-tdLogoCabecera').css('width',(jqEsTablet)?'360px' :'210px');
                }
                else {
                    sImgLogoCab.show();
                    $('#mb-tdLogoCabecera').css('width','60%');
                }
            }
*/

        });

});







/***************************************************************************/
/******************* LEER SESION   *****************************************/
/***************************************************************************/
function LeerSesionMaster() {
    sesTextoBusCirculo = $('#tbCabSesTextoBusCirculo').val();
    sesPresentacion = $('#tbCabSesPresentacion').val();
    sesPaginaOrigen = $('#tbCabSesPaginaOrigen').val();
    sesUsu = parseInt($('#tbCabSesUsuario').val());
    sesCirculo = parseInt($('#tbCabSesCirculo').val());
    sesCirculoSol = parseInt($('#tbCabSesCirculoSol').val());
    sesCirculoPropio = $('#tbCabSesCirculoPropio').val();
    sesRol = $('#tbCabSesRol').val();
    sesNFotosAlbumTotal = $('#tbCabSesNFotosAlbumTotal').val();
    sesNFotosAlbumCompartidas = $('#tbCabSesNFotosAlbumCompartidas').val();
    sesAlbumBus = $('#tbCabSesAlbumBus').val();
    sesParamBusTexto = $('#tbCabSesParamBusTexto').val();
    sesParamBusLugar = $('#tbCabSesParamBusLugar').val();
    sesParamBusFecha = $('#tbCabSesParamBusFecha').val();
    sesParamBusAnio = sesParamBusFecha.slice(0, 4);
    if (sesParamBusAnio == "0000") sesParamBusAnio = "";
    sesParamBusMes = sesParamBusFecha.slice(4, 6);
    if (sesParamBusMes == "00") sesParamBusMes = "0";
    sesParamBusDia = sesParamBusFecha.slice(6, 8);
    if (sesParamBusDia == "00") sesParamBusDia = "";
    sesParamBusPrivacidad = $('#tbCabSesParamBusPrivacidad').val();
    nSegAlbum = $('#tbCabNSegAlbum').val();
    sesAliasCirculo = $('#tbCabSesAliasCirculo').val();
    sesAliasCirculoSol = $('#tbCabSesAliasCirculoSol').val();
    sesPresentacionTree = $('#tbCabSesPresentacionTree').val();

    //console.log('LeerSesionMaster - sesAliasCirculo: '+sesAliasCirculo);


};

/***************************************************************************/
/******************* PRESENTA MASTER   *****************************************/
/***************************************************************************/
function PresentaMaster() {
    //Ocultamos todos los selectores
    $.each(arrSelectoresMaster,function(i,sel){
        if(sel) sel.hide();
    });
    sImgMenuCab.attr('src', '/Images/support/menuCabeceraBlanco.png');
    $('#mb_tdUserName').css('color','white');
    $('#mb-tdMenuCabecera').css('width','50px');
    if(jqOrientacionVertical) 
        
        if($(window).width()<400) $('#mb-tdLogoCabecera').css('width','160px');
        else $('#mb-tdLogoCabecera').css('width',(jqEsTablet)?'360px' :'210px');
    
    else 
        $('#mb-tdLogoCabecera').css('width','60%');

   // $('#mb-tdLogoCabecera img').css('display','block');
    $('#mb_ventanaConfiguracion').attr('style', 'top:55px');
    sPagina.css('padding-top','55px');
    
    //8.- MENU CABECERA NO AUTENTICADO
    if(!jqEsAutenticado && esMenuCabActivo ){
        //console.log('PRESENTA 8');
        jqPresentacionMaster=8;
        $('#mb-tdLogoCabecera img').css('display','block');
        $('#mb-tdLogoCabecera').css('width','90%');
        $('#mb-tdMenuCabecera').css('width','10%');
        //sImgLogoCab.show();
        sPagina.hide();
        sVentanaMenuCabNoAut.show();
        sImgMenuCab.attr('src', '/Images/support/menuCabeceraRojo.png');
       
    }

    //4.- MENU CABECERA AUTENTICADO TODAS LAS PÁGINAS
    else if(jqEsAutenticado && esMenuCabActivo ){ 
        //console.log('PRESENTA 4');
        jqPresentacionMaster=4;
        sDchaCab.show();
        sDchaCabUsuario.show();
        //sImgLogoCab.show();
        sImgLogoCab.css('display','block');
        sVentanaMenuCabAut.show();
        sImgMenuCab.attr('src', '/Images/support/menuCabeceraRojo.png');
        //console.log('jqEsPaginaIndex: ' + jqEsPaginaIndex);
        //console.log('jqEsPaginaPie: ' + jqEsPaginaPie);

        if(!jqEsPaginaIndex && !jqEsPaginaPie){
            sSubcabecera.show();
            sVentanaMenuCabAut.attr('style', 'top:95px');
            $('#mb-cabecera').attr('style','top:0px');
        }
        else{
            sVentanaMenuCabAut.attr('style', 'top:55px'); 
        };
    }

    //5.- MENU CONFIGURACION USUARIO AUTENTICADO TODAS LAS PAGINAS

    else if(jqEsAutenticado && esMenuUsuActivo ){ 
        //console.log('PRESENTA 5');
        jqPresentacionMaster=5;
        sDchaCab.show();
        sDchaCabUsuario.show();
        sImgLogoCab.show();
        sVentanaConfiguracion.show();
        $('#mb_tdUserName').css('color','#f024bb');
        
    }

    //6.- INDEX NO AUTENTICADO
    else if(jqEsPaginaIndex && !jqEsAutenticado && !esMenuCabActivo && !esMenuUsuActivo){
        //console.log('PRESENTA 6');
        jqPresentacionMaster=6;
        sDchaCab.show();
        sDchaCabBotones.show();
        sPagina.show();
        if(!jqOrientacionVertical) {
            sImgLogoCab.show();
            $('#mb-tdLogoCabecera').css('width','40%');
        }
        else{
            $('#mb-tdLogoCabecera').css('width','5%');
        
        }

        //sIndexInicio.show();
    }

    //7.- PIE NO AUTENTICADO
   else if(jqEsPaginaPie && !jqEsAutenticado ){
       //console.log('PRESENTA 7');
       jqPresentacionMaster=7;
       sImgLogoCab.show();
        sPagina.show();
        sPagina.css('padding-top','55px');

        
    }

    //1.- INDEX AUTENTICADO

    else if(jqEsPaginaIndex && jqEsAutenticado && !esMenuCabActivo && !esMenuUsuActivo){ 
        //console.log('PRESENTA 1');
        jqPresentacionMaster=1;
        sDchaCab.show();
        sDchaCabUsuario.show();
        sDchaCabBotones.hide();//Nuevo
        sPagina.show();
       // sIndexInicio.show();
        
        if(!jqOrientacionVertical || jqOrientacionVertical && sesPresentacion != "inicio" ){
            sImgLogoCab.show();
          //  $('#mb-tdLogoCabecera').css('width','60%');
        }
        else {

           // $('#mb-tdLogoCabecera').css('width',(jqEsTablet)?'300px' :'210px');
        }
    }

    //2.- PIE AUTENTICADO

    else if(jqEsPaginaPie && jqEsAutenticado){ 
        //console.log('PRESENTA 2');
        jqPresentacionMaster=2;
        sDchaCab.show();
        sDchaCabUsuario.show();
        sDchaCabBotones.hide();//Nuevo
        sPagina.show();
        sImgLogoCab.show();
        sPagina.css('padding-top','55px');
    }

    //3.- RESTO AUTENTICADO

   else if(!jqEsPaginaIndex && !jqEsPaginaPie && jqEsAutenticado ){ 
       //console.log('PRESENTA 3');
       jqPresentacionMaster=3;
       sDchaCab.show();
        sDchaCabUsuario.show();
        sPagina.show();
        sImgLogoCab.show();
        sSubcabecera.show();
        $('#mb_ventanaConfiguracion').attr('style', 'top:95px');
    };



    

   

 


};

/***************************************************************************/
/***** FUNCION Notifica (NOTIFICACION GENERAL) *************/
/***************************************************************************/
function Notifica(ref, notificaciones) {
    var index = -1;
    $.each(notificaciones, function (i, notificacion) {
        if (notificacion.NotificacionId == ref)
            index = i;
    });
    //  NotificaIndex(notificaciones[index].Titulo, notificaciones[index].Texto, notificaciones[index].Boton);

    sNotGen.show();
    sTdTituloNotGen.html(notificaciones[index].Titulo);
    sTextoNotGen.html(notificaciones[index].Texto);
    sBNaranjaNotGen.html(notificaciones[index].Boton);
/*
    $('#notGenBNaranja').bind('vclick click',function(){
        sNotGen.hide();
    });
    */
    sBNaranjaNotGen.click(function(){
        sNotGen.hide();
    });

    //sNotGen.scrollTop(100);
    //$('#cphMobile_cuentamb_mb_ventanaCuenta').scrollTop(50);
   // $(window).scrollTop(300);
    ////console.log('Scroll: '+$(window).scrollTop());

   // $.mobile.silentScroll(0);
    //setTimeout(function(){$.mobile.silentScroll(0);}, 1000);
    //console.log('Scroll 1: '+ $('#cphMobile_cuentamb_mb_ventanaCuenta').scrollTop());
    //console.log('Scroll 2: '+ $('#cphMobile_cuentamb_cuenta').scrollTop());
    //console.log('Scroll 3: '+ $('window').scrollTop());
    //console.log('Scroll 4: '+ $('#mb_pagina').scrollTop());
    //console.log('Scroll 5: '+ $('.ui-pag-active').scrollTop());
    //console.log('Scroll 6: '+ $('body').scrollTop());

   
    sNotGen.focus();



};









/***************************************************************************/
/******************* FUNCION ValorRol *************************/
/***************************************************************************/

function ValorRol(sesRol) {
    return arrRoles.indexOf(sesRol); //Nuevo
    /* 
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
    */
};



/*--------------------------------------------------------------------------------------------------*/
/*-----------------    FUNCTION AJUSTAR IMAGEN   ---------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
function AjustarImagen(sImagen,sBSubir,sBEliminar,sPagina) {
 
    var DIM_ORI = 800, DIM_PRES_INI = 280;
    var imgOriginal = new Image(), imgOriginalRotada = new Image();
    var resize_canvas = document.createElement('canvas');
    var leftCanvasResize, topCanvasResize, wCanvasResize, hCanvasResize;
    var rotacion = 0;
    var min_width = 150, min_height = 150, max_width = 1000, max_height = 1000;
    var event_state = {};
    var $container;
    var imgFotoAjuste;
    var saveEventState,resizing,resizeImage,endMoving,moving;

    sImgFotoAjuste = $('.resize-image');
    imgFotoAjuste = $('.resize-image').get(0);

    window.URL=window.URL || window.webkitURL ;




    sPagina.hide();
   // sMascaraMaster.show();
    sAjusteImg.show();

    nAjustesImagen++;

    //console.log('nAjustesImagen: '+ nAjustesImagen);

    /*
    var n0 = sImagen.attr('src').length;
    if (n0 > 30) n0 = 30;
    //console.log('AjustarImagen - sImagen.attr: ' + sImagen.attr('src').length + " - " + sImagen.attr('src').substring(0, n0));
    */
     imgOriginal.src = ResizeSImgMaxDim(sImagen, DIM_ORI);
    /*
    var n1 = imgOriginal.src.length;
    if (n1 > 30) n1 = 30;
    //console.log('AjustarImagen - imgOriginal.src: ' + imgOriginal.src.length + " - " + imgOriginal.src.substring(0, n1));
   */
     imgOriginalRotada.src = imgOriginal.src;
 
    sImgFotoAjuste.on('load', function () {

       
            var n2 = sImgFotoAjuste.attr('src').length;
            if (n2 > 30) n2 = 30;
            //console.log('AjustarImagen - sImgFotoAjuste.attr: ' + sImgFotoAjuste.attr('src').length + " - " + sImgFotoAjuste.attr('src').substring(0, n2));

            // Wrap the image with the container and add resize handles
            sImgFotoAjuste.wrap('<div class="resize-container"></div>')
            .before('<span class="resize-handle resize-handle-nw"></span>')
            .before('<span class="resize-handle resize-handle-ne"></span>')
            .after('<span class="resize-handle resize-handle-se"></span>')
            .after('<span class="resize-handle resize-handle-sw"></span>');

            $container = sImgFotoAjuste.parent('.resize-container');

            leftCanvasResize=$container.offset().left;
            topCanvasResize=$container.offset().top;
            wCanvasResize=$container.width();
            hCanvasResize=$container.height();

            //console.log('AjustarImagen - leftCanvasResize: ' + leftCanvasResize);
            //console.log('AjustarImagen - topCanvasResize: ' + topCanvasResize);
            //console.log('AjustarImagen - wCanvasResize: ' + wCanvasResize);
            //console.log('AjustarImagen - hCanvasResize: ' + hCanvasResize);
  
            $('#loading-mb').hide();

  

        sImgFotoAjuste.off('load');
        //------------------------------------------------------------------------------

      

            // EVENTOS
       
            $container.on('mousedown touchstart', startMoving);

            $container.on('mousedown touchstart', startResize);

            $('#bCortar-mb').on('click', crop);

            $('#bGirarDcha-mb').on('click',function () {
                rotacion++;
                if (rotacion == 4) rotacion = 0;
                RotarImagen();
            });

            $('#bGirarIzda-mb').on('click',function () {
                rotacion--;
                if (rotacion == -1) rotacion = 3;
                RotarImagen();
            });


 

            sBGuardarAjuste.on('click', function () {

                var p = DIM_PRES_INI / DIM_ORI;
                var w = imgOriginalRotada.width * p;
                var h = imgOriginalRotada.height * p;

                guardar_canvas = document.createElement('canvas');
                guardar_canvas.width = w;
                guardar_canvas.height = h;
                guardar_canvas.getContext('2d').drawImage(imgOriginalRotada, 0, 0, w, h);
                Finalizar();
                PonerImgB64(sImagen, guardar_canvas.toDataURL("image/png"), W_FOTO_USUARIO_MB);
                sBSubir.hide();
                sBEliminar.show();
            });

        
            sBCancelarAjuste.on('click', function () {
                Finalizar();
                PonerFotoUsuario(sImagen, '', "H", W_FOTO_USUARIO_MB);
                sBSubir.show();
                sBEliminar.hide();
            });

    
        
        

        // FUNCIONES

        function startResize (e) {
            //console.log('Hola!!! Soy startResize');
            e.preventDefault();
            e.stopPropagation();
            saveEventState(e);
            $(document).on('mousemove touchmove', resizing);
            $(document).on('mouseup touchend', endResize);
        };

        endResize = function (e) {
            e.preventDefault();
            $(document).off('mouseup touchend', endResize);
            $(document).off('mousemove touchmove', resizing);
        };

        saveEventState = function (e) {
            // Save the initial event details and container state
            event_state.container_width = $container.width();
            event_state.container_height = $container.height();
            event_state.container_left = $container.offset().left;
            event_state.container_top = $container.offset().top;
            event_state.mouse_x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
            event_state.mouse_y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();

            // This is a fix for mobile safari
            // For some reason it does not allow a direct copy of the touches property
            if (typeof e.originalEvent.touches !== 'undefined') {
                event_state.touches = [];
                $.each(e.originalEvent.touches, function (i, ob) {
                    event_state.touches[i] = {};
                    event_state.touches[i].clientX = 0 + ob.clientX;
                    event_state.touches[i].clientY = 0 + ob.clientY;
                });
            }
            event_state.evnt = e;
        };

        resizing = function (e) {
            var mouse = {}, width, height, left, top, offset = $container.offset();
            mouse.x = (e.clientX || e.pageX || e.originalEvent.touches[0].clientX) + $(window).scrollLeft();
            mouse.y = (e.clientY || e.pageY || e.originalEvent.touches[0].clientY) + $(window).scrollTop();

            // Position image differently depending on the corner dragged and constraints
            if ($(event_state.evnt.target).hasClass('resize-handle-se')) {
                width = mouse.x - event_state.container_left;
                height = mouse.y - event_state.container_top;
                left = event_state.container_left;
                top = event_state.container_top;
            } else if ($(event_state.evnt.target).hasClass('resize-handle-sw')) {
                width = event_state.container_width - (mouse.x - event_state.container_left);
                height = mouse.y - event_state.container_top;
                left = mouse.x;
                top = event_state.container_top;
            } else if ($(event_state.evnt.target).hasClass('resize-handle-nw')) {
                width = event_state.container_width - (mouse.x - event_state.container_left);
                height = event_state.container_height - (mouse.y - event_state.container_top);
                left = mouse.x;
                // top = mouse.y;
                // if (constrain || e.shiftKey) {
                top = mouse.y - ((width / imgOriginalRotada.width * imgOriginalRotada.height) - height);
                //  }
            } else if ($(event_state.evnt.target).hasClass('resize-handle-ne')) {
                width = mouse.x - event_state.container_left;
                height = event_state.container_height - (mouse.y - event_state.container_top);
                left = event_state.container_left;
                //  top = mouse.y;
                // if (constrain || e.shiftKey) {
                top = mouse.y - ((width / imgOriginalRotada.width * imgOriginalRotada.height) - height);
                // }
            }
            // Optionally maintain aspect ratio
            //  if (constrain || e.shiftKey) {
            height = width / imgOriginalRotada.width * imgOriginalRotada.height;
            //  }
            if (width > min_width && height > min_height && width < max_width && height < max_height) {
                // To improve performance you might limit how often resizeImage() is called
                resizeImage(width, height);
                // Without this Firefox will not re-calculate the the image dimensions until drag end
                $container.offset({ 'left': left, 'top': top });
                leftCanvasResize = left;
                topCanvasResize = top;
                wCanvasResize = width;
                hCanvasResize = height;
    
            }
            //console.log('Resizing - wCanvasResize: ' + wCanvasResize);
            //console.log('Resizing - hCanvasResize: ' + hCanvasResize);
        }

        resizeImage = function (width, height) {
            //console.log('resizeImage - width: ' + width);
            //console.log('resizeImage - height: ' + height);

            resize_canvas.width = width;
            resize_canvas.height = height;
            resize_canvas.getContext('2d').drawImage(imgOriginalRotada, 0, 0, width, height);
            sImgFotoAjuste.attr('src', resize_canvas.toDataURL("image/png"));

            var n0 = sImgFotoAjuste.attr('src').length;
            if (n0 > 30) n0 = 30;
            //console.log('resizeImage - sImagen.attr: ' + sImgFotoAjuste.attr('src').length + " - " + sImgFotoAjuste.attr('src').substring(0, n0));


        };

        

        function RotarImagen() {
            //Obtener imgOriginalRotada
            //   console.log('RotarImagen - wCanvasResize: ' + wCanvasResize);
            //  console.log('RotarImagen - hCanvasResize: ' + hCanvasResize);
            $('#loading-mb').show();
            //console.log("Inicio RotarImagen");

            sImgFotoAjuste.hide();

            sImgFotoAjuste.on('load', function () {
                //console.log("RotarImagen - Primer onLoad");
                var canvasRotacion = document.createElement('canvas');
                var ctx = canvasRotacion.getContext('2d');
                var wOri = imgOriginal.width;
                var hOri = imgOriginal.height;
                //console.log('wOri: ' + wOri);
                //console.log('hOri: ' + hOri);
                if (rotacion == 0 || rotacion == 2) {
                    canvasRotacion.width = wOri;
                    canvasRotacion.height = hOri;
                }
                else {
                    canvasRotacion.width = hOri;
                    canvasRotacion.height = wOri;
                };
                ctx.translate((canvasRotacion.width / 2).toFixed(), (canvasRotacion.height / 2).toFixed());
                if (rotacion > 0) ctx.rotate(rotacion * Math.PI / 2);
                ctx.drawImage(imgOriginal, 0, 0, imgOriginal.width, imgOriginal.height, -wOri / 2, -hOri / 2, wOri, hOri);
                imgOriginalRotada.src = canvasRotacion.toDataURL("image/png");
                sImgFotoAjuste.off('load');
            
                sImgFotoAjuste.on('load', function () {
                    //console.log("RotarImagen - Segundo onLoad");
                    leftCanvasResize = leftCanvasResize + wCanvasResize / 2 - hCanvasResize / 2;
                    topCanvasResize = topCanvasResize + hCanvasResize / 2 - wCanvasResize / 2;
                    var wCanvasResizeAnt = wCanvasResize;
                    wCanvasResize = hCanvasResize;
                    hCanvasResize = wCanvasResizeAnt;
                    //console.log('leftCanvasResize: ' + leftCanvasResize);
                    //console.log('topCanvasResize: ' + topCanvasResize);
                    resizeImage(wCanvasResize, hCanvasResize);
                    $container.offset({ 'left': leftCanvasResize, 'top': topCanvasResize });
                    sImgFotoAjuste.off('load');
                    sImgFotoAjuste.show();
                    $('#loading-mb').hide();
                });

                sImgFotoAjuste.attr('src', resize_canvas.toDataURL("image/png"));

            });
            sImgFotoAjuste.attr('src', imgOriginalRotada.src);
            //console.log("Fin RotarImagen");
        };
    
        function startMoving(e) {
            e.preventDefault();
            e.stopPropagation();
            saveEventState(e);
            $(document).on('mousemove touchmove', moving);
            $(document).on('mouseup touchend', endMoving);
        }

        endMoving = function (e) {
            e.preventDefault();
            $(document).off('mouseup touchend', endMoving);
            $(document).off('mousemove touchmove', moving);
        };

        moving = function (e) {
            var mouse = {}, touches;
            var containerLeft, containerTop;
            e.preventDefault();
            e.stopPropagation();

            touches = e.originalEvent.touches;

            mouse.x = (e.clientX || e.pageX || touches[0].clientX) + $(window).scrollLeft();
            mouse.y = (e.clientY || e.pageY || touches[0].clientY) + $(window).scrollTop();

            $container.offset({
                'left': mouse.x - (event_state.mouse_x - event_state.container_left),
                'top': mouse.y - (event_state.mouse_y - event_state.container_top)
            });
            leftCanvasResize = $container.offset().left;
            topCanvasResize = $container.offset().top;

            // Watch for pinch zoom gesture while moving
            if (event_state.touches && event_state.touches.length > 1 && touches.length > 1) {
                var width = event_state.container_width, height = event_state.container_height;
                var a = event_state.touches[0].clientX - event_state.touches[1].clientX;
                a = a * a;
                var b = event_state.touches[0].clientY - event_state.touches[1].clientY;
                b = b * b;
                var dist1 = Math.sqrt(a + b);

                a = e.originalEvent.touches[0].clientX - touches[1].clientX;
                a = a * a;
                b = e.originalEvent.touches[0].clientY - touches[1].clientY;
                b = b * b;
                var dist2 = Math.sqrt(a + b);

                var ratio = dist2 / dist1;

                width = width * ratio;
                height = height * ratio;
                wCanvasResize = width;
                hCanvasResize = height;
                // To improve performance you might limit how often resizeImage() is called
                resizeImage(width, height);
            }
            //console.log('Moving - wCanvasResize: ' + wCanvasResize);
            //console.log('Moving - hCanvasResize: ' + hCanvasResize);
        };

        function crop() {
            //Find the part of the image that is inside the crop box


            var crop_canvas;
            var left1,left2,top1,top2,L,W,H,w,h;

            left1=$('.overlay').offset().left - $container.offset().left;
            top1=$('.overlay').offset().top - $container.offset().top;
            L=$('.overlay').width();
            W=$container.width();
            H=$container.height();
            //console.log('left1: '+left1+' top1: '+top1+' W: '+W+' H: '+H+' L: '+L);

            if(top1>=0 && left1>=0){ //CASO 1

                if(top1<H && left1<W){
                    left2=left1;
                    top2=top1;
                    w=Math.min(W-left1,L);
                    h=Math.min(H-top1,L);
                }
                else NoCortar();
            }
            else if(top1>0 && left1<0){ //CASO 2
                if(top1<H && -left1<L){
                    left2=0;
                    top2=top1;
                    w=L+left1;
                    h=Math.min(H-top1,L);
                }
                else NoCortar();
            }
            else if(top1<0 && left1>0){ //CASO3
                if(-top1<L && left1<W){
                    left2=left1;
                    top2=0;
                    w=Math.min(W-left1,L);
                    h=Math.min(L+top1,H);
                }
                else NoCortar();
            }
            else{ //CASO4
                if(-top1<L && -left1<L){
                    left2=0;
                    top2=0;
                    w=Math.min(L+left1,W);
                    h=Math.min(L+top1,H);
                }
                else NoCortar();
            };
            var p = DIM_ORI / Math.max(W, H);
            left2 = p * left2;
            top2 = p * top2;
            w = p * w;
            h = p * h;

            crop_canvas = document.createElement('canvas');
            crop_canvas.width = w;
            crop_canvas.height = h;
            crop_canvas.getContext('2d').drawImage(imgOriginalRotada, left2, top2, w, h, 0, 0, w, h);
            Finalizar();
            PonerImgB64(sImagen, crop_canvas.toDataURL("image/png"), W_FOTO_USUARIO_MB);
            sBSubir.hide();
            sBEliminar.show();



            /*
            var crop_canvas,
                left = $('.overlay').offset().left - $container.offset().left,
                top = $('.overlay').offset().top - $container.offset().top,
                //  left = $('.overlay').offset().left - leftCanvasResize,
                //  top = $('.overlay').offset().top - topCanvasResize,
                width = $('.overlay').width(),
                height = $('.overlay').height();

            console.log('left: '+left+' top: '+top+' width: '+width+' height: '+height);

            var p = DIM_ORI / Math.max($container.width(), $container.height());
            left = p * left;
            top = p * top;
            width = p * width;
            height = p * height;

            crop_canvas = document.createElement('canvas');
            crop_canvas.width = width;
            crop_canvas.height = height;
            crop_canvas.getContext('2d').drawImage(imgOriginalRotada, left, top, width, height, 0, 0, width, height);
            Finalizar();
            PonerImgB64(sImagen, crop_canvas.toDataURL("image/png"), W_FOTO_USUARIO_MB);
            sBSubir.hide();
            sBEliminar.show();
            */

            function NoCortar(){
                left2=0;
                top2=0;
                w=W;
                h=H;
            };


        };



    
        function Finalizar() {
            $(document).off('mouseup mousemove touchmove touchend');
            $('#component-mb').off();
            $container.off();
            $('#bCortar-mb').off();
            $('#bGirarIzda-mb').off();
            $('#bGirarDcha-mb').off();
            sBGuardarAjuste.off();
            $('#fotoIni-mb').html('<img class="resize-image" src="#" />');
            //sMascaraMaster.hide();
            sAjusteImg.hide();
            sPagina.show();
        };



        

        //------------------------------------------------------------------------------

        
    });

    sImgFotoAjuste.attr('src', ResizeSImgMaxDim(sImagen, DIM_PRES_INI));

    
    
};
/*--------------------------------------------------------------------------------------------------*/
/*---------FIN AJUSTAR IMAGEN-----------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
