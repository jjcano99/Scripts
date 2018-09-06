/* MASTER DESKTOP */

/***************************************************************************/
/******************* CONSTANTES ********************************************/
/***************************************************************************/
var ROL_NONE = 0,
    ROL_INVITADO=1,
    ROL_ANFITRION=2,
    ROL_RELACIONADO=3,
    ROL_MIEMBRO=4,
    ROL_EDITOR=5,
    ROL_ADMIN=6,
    ROL_SUPERADMIN = 7;

/***************************************************************************/
/******************* VARIABLES ********************************************/
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
var jqAutenticado;
var jqStatus;

var jqEsPaginaIndex;
var jqEsPaginaCirculo;
var jqEsPaginaPie;

var jqNot;

var cuerpo;

var sTbBusCab;
var sLupaCab;

var sAjusteImg;
var sImgFotoAjuste;
var sBGuardarAjuste;
var sBCancelarAjuste;

var sMascaraMaster;

var sDdlPaginas;

var arrRoles;


var is_chrome;
var is_explorer;
var is_firefox;
var is_safari;
var is_opera;



$(function () {

    

    //VARIABLES SESION MASTER
    sesAliasCirculo = $('#tbCabSesAliasCirculo').val();
    sesAliasCirculoSol = $('#tbCabSesAliasCirculoSol').val();
    sesTextoBusCirculo = $('#tbCabSesTextoBusCirculo').val();
    sesPresentacion = $('#tbCabSesPresentacion').val();

    //SELECTORES
    sDdlPaginas = $('#ddlPaginas');
    sTbBusCab = $('#tbBusCab');
    sLupaCab = $('#lupaCab');
    sAjusteImg = $('#ajusteImg');
    sMascaraMaster = $('#mascaraMaster');
    sBGuardarAjuste = $('#bGuardarAjuste');
    sBCancelarAjuste = $('#bCancelarAjuste');
    jqPresentacion = "inicio";
    jqAutenticado = $('#panCabAut').attr('class') == 'mostrarPanel';
    var configuracion = $('#configuracionAreaClick');
    var confIdioma = $('#conLangAreaClick');

    //ARRAYS
    arrRoles = ["NONE", "INVITADO", "ANFITRION", "RELACIONADO", "MIEMBRO", "EDITOR", "ADMIN", "SUPERADMIN"];

    //INICIALIZACION
    console.log('document.URL: '+document.URL);
    console.log('location.pathname: ' + location.pathname);

    var regexPaginaIndex = /\/(Index.aspx|index\/)/;
    var regexPaginaPie = /\/(Condiciones|Cookies|Privacidad|Quienes|Ayuda|Contacto).aspx/;
    var regexPaginaCirculo = new RegExp("\/(" + sDdlPaginas.find('option')[0].innerText + "|" +
                                                 sDdlPaginas.find('option')[1].innerText + "|" +
                                                 sDdlPaginas.find('option')[2].innerText + ")\/");

    jqEsPaginaIndex = location.pathname.search(regexPaginaIndex) > -1;
    jqEsPaginaCirculo = location.pathname.search(regexPaginaCirculo) > -1;
    jqEsPaginaPie = location.pathname.search(regexPaginaPie) > -1;

    if (!jqEsPaginaIndex && !jqEsPaginaCirculo && !jqEsPaginaPie) jqEsPaginaIndex = true;


    console.log('jqEsPaginaIndex: ' + jqEsPaginaIndex);
    console.log('jqEsPaginaCirculo: ' + jqEsPaginaCirculo);
    console.log('jqEsPaginaPie: ' + jqEsPaginaPie);

    jqStatus = $('#tbCabStatus').val();

    is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    is_safari = navigator.userAgent.indexOf("Safari") > -1;
    is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome) && (is_safari)) { is_safari = false; }
    if ((is_chrome) && (is_opera)) { is_chrome = false; }


    //----------------- EVENTOS ---------------------------------
    //COMPARTIR

    //AYUDA
    $('#imgIconoAyuda').hover(
      function () {
          $('#leyendaAyuda').show();
      },
      function () {
          $('#leyendaAyuda').hide();
      });

    //FACEBOOK

    $('#imgIconoFacebook').hover(
     function () {
         $('#leyendaFacebook').show();
     },
     function () {
         $('#leyendaFacebook').hide();
     });

    if (jqEsPaginaCirculo) {
        $.ajaxSetup({ cache: true });

        //Leemos la url con invitación desde el server
        LifeBook.LibreriaWebService.WsGetGuestCode(function (result) {
            console.log('GetGuestCode: ' + result[0]);
            //result[0] tiene la urlInvitacion, si el circulo se dio de baja entre medias estará vacio 
            //y habrá que redirigir hacia el aliasCirculoPropio que estará en result[1]
            if (result[0]) {
                $('#compartir').show();
                var enlaceInvitacion = 'http://www.famytree.net' + result[0];
               
                //Facebook -----------------------------------------------------------------
                try{
                    $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
                        FB.init({
                            appId: 474668796251311,
                            version: 'v2.7' // or v2.1, v2.2, v2.3, ...
                        });

                        FB.getLoginStatus(function (resultGetLoginStatus) {
                            console.log('getLoginStatus: ' + resultGetLoginStatus);
                        });

                        $('#imgIconoFacebook').click(function () {
                            console.log('Click Compartir Facebook');
                            FB.ui({
                                method: 'share',
                                href: enlaceInvitacion,
                                //href: 'http://www.famytree.net/' + result.split('/')[0] + "/" + result.split('/')[1],
                                //redirect_uri: 'http://www.famytree.net/' + result,
                            }, function (response) {
                            });
                            console.log('Tras Click Compartir Facebook');
                        });
                    });
                }
                catch(error){
                    console.log('Error Facebook: ' + error.message);
                };
                //Fin Facebook ----------------------------------------------------------

                //Email
                var asunto = $(document).find("title").text();
                // var cuerpo = 'http://www.famytree.net' + result;
                console.log('cuerpo: ' + cuerpo);
                $('.aCompartirEmail').attr('href', 'mailto:?subject=' + asunto + '&body=' + enlaceInvitacion);

                if (!is_safari)
                    //Copiar
                    $('#imgIconoCopiar').click(
                       function () {
                           $(this).css('width', '32px');


                           //----------------------------------------------
                           var aux = document.createElement("input");
                           aux.setAttribute("value", enlaceInvitacion);
                           document.body.appendChild(aux);
                           aux.select();
                           //-------------------------------------------------
                           document.execCommand("copy");

                           document.body.removeChild(aux);

                           $(this).animate(
                               { width: '30px' },
                               200);

                       });
            }
            else {

                if (result[1]) // En sesión && Usuario correcto && NO urlInvitacion : redireccionamos al círculo propio
                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + result[1];
                else {
                    //window.location.href = '/index/inicioNoAut';
                    QuitarCookies();
                    window.location.href = '/index/end_session';
                };
            };

        });//Fin WsGetGuestCode    

        //EMAIL
        $('#imgIconoEmail').hover(
         function () {
             $('#leyendaEmail').show();
         },
         function () {
             $('#leyendaEmail').hide();
         });

        if (is_safari) $('#imgIconoCopiar').hide();
        else
            //COPIAR
            $('#imgIconoCopiar').hover(
             function () {
                 $('#leyendaCopiar').show();
             },
             function () {
                 $('#leyendaCopiar').hide();
             });
    }//Fin páginas Tree-Life-Album
    else { //Ocultar iconos compartir
        $('#compartir').hide();

    };

    //CLICK OPCIONES CABECERA
    $('.cabMenuOpcion').click(function (e) {
        console.log(this.id);
        console.log($('.cabMenuOpcion').index(this));
        console.log('/' + sDdlPaginas.find('option')[$('.cabMenuOpcion').index(this)].innerText + '/' + sesAliasCirculo);
        //$('.cabMenuOpcion .pagina h2').css('color', 'white');
        //$(this).find('h2').css('color', '#f024bb');
        e.preventDefault();
        window.location.href = '/' + sDdlPaginas.find('option')[$('.cabMenuOpcion').index(this)].innerText + '/' + sesAliasCirculo;
    });

    //CONFIGURACION DE USUARIO
    $('#tableUser').click(function () {      
            confIdioma.hide();
            configuracion.show();
    });

    $('#configuracionAreaClick').hover(
        function () {
        },
        function () {
            configuracion.hide();
        });

    $('#tdCabConfiguracionAspa').click(function () {
        configuracion.hide();
    });
    $('#tdCabConLangAspa').click(function () {
        confIdioma.hide();
    });

    $('#settings').click(function () {
        configuracion.hide();
        jqLocationAnt = document.URL;
        window.location.href = '/index/account';
    });

    $('#language').click(function () {
        configuracion.hide();
        confIdioma.show();
    });

    $('#tdCerrar').click(function () {
        configuracion.hide();

        QuitarCookies();
      
       window.location.href = '/index/end_session';
    });

    //DRAG & DROP CUERPO
    cuerpo = document.getElementById("cuerpo");
    cuerpo.ondrop = function (e) {
        e.preventDefault();
    };
    cuerpo.ondragover = function () {
        return false;
    };
    cuerpo.ondragleave = function () {
        return false;
    };
});

//FIN $(function()...);

/**** En función de jqAutenticado=<true|false>, jqPaginaIndex=<true|false>, jqPresentacion=<"inicio"|"search"|"account"> ****/
function ActualizarCabecera() {
    if (jqAutenticado) {
        if (jqEsPaginaIndex) {
            if (jqPresentacion == "inicio")
                PresentaCabecera("AUT_NO_BUS", false);
            else
                PresentaCabecera("AUT_BUS", jqStatus == "navegacionAut" || jqStatus=="search");
        }
        else
            PresentaCabecera("AUT_BUS", true);
    }
    else
        PresentaCabecera("NO_AUT", false);
};

/***** cabecera=< "NO_AUT" | "AUT_NO_BUS" | "AUT_BUS" > subcabecera=< true | false >  ************************/

function PresentaCabecera(cabecera, subcabecera) {
    switch (cabecera) {
        case "NO_AUT":
            $('#panCabAut').attr('class', 'ocultarPanel');
            $('#panCabNoaut').attr('class', 'mostrarPanel');
            $('#panBusCab').attr('class', 'ocultarPanel');
            break;
        case "AUT_NO_BUS":
            $('#panCabAut').attr('class', 'mostrarPanel');
            $('#panCabNoaut').attr('class', 'ocultarPanel');
            $('#panBusCab').attr('class', 'ocultarPanel');
            break;
        case "AUT_BUS":
            $('#panCabAut').attr('class', 'mostrarPanel');
            $('#panCabNoaut').attr('class', 'ocultarPanel');
            $('#panBusCab').attr('class', 'mostrarPanel');
            break;
    }
    if (subcabecera) $('#panSubcabecera').attr('class', 'mostrarPanel'); else $('#panSubcabecera').attr('class', 'ocultarPanel');
}



function NotificaIndex(titulo, texto, boton) {
    var not = $('#notificacion');
    not.show();
    not.attr('title', titulo);
    not.html(texto);
    not.dialog({
        width: 300,
        modal: true,
        position: {
            my: 'left+50 top+5',
            //  at: 'right top+5',
            of: '#pagina'
        },
        show: 'fadeIn',
        open: function () {
            $('.ui-dialog-titlebar-close').attr('tabindex', -1);
            //     $('.ui-dialog').removeClass('ui-state-focus');
            //     $('.ui-dialog').removeClass('ui-state-active');
        },
        /*   buttons: {
               "Aceptar" : function () {
                   not.dialog('close');
               }, 
               "Cancelar": function () {
               } 
           } */
        buttons:
            [{
                text: boton,
                tabIndex: -1,
                click: function () {
                    not.dialog('close');
                }
            }]
    });
    //$('.ui-dialog button').blur();
};

function Notifica(ref, notificaciones) {
    //console.log('ref: ' + ref);
    //console.log('notificaciones: ' + notificaciones);
    var index = -1;
    $.each(notificaciones, function (i, notificacion) {
        if (notificacion.NotificacionId == ref)
            index = i;
    });
    NotificaIndex(notificaciones[index].Titulo, notificaciones[index].Texto, notificaciones[index].Boton);
};

/***************************************************************************/
/******************* FUNCION ValorRol *************************/
/***************************************************************************/

function ValorRol(sesRol) {

    return arrRoles.indexOf(sesRol);

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
function AjustarImagen(sImagen,sBSubir,sBEliminar,procSuccess) {
 
var DIM_ORI = 2000, DIM_PRES_INI = 500;
var imgOriginal = new Image(), imgOriginalRotada = new Image();
var resize_canvas = document.createElement('canvas');
var leftCanvasResize, topCanvasResize, wCanvasResize, hCanvasResize;
var rotacion = 0;
var min_width = 200, min_height = 200, max_width = 1000, max_height = 1000;
var event_state = {};
var $container;
var imgFotoAjuste;
var saveEventState,resizing,resizeImage,endMoving,moving;

sImgFotoAjuste = $('.resize-image');
imgFotoAjuste = $('.resize-image').get(0);

sMascaraMaster.show();

sAjusteImg.css('left',parseInt(($(window).width()-950)/2));
sAjusteImg.show();


var n0 = sImagen.attr('src').length;
if (n0 > 30) n0 = 30;
//console.log('AjustarImagen - sImagen.attr: ' + sImagen.attr('src').length + " - " + sImagen.attr('src').substring(0, n0));
 
imgOriginal.src = ResizeSImgMaxDim(sImagen, DIM_ORI);

var n1 = imgOriginal.src.length;
if (n1 > 30) n1 = 30;
//console.log('AjustarImagen - imgOriginal.src: ' + imgOriginal.src.length + " - " + imgOriginal.src.substring(0, n1));

imgOriginalRotada.src = imgOriginal.src;

sImgFotoAjuste.on('load', function () {

    var n2 = sImgFotoAjuste.attr('src').length;
    if (n2 > 30) n2 = 30;
   // console.log('AjustarImagen - sImgFotoAjuste.attr: ' + sImgFotoAjuste.attr('src').length + " - " + sImgFotoAjuste.attr('src').substring(0, n2));
    leftCanvasResize = $container.offset().left;
    topCanvasResize = $container.offset().top;
    wCanvasResize = $container.width();
    hCanvasResize = $container.height();
  //  wCanvasResize = parseInt($container.css("width").replace("px", ""));
   // hCanvasResize = parseInt($container.css("height").replace("px", ""));
   // console.log('AjustarImagen - wCanvasResize: ' + wCanvasResize);
  //  console.log('AjustarImagen - hCanvasResize: ' + hCanvasResize);
   // console.log('AjustarImagen - $container.css("width"): ' + $container.css("width"));
    // console.log('AjustarImagen - $container.attr("height"): ' + $container.css("height"));
    sImgFotoAjuste.off('load');
});

sImgFotoAjuste.attr('src', ResizeSImgMaxDim(sImagen, DIM_PRES_INI));

    // Wrap the image with the container and add resize handles
sImgFotoAjuste.wrap('<div class="resize-container"></div>')
.before('<span class="resize-handle resize-handle-nw"></span>')
.before('<span class="resize-handle resize-handle-ne"></span>')
.after('<span class="resize-handle resize-handle-se"></span>')
.after('<span class="resize-handle resize-handle-sw"></span>');

$container = sImgFotoAjuste.parent('.resize-container');

$('#loading').hide();

// EVENTOS

$container.on('mousedown touchstart', startMoving);

$container.on('mousedown touchstart', startResize);

$('#bCortar').on('click', crop);

$('#bGirarDcha').on('click',function () {
rotacion++;
if (rotacion == 4) rotacion = 0;
RotarImagen();
});

$('#bGirarIzda').on('click',function () {
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
PonerImgB64(sImagen, guardar_canvas.toDataURL("image/png"), 110);
sBSubir.hide();
sBEliminar.show();
});

sBCancelarAjuste.on('click', function () {
Finalizar();
PonerFotoUsuario(sImagen, '', "H", 110);
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
   // console.log('resizeImage - width: ' + width);
  //  console.log('resizeImage - height: ' + height);

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
    $('#loading').show();
    sImgFotoAjuste.hide();
    sImgFotoAjuste.on('load', function () {
  
        var canvasRotacion = document.createElement('canvas');
        var ctx = canvasRotacion.getContext('2d');
        var wOri = imgOriginal.width;
        var hOri = imgOriginal.height;
       // console.log('wOri: ' + wOri);
       // console.log('hOri: ' + hOri);
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
            leftCanvasResize = leftCanvasResize + wCanvasResize / 2 - hCanvasResize / 2;
            topCanvasResize = topCanvasResize + hCanvasResize / 2 - wCanvasResize / 2;
            var wCanvasResizeAnt = wCanvasResize;
            wCanvasResize = hCanvasResize;
            hCanvasResize = wCanvasResizeAnt;
          //  console.log('leftCanvasResize: ' + leftCanvasResize);
           // console.log('topCanvasResize: ' + topCanvasResize);
            resizeImage(wCanvasResize, hCanvasResize);
            $container.offset({ 'left': leftCanvasResize, 'top': topCanvasResize });
            sImgFotoAjuste.off('load');
 sImgFotoAjuste.show();
 $('#loading').hide();
        });

        sImgFotoAjuste.attr('src', resize_canvas.toDataURL("image/png"));

    });
    sImgFotoAjuste.attr('src', imgOriginalRotada.src);
  
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
var crop_canvas,
    left = $('.overlay').offset().left - $container.offset().left,
    top = $('.overlay').offset().top - $container.offset().top,
    //  left = $('.overlay').offset().left - leftCanvasResize,
    //  top = $('.overlay').offset().top - topCanvasResize,
    width = $('.overlay').width(),
    height = $('.overlay').height();

var p = DIM_ORI / Math.max($container.width(), $container.height());
left = p * left;
top = p * top;
width = p * width;
height = p * height;

crop_canvas = document.createElement('canvas');
crop_canvas.width = width;
crop_canvas.height = height;
crop_canvas.getContext('2d').drawImage(imgOriginalRotada, left, top, width, height, 0, 0, width, height);
//Finalizar();
console.log('sImagen.height: ' + sImagen.height());
console.log('sImagen.width: ' + sImagen.width());

PonerImgB64(sImagen, crop_canvas.toDataURL("image/png"), 110);
//PonerImgB64(sImagen, crop_canvas.toDataURL("image/png"), Math.max(sImagen.height(),sImagen.width()));
Finalizar();
sBSubir.hide();
sBEliminar.show();
};
    
function Finalizar() {
$(document).off('mouseup mousemove touchmove touchend');
$('#component').off();
$container.off();
$('#bCortar').off();
$('#bGirarIzda').off();
$('#bGirarDcha').off();
sBGuardarAjuste.off();
$('#fotoIni').html('<img class="resize-image" src="#" />');
sMascaraMaster.hide();
sAjusteImg.hide();
    if(procSuccess)
procSuccess();
};
    
};
/*--------------------------------------------------------------------------------------------------*/
/*---------FIN AJUSTAR IMAGEN-----------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
