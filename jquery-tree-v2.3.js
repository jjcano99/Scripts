/*------------------------------------------------------------------------*/
/*---------------------- TREE --------------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* CONSTANTES ********************************************/
/***************************************************************************/
var GEN_ARBOL_MAX = 2; // Generación máxima que se representará en el árbol, desde 0

/*
var topLeyenda1 = '88px';
var topLeyenda2 = '100px';
var height1 = '130px';
var height2 = '145px';
*/

/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/


//SELECTORES CIRCULOS
var sDdlRol;
var sCirculoX;
var sResTusCirculos;
var sResRelacionados;
var sNingunaRelacionada;
var sTusCirculosPuntaUp;
var sTusCirculosPuntaDown;
var sRelacionadosPuntaUp;
var sRelacionadosPuntaDown;

//NOTIFICACIONES
var sNotTree ;
var sTdCabNotTreeTitulo ;
var sTextoNotTree;
var sBNaranjaNotTree ;
var sBGrisNotTree;

//ARBOL INICIAL
var sArbolIni;
var sFotoArbolIni100; //Titular
var sFotoArbolIni102;//Consorte
var sFotoArbolIni210; //Descendiente
var sFotoArbolIni000; //Ascendiente


var sLeyendaArbolIni100Propio;
var sLeyendaArbolIni100NuevoCirculo;


//AUTORES ARBOL
var sAutoresArbol;
var sTituloAutoresArbol;
var sTituloAutorArbol;
var sTableAutorArbol;
var sListaAutores;

//ARBOL

var sArbol;
var sRama;
var sTableRama;
var sSeccion;
var sTableSeccion;

var sDdlParentesco;

//SOLICITUDES

var sSolTree;
var sTituloCabSolRecibidas;
var sTituloCabSolEnviadas;
var sSolX;

var sConArbol;
var sTdNomApeEmisorConArbol;
var sTdFotoEmisorConArbol;
var sTdNomApeCirculoConArbol;
var sTdFotoCirculoConArbol;
var sBNaranjaConArbol;
var sBGrisConArbol;
var sRbFamiliar;
var sRbRelacionado;
var sCbPermisoEditor;
var sTextoConArbol;
var sTableTipoInvitado;
var sTituloConArbol;
var sTituloConArbolInvitado;

var sPetEditor;
var sFotoCirculoPetEditor;
var sTdNomApeCirculoPetEditor;
var sTextoPetEditor;
var sBNaranjaPetEditor;
var sBGrisPetEditor;

var sBarra;


//MENU SOLICITUDES
var sSolicitudes;
var sTableOpcionesSol;
var sTableCabSol;
var sTdSolRecibidas;
var sTdSolEnviadas;
var sTdSolPeticionEditor;



//MENU EDITAR
var sTableOpcionesEdit;
var sTableCabEdit;
var sTdEditDatos;
var sTdEditAniadirConsorte;
var sTdEditAniadirAscendiente;
var sTdEditAniadirDescendiente;
var sTdEditEliminar;

//NUEVO CIRCULO
var sNuevoCirculo;

//ELIMINAR CIRCULO
var sEliminarCirculo;

//FORMULARIO
var sForArbol;

//TITULO FORMULARIO
var sTituloCabForTreeModificarDatos;
var sTituloCabForTreeAniadirConsorte;
var sTituloCabForTreeAniadirAscendiente;
var sTituloCabForTreeAniadirDescendiente;
var sTituloCabForTreeNuevoCirculo;

//CONTROLES FORMULARIO
var sTbNombre;
var sTbApellidos;
var sRbVida;
var sRbAntepasado;
var sTbDiaNac;
var sDdlMesesNac;
var sTbAnioNac;
var sTbDiaObi;
var sDdlMesesObi;
var sTbAnioObi;
var sTbEmail;
var sRbMujer;
var sRbHombre;
var sTbCiudadNac;
var sTbCiudadResObi;
var sDdlRelacionH;
var sDdlRelacionM;

//CAJAS FORMULARIO
var sFechaObi;
var sEmail;
var sFoto;
var sFotoDrop;
var sFotoCargada;
var sImgFotoCargada;
var sInputFile;
var sRelacionH;
var sRelacionM;
var sRelacion;
var sCiudadRes;
var sCiudadObi;

//BOTONES
var sBSubirFoto;
var sBCambiarFoto;
var sBCancelar;
var sBGuardar;

/***************************************************************************/
/******************* VARIABLES GLOBALES ************************************/
/***************************************************************************/


var topLeyenda1;
var topLeyenda2;
var height1;
var height2;



var listNotGen;
var listNotSol;
var listNotTop;

var listMiembrosCirculo;
var listAutoresCirculo;

var listSolicitudesEnviadas;
var listSolicitudesRecibidas;

var listCirculosFamiliares;
var listCirculosRelacionados;
var listCirculosPeticionEditor;

var arrFotosArbolIni;
var arrSelForTree;
var arrIniForTree;
var arrSelectedFilesMiembro;
var arrOpcionesEdicion;
var arrSelEdicion;
var arrTitulos;
var arrTitulosForTreeIni;

var gIdMiembroSel;
var gMiembroSel;
var gMiembro0;
var gIdMiembro0;
var gMiembroTitular;
var gMiembroD;
var gPrimogenito;
var gPrimogenitoAsc;
var gBenjamin;
var gOpcionTree;
var gEstado;
var gEstadoAnt;
var gGeneracionSel;
var gGradoParentescoSel;
var gTipoMiembroSel;
var gMiembroAscDirectoSel;
var gMiembroAscConsorteSel;
var gRol;
var gCirculo;
var gCirculoSel;
var gCirculo8;
var gCirculoPropio;
var gCirculoPropio8;
var gNMiembrosCirculo;
var gGenArbolMax;
var gHRama;
var gIRama;
var gNotificaTopTree;

var gVentanaSel;

var gNSolRecibidas;
var gNSolEnviadas;
var gSolicitudSel;

var imgB64Miembro;
var gNombreImgMiembro;
var reader;

var lbInfoTree;
var lbRegTree;

var iSelectorCirculoPropio;
var iSelectorCirculoSeleccionado;
var iSelectorCirculoFamiliarSel;
var iSelectorCirculoRelacionadoSel;
var iSelectorCirculoFamiliar0;
var iSelectorCirculoRelacionado0;

var iMiembroSel;

var regNombre;
var regEmail;

var regexEmail;
var regexAnio;

var gDate;
var gAnioActual;
var gMesActual;
var gDiaActual;

var camposCorrectos;

var hayFotoAntes;
var hayFotoDespues;
var hayNuevaFoto;
var haySeleccion;
var esFamiliar;
var esRelacionado;
var esEditor;

var estaClickActivo;

var dispoAniadirAscendiente;
var dispoAniadirDescendiente;
var dispoAniadirConsorte;
var dispoEliminar;

var jqNot;

/*------------------------------------------------------------------------*/
/*----------------------INICIO 1 - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {
    //alert('Inicio - Antes de LeerSesion');
   // console.log('Inicio tree.js');
    //alert('Estoy en: ' + window.location.href);
    //alert('Estoy en el document: ' + document.URL);
    console.log('jqStatus: ' + jqStatus);
    console.log('Ancho de pantalla: ' + $(window).width());

    if ($(window).width() > 1300) GEN_ARBOL_MAX = 3;

    $('.cabMenuOpcion').css("background-color", "none");
    $('#celdaTree').css("background-color", "#eff8e0");
    $('#celdaTree a').css("color", "#f024bb");
    $('#celdaLife, #celdaAlbum').hover(
        function () {
            $(this).find('a').css('color', '#f024bb');
        },
        function () {
            $(this).find('a').css('color', 'white');
        });

    

    LeerSesion();
    //alert('Tras LeerSesion');
    AsignarSelectoresBase();
    InicializarVariables();
    //alert('Tras InicializarVariables');
    //LifeBook.LibreriaWebService.CargarNot("tree",function(result){jqNot=result;});
    CargarNotificacionesTree();
    arrIniForTree = InicializarSelectoresFormularioTree(arrSelForTree, '#999999', 'black');
    //gRol = ValorRol(sesRol);
   // alert('sesRol: ' + sesRol + ' - gRol: ' + gRol);
    ActivarEventosBase();
   // alert('Tras ActivarEventosBase');
    lbInfoTree = new LifeBook.InfoTree();
 //alert('Antes de WsCargarInfoTree');
    LifeBook.LibreriaWebService.WsCargarInfoTree(CargarInfoTreeCorrecto);

});
/*------------------------------------------------------------------------*/
/*------------------ INICIO 2 - CARGAR InfoTree Correcto ------------------*/
/*------------------------------------------------------------------------*/
function CargarInfoTreeCorrecto(result) {
    //alert('Desde CargarInfoTreeCorrecto');
    lbInfoTree = result;
    listCirculosFamiliares = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol > ROL_RELACIONADO;
    });
    //alert('Tras listCirculosFamiliares: ' + listCirculosFamiliares.Length);
    listCirculosRelacionados = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol == ROL_INVITADO || circulo.Rol == ROL_ANFITRION || circulo.Rol == ROL_RELACIONADO;
    });

    listCirculosPeticionEditor = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol == ROL_RELACIONADO || circulo.Rol == ROL_MIEMBRO;
    });


   // alert('Tras listCirculosRelacionados: ' + listCirculosRelacionados.Length);
    listMiembrosCirculo = lbInfoTree.CirculoTree.MiembrosCirculo;
    OrdenarListMiembros();
    listAutoresCirculo = lbInfoTree.CirculoTree.AutoresCirculo;
    gNMiembrosCirculo = listMiembrosCirculo.length;
    //Extrae el miembro titular de la lista de miembros del círculo
    gMiembroTitular = $.grep(listMiembrosCirculo, function (miembro) {
        return miembro.TipoMiembro == 0;
    })[0];
    if (gIdMiembroSel > 0) {
        gMiembroSel = Miembro(gIdMiembroSel);
    };
    CalcularMiembro0Inicial();
    gMiembroSel = gMiembroTitular;
    gIdMiembroSel = gMiembroSel.IdMiembro;
   // alert('1-gEstado: ' + gEstado);
    DeterminarEstado();
    //alert('Antes de GenerarcirculosSelector-gEstado: ' + gEstado);
    GenerarCirculosSelector();

    if (gEstado == 'solicitudes') LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
    else ActualizarTree();

};


function GenerarCirculosSelector() {
    InicializarSelectoresCirculo();
    //alert('Tras InicializarSelectoresCirculo');
    GenerarCirculosSel('TusCirculos');
    GenerarCirculosSel('Relacionados');
};

/*------------------------------------------------------------------------*/
/*--------- INICIO 3 y CAMBIOS DE ESTADO - ACTUALIZAR TREE --------------*/
/*------------------------------------------------------------------------*/
function ActualizarTree() {

    estaClickActivo = true;
    //alert('ActualizarTree - gEstado: ' + gEstado);
    if (gCirculo == gCirculoPropio || gRol < ROL_EDITOR) {
        sEliminarCirculo.hide();
    };

   // console.log('estadoAnt: ' + gEstadoAnt);
   // console.log('estado: ' + gEstado);
   // console.log('gCirculoPropio: ' + gCirculoPropio);
   // console.log('gCirculoSel: ' + gCirculoSel);
  //  console.log('gCirculo: ' + gCirculo);
 
    switch (gEstado) {
        case "edicionInicio":
            sArbol.html('');
            sArbol.hide();
            sConArbol.hide();
            sAutoresArbol.hide();
            sTableOpcionesSol.hide();
            sSolTree.hide();
            sNuevoCirculo.show();
            if (gCirculo == gCirculoPropio)
                gNotificaTopTree = "EdicionInicio";
            else
                gNotificaTopTree = "EdicionNuevoCirculo";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            gMiembro0 = listMiembrosCirculo[0];
            gMiembroSel = gMiembro0;
            PresentarArbolIni();
            break;

        case "formulario":
            sTableOpcionesEdit.slideUp(200);
            sNuevoCirculo.hide()
            PresentarFormulario();
            if (gEstadoAnt == 'edicionInicio' || gEstadoAnt=='formulario') {
                PresentarArbolIni();
            }
            else if (gEstadoAnt == 'edicion') {
            };
            break;

        case "edicion":
            sSolTree.hide();
            sArbolIni.hide();
            sAutoresArbol.hide();
            sNuevoCirculo.hide();
            sConArbol.hide();
            gNotificaTopTree = "Edicion";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            sArbol.css('padding-top', '170px');
            switch (gEstadoAnt) {
                case 'navegacion':
                    break;
                case 'formulario':
                    sTableOpcionesEdit.slideUp(200);
                    sForArbol.hide();
                    PresentarArbol();
                    break;
                case 'eliminar':
                    $('.opcion').css('color', '#0377aa');
                    sArbol.find('.fotoMiembro').css('border', '#82a542 solid 3px');
                    sTableOpcionesEdit.slideUp(200);
                    PresentarArbol();
                    break;
            };
            break;
         
        case "eliminar":
            sConArbol.hide();
            sNuevoCirculo.hide()
            gNotificaTopTree = "Eliminar";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            break;

        case "eliminarCirculo":
            // sNuevoCirculo.hide();
            sConArbol.hide();
            sAutoresArbol.hide();
            sTableOpcionesEdit.slideUp(200);
            $('.menu').css('color', '#0377aa');
            sEliminarCirculo.css('color', '#f024bb');
            gNotificaTopTree = "EliminarCirculo";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            Sustituir(sTextoNotTree, "_Nombre", gMiembroTitular.Nombre);
            Sustituir(sTextoNotTree, "_Apellidos", gMiembroTitular.Apellidos);
            break;

        case "navegacion":
            sAutoresArbol.show();
            sTableOpcionesEdit.hide();
            sNotTree.hide();
            sConArbol.hide();
            sSolTree.hide();
            sArbol.css('margin-top', '10px');
            sNuevoCirculo.show();
            switch (gEstadoAnt) {
                case 'forNuevoCirculo':
                    sArbolIni.hide();
                    break;
                case 'solicitudes':
                    sTableOpcionesSol.slideUp(200);
                    break;
            };
            PresentarArbol();
            break;

        case "forNuevoCirculo":

            sSolTree.hide();
            if (gEstadoAnt == 'edicionInicio') sTableOpcionesEdit.slideUp(200);
            PresentarFormulario();
            sAutoresArbol.hide();
            PresentarArbolIni();
            InsertarSelectorNuevoCirculo();
            //alert('iSelectorCirculoSeleccionado: ' + iSelectorCirculoSeleccionado);
            sResTusCirculos.find('.circuloX').eq(iSelectorCirculoSeleccionado).find('.logoX').css('background-image', 'url(/Images/support/circuloAzul.gif)');
            //PonerNuevoCirculoEnSubcabecera();
            $('.menu').css('color', '#0377aa');
            sNuevoCirculo.css('color', '#f024bb');
            break;

        case "solicitudes":
            sForArbol.hide();
            sConArbol.hide();
            sArbolIni.hide();
            sArbol.hide();
            sAutoresArbol.hide();
            sNotTree.hide();
            sTableOpcionesSol.slideDown(200);
            sTableOpcionesEdit.slideUp(200);
            $('.opcion').css('color', '#0377aa');
            switch (gOpcionTree) {
                case 'solicitudes':
                    if (gNSolRecibidas > 0) {
                        gOpcionTree = 'recibidas';
                        sTdSolRecibidas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else if (gNSolEnviadas > 0) {
                        gOpcionTree = 'enviadas';
                        sTdSolEnviadas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {
                        //sSolTree.find('.solicitud').remove();
                        sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                    };
                    break;

                case 'enviadas':
                    if (gNSolEnviadas > 0) {
                        gOpcionTree = 'enviadas';
                        sTdSolEnviadas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {
                        //sSolTree.find('.solicitud').remove();
                        sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                        gOpcionTree = 'solicitudes';
                    };
                    break;

                case 'recibidas':
                    if (gNSolRecibidas > 0) {
                        gOpcionTree = 'recibidas';
                        sTdSolRecibidas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {
                        //sSolTree.find('.solicitud').remove();
                        sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                        gOpcionTree = 'solicitudes';
                    };
                    break;
                case 'aceptarMiembro':

                    if (!gSolicitudSel) {

                        $.each(listSolicitudesRecibidas, function (i, solicitud) {
                            if(solicitud.IdSolicitud==sesIdSolicitud){
                                gSolicitudSel=solicitud;
                                return false;
                            };
                        });
                        //Actualizar Session a navegacion
                        LifeBook.LibreriaWebService.WsActualizarSesionTree('navegacion');
                        
                    };
                    //------------------------------------------------------------------
                    Sustituir(sTdNomApeEmisorConArbol, "_Nombre", gSolicitudSel.NombreA);
                    Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", gSolicitudSel.ApellidosA);
                    PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), gSolicitudSel.FotoA, gSolicitudSel.SexoA, 40);
                    Sustituir(sTdNomApeCirculoConArbol, "_Nombre", gSolicitudSel.NombreB);
                    Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", gSolicitudSel.ApellidosB);
                    PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), gSolicitudSel.FotoB, gSolicitudSel.SexoB, 40);
                    //sTextoConArbol.show();
                    //sTableTipoInvitado.hide();
                    haySeleccion = false;
                    sBNaranjaConArbol.click(function () {
                        console.log('sBNaranjaConArbol.click - haySeleccion: ' + haySeleccion);
                        if (haySeleccion) {
                            LifeBook.LibreriaWebService.WsAceptarSolicitud(gSolicitudSel.IdSolicitud, gMiembroSel.IdMiembro, 1,
                                function () {

                                    // window.location.href='/tree/solicitudesRecibidas';
                                    //window.location.href = '/Tree.aspx';
                                    location.reload();
                                });
                        }
                        else {
                            Notifica('Solicitudes_SeleccionaMiembro', listNotGen);
                        };
                    });






                    //-------------------------------------------------
                    sSolTree.hide();
                    sConArbol.show();
                    sTituloConArbol.show();
                    sTituloConArbolInvitado.hide();
                    sTextoConArbol.show();
                    sTableTipoInvitado.hide();
                    PresentarArbol();

                    break;

                case 'aceptarInvitado':

                    if (!gSolicitudSel) {

                        $.each(listSolicitudesRecibidas, function (i, solicitud) {
                            if (solicitud.IdSolicitud == sesIdSolicitud) {
                                gSolicitudSel = solicitud;
                                return false;
                            };
                        });
                        //Actualizar Session a navegacion
                        LifeBook.LibreriaWebService.WsActualizarSesionTree('navegacion');

                    };
                    
                           Sustituir(sTdNomApeEmisorConArbol, "_Nombre", gSolicitudSel.NombreA);
                           Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", gSolicitudSel.ApellidosA);
                           PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), gSolicitudSel.FotoA, gSolicitudSel.SexoA, 40);
                           Sustituir(sTdNomApeCirculoConArbol, "_Nombre", gSolicitudSel.NombreB);
                           Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", gSolicitudSel.ApellidosB);
                           PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), gSolicitudSel.FotoB, gSolicitudSel.SexoB, 40);
                           haySeleccion = false;
                           esFamiliar = false;
                           esRelacionado = false;
                           esEditor = false;
                           sRbFamiliar.prop('checked', false);
                           sRbRelacionado.prop('checked', false);
                           sCbPermisoEditor.prop('checked',false);
                           sBNaranjaConArbol.click(function () {
                               esFamiliar = sRbFamiliar.prop('checked');
                               esRelacionado = sRbRelacionado.prop('checked');
                               esEditor = sCbPermisoEditor.prop('checked');
                               if (!esFamiliar && !esRelacionado) Notifica('Solicitudes_SeleccionaTipoInvitado', listNotGen);
                               else if (esRelacionado) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(gSolicitudSel.IdSolicitud,null,'relacionado',esEditor,
                                   function () {
                                       //window.location.href = '/Tree.aspx';
                                       location.reload();
                                   }); 
                               else if (esFamiliar && !haySeleccion) Notifica('Solicitudes_SeleccionaMiembro', listNotGen);
                               else if (esFamiliar && haySeleccion) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(gSolicitudSel.IdSolicitud, gMiembroSel.IdMiembro, 'familiar', esEditor,
                                   function () {
                                       //window.location.href = '/Tree.aspx';
                                       location.reload();
                                   });
                             
                           });
                           



                    //---------------------------------------------
                    sSolTree.hide();
                    sConArbol.show();
                    sTituloConArbol.hide();
                    sTituloConArbolInvitado.show();

                    break;


                case 'peticionEditor1':
                    //alert('gOpcionTree: ' + gOpcionTree);
                    // haySeleccion = false;
                    sSolTree.hide();
                    sPetEditor.hide();
                    gNotificaTopTree = 'PeticionMiembroEditor';
                    NotificaTopTree("PeticionMiembroEditor", listNotTop);
                    break;

                case 'peticionEditor2':
                    //alert('gOpcionTree: peticionEditor2');
                    sSolTree.hide();
                    sNotTree.hide();
                    sPetEditor.show();
                    Sustituir(sTdNomApeCirculoPetEditor, "_Nombre", gMiembroTitular.Nombre);
                    Sustituir(sTdNomApeCirculoPetEditor, "_Apellidos", gMiembroTitular.Apellidos);
                    PonerFotoUsuario(sFotoCirculoPetEditor.find('img'), gMiembroTitular.Foto, gMiembroTitular.Sexo, 40);
                    Sustituir(sTextoPetEditor, "_NomCirculo", gMiembroTitular.Nombre);
                    Sustituir(sTextoPetEditor, "_ApeCirculo", gMiembroTitular.Apellidos);
                    break;

                case 'peticionEditor3':
                    sPetEditor.hide();
                    gNotificaTopTree = 'PeticionMiembroEditorEnviada';
                    NotificaTopTree(gNotificaTopTree, listNotTop);
                    break;
            };
            break;
    }
};
/*------------------------------------------------------------------------*/
/*-------------------------- FIN INICIO ----------------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* LEER VARIABLES SESION ************************************/
/***************************************************************************/
function LeerSesion() {

    sesRol = $('#tbCabSesRol').val();
    sesMiembroSeleccionado = $('#tbCabSesMiembroSeleccionado').val();
    if (sesMiembroSeleccionado) gIdMiembroSel = sesMiembroSeleccionado;
    else gIdMiembroSel = 0;
    sesPresentacionTree = $('#tbCabSesPresentacionTree').val();
    sesOpcionTree = $('#tbCabSesOpcionTree').val();
    sesCirculo = $('#tbCabSesCirculo').val();
    sesCirculoPropio = $('#tbCabSesCirculoPropio').val();
    sesIdSolicitud = $('#tbCabSesIdSolicitud').val();

 
};

/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES BASE *************************/
/***************************************************************************/
function AsignarSelectoresBase() {

    /* Círculos Selector */
    sDdlRol = $('#cphPagina_ddlRol');
    sDdlParentesco = $('#cphPagina_ddlParentesco');
    sCirculoX = $('#circuloX');
    sResTusCirculos = $('#resTusCirculos');
    sResRelacionados = $('#resRelacionados');
    sNingunaRelacionada = $('#ningunaRelacionada');
    sTusCirculosPuntaUp = $('#tusCirculosPuntaUp');
    sTusCirculosPuntaDown = $('#tusCirculosPuntaDown');
    sRelacionadosPuntaUp = $('#relacionadosPuntaUp');
    sRelacionadosPuntaDown = $('#relacionadosPuntaDown');

    /* Notificación Tree  */
    sNotTree=$('#cphPagina_notificacionTree_notTree');
    sTdCabNotTreeTitulo = $('#tdCabNotTreeTitulo');
    sTextoNotTree = $('#textoNotTree');
    sBNaranjaNotTree=$('#cphPagina_notificacionTree_bNaranjaNotTree');
    sBGrisNotTree=$('#cphPagina_notificacionTree_bGrisNotTree');

    //ARBOL INICIAL
    sArbolIni = $('#cphPagina_arbolIni');
    sFotoArbolIni100 = $('#fotoArbolIni100');
    sFotoArbolIni102 = $('#fotoArbolIni102');
    sFotoArbolIni210 = $('#fotoArbolIni210');
    sFotoArbolIni000 = $('#fotoArbolIni000');
    sLeyendaArbolIni100Propio = $('#leyendaArbolIni100Propio');
    sLeyendaArbolIni100NuevoCirculo = $('#leyendaArbolIni100NuevoCirculo');
    sTableOpcionesSol = $('#tableOpcionesSol');
    sTableOpcionesEdit = $('#tableOpcionesEdit');

    //AUTORES ARBOL
    sAutoresArbol = $('#autoresArbol');
    sTituloAutoresArbol = $('#tituloAutoresArbol');
    sTituloAutorArbol = $('#tituloAutorArbol');
    sTableAutorArbol = $('#tableAutorArbol');
    sListaAutores = $('#listaAutores');

    //ARBOL
    sArbol = $('#cphPagina_arbol');
    sTableSeccion = $('#tableSeccion');
    sSeccion = $('#seccion');
   
    //MENU EDITAR
    sTableCabEdit = $('#tableCabEdit');
    sTdEditDatos = $('#tdEditDatos');
    sTdEditAniadirConsorte = $('#tdEditAniadirConsorte');
    sTdEditAniadirAscendiente = $('#tdEditAniadirAscendiente');
    sTdEditAniadirDescendiente = $('#tdEditAniadirDescendiente');
    sTdEditEliminar = $('#tdEditEliminar');

    //MENU SOLICITUDES
    sSolicitudes = $('#solicitudes');
    sTableOpcionesSol=$('#tableOpcionesSol');
    sTableCabSol=$('#tableCabSol');
    sTdSolRecibidas=$('#tdSolRecibidas');
    sTdSolEnviadas=$('#tdSolEnviadas');
    sTdSolPeticionEditor=$('#tdSolPeticionEditor');

    //SOLICITUDES

    sSolTree=$('#cphPagina_solTree');
    sTituloCabSolRecibidas=$('#tituloCabSolRecibidas');
    sTituloCabSolEnviadas = $('#tituloCabSolEnviadas');
    sSolX=$('#solX');

    sConArbol=$('#cphPagina_conArbol');
    sTdNomApeEmisorConArbol = $('#tdNomApeEmisorConArbol');
    sTdFotoEmisorConArbol = $('#tdFotoEmisorConArbol');
    sTdNomApeCirculoConArbol = $('#tdNomApeCirculoConArbol');
    sTdFotoCirculoConArbol = $('#fotoCirculoConArbol');
    sBNaranjaConArbol = $('#bNaranjaConArbol');
    sBGrisConArbol = $('#bGrisConArbol');
    sRbFamiliar = $('#cphPagina_rbFamiliar');
    sRbRelacionado = $('#cphPagina_rbRelacionado');
    sCbPermisoEditor = $('#cphPagina_cbPermisoEditor');
    sTextoConArbol = $('#textoConArbol');
    sTableTipoInvitado = $('#tableTipoInvitado');
    sTituloConArbol = $('#tituloConArbol');
    sTituloConArbolInvitado = $('#tituloConArbolInvitado');


    sPetEditor = $('#cphPagina_petEditor');
    sFotoCirculoPetEditor = $('#fotoCirculoPetEditor');
    sTdNomApeCirculoPetEditor = $('#tdNomApeCirculoPetEditor');
    sTextoPetEditor = $('#textoPetEditor');
    sBNaranjaPetEditor = $('#bNaranjaPetEditor');
    sBGrisPetEditor = $('#bGrisPetEditor');

    sBarra=$('#barraSolX');


    //NUEVO CIRCULO
    sNuevoCirculo = $('#nuevoCirculo');
    //ELIMINAR CIRCULO
    sEliminarCirculo = $('#eliminarCirculo');

    //FORMULARIO
    sForArbol = $('#cphPagina_forTree_forArbol');

    //TITULO FORMULARIO
    sTituloCabForTreeModificarDatos = $('#tituloCabForTreeModificarDatos');
    sTituloCabForTreeAniadirConsorte = $('#tituloCabForTreeAniadirConsorte');
    sTituloCabForTreeAniadirAscendiente = $('#tituloCabForTreeAniadirAscendiente');
    sTituloCabForTreeAniadirDescendiente = $('#tituloCabForTreeAniadirDescendiente');
    sTituloCabForTreeNuevoCirculo = $('#tituloCabForTreeNuevoCirculo');

    //CONTROLES FORMULARIO
    sTbNombre = $('#cphPagina_forTree_tbNombre');
    sTbApellidos = $('#cphPagina_forTree_tbApellidos');
    sRbVida = $('#cphPagina_forTree_rbVida');
    sRbAntepasado = $('#cphPagina_forTree_rbAntepasado');
    sTbDiaNac = $('#cphPagina_forTree_tbDiaNac');
    sDdlMesesNac = $('#cphPagina_forTree_ddlMesesNac');
    sTbAnioNac = $('#cphPagina_forTree_tbAnioNac');
    sTbDiaObi = $('#cphPagina_forTree_tbDiaObi');
    sDdlMesesObi = $('#cphPagina_forTree_ddlMesesObi');
    sTbAnioObi = $('#cphPagina_forTree_tbAnioObi');
    sTbEmail = $('#cphPagina_forTree_tbEmail');
    sRbMujer = $('#cphPagina_forTree_rbMujer');
    sRbHombre = $('#cphPagina_forTree_rbHombre');
    sTbCiudadNac = $('#cphPagina_forTree_tbCiudadNac');
    sTbCiudadResObi = $('#cphPagina_forTree_tbCiudadResObi');
    sDdlRelacionH = $('#cphPagina_forTree_ddlRelacionH');
    sDdlRelacionM = $('#cphPagina_forTree_ddlRelacionM');

    //CAJAS FORMULARIO
    sFechaObi = $('#fechaObi');
    sEmail = $('#email');
    sFoto = $('#foto');
    sFotoDrop = $('#fotoDrop');
    fotoDrop = document.getElementById("fotoDrop");
    sFotoCargada = $('#fotoCargada');
    sImgFotoCargada = $('#imgFotoCargada');
    sInputFile = $('#inputFile');
    sRelacionH = $('#relacionH');
    sRelacionM = $('#relacionM');
    sRelacion = $('#relacion');
    sCiudadRes = $('#ciudadRes');
    sCiudadObi = $('#ciudadObi');

    //BOTONES FORMULARIO
    sBSubirFoto = $('#bSubirFoto');
    sBCancelar = $('#bCancelar');
    sBGuardar = $('#bGuardar');
    sBCambiarFoto = $('#bCambiarFoto');

};

/***************************************************************************/
/******************* INICIALIZAR VARIABLES      *************************/
/***************************************************************************/
function InicializarVariables() {
    topLeyenda1 = '94px';
    topLeyenda2 = '140px';
    height1 = '110px'; 
    height2 = '160px';

    gVentanaSel = 2;
    iSelectorCirculoFamiliar0 = 0;
    iSelectorCirculoRelacionado0 = 0;

    arrSelForTree = [sTbNombre, sTbApellidos, sTbDiaNac, sDdlMesesNac, sTbAnioNac, sTbEmail, sTbDiaObi, sDdlMesesObi, sTbAnioObi, sTbCiudadNac, sTbCiudadResObi, sDdlRelacionM, sDdlRelacionH];
    arrSelEdicion = [sTdEditDatos, sTdEditAniadirConsorte, sTdEditAniadirDescendiente, sTdEditAniadirAscendiente /*,sTdEditEliminar*/];
    arrFotosArbolIni = [sFotoArbolIni100, sFotoArbolIni102, sFotoArbolIni210, sFotoArbolIni000];
    arrOpcionesEdicion = ["modificarDatos", "aniadirConsorte", "aniadirDescendiente", "aniadirAscendiente" /*,"eliminar */];
    arrTitulosForTreeIni = [sTituloCabForTreeModificarDatos.html(),sTituloCabForTreeAniadirConsorte.html(),sTituloCabForTreeAniadirDescendiente.html(),sTituloCabForTreeAniadirAscendiente.html()];
    arrIniForTree = new Array();
    regexEmail = /\S+@(\S+\.)+[A-z]{2,4}/;
    regexAnio = /(\d{0}|\d{4})/;
    gDate = new Date();
    //gAnioActual = (new Date).getFullYear();
    gAnioActual = gDate.getFullYear();
    gMesActual = gDate.getMonth()+1;
    gDiaActual = gDate.getDate();

    gCirculo = parseInt(sesCirculo);
    gCirculoPropio = parseInt(sesCirculoPropio);
    gRol = ValorRol(sesRol);
    gCirculo8 = strNumber(sesCirculo, 8);
    gCirculoPropio8 = strNumber(gCirculoPropio, 8);
    gIdMiembroSel = sesMiembroSeleccionado;
    gEstado = sesPresentacionTree;
    gEstadoAnt = "";
    gOpcionTree = sesOpcionTree;
    //gRol = sesRol;
    gGeneracionSel = 0;
    gGradoParentescoSel = 0;
    gMiembro0 = null;
    gIdMiembro0 = 0;
    gNSolEnviadas = 0;
    gNSolRecibidas = 0;
    haySeleccion = false;

    estaClickActivo = true;

    console.log('sesRol: ' + sesRol);
    console.log('gRol: ' + gRol);
};

/***************************************************************************/
/******************* CARGAR NOTIFICACIONES TREE*********** *********************/
/***************************************************************************/
function CargarNotificacionesTree() {
    LifeBook.LibreriaWebService.WsCargarNotificacionesTree(CargarNotificacionesTreeCorrecto);
};
function CargarNotificacionesTreeCorrecto(result) { 
    listNotGen = result.NotGen;
    listNotTop = result.NotTop;
    listNotSol = result.NotSol;

    LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
        listNotGen = $.merge(listNotGen, resultMaster);
        if (jqStatus == 'registroInvitado') {
            Notifica("ConfirmarRegistro", listNotGen);
            LifeBook.LibreriaWebService.WsActualizarStatus("tree");
            jqStatus = 'tree';
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
/******************* FUNCION DeterminarEstado *************************/
/***************************************************************************/
function DeterminarEstado() {
 //alert('DeterminarEstado: gRol: ' + gRol + ' gEstado: ' + gEstado);
    if (gEstado != "solicitudes") {
        if (gRol >= ROL_EDITOR && gNMiembrosCirculo < 2 ) gEstado = "edicionInicio";
        else gEstado = "navegacion";
       
        };
};

/***************************************************************************/
/******************* FUNCION NotificaTopTree  *************************/
/***************************************************************************/
function NotificaTopTree(ref, listNotTop) {
    //alert('NotificaTopTree: ' + ref);
    $.each(listNotTop, function (i, notTop) {
        if (notTop.NotTopTreeId == ref) {
            var nT = listNotTop[i];
            PresentaNotTopTree(nT.Titulo, nT.Texto, nT.BotonNaranja, nT.BotonGris);
            return;
        };
    });

    function PresentaNotTopTree(titulo, texto, bNaranja, bGris) {
        sNotTree.hide();
        sBNaranjaNotTree.show();
        sBGrisNotTree.show();
        sTdCabNotTreeTitulo.html(titulo);
        sTextoNotTree.html(texto);
        if (bGris) {
            sBGrisNotTree.html(bGris);
        }
        else {
            sBGrisNotTree.hide();
        }
        if (bNaranja) {
            sBNaranjaNotTree.html(bNaranja);
        }
        else {
            sBNaranjaNotTree.hide();
        }
        sNotTree.fadeIn(400);
    };
};

/***************************************************************************/
/******************* FUNCION InsertarSelectorNuevoCirculo*************************/
/***************************************************************************/
function InsertarSelectorNuevoCirculo() {
    sCirculoX.show();
    var sCirculoClon = sCirculoX.clone();
    sCirculoClon.find('.leyendaNuevoCirculo').show();
    sCirculoClon.find('.leyendaCirculo').hide();
    sCirculoClon.find('.leyendaCirculoPropio').hide();
    sCirculoClon.find('.logoX').css('background-image', 'url(/Images/support/circuloRojo.gif)');
    sCirculoClon.find('.fotoX img').css('width','60px');
    sResTusCirculos.append(sCirculoClon);
    sCirculoX.hide();

};

/***************************************************************************/
/******************* FUNCION PresentarArbolIni*************************/
/***************************************************************************/
function PresentarArbolIni() {
    //alert('PresentarArbolIni - gEstado: '+ gEstado);
    sArbolIni.show();
    sArbol.hide();
    gIdMiembroSel = 0;
    switch (gEstado) {
        case 'formulario':
            MostrarLeyendaPropia();
            break;
        case 'forNuevoCirculo':
            MostrarLeyendaNuevoCirculo();
            SeleccionarMiembro0();
            sArbolIni.find('.fotoMiembroArbolIni img').css('width', '63px');
            
            break;
        case 'edicionInicio':
            MostrarLeyendaPropia();  
            MostrarOpcionesEdicion();
            sTdEditDatos.hide();
            sTdEditEliminar.hide();
            DeseleccionarMiembros();
            switch (gEstadoAnt) {
                case 'eliminar':
                    CumplimentarDatos();
                    break;
                case 'forNuevoCirculo':
                    CumplimentarDatos();
                    break;
                default:
                    CumplimentarDatos();
                    break;
            };
            break;
    };
  
    function MostrarLeyendaPropia() {
        sLeyendaArbolIni100NuevoCirculo.hide();
        sLeyendaArbolIni100Propio.show();
    };
    function MostrarLeyendaNuevoCirculo() {
        sLeyendaArbolIni100NuevoCirculo.show();
        sLeyendaArbolIni100Propio.hide();
    };
    function SeleccionarMiembro0() {
       // alert('SeleccionarMiembro0');
        sFotoArbolIni100.css('border', '4px solid #f024bb');
        //alert('src1: ' + sFotoArbolIni100.find('img').attr('src'));
        //sFotoArbolIni100.find('img').hide();
        // sFotoArbolIni100.find('img').attr('src', '/Images/support/siluetaHombre.gif');
        //sFotoArbolIni100.find('img').attr('src', '');
        sFotoArbolIni100.find('img').remove();
        sFotoArbolIni100.html('<img src="/Images/support/siluetaHombre.gif" />');
       // sFotoArbolIni100.find('img').attr('src', '/Images/support/siluetaHombre.gif');
       // $('#fotoArbolIni100 img').attr("src", "/Images/support/siluetaHombre.gif");
        //sFotoArbolIni100.find('img').show();
        //alert('src2: ' + sFotoArbolIni100.find('img').attr('src'));
       // PonerFotoUsuario(sFotoArbolIni100, '', "H", 63);
    };
    function SeleccionarMiembroArbolIni(){
        var indice = $.inArray(gOpcionTree, arrOpcionesEdicion);
        if (indice > -1) arrFotosArbolIni[indice].css('border', '4px solid #f024bb');
    };

    function SeleccionarOpcionDatosYFoto() {
        sTdEditDatos.css('color', '#f024bb');
    };
    function DeseleccionarMiembros() {
        $.each(arrFotosArbolIni, function (iFoto, foto) {
            foto.css('border', '3px solid #82a542');
        });
    };
   
    function CumplimentarDatos() {
        var crono0;
        var anioNac0, anioObi0;
        var mesNac0;
        var diaNac0;
        var edad0;
        var ciudad0 = '';
        gMiembro0 = listMiembrosCirculo[0];
        PonerFotoUsuario(sFotoArbolIni100, gMiembro0.Foto, gMiembro0.Sexo, 63);
        sFotoArbolIni000.find('img').css('width', '65px');
        sFotoArbolIni102.find('img').css('width', '65px');
        sFotoArbolIni210.find('img').css('width', '65px');
        anioNac0 = parseInt(gMiembro0.FechaNac.slice(0, 4));
        mesNac0 = parseInt(gMiembro0.FechaNac.slice(4, 6));
        diaNac0 = parseInt(gMiembro0.FechaNac.slice(6, 8));
        if (gMiembro0.FechaObi) {
            anioObi0 = gMiembro0.FechaObi.slice(0, 4);
            ciudad0 = gMiembro0.CiudadNac;
            if (anioObi0 != '9999') {
                crono0 = '( ' + anioNac0 + ' - ' + anioObi0 + ' )';
            }
            else {
                crono0 = '';
            };
        }
        else {
            ciudad0 = gMiembro0.CiudadRes;
         //   edad0 = gAnioActual - anioNac0 - ((gMesActual * 31 + gDiaActual > mesNac0 * 31 + diaNac0) ? 0 : 1);
            edad0 = Edad(anioNac0, mesNac0, diaNac0);
            if (edad0) crono0 = '( ' + edad0 + ' )';
            else crono0 = "";
        };
        var nomApe0 = gMiembro0.Nombre + '<br/>';
        if (gMiembro0.Apellidos) nomApe0 = nomApe0 + gMiembro0.Apellidos + '<br/>';
        sLeyendaArbolIni100Propio.find('#nomApe100').html(nomApe0);
        var datosMiembro0 = sLeyendaArbolIni100Propio.html();
        datosMiembro0 = datosMiembro0.replace('_cronoTitular', crono0)
                                            .replace('_ciudadTitular', ciudad0);
        sLeyendaArbolIni100Propio.html(datosMiembro0);
    };
};

/***************************************************************************/
/******************* FUNCION ActivarEventosBase *************************/
/***************************************************************************/
function ActivarEventosBase() {
    ActivarEventosSolicitudes();
    ActivarEventosEditar();
    ActivarEventosFormulario();
    ActivarEventoNuevoCirculo();
    ActivarEventoEliminarCirculo();
    ActivarEventosFlechasSelectores();


    function ActivarEventosFlechasSelectores() {

        sTusCirculosPuntaUp.click(function () {
            iSelectorCirculoFamiliar0--;
            GenerarCirculosSel('TusCirculos');
        });
        sTusCirculosPuntaDown.click(function () {
            iSelectorCirculoFamiliar0++;
            GenerarCirculosSel('TusCirculos');
        });
        sRelacionadosPuntaUp.click(function () {
            iSelectorCirculoRelacionado0--;
            GenerarCirculosSel('Relacionados');
        });
        sRelacionadosPuntaDown.click(function () {
            console.log('click en PuntaDown');
            console.log('iSelectorCirculoRelacionado0 : ' + iSelectorCirculoRelacionado0);
            iSelectorCirculoRelacionado0++;
            GenerarCirculosSel('Relacionados');
        });

    };

    function ActivarEventosSolicitudes() {

        sTableCabSol.click(function () {
           // alert('click en SOLICITUDES - gEstado: '+gEstado + ' gEstadoAnt: '+gEstadoAnt);

               if (gEstado == 'solicitudes') {
                   if (gRol >= ROL_EDITOR && gNMiembrosCirculo < 2) gEstado = "edicionInicio";
                   else gEstado = "navegacion";
                //gEstado = gEstadoAnt;
               gEstadoAnt = 'solicitudes';
                sTableOpcionesSol.slideUp(200);
                ActualizarTree();
            }
            else {
                gEstadoAnt = gEstado;
                gEstado = 'solicitudes';
                gOpcionTree = 'solicitudes';
                sTableOpcionesSol.slideDown(200);
                   //Petición Editor sólo desde el Circulo Propio
               // if (gCirculo == gCirculoPropio) sTdSolPeticionEditor.show();
               // else sTdSolPeticionEditor.hide();
               // alert('Antes del WsCargarSolicitudesUsuario');
                LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
                if (listCirculosPeticionEditor.length > 0) sTdSolPeticionEditor.show();
                else sTdSolPeticionEditor.hide();

            };


        });

        sTdSolEnviadas.click(function () {
            if (gNSolEnviadas > 0) {
                //gEstado = "solicitudes";
                gOpcionTree = "enviadas";
               // $('.opcion').css('color', '#0377aa');
               // sTdSolEnviadas.css('color', '#f024bb');
                ActualizarTree();
            };
        });
        sTdSolRecibidas.click(function () {
            if (gNSolRecibidas > 0) {
                //gEstado = "solicitudes";
                gOpcionTree = "recibidas";
              //  $('.opcion').css('color', '#0377aa');
               // sTdSolRecibidas.css('color', '#f024bb');
                ActualizarTree();
            };
        });
        sTdSolPeticionEditor.click(function () {
            //gEstado = "solicitudes";
            gOpcionTree = "peticionEditor1";
            $('.opcion').css('color', '#0377aa');
            $(this).css('color', '#f024bb');
            ActualizarTree();
        });

        sBNaranjaPetEditor.click(function () {
           // alert('sBNaranjaPetEditor.click');
            LifeBook.LibreriaWebService.WsRegistrarPeticion(null, gMiembroTitular.IdCirculo, 3, 
                function (result) {
                    gOpcionTree = 'peticionEditor3';
                    ActualizarTree();
                });
        });
        sBGrisPetEditor.click(function () {
            
              LifeBook.LibreriaWebService.WsEntrarEnCirculo(gCirculoPropio, function (result) {
            if (result > 0) {
                gRol = result;
                //window.location.href = '/Tree.aspx';
                location.reload();
            };
        });


        });

        sRbFamiliar.mousedown(function () {
            sTextoConArbol.show();
            PresentarArbol();
        });
        sRbRelacionado.mousedown(function () {
            sTextoConArbol.hide();
            sArbol.hide();
        });


    };

    function ActivarEventosEditar() {

        $.each(arrOpcionesEdicion, function (iOpcion, opcion) {

            arrSelEdicion[iOpcion].click(function () {
                SeleccionarOpcionEdicion(iOpcion, opcion);
                if (gEstadoAnt == 'edicionInicio') SeleccionarFotoArbolIni(iOpcion, opcion);
                ActualizarTree();
            });

            arrFotosArbolIni[iOpcion].click(function () {
                if (gEstado == 'edicionInicio') {
                    SeleccionarOpcionEdicion(iOpcion, opcion);
                    SeleccionarFotoArbolIni(iOpcion, opcion);
                    ActualizarTree();
                };
            });
        });

        function SeleccionarOpcionEdicion(iOp, op) {
            gOpcionTree = op;
            gEstadoAnt = gEstado;
            gEstado = 'formulario';
            $('.opcion').css('color', '#0377aa');
            arrSelEdicion[iOp].css('color', '#f024bb');
        };

        function SeleccionarFotoArbolIni(iOp, op) {
            $.each(arrFotosArbolIni, function (iFoto, foto) {
                foto.css('border', '3px solid #82a542');
            });
            arrFotosArbolIni[iOp].css('border', '3px solid #f024bb');
        };

        sTdEditEliminar.click(function () {
            gOpcionTree = 'eliminar';
            gEstadoAnt = gEstado;
            gEstado = 'eliminar';
            $('.opcion').css('color', '#0377aa');
            $(this).css('color', '#f024bb');
            ActualizarTree();
        });

        sTableCabEdit.click(function () {
            switch (gEstado) {
                case 'edicion':
                    gEstado = "navegacion";
                    gEstadoAnt = "edicion";
                    break;

                case 'navegacion':
                    gEstado = "edicion";
                    gEstadoAnt = "navegacion";
                    break;

                case 'solicitudes':
                    if (gRol >= ROL_EDITOR && gNMiembrosCirculo < 2) gEstado = "edicionInicio";
                    else gEstado = "navegacion";
                    gEstadoAnt = "solicitudes";
                    break;
            };
            ActualizarTree();
        });

        //Evento Botón Naranja Notificaciones TopTree
        sBNaranjaNotTree.click(function () {
            console.log('sBNaranjaNotTree.click - gNotificaTopTree: ' + gNotificaTopTree);
            console.log('sBNaranjaNotTree.click - gEstado: ' + gEstado);
            switch (gNotificaTopTree) {
                case "Eliminar":
                    gMiembroSel = Miembro(gIdMiembroSel);
                    lbRegTree = new LifeBook.RegTree();
                    lbRegTree.IdCirculo = gCirculo;
                    lbRegTree.IdMiembro = gIdMiembroSel;
                    lbRegTree.IdPersona = gMiembroSel.IdPersona;
                    lbRegTree.TipoMiembro = gMiembroSel.TipoMiembro;
                    if (gMiembroSel.Foto) lbRegTree.Foto = gMiembroSel.Foto;
                    switch (gMiembroSel.TipoMiembro) {
                        case 1: //Directo
                        case 4: //Pariente
                            lbRegTree.IdMiembroAscDirecto = gMiembroSel.IdMiembroAscDirecto;
                            lbRegTree.IdMiembroAscConsorte = gMiembroSel.IdMiembroAscConsorte;
                            break;
                        case 2: //Consorte
                            lbRegTree.IdMiembroDirecto = gMiembroSel.IdMiembroDirecto;
                            break;
                        case 3: //Ascendiente Directo
                            lbRegTree.IdMiembroDirecto = gMiembroSel.IdMiembroDirecto;
                            if (Miembro(gMiembroSel.IdMiembroDirecto).IdPersona) lbRegTree.OpcionTree = "consorteNoAnonimo";
                            else lbRegTree.OpcionTree = "consorteAnonimo";
                            break;
                    };
                    //Eliminar Miembro incluyendo foto
                    LifeBook.LibreriaWebService.WsEliminarMiembro(lbRegTree, EliminarMiembroCorrecto);
                    break;

                case "Edicion":
                    gEstado = "navegacion";
                    gEstadoAnt = "edicion";
                    sNotTree.hide();
                    sAutoresArbol.show();
                    sTableOpcionesEdit.hide();
                    ActualizarTree();
                    break;

                case "EliminarCirculo":
                    //  alert('gCirculo: ' + gCirculo +' gMiembroTitular.IdCirculo: '+gMiembroTitular.IdCirculo) ;
                    LifeBook.LibreriaWebService.WsEliminarCirculo(gCirculo, EliminarCirculoCorrecto);

                    break;

                case "NoHaySolicitudes":
                    gEstado = "navegacion";
                    gEstadoAnt = "solicitudes";
                    sNotTree.hide();
                    //sAutoresArbol.show();
                    sTableOpcionesSol.slideUp(200);
                    ActualizarTree();
                    break;

                case "PeticionMiembroEditorEnviada":
                    // VOLVER
                    LifeBook.LibreriaWebService.WsEntrarEnCirculo(gCirculoPropio, function (result) {
                        if (result > 0) {
                            gRol = result;
                            //En el WsEntrarEnCirculo poner Session["presentacionTree"] = "solicitudes"; Session["opcionTree"] = "enviadas";
                            // window.location.href = '/Tree.aspx';

                            LifeBook.LibreriaWebService.WsActualizarSesionTree('solicitudesEnviadas',
                                function () {
                                    //window.location.href = '/Tree.aspx';
                                    location.reload();
                                });

                           // window.location.href = '/tree/solicitudesEnviadas';
                        };
                    });

                    break;
/*
                case "PeticionMiembroEditor":
                    if (haySeleccion) {
                        gOpcionTree = 'peticionEditor2';
                        sNotTree.hide();
                        ActualizarTree();
                    }
                    else
                        {
                        //Notifica 'Selecciona un círculo';

                        };

                    break;
                */    

            }; //Fin switch


        });

        sBGrisNotTree.click(function () {
            console.log('sBGrisNotTree.click - gNotificaTopTree: ' + gNotificaTopTree);
            console.log('sBGrisNotTree.click - gEstado: ' + gEstado);

            switch(gEstado){
                case 'eliminarCirculo':
                  
                    $('.menu').css('color', '#0377aa');
                    gEstado=gEstadoAnt;
                    gEstadoAnt='eliminarCirculo';
                    ActualizarTree();
                    break;
            };

        });
    };
    //Fin function ActivarEventosEditar


    function ActivarEventosFormulario() {
        var patron = "Images/support/";

        /********************* EVENTOS EN VIDA / ANTEPASADO *********************************************/
        sRbVida.mousedown(function () {
            sEmail.show();
            sFechaObi.hide();
            sCiudadRes.show();
            sCiudadObi.hide();
        });
        sRbAntepasado.mousedown(function () {
            sEmail.hide();
            sFechaObi.show();
            sCiudadRes.hide();
            sCiudadObi.show();
        });

        /********************* EVENTOS MUJER / HOMBRE *********************************************/
        sRbMujer.mousedown(function () {  
            sRelacionM.show();
            sRelacionH.hide();
            if (sImgFotoCargada.attr('src').indexOf(patron)>-1) sImgFotoCargada.attr('src', "/Images/support/siluetaM.jpg");
        });
        sRbHombre.mousedown(function(){
            sRelacionM.hide();
            sRelacionH.show();
           // alert(sImgFotoCargada.attr('src').indexOf(patron));
            if (sImgFotoCargada.attr('src').indexOf(patron)>-1) sImgFotoCargada.attr('src', "/Images/support/siluetaH.jpg");
        });

        /********************* EVENTO AÑADIR FOTO MIEMBRO *********************************************/
        sBSubirFoto.click(function () {
            document.getElementById('inputFile').value="";
            document.getElementById('inputFile').click();
        });
        sBCambiarFoto.click(function () {
            sImgFotoCargada.attr('src', '/Images/support/silueta' + ((sRbHombre.prop('checked')) ? 'H' : 'M') + '.jpg');
            sImgFotoCargada.attr('width', '110px');
           gNombreImgMiembro = '';
           hayFotoDespues = false;
           hayNuevaFoto = false;
            sBSubirFoto.show();
            sBCambiarFoto.hide();   
        });
        sInputFile.change(function () { 
            arrSelectedFilesMiembro = this.files;

            CargarFicheroImg(arrSelectedFilesMiembro[0], sFotoDrop, function () {
                CargarImagenMiembro();
                reader.readAsDataURL(arrSelectedFilesMiembro[0]);

            });


         //   CargarImagenMiembro();
          //  reader.readAsDataURL(arrSelectedFilesMiembro[0]);




        });

        /************* EVENTOS ONDRAGOVER, ONDRAGLEAVE, y ONDROP  ************************/
        fotoDrop.ondragover = function (e) {
            e.stopPropagation();
            sFotoDrop.css('border', 'dashed 3px #f024bb');
            return false;
        };
        fotoDrop.ondragleave = function (e) {
            e.stopPropagation();
            sFotoDrop.css('border', 'dashed 3px #7596a5');
            return false;
        };
        fotoDrop.ondrop = function (e) {
            e.preventDefault();
            e.stopPropagation();
            arrSelectedFilesMiembro = e.dataTransfer.files;

            CargarFicheroImg(arrSelectedFilesMiembro[0], sFotoDrop, function () {
                CargarImagenMiembro();
                reader.readAsDataURL(arrSelectedFilesMiembro[0]);

            });

           

         //   CargarImagenMiembro();
         //   reader.readAsDataURL(arrSelectedFilesMiembro[0]);



        };

        /************* EVENTO GUARDAR  ***************************************************/
        sBGuardar.click(function () {
           // alert('click sBGuardar');
            var anioNac;
            var mesNac;
            var diaNac;
            var nDiaNac;
            var anioObi;
            var mesObi;
            var diaObi;
            var nDiaObi;

            if (estaClickActivo) {
                camposCorrectos = true;
                LeerFormulario();
                //alert('camposCorrectos: ' + camposCorrectos);
                if (camposCorrectos) {
                    estaClickActivo = false;
                    lbRegTree = new LifeBook.RegTree();
                    //   SubirFotoMiembro();
                    CumplimentarRegTree();
                    //alert('gEstado: ' + gEstado);
                    SubirFotoMiembro(
                        function () {
                            //alert('Retorno de SubirFotoMiembro - gEstado: ' + gEstado);
                            if (gEstado == 'formulario') {
                                //alert('Antes de WsGuardarFormularioTree');
                                LifeBook.LibreriaWebService.WsGuardarFormularioTree(lbRegTree, GuardarFormularioTreeCorrecto);
                            }
                            else {
                                LifeBook.LibreriaWebService.WsGuardarFormularioNuevoCirculo(lbRegTree, GuardarFormularioNuevoCirculoCorrecto);
                                //alert('Tras WsGuardarFormularioNuevoCirculo');
                            };
                        });

                };//Fin If CamposCorrectos
            };//Fin if estaClickActivo
            function LeerFormulario() {
                diaNac = sTbDiaNac.val();
                if (diaNac == ValorInicial(sTbDiaNac, arrSelForTree, arrIniForTree)) diaNac = '';
                mesNac = (sDdlMesesNac.get(0).selectedIndex).toString();
                anioNac = sTbAnioNac.val();
                if (anioNac == ValorInicial(sTbAnioNac, arrSelForTree, arrIniForTree)) anioNac = '';
                nDiaNac = (diaNac != '') ? parseInt(diaNac) : 0;
                anioNac = (anioNac != '') ? anioNac : '0000';
                if (sRbAntepasado.prop('checked')) {
                    diaObi = sTbDiaObi.val();
                    if (diaObi == ValorInicial(sTbDiaObi, arrSelForTree, arrIniForTree)) diaObi = '';
                    mesObi = (sDdlMesesObi.get(0).selectedIndex).toString();
                    anioObi = sTbAnioObi.val();
                    if (anioObi == ValorInicial(sTbAnioObi, arrSelForTree, arrIniForTree)) anioObi = '';
                    nDiaObi = (diaObi != '') ? parseInt(diaObi) : 0;
                    if (sRbAntepasado.prop('checked') && anioObi == '') anioObi = '9999';
                    anioObi = (anioObi != '') ? anioObi : '0000';
                };
                regNombre = sTbNombre.val();
                regEmail = sTbEmail.val();
                if (!regNombre) {
                    camposCorrectos = false;
                    Notifica("FormularioTree_CamposErroneos", listNotGen);
                }
                else if ((gOpcionTree == 'aniadirConsorte' || gOpcionTree=='aniadirAscendiente' ) && ((sRbHombre.prop('checked') && sDdlRelacionH.get(0).selectedIndex == 0) ||
                           (sRbMujer.prop('checked') && sDdlRelacionM.get(0).selectedIndex == 0))) {
                    camposCorrectos = false;
                    Notifica("FormularioTree_RelacionNoCumplimentada", listNotGen);
                }
                else if (!(nDiaNac >= 0 && nDiaNac < 32) || !anioNac.match(regexAnio) || anioNac > gAnioActual) {
                    camposCorrectos = false;
                    Notifica("FechaNac_Incorrecta", listNotGen);
                }
                else if (sRbAntepasado.prop('checked') && (!(nDiaObi >= 0 && nDiaObi < 32) || !anioObi.match(regexAnio) || (anioObi != '9999' && anioObi > gAnioActual))) {
                    camposCorrectos = false;
                    Notifica("FechaObi_Incorrecta", listNotGen);
                }
                else if (sRbVida.prop('checked') && regEmail && !regEmail.match(regexEmail)) {
                    camposCorrectos = false;
                    Notifica("Email_Incorrecto", listNotGen);
                };
            }; //Fin Leer Formulario

            function SubirFotoMiembro(procSuccess) {
               // alert('gNombreImgMiembro: ' + gNombreImgMiembro);
                if (gNombreImgMiembro) {
                    //alert('Dentro del if');
                    if (gEstado == 'formulario')
                        gNombreImgMiembro = "M"+gCirculo8 + strNumber((Math.random() * 10000).toFixed(0).toString(), 4) + gNombreImgMiembro;
                    else
                        gNombreImgMiembro = "A"+gCirculoPropio8 + strNumber((Math.random() * 10000).toFixed(0).toString(), 4) + gNombreImgMiembro;
                    lbRegTree.Foto = gNombreImgMiembro;
                    console.log('gNombreImgMiembro: ' + gNombreImgMiembro);
                  //  PostImgB64ToServer(imgB64Miembro, gNombreImgMiembro, "/Images/users/", procSuccess);
                    PostImgB64ToServer(sImgFotoCargada.attr('src'), gNombreImgMiembro, "/Images/users/", procSuccess);

                }
                else
                    return procSuccess();

                //alert('Antes de Salir de SubirFotoMiembro - gEstado: '+gEstado);
                
            }; //Fin Subir Foto Miembro
            /******************************************************************************************************/
            function CumplimentarRegTree() {
            /*******************************************************************************************************/
                lbRegTree.OpcionTree = gOpcionTree;             
                lbRegTree.Nombre = regNombre;
                lbRegTree.Apellidos = sTbApellidos.val();
                lbRegTree.FechaNac = anioNac + ((parseInt(mesNac) < 10) ? ('0' + mesNac) : mesNac) + ((nDiaNac < 10) ? ('0' + nDiaNac) : nDiaNac);
                if (parseInt(lbRegTree.FechaNac) == 0) lbRegTree.FechaNac = '';
                if (sRbAntepasado.prop('checked')) {
                    lbRegTree.FechaObi = anioObi + ((parseInt(mesObi) < 10) ? ('0' + mesObi) : mesObi) + ((nDiaObi < 10) ? ('0' + nDiaObi) : nDiaObi);
                    if (parseInt(lbRegTree.FechaObi) == 0) lbRegTree.FechaObi = '';
                };
                if (sRbHombre.prop('checked')) lbRegTree.Sexo = 'H'; else lbRegTree.Sexo = "M";
                lbRegTree.CiudadNac = sTbCiudadNac.val();
                lbRegTree.CiudadRes = sTbCiudadResObi.val();
                lbRegTree.Email = NormalizaEmail(sTbEmail.val());
                lbRegTree.IdCirculo = gCirculo;
                lbRegTree.ClaveBus = NorTexto(lbRegTree.Nombre + lbRegTree.Apellidos + lbRegTree.CiudadNac + lbRegTree.CiudadRes);
                switch (gOpcionTree) {
                    case 'aniadirConsorte':
                        if (gIdMiembroSel == 0) {
                            gIdMiembroSel = listMiembrosCirculo[0].IdMiembro;
                            lbRegTree.Generacion = 0;
                            lbRegTree.GradoParentesco = 0;
                        }
                        else {
                            lbRegTree.Generacion = Miembro(gIdMiembroSel).Generacion;
                            lbRegTree.GradoParentesco = Miembro(gIdMiembroSel).GradoParentesco;
                        };
                        lbRegTree.TipoMiembro = 2;
                        lbRegTree.IdMiembroDirecto = gIdMiembroSel;
                        if (lbRegTree.Sexo == "M")
                            lbRegTree.Relacion = sDdlRelacionM.get(0).selectedIndex;
                        else
                            lbRegTree.Relacion = sDdlRelacionH.get(0).selectedIndex;
                        break;
                    case 'aniadirDescendiente':
                        if (gEstado == 'formulario' && gEstadoAnt == 'edicionInicio') gTipoMiembroSel = 0;
                        switch (gTipoMiembroSel) {
                            case 0:
                                lbRegTree.TipoMiembro = 1;
                                break;
                            case 1:
                            case 4:
                                lbRegTree.TipoMiembro = gTipoMiembroSel;
                                break;
                            case 2:
                                lbRegTree.IdMiembroAscConsorte = gIdMiembroSel;
                                lbRegTree.IdMiembroAscDirecto = Miembro(gIdMiembroSel).IdMiembroDirecto;
                                lbRegTree.TipoMiembro = Miembro(lbRegTree.IdMiembroAscDirecto).TipoMiembro;
                                if (lbRegTree.TipoMiembro == 0) lbRegTree.TipoMiembro = 1;
                                break;
                            case 3:
                                lbRegTree.TipoMiembro = 4;
                                break;
                        };//fin switch

                        if (gTipoMiembroSel != 2) { //Directo (Caso de tener sólo un consorte o ninguno)
                            if (gIdMiembroSel == 0) gIdMiembroSel = listMiembrosCirculo[0].IdMiembro;
                            lbRegTree.IdMiembroAscDirecto = gIdMiembroSel;     
                            if (Miembro(gIdMiembroSel).NConsortes>0) {
                                lbRegTree.IdMiembroAscConsorte = ListConsortes(gIdMiembroSel)[0].IdMiembro;
                            }
                            else {
                                lbRegTree.OpcionTree = "aniadirDescendienteYConsorte";
                            };
                        };
                        lbRegTree.Generacion = Miembro(gIdMiembroSel).Generacion + 1;
                        lbRegTree.GradoParentesco = Miembro(gIdMiembroSel).GradoParentesco;
                        break;

                    case 'aniadirAscendiente':
                        if (gIdMiembroSel == 0) {
                            gIdMiembroSel = listMiembrosCirculo[0].IdMiembro;
                            lbRegTree.Generacion = -1;
                        }
                        else {
                            lbRegTree.Generacion = Miembro(gIdMiembroSel).Generacion - 1;
                        };
                        lbRegTree.IdMiembro = gIdMiembroSel;
                        if (lbRegTree.Sexo == "M")
                            lbRegTree.Relacion = sDdlRelacionM.get(0).selectedIndex;
                        else
                            lbRegTree.Relacion = sDdlRelacionH.get(0).selectedIndex;
                        break;

                    case 'modificarDatos':
                       // alert('gTipoMiembroSel: ' + gMiembroSel.TipoMiembro);
                        gTipoMiembroSel = gMiembroSel.TipoMiembro;
                        lbRegTree.TipoMiembro = gTipoMiembroSel;
                        lbRegTree.IdMiembro = gIdMiembroSel;
                        lbRegTree.IdPersona = gMiembroSel.IdPersona;
                        lbRegTree.OpcionTree = 'modificarDatos';
                        if (gTipoMiembroSel == 2 || gTipoMiembroSel==3) {
                            if (lbRegTree.Sexo == "M")
                                lbRegTree.Relacion = sDdlRelacionM.get(0).selectedIndex;
                            else
                                lbRegTree.Relacion = sDdlRelacionH.get(0).selectedIndex;
                        };
                        if (!hayFotoAntes && !hayFotoDespues) lbRegTree.Foto = "";
                        if (hayFotoAntes && !hayFotoDespues) {
                            lbRegTree.Foto = "";
                            lbRegTree.DatosString = gMiembroSel.Foto;
                        };
                        if (hayFotoAntes && hayFotoDespues && !hayNuevaFoto) lbRegTree.Foto = gMiembroSel.Foto;
                        if (hayFotoAntes && hayFotoDespues && hayNuevaFoto) lbRegTree.DatosString = gMiembroSel.Foto;
                };//Fin switch
            };//Fin Cumplimentar RegTree
        });//Fin Guardar
    };
    //Fin activar eventos Formulario

    function ActivarEventoNuevoCirculo() {
        sNuevoCirculo.click(function () {
            if (gEstado == 'navegacion' || gEstado == 'edicionInicio') {
                gEstadoAnt = gEstado;
                gEstado = 'forNuevoCirculo';
                gOpcionTree = 'nuevoCirculo';
                ActualizarTree();
            };
        });
    };

    function ActivarEventoEliminarCirculo() {
        sEliminarCirculo.click(function () {
            //alert('gMiembroTitular.TipoCirculo: ' + gMiembroTitular.TipoCirculo + ' gCirculo: ' + gCirculo);
            if ( (gEstado == 'navegacion' || gEstado == 'edicionInicio') && gCirculo != gCirculoPropio) {
                gEstadoAnt = gEstado;
                gEstado = 'eliminarCirculo';
                ActualizarTree();
            };
        });

    };

    /************* EVENTO CANCELAR  ***************************************************/
    sBCancelar.click(function () {

        if (estaClickActivo) {

            switch (gEstado) {
                case 'formulario':
                    $('.opcion').css('color', '#0377aa');
                    break;
                case 'forNuevoCirculo':
                    $('.menu').css('color', '#0377aa');
                    GenerarCirculosSelector();
                    break;
                    /*      case 'eliminarCirculo':
                              alert('Cancelar');
                              $('.menu').css('color', '#0377aa');
                              gEstado=gEstadoAnt;
                              gEstadoAnt='eliminarCirculo';
                              ActualizarTree();
                              break;*/
            };
            var estado = gEstado;
            gEstado = gEstadoAnt;
            gEstadoAnt = estado;
            sForArbol.hide();

            ActualizarTree();
        };
    });

    /******************** Funciones Call-Back de EventosBase *******************************************************/

    function EliminarMiembroCorrecto(result) {
        listMiembrosCirculo = result.MiembrosCirculo;
        OrdenarListMiembros();
        gNMiembrosCirculo = listMiembrosCirculo.length;
        gEstadoAnt = gEstado;
        if (gNMiembrosCirculo < 2) gEstado = 'edicionInicio';
        else gEstado = 'edicion';
        gMiembro0 = Miembro(gMiembro0.IdMiembro);
        gIdMiembro0 = gMiembro0.IdMiembro;
        switch (gMiembroSel.TipoMiembro) {
            case 1:
                gMiembroSel = null;
                gIdMiembroSel = 0;
                CalcularMiembro0Inicial();
                break;
            case 3:
                gMiembro0 = Ancestro(gMiembro0, gMiembro0.Generacion - gMiembroSel.Generacion + 1);
                break;
            case 4:
                var gen = GEN_ARBOL_MAX - NGeneraciones(gMiembro0);
                if (gen > 0) gMiembro0 = Ancestro(gMiembro0, gen);
                break;
            case 2:

                break;
        };
        gMiembroSel = null;
        gIdMiembroSel = 0;
        ActualizarTree();
    };

}; //FIN ActivarEventosBase

function GuardarFormularioTreeCorrecto(result) {

    gIdMiembroSel = result.MiembroSeleccionado;
    listMiembrosCirculo = result.CirculoTree.MiembrosCirculo;
    OrdenarListMiembros();
    gNMiembrosCirculo = listMiembrosCirculo.length;
    gEstado = "edicion";
    gEstadoAnt = "formulario";
    gMiembro0 = Miembro(gMiembro0.IdMiembro);
    console.log('gOpcionTree: ' + gOpcionTree);
           
    switch (gOpcionTree) {
        
        case "aniadirAscendiente":
            gMiembro0 = Miembro(gIdMiembroSel);
            gIdMiembro0 = gMiembro0.IdMiembro;
            break;
        case "aniadirDescendiente":
            if (Miembro(gIdMiembroSel).Generacion - gMiembro0.Generacion > GEN_ARBOL_MAX)
                gMiembro0 = Ancestro(Miembro(gIdMiembroSel), GEN_ARBOL_MAX);
            break;
        case "modificarDatos":
            // reload
            if (gMiembroSel.IdMiembro == gMiembroTitular.IdMiembro && hayNuevaFoto)
                location.reload();
            // gMiembro0
/*
            console.log('gCirculo: ' + gCirculo);
            console.log('gCirculoPropio: ' + gCirculoPropio);
            console.log('gNombreImgMiembro: ' + gNombreImgMiembro);
            console.log('hayNuevaFoto: ' + hayNuevaFoto);
            if (gCirculo == gCirculoPropio && hayNuevaFoto) {
                $('#fotoCab img').attr('src', '/Images/users/'+gNombreImgMiembro)
            };
            */
            break;

        default:
            
            break;
    };
    ActualizarTree();
};

function GuardarFormularioNuevoCirculoCorrecto(result) {
    //alert('GuardarFormularioNuevoCiculoCorrecto');

    sesAliasCirculo = result;
    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo;
    //location.reload();

};

/***************************************************************************/
/******************* FUNCION PresentarFormulario*************************/
/***************************************************************************/
function PresentarFormulario() {
    gNombreImgMiembro = "";
    sForArbol.hide();
    sForArbol.fadeIn(1000);
    sNotTree.hide();
    $('.tituloCabForTree').hide();
    ResetearFormulario(arrSelForTree, arrIniForTree, '#999999');
    sRbVida.mousedown();
    sRbVida.prop('checked', true);
    sRbMujer.prop('checked', true);
    sImgFotoCargada.css('width', '110px');
    sImgFotoCargada.attr('src', '/Images/support/siluetaM.jpg');
    sRelacionH.hide();
    sRelacionM.show();
    arrSelForTree[0].focus();
    var sTituloSel;
    var tituloSel;
    switch (gOpcionTree) {
        case "modificarDatos":
            sTituloSel=sTituloCabForTreeModificarDatos;
            CumplimentarFormulario();         
            break;
        case "aniadirConsorte":
            sTituloSel = sTituloCabForTreeAniadirConsorte;
            sBCambiarFoto.hide();
            sBSubirFoto.show();
            sRelacion.show();
            break;
        case "aniadirDescendiente":
            sTituloSel = sTituloCabForTreeAniadirDescendiente;
            sBSubirFoto.show();
            sBCambiarFoto.hide();
            sRelacion.hide();
            break;
        case "aniadirAscendiente":
            sTituloSel = sTituloCabForTreeAniadirAscendiente;
            sRelacion.hide();
            sBSubirFoto.show();
            sBCambiarFoto.hide();
            sRelacion.show();
            break;

        case "nuevoCirculo":
            sTituloSel = sTituloCabForTreeNuevoCirculo;
            sRelacion.hide();
            sBSubirFoto.show();
            sBCambiarFoto.hide();

            break;
    };//FIN Switch
    //alert('Configuración del Título - gMiembroSel: '+gMiembroSel.Nombre+' '+gMiembroSel.Apellidos);
    sTituloSel.show();
    if (gOpcionTree != 'nuevoCirculo') {
        tituloSel = arrTitulosForTreeIni[arrOpcionesEdicion.indexOf(gOpcionTree)];
    }
    else {
        tituloSel = sTituloSel.html();
    };
    tituloSel = tituloSel.replace('_nomMiembro', gMiembroSel.Nombre).replace('_apeMiembro', gMiembroSel.Apellidos);
    sTituloSel.html(tituloSel);

    function CumplimentarFormulario() {
        sTbNombre.val(gMiembroSel.Nombre);
        if (gMiembroSel.Apellidos) sTbApellidos.val(gMiembroSel.Apellidos);
        if (gMiembroSel.Email) sTbEmail.val(gMiembroSel.Email);
        if (gMiembroSel.CiudadNac) sTbCiudadNac.val(gMiembroSel.CiudadNac);
        if (gMiembroSel.CiudadRes) sTbCiudadResObi.val(gMiembroSel.CiudadRes);
        if (gMiembroSel.FechaNac) {
            var anioNac = parseInt(gMiembroSel.FechaNac.slice(0, 4));
            if (anioNac > 0) sTbAnioNac.val(anioNac);
            var diaNac = parseInt(gMiembroSel.FechaNac.slice(6, 8));
            if (diaNac > 0) sTbDiaNac.val(diaNac);
            var mesNac = parseInt(gMiembroSel.FechaNac.slice(4, 6));
            if (mesNac > 0) sDdlMesesNac.val(mesNac + 1);
        };
        if (gMiembroSel.FechaObi) {
            sRbAntepasado.prop('checked', true);
            sRbAntepasado.mousedown();
            var anioObi = parseInt(gMiembroSel.FechaObi.slice(0, 4));
            if (anioObi > 0) sTbAnioObi.val(anioObi);
            var diaObi = parseInt(gMiembroSel.FechaObi.slice(6, 8));
            if (diaObi > 0) sTbDiaObi.val(diaObi);
            var mesObi = parseInt(gMiembroSel.FechaObi.slice(4, 6));
            if (mesObi > 0) sDdlMesesObi.val(mesObi + 1);
        }
        else {
            sRbVida.prop('checked', true);
            sRbVida.mousedown();
        };
        if (gMiembroSel.Sexo == "M") {
            sRbMujer.mousedown();
            sRbMujer.prop('checked', true);
        }
        else {
            sRbHombre.prop('checked', true);
            sRbHombre.mousedown();
        };
        if (gMiembroSel.TipoMiembro == '2' || gMiembroSel.TipoMiembro == '3') {
            sRelacion.show();
            sDdlRelacionH.val(gMiembroSel.Relacion + 1);
            sDdlRelacionM.val(gMiembroSel.Relacion + 1);
        }
        else {
            sRelacion.hide();
        };
        gNombreImgMiembro = '';
        if (gMiembroSel.Foto) {
            hayFotoAntes = true;
            sImgFotoCargada.attr('src', '\\Images\\users\\'+gMiembroSel.Foto);       
            if (sImgFotoCargada.width() > sImgFotoCargada.height()) {
                sImgFotoCargada.css('width', '110px');
                sImgFotoCargada.css('height', 'auto');
            }
            else {
                sImgFotoCargada.css('width', 'auto');
                sImgFotoCargada.css('height', '110px');
            };
            sImgFotoCargada.css('display', 'block');
            sBCambiarFoto.show();
            sBSubirFoto.hide();
        }
        else {
            hayFotoAntes = false;
            sBCambiarFoto.hide();
            sBSubirFoto.show();
        };
        hayFotoDespues = hayFotoAntes;
        hayNuevaFoto = false;
    };
    };//FIN PresentarFormulario

/***************************************************************************/
/******************* FUNCION CargarImagenMiembro *************************/
/***************************************************************************/
function CargarImagenMiembro() {
    $('#loading').show();
    sFotoDrop.css('border', 'dashed 3px #7596a5');
    reader = new FileReader();
    reader.onload = function (e) {   
        sImgFotoCargada.attr('src', e.target.result);
      //  imgB64Miembro = ResizeSImg(sImgFotoCargada, 600);
       // sImgFotoCargada.attr('src', imgB64Miembro);
        gNombreImgMiembro = arrSelectedFilesMiembro[0].name;
        hayFotoDespues = true;
        hayNuevaFoto = true;

        sImgFotoCargada.on('load', function () {
            AjustarImagen(sImgFotoCargada, sBSubirFoto, sBCambiarFoto);
        sImgFotoCargada.off('load');
        });
    };
};

/***************************************************************************/
/******************* FUNCION ListConsortes *************************/
/***************************************************************************/
function ListConsortes(idMiembroD) {
    return $.grep(listMiembrosCirculo, function (consorte) {
        return consorte.IdMiembroDirecto == idMiembroD;
    });
};
/***************************************************************************/
/******************* FUNCION ListDescendientes *************************/
/***************************************************************************/
function ListDescendientes(idMiembroD, idMiembroC) {
    return $.grep(listMiembrosCirculo, function (descendiente) {
        return (descendiente.IdMiembroAscDirecto == idMiembroD && descendiente.IdMiembroAscConsorte == idMiembroC)
            || (descendiente.IdMiembroAscDirecto == idMiembroC && descendiente.IdMiembroAscConsorte == idMiembroD)
    });
};
/***************************************************************************/
/******************* FUNCION Miembro *******************************************/
/* Función que extrae de listMiembros el miembro correspondiente a un idMiembro */ 
/********************************************************************************/
function Miembro(idMiembro) {
    var miembroList;
    miembroList=$.grep(listMiembrosCirculo, function (m) {
       return m.IdMiembro==idMiembro
    });
    if (miembroList) return miembroList[0]; else return null;
};
/***************************************************************************/
/******************* FUNCION IdMiembroAscPoliticoConsorte *********************/
/* Función que calcula el IdMiembro de la suegra/suegro (consorte) de un miembro consorte  */
/********************************************************************************/
function IdMiembroAscPoliticoConsorte(idMiembroConsorte) {
    var miembroDirecto=$.grep(listMiembrosCirculo,function (m){
    return m.IdMiembro==Miembro(idMiembroConsorte).IdMiembroDirecto
    });
    var idMiembroDirecto = miembroDirecto[0].IdMiembro;
    var miembroAscConsorteMiembroDirecto=$.grep(listMiembrosCirculo,function (m){
        return m.IdMiembro==Miembro(idMiembroDirecto).IdMiembroAscConsorte
    });
    return miembroAscConsorteMiembroDirecto[0].IdMiembro;
};
/***************************************************************************/
/*******************   FUNCION GenerarArbol  *****************************/
/*  Parámetros                                                          */
/*  Miembro0 - Miembro orígen del árbol                                 */
/*  genArbolMax - Número máximo de generaciones que se representan         */
/*  genArbol - Generación del árbol - Inicialmente 0                       */
/***************************************************************************/
function GenerarArbol(miembro0, genArbol, genArbolMax) {
        if (genArbol > genArbolMax) return;
        if (miembro0) {
            gMiembroD = miembro0;
            if (miembro0.NConsortes > 0) {
                $.each(ListConsortes(miembro0.IdMiembro), function (iConsorteMiembro0, consorteMiembro0) {
                    gPrimogenito = true;
                    if (iConsorteMiembro0 == 0) GenerarRama(miembro0, consorteMiembro0, genArbol);
                    else {
                        AniadirVerticales(miembro0.IdMiembro, consorteMiembro0.IdMiembro);
                        gMiembroD = miembro0;
                        GenerarRama(null, consorteMiembro0, genArbol);
                        
                    };
                    if (!consorteMiembro0.OcultarDescendecia > 0 && consorteMiembro0.NDescendientes > 0 && genArbol + 1 <= genArbolMax) {
                        $.each(ListDescendientes(miembro0.IdMiembro, consorteMiembro0.IdMiembro), function (iMiembro1, miembro1) {
                            if (iConsorteMiembro0 == 0 && iMiembro1 == 0) {
                                gPrimogenitoAsc = gPrimogenito;
                                gPrimogenito = true;
                            }
                            else {
                                gPrimogenito = false;
                            };
                            if (iMiembro1 == consorteMiembro0.Ndescendientes - 1) gBenjamin = true; else gBenjamin = false;
                            AniadirVerticales(miembro0.IdMiembro,consorteMiembro0.IdMiembro);
                            GenerarArbol(miembro1, genArbol + 1, genArbolMax);
                        });//Each Descendientes Miembro0
                    };//If
                });//Each Consortes Miembro0

            }//If miembro0.NConsortes > 0
            else {
                gMiembroD = miembro0;
                GenerarRama(miembro0, null, genArbol);
            };
        }; // If miembro0

        function AniadirVerticales(idMiembroD, idMiembroC) {
            var idAncestroD = idMiembroD;
            var idAncestroC = idMiembroC;
            var idRelacion = IdRelacion(idAncestroD, idAncestroC);
            var sVertical = sArbol.find('#linVerticalR_' + idRelacion);
            for (i = genArbol; i >= 0; i--) {
                var hVertical = sVertical.height();
                hVertical += gHRama;
                sVertical.height(hVertical);
                if (i > 0) {
                    idRelacion = IdRelacion(Miembro(idAncestroD).IdMiembroAscDirecto, Miembro(idAncestroD).IdMiembroAscConsorte);
                    sVertical = sArbol.find('#linVerticalR_' + idRelacion);
                    if (sVertical.length > 0) {
                        idMiembroD = Miembro(idAncestroD).IdMiembroAscDirecto;
                        idMiembroC = Miembro(idAncestroD).IdMiembroAscConsorte;
                     }
                    else {
                        idRelacion = IdRelacion(Miembro(idAncestroC).IdMiembroAscDirecto, Miembro(idAncestroC).IdMiembroAscConsorte);
                        sVertical = sArbol.find('#linVerticalR_' + idRelacion);
                        idMiembroD = Miembro(idAncestroC).IdMiembroAscDirecto;
                        idMiembroC = Miembro(idAncestroC).IdMiembroAscConsorte;
                  };
                    idAncestroD = idMiembroD;
                    idAncestroC = idMiembroC;
                };
            };
        };
}; //function

/***************************************************************************/
/*******************   FUNCION GenerarRama  *****************************/
/*  Parámetros                                                          */
/*  miembroD - Miembro Directo                                */
/*  miembroC - Miembro Consorte                                  */
/*  genArbol - Generación del árbol en donde se representa              */
/***************************************************************************/
function GenerarRama(miembroD, miembroC, genArbol) {
    
    var sTableRamaClon = sTableRama.clone();
    var sTableSeccionClon = sTableSeccion.clone();
    /*------PERSONALIZACIÓN-------------------------------------------------------------------------------*/
    /*------ Miembro D -------------------------------------------------------------------------------*/
    if (miembroD) {
        var cronoD;
        var anioNacD, anioObiD;
        var mesNacD;
        var diaNacD;
        var edadD;
        var ciudadD = '';
        var sFotoD = sTableSeccionClon.find('#fotoD');
        sFotoD.attr('id', 'fotoD_' + miembroD.IdMiembro);
        //PonerFotoUsuario(sFotoD, miembroD.Foto, miembroD.Sexo, 65);
        PonerFotoUsuario(sFotoD, miembroD.Foto, miembroD.Sexo, 76);
        anioNacD = parseInt(miembroD.FechaNac.slice(0, 4));
        mesNacD = parseInt(miembroD.FechaNac.slice(4, 6));
        diaNacD = parseInt(miembroD.FechaNac.slice(6, 8));
      //  console.log(miembroD.Nombre + ": Anio: " + anioNacD + " - Mes: " + mesNacD + " - Día: " + diaNacD);
        if (miembroD.FechaObi) {
            anioObiD = miembroD.FechaObi.slice(0, 4);
            ciudadD = miembroD.CiudadNac;
            if (anioObiD != '9999') {
                cronoD = '( ' + anioNacD + ' - ' + anioObiD + ' )';
            }
            else {
                cronoD = '';
            };
        }
        else {
            ciudadD = miembroD.CiudadRes;
          //  edadD = gAnioActual - anioNacD - (((gMesActual * 31 + gDiaActual) > (mesNacD * 31 + diaNacD)) ? 0 : 1);
            edadD = Edad(anioNacD, mesNacD, diaNacD);
          //  console.log("Edad: " + edadD);
          //  console.log("AnioActual: " + gAnioActual);
           // console.log(((gMesActual * 31 + gDiaActual) > (mesNacD * 31 + diaNacD)));

            if (edadD) cronoD = '( ' + edadD + ' )';
            else cronoD = "";
        };
        var nomApeD = miembroD.Nombre + '<br/>';
        if (miembroD.Apellidos) nomApeD = nomApeD + miembroD.Apellidos + '<br/>';
        sTableSeccionClon.find('#nomApeD').html(nomApeD);
        var datosDirectoClon = sTableSeccionClon.find('#leyendaDatosD').html();
        datosDirectoClon = datosDirectoClon.replace('_cronoDirecto', cronoD)
                                            .replace('_ciudadDirecto', ciudadD);
        sTableSeccionClon.find('#leyendaDatosD').html(datosDirectoClon);
        sTableSeccionClon.find('#flechaArribaD').hide();
        if (miembroD.IdMiembro == gMiembro0.IdMiembro) sTableSeccionClon.find('#linHorizontalD').remove();
        if (!(gPrimogenito &&  !arrTitulos[genArbol] ) || !(miembroD.TipoMiembro == 0 || miembroD.TipoMiembro == 1 || miembroD.TipoMiembro == 3))
            sTableSeccionClon.find('#textoParentescoD').remove();
        else {
            arrTitulos[genArbol] = true;
            if (NGeneraciones(gMiembro0) == 0) {
                sTableSeccionClon.find('#textoParentescoD').html(sDdlParentesco.find('option')[0].innerText);
            }
            else {
                var dGen0 = miembroD.Generacion - gMiembro0.Generacion
                var nParentesco = gGenArbolMax - dGen0 + 1;
                if (nParentesco > 5) nParentesco = 5;
                sTableSeccionClon.find('#textoParentescoD').html(sDdlParentesco.find('option')[nParentesco].innerText);
            };
        };
        if (miembroD.IdMiembro != gMiembroTitular.IdMiembro && miembroD.IdCirculoConectado == null) {
            sTableSeccionClon.find('#circuloD').remove();
            sTableSeccionClon.find('#leyendaDatosD').css('top', topLeyenda1);
            if ((genArbol == gGenArbolMax || miembroD.NDescendientes == 0 || miembroC.OcultarDescendecia ) && !gBenjamin || miembroD.NConsortes>1 && miembroC.NDescendientes==0) {
                sTableRamaClon.css('height', height2);
           
            }
        else
                sTableRamaClon.css('height', height1);
        }
        else {
            if (!gBenjamin) {
                sTableRamaClon.css('height', height2);
            }
            else
                sTableRamaClon.css('height', height1);
            if (miembroD.fechaObi) {
                sTableSeccionClon.find('#circuloD img').attr('src', '/Images/support/circuloGris.gif');
            };
        };
        if (genArbol == 0 && miembroD.IdMiembroAscDirecto) {
            var sFlechaArribaD = sTableSeccionClon.find('#flechaArribaD');
            sFlechaArribaD.show();
            sFlechaArribaD.click(function () {
                console.log('gEstado: ' + gEstado);
                if (gEstado == 'navegacion' | gEstado == 'solicitudes') {
                    gMiembro0 = Miembro(miembroD.IdMiembroAscDirecto);
                    gIdMiembro0 = gMiembro0.IdMiembro;
                    PresentarArbol();
                };
            });
        }
    }
    else {
        sTableSeccionClon.find('#seccionD').html('');
    }; //Fin MiembroD
    /*------ Miembro C -------------------------------------------------------------------------------*/
    if (miembroC) {
        var cronoC;
        var anioNacC, anioObiC;
        var mesNacC;
        var diaNacC;
        var edadC;
        var ciudadC='';
        if (miembroC.IdPersona) {
            anioNacC = parseInt(miembroC.FechaNac.slice(0, 4));
            mesNacC = parseInt(miembroC.FechaNac.slice(4, 6));
            diaNacC = parseInt(miembroC.FechaNac.slice(6, 8));
            if (miembroC.FechaObi) {
                ciudadC = miembroC.CiudadNac;
                anioObiC = miembroC.FechaObi.slice(0, 4);
                if (anioObiC != '9999') {
                    cronoC = '( ' + anioNacC + ' - ' + anioObiC + ' )';
                }
                else {
                    cronoC = '';
                };
            }
            else {
                ciudadC = miembroC.CiudadRes;
               // edadC = gAnioActual - anioNacC - ((gMesActual * 31 + gDiaActual > mesNacC * 31 + diaNacC) ? 0 : 1);
               edadC= Edad(anioNacC, mesNacC, diaNacC);
                if (edadC) cronoC = '( ' + edadC + ' )';
                else cronoC = "";
            };
            var nomApeC = miembroC.Nombre + '<br/>';
            if (miembroC.Apellidos) nomApeC = nomApeC + miembroC.Apellidos + '<br/>';
        }
        else { // Miembro anónimo
            cronoC = '';
            nomApeC = '?';
            miembroC.CiudadRes = '';
            miembroC.Foto = '';
            var sexoMiembroD;
            if (miembroD) sexoMiembroD = miembroD.Sexo;
            else sexoMiembroD = Miembro(miembroC.IdMiembroDirecto).Sexo;
            //if (miembroD.Sexo == "M") {
                if (sexoMiembroD == "M") {
                miembroC.Sexo = "H";
            }
            else {
                miembroC.Sexo = "M";
            };
        };
        var sFotoC = sTableSeccionClon.find('#fotoC');
        sFotoC.attr('id', 'fotoC_' + miembroC.IdMiembro);
        //PonerFotoUsuario(sFotoC, miembroC.Foto, miembroC.Sexo, 65);
        PonerFotoUsuario(sFotoC, miembroC.Foto, miembroC.Sexo, 76);
        sTableSeccionClon.find('#nomApeC').html(nomApeC);
        var datosConsorteClon = sTableSeccionClon.find('#leyendaDatosC').html();
        datosConsorteClon = datosConsorteClon.replace('_cronoConsorte', cronoC)
                                             .replace('_ciudadConsorte', ciudadC);
        sTableSeccionClon.find('#leyendaDatosC').html(datosConsorteClon);
        sTableSeccionClon.find('#flechaArribaC').hide();
        sTableSeccionClon.find('#flechaDerechaC').hide();
        //FLECHA ARRIBA CONSORTE
        if (miembroC.TipoMiembro == 3 && miembroC.IdMiembroAscDirecto) {
            var sFlechaArribaC = sTableSeccionClon.find('#flechaArribaC');
            sFlechaArribaC.show();
            sFlechaArribaC.click(function () {
                console.log('gEstado: ' + gEstado);
                if (gEstado == 'navegacion' | gEstado=='solicitudes') {
                    gMiembro0 = Miembro(miembroC.IdMiembroAscDirecto);
                    gIdMiembro0 = gMiembro0.IdMiembro;
                    PresentarArbol();
                };
            });
        };
        //BOTON MOSTRAR / OCULTAR DESCENDENCIA
        if (miembroC.OcultarDescendecia) {
            sTableSeccionClon.find('#botonR img').attr('src', '\\Images\\support\\botonRelacionMostrar.gif');
            sTableSeccionClon.find('#linVerticalR').remove();
        }
        else if (miembroC.NDescendientes == 0) {
                sTableSeccionClon.find('#linVerticalR').remove();
                sTableSeccionClon.find('#botonR').remove();
        }
        else if (genArbol == gGenArbolMax) {
            sTableSeccionClon.find('#linVerticalR').remove();
            sTableSeccionClon.find('#botonR img').attr('src', '\\Images\\support\\botonRelacionMostrar.gif');
        }
        else {
            sTableSeccionClon.find('#botonR img').attr('src', '\\Images\\support\\botonRelacionOcultar.gif');
            //sTableSeccionClon.find('#linVerticalR').attr('id', 'linVerticalR_' + miembroC.IdMiembro);
            sTableSeccionClon.find('#linVerticalR').attr('id', 'linVerticalR_' + IdRelacion(gMiembroD.IdMiembro,miembroC.IdMiembro));
        };
        //EVENTO OCULTAR / MOSTRAR DESCENDENCIA
        sTableSeccionClon.find('#botonR').click(function () {
            if (gEstado == 'navegacion') {
                if (genArbol == gGenArbolMax) {
                    //gMiembro0 = Miembro(miembroD.IdMiembroAscDirecto);
                    gMiembro0 = Miembro(Miembro(miembroC.IdMiembroDirecto).IdMiembroAscDirecto);
                    miembroC.OcultarDescendecia = false;
                }
                else if (miembroC.OcultarDescendecia) {
                    miembroC.OcultarDescendecia = false;
                }
                else {
                    miembroC.OcultarDescendecia = true;
                };
                PresentarArbol();
            };
        });
        if (miembroC.IdMiembro != gMiembroTitular.IdMiembro && miembroC.IdCirculoConectado == null) {
            sTableSeccionClon.find('#circuloC').remove();
            sTableSeccionClon.find('#leyendaDatosC').css('top', topLeyenda1);
        }
        else {
            if (miembroC.fechaObi) {
                sTableSeccionClon.find('#circuloC img').attr('src', '/Images/support/circuloGris.gif');
            };
        };
        //Logo Relación
        var logoRelacion;
        switch (miembroC.Relacion) {
            case 0:
            case 1:
            case 3:
                logoRelacion = 'logoRelacion' + genArbol + '.gif';
                break;
            case 2:
                logoRelacion = 'logoRelacionCorazon.gif';
                break;
            case 4:
            case 5:
                logoRelacion = 'logoRelacionSeparados.gif';
                break;
        };
        sTableSeccionClon.find('#logoR img').attr('src', '/Images/support/'+logoRelacion);
        //FLECHA DERECHA
        if (genArbol == gGenArbolMax && miembroC.NDescendientes > 0) {
            var sFlechaDerechaC = sTableSeccionClon.find('#flechaDerechaC');
            sFlechaDerechaC.show();
            sFlechaDerechaC.click(function () {
                console.log('gEstado: ' + gEstado);
                if (gEstado == 'navegacion' | gEstado == 'solicitudes') {
                /*    console.log('miembroC: ', miembroC.Nombre);
                    console.log('miembroD: ', (Miembro(miembroC.IdMiembroDirecto)).Nombre);
                    console.log('miembroAscDirecto: ', (Miembro((Miembro(miembroC.IdMiembroDirecto)).IdMiembroAscDirecto)).Nombre);
                    console.log('gGenArbolMax: ' + gGenArbolMax);
                    console.log('Ancestro 1: ' + (Ancestro(Miembro(miembroC.IdMiembroDirecto), 1)).Nombre);
                    console.log('Ancestro 2: ' + (Ancestro(Miembro(miembroC.IdMiembroDirecto), 2)).Nombre);
                    */
                    gMiembro0 = Ancestro(Miembro(miembroC.IdMiembroDirecto), gGenArbolMax - 1);
                   
                   // gMiembro0 = Miembro(Miembro(miembroC.IdMiembroDirecto).IdMiembroAscDirecto);

                    PresentarArbol();
                };
            });
        };
        //EVENTO HOVER SOBRE LOGO PARA MOSTRAR TEXTO RELACIÓN
        var sTextoRelacion = sTableSeccionClon.find('.textoRelacion');
        sTableSeccionClon.find('.logoRelacion').hover(function () {
            sTextoRelacion.show();
            if(miembroC.Sexo=='H')
                sTextoRelacion.html(sDdlRelacionH.find('option')[miembroC.Relacion].innerText);
            else
                sTextoRelacion.html(sDdlRelacionM.find('option')[miembroC.Relacion].innerText);
        },
        function () {
            sTextoRelacion.hide();
        });
    }
    else {
        sTableSeccionClon.find('#seccionR').html('');
        sTableSeccionClon.find('#seccionC').html('');
    };
    /*------ COMÚN -------------------------------------------------------------------------------*/
 sTableSeccionClon.find('.leyendaAniadir').hide();
 sTableSeccionClon.find('.fotoMiembro').click(function () {
            gIdMiembroSel = parseInt($(this).attr('id').split('_')[1]);
            gMiembroSel = Miembro(gIdMiembroSel);
            //alert('gMiembroSel: ' + gMiembroSel.Nombre + ' ' + gMiembroSel.Apellidos);
            gTipoMiembroSel = gMiembroSel.TipoMiembro;
            haySeleccion = true;
        switch(gEstado){
            case 'edicion':
                sArbol.find('.fotoMiembro').css('border', '#82a542 solid 3px');
                $(this).css('border', '4px solid #f024bb');
                if (sTableOpcionesEdit.css('display', 'none')) sTableOpcionesEdit.fadeIn(400);
                sTableOpcionesEdit.find('.opcion').css('color','#0377aa');
                //OPCIONES EDICION DISPONIBLES
                //dispoAniadirConsorte
                if (gTipoMiembroSel == 2) dispoAniadirConsorte = false;
                else dispoAniadirConsorte = true;
                //dispoAniadirDescendiente
                if ((gTipoMiembroSel == 1 || gTipoMiembroSel == 4 || gTipoMiembroSel == 0) && (gMiembroSel.NConsortes < 2) ||
                      gTipoMiembroSel == 2     ||
                      gTipoMiembroSel == 3 && gMiembroSel.IdMiembro == miembroC.IdMiembro         ||
                      gTipoMiembroSel == 3 && gMiembroSel.IdMiembro == miembroD.IdMiembro && (gMiembroSel.NConsortes < 2))
                    dispoAniadirDescendiente = true;
                else
                    dispoAniadirDescendiente = false;
                //dispoAniadirAscendiente
                if ((gTipoMiembroSel == 3 || gTipoMiembroSel == 0) && (!gMiembroSel.IdMiembroAscDirecto))
                    dispoAniadirAscendiente = true;
                else
                    dispoAniadirAscendiente = false;
                //dispoEliminar
                if ((gTipoMiembroSel == 1 || gTipoMiembroSel == 4) && gMiembroSel.NConsortes == 0 && gMiembroSel.NDescendientes == 0 ||
                    gTipoMiembroSel == 2 && gMiembroSel.NDescendientes == 0 ||
                    gTipoMiembroSel == 3 && !miembroD.IdMiembroAscDirecto && !miembroC.IdMiembroAscDirecto && gMiembroSel.NDescendientes<2 )
                    dispoEliminar = true;
                else
                    dispoEliminar = false;
                //PRESENTAR OPCIONES DISPONIBLES
                sTdEditDatos.show();
                if (dispoAniadirConsorte) sTdEditAniadirConsorte.show();
                else sTdEditAniadirConsorte.hide();
                if (dispoAniadirDescendiente) sTdEditAniadirDescendiente.show();
                else sTdEditAniadirDescendiente.hide();
                if (dispoAniadirAscendiente) sTdEditAniadirAscendiente.show();
                else sTdEditAniadirAscendiente.hide();
                if (dispoEliminar) sTdEditEliminar.show();
                else sTdEditEliminar.hide();
                break;
            case 'navegacion':
               // alert('IdCirculoConectado: '+gMiembroSel.IdCirculoConectado);
                if (gMiembroSel.IdCirculoConectado > 0) {
                   // LifeBook.LibreriaWebService.WsEntrarEnCirculo(gMiembroSel.IdCirculoConectado, EntrarEnCirculoCorrecto);
                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + gMiembroSel.AliasCirculoConectado;
                }
                else if (gTipoMiembroSel == 0 || gTipoMiembroSel == 3 && gMiembroSel.IdPersona) {
                    gIdMiembro0 = gIdMiembroSel;
                    gMiembro0 = Miembro(gIdMiembro0);
                   // alert('gMiembro0 - IdMiembro: ' + gMiembro0.IdMiembro + ' IdPersona: ' + gMiembro0.IdPersona);
                    PresentarArbol();
                };
                break;
            case 'solicitudes':
                sArbol.find('.fotoMiembro').css('border', '#82a542 solid 3px');
                $(this).css('border', '4px solid #f024bb');
                //alert('Miembro seleccionado: ' + gMiembroSel.IdMiembro);
                break;

    };
    });
    sTableRamaClon.find('td').eq(genArbol).append(sTableSeccionClon);
    sTableRamaClon.attr('id', 'tableRama_' + gGenArbolMax + '_' + gIRama);
    sArbol.append(sTableRamaClon);
    gHRama=sArbol.find('#tableRama_' + gGenArbolMax + '_' + gIRama).height();
    gIRama++;
};


/***************************************************************************/
/******************* FUNCION PresentarArbol ********************************/
/***************************************************************************/
function PresentarArbol() {
    //AUTORES
    sListaAutores.html('');
    sTableAutorArbol.show();
    if (listAutoresCirculo.length > 1) {
        sTituloAutorArbol.hide();
        sTituloAutoresArbol.show();
    }
    else {
        sTituloAutorArbol.show();
        sTituloAutoresArbol.hide();
    };
    $.each(listAutoresCirculo, function (iAutor, autor) {
        sTableAutorClon = sTableAutorArbol.clone();
        var sImgFotoAutorClon = sTableAutorClon.find('img');
        var sTextoAutorClon = sTableAutorClon.find('.tdTextoAutorArbol');
        var textoAutorClon = sTextoAutorClon.html();
        textoAutorClon = textoAutorClon.replace('_nombre', autor.Nombre)
                                       .replace('_apellidos', autor.Apellidos)
                                       /* .replace('_rol', sDdlRol.find('option')[autor.Rol].innerText) */;
        sTextoAutorClon.html(textoAutorClon);
        PonerFotoUsuario(sImgFotoAutorClon, autor.Foto, autor.Sexo, 40);
        sListaAutores.append(sTableAutorClon);
    });

    console.log('gEstado: ' + gEstado);
    var pad;
    switch (gEstado) {
        case 'navegacion':
            pad=75 + 50 * (listAutoresCirculo.length-1) ;
            break;
        case 'edicion':
            pad=170;
            break;
        case 'solicitudes':
            pad=270;
            break;
        default:
            pad=250;
            break;
    };

    sArbol.css('padding-top', pad + 'px');
    sTableAutorArbol.hide();
    sArbol.html('');
    //Calcula la máxima generación, si es superior a la máxima configurada, se iguala a la máxima
    gGenArbolMax = NGeneraciones(gMiembro0);
    if (gGenArbolMax > GEN_ARBOL_MAX) gGenArbolMax = GEN_ARBOL_MAX;
    else if (gGenArbolMax == 0) gGenArbolMax = 1;

    if (gGenArbolMax > 2) sArbol.css('width', '1020px');
    else sArbol.css('width', '765px');

    arrTitulos = new Array();
    for (var i = 0; i < gGenArbolMax; i++) {
        arrTitulos[i] = false;
    };
    var idTableRama = '#tableRama_' + gGenArbolMax;
    sTableRama = $(idTableRama);
    sRama = $('#rama_' + gGenArbolMax);
    sArbol.show();
    sRama.show();
    sSeccion.show();
    gPrimogenito = true;
    gPrimogenitoAsc = true;
    gBenjamin = false;
    gIRama = 0;
    gMiembroD = gMiembro0;
    GenerarArbol(gMiembro0, 0, gGenArbolMax);
    sSeccion.hide();
    sRama.hide();
};
/*****************************************************************************************/
/******************* FUNCION Ancestro ****************************************************/
/* Retorna el ascendiente más antiguo hasta generaciones, si no, retorna el miembro dado */
/*****************************************************************************************/
function Ancestro(miembro, generaciones) {
    if (miembro.TipoMiembro == 2) {
        miembro = Miembro(miembro.idMiembroDirecto);
    };
    var ancestro = miembro;
    var gen=0;
    while (ancestro.IdMiembroAscDirecto && gen<generaciones) {
        ancestro = Miembro(ancestro.IdMiembroAscDirecto);
        gen++;
    };
    return ancestro;
};

/***************************************************************************/
/******************* FUNCION ExtraeListDescendencia ********************************/
/***************************************************************************/
function ExtraeListDescendencia(miembro,propiedad) {
    var listDescendencia = new Array();
    AniadirDescendientes(miembro);
    return listDescendencia;

function AniadirDescendientes(member) {
        var listDescendientes = $.grep(listMiembrosCirculo, function (m) {
            return m.IdMiembroAscDirecto == member.IdMiembro || m.IdMiembroAscConsorte == member.IdMiembro  ;
        });
        $.each(listDescendientes, function (iDescendiente, descendiente) {
            listDescendencia.push(descendiente[propiedad]);
            AniadirDescendientes(descendiente);      
        });
    };
};
/***************************************************************************/
/******************* FUNCION NGeneraciones **************************/
/*     Número de generaciones de descendientes desde el miembro dado         */
/***************************************************************************/
function NGeneraciones(miembro0) {
    if (miembro0.NDescendientes > 0)
        return Math.max.apply(Math, ExtraeListDescendencia(miembro0, 'Generacion')) - miembro0.Generacion;
    else return 0;
};
/***************************************************************************/
/******************* FUNCION CalcularMiembro0Inicial ***********************/
/*     Calcula gMiembro0 por defecto                                        */
/***************************************************************************/
function CalcularMiembro0Inicial() {

    if (gIdMiembroSel == 0) { //No hay miembro seleccionado

        gMiembroTitular = listMiembrosCirculo[0];
        var nGenPostTitular = NGeneraciones(gMiembroTitular);

        if (nGenPostTitular >= GEN_ARBOL_MAX) { //Se completa la ventana con generaciones posteriores al titular
            gMiembro0 = gMiembroTitular;
        }
        else { //No se completa la ventana con generaciones posteriores al titular
            if (gMiembroTitular.IdMiembroAscDirecto) { //Hay al menos un AD
                //Cálculo de genADMin
                var listMiembrosAD = $.grep(listMiembrosCirculo, function (m) {
                    return m.TipoMiembro == 3;
                });
                var listMiembrosADGeneracion = $.map(listMiembrosAD, function (miembro) {
                    return miembro.GradoParentesco;
                });
                var genADMin = Math.min.apply(Math, listMiembrosADGeneracion);
                //Cálculo de genAD0
                var genAD0Calc = -(GEN_ARBOL_MAX - nGenPostTitular);
                var genAD0 = (genADMin > genAD0Calc) ? genADMin : genAD0Calc;
                //Miembro0 correspondiente a genAD0
                gMiembro0 = $.grep(listMiembrosCirculo, function (m) {
                    return m.TipoMiembro == 3 && m.GradoParentesco == genAD0;
                })[0];
            }
            else {
                gMiembro0 = gMiembroTitular;
            };
        };
    }
    else { //Hay miembro seleccionado
        var genSel = gMiembroSel.Generacion;
        var gen0Calc = genSel - GEN_ARBOL_MAX;
        if (gen0Calc >= gMiembroSel.GradoParentesco) { //Si es mayor el Miembro0 es Pariente, o Si es igual es el AD Troncal
            gMiembro0 = Ancestro(gMiembroSel, GEN_ARBOL_MAX);
        }
        else { //Tomamos como Miembro0 el menor AD dentro de ventana
            //Cálculo de genADMin
            var listMiembrosAD = $.grep(listMiembrosCirculo, function (m) {
                return m.TipoMiembro == 3;
            });
            var listMiembrosADGeneracion = $.map(listMiembrosAD, function (miembro) {
                return miembro.GradoParentesco;
            });
            var genADMin = Math.min.apply(Math, listMiembrosADGeneracion);
            //Cálculo de genAD0
            var genAD0 = (genADMin > gen0Calc) ? genADMin : gen0Calc;
            //Miembro0 correspondiente a genAD0
            gMiembro0 = $.grep(listMiembrosCirculo, function (m) {
                return m.TipoMiembro == 3 && m.GradoParentesco == genAD0;
            })[0];
        };
    };//Fin Miembro Seleccionado

};//Fin CalcularMiembro0Inicial

/***************************************************************************/
/******************* FUNCION OrdenarListMiembros ********************************/
/*     Ordena listMiembrosCirculo primero por TipoMiembro y luego por Edad   */
/********************************************************************************/
function OrdenarListMiembros() {
    if (listMiembrosCirculo.length > 1) {
        listMiembrosCirculo.sort(function (a, b) {
            if (a.TipoMiembro < b.TipoMiembro) return -1;
            if (a.TipoMiembro > b.TipoMiembro) return 1;
            if (a.TipoMiembro == 3 && b.TipoMiembro == 3) {
                if (a.IdMiembro < b.IdMiembro) return -1;
                else return 1;
            }
            else {
                if (parseInt(a.FechaNac) < parseInt(b.FechaNac) || !a.FechaNac && b.FechaNac) return -1;
                if (parseInt(a.FechaNac) > parseInt(b.FechaNac) || a.FechaNac && !b.FechaNac) return 1;
                return 0;
            };
        });
    };
};

function OcultarOpcionesEdicion() {
    sTableOpcionesEdit.slideUp(200);
};
function MostrarOpcionesEdicion() {
    sTableOpcionesEdit.show();
};

function IdRelacion(idMiembro1, idMiembro2) {
    if (idMiembro1 < idMiembro2)
        return idMiembro1 + "_" + idMiembro2;
    else
        return idMiembro2 + "_" + idMiembro1;
};

function EntrarEnCirculoCorrecto(result) {
    //alert('EntrarEnCirculoCorrecto - result: '+result);
    if (result > 0) {
        gRol = result;
        // location.reload();
        //window.location.href = '/Tree.aspx';
        location.reload();
    }
    else {
        //Index-Solicitar Acceso Círculo
        //alert('Index-Solicitar Acceso Círculo');
        window.location.href = '/index/entrarEnCirculo';
    };

};

function EliminarCirculoCorrecto() {
    
        location.reload();

};
/*
function EliminarCirculoCorrecto(result) {
    if (result > 0) {
        gRol = result;
        location.reload();
    };
};
*/

function CargarSolicitudesCorrecto(result) {
   // alert('CargarSolicitudesCorrecto!');
   // alert('Nro. Solicitudes: ' + result.length);
    listSolicitudesEnviadas = $.grep(result, function (solicitud) {
        return solicitud.OpcionSolicitud == 'Enviada';
    });
    listSolicitudesRecibidas = $.grep(result, function (solicitud) {
        return solicitud.OpcionSolicitud == 'Recibida'; 
    });
   // alert('listSolicitudesEnviadas: '+ listSolicitudesEnviadas);
    if (listSolicitudesEnviadas)
        gNSolEnviadas = listSolicitudesEnviadas.length;
    else
        gNSolEnviadas = 0;
    if (listSolicitudesRecibidas)
        gNSolRecibidas = listSolicitudesRecibidas.length;
    else
        gNSolRecibidas = 0;

    //alert('gNSolRecibidas: ' + gNSolRecibidas);
    sTdSolRecibidas.find('.contaSol').html(' ('+gNSolRecibidas+')');
    //Sustituir(sTdSolRecibidas, '_nRec', gNSolRecibidas);
   // alert('gNSolEnviadas: ' + gNSolEnviadas);
    //Sustituir(sTdSolEnviadas, '_nEnv', gNSolEnviadas);
    sTdSolEnviadas.find('.contaSol').html(' (' + gNSolEnviadas + ')');

    //alert('listSolicitudesEnviadas: ' + listSolicitudesEnviadas.length+' listSolicitudesRecibidas: ' + listSolicitudesRecibidas.length);
    //    if(listSolicitudesEnviadas!=null) alert('listSolicitudesEnviadas: ' + listSolicitudesEnviadas.length);
     //   if (listSolicitudesRecibidas!=null) alert('listSolicitudesRecibidas: ' + listSolicitudesRecibidas.length);


    ActualizarTree();
};

/*-------------------------- Funciones SOLICITUDES --------------------------------------------------*/
function PresentarSolicitudes() {
    sSolTree.show();
    sSolX.show();
    sBarra.show();
    sSolTree.find('.solicitud').remove();
    sSolTree.find('.barra').remove();

    var listSolicitudes;
    if (gOpcionTree == 'recibidas') {
        listSolicitudes = listSolicitudesRecibidas;
        sTituloCabSolRecibidas.show();
        sTituloCabSolEnviadas.hide();
    }
    else {
        listSolicitudes = listSolicitudesEnviadas;
        sTituloCabSolRecibidas.hide();
        sTituloCabSolEnviadas.show();
    };

    $.each(listSolicitudes, function (i, solicitud) {
        var arrTextoSolX = new Array();
        var arrBotonesSolX = new Array();
        var sSolicitud = sSolX.clone();
        //BARRA
        var sBarraClon = sBarra.clone();
        var sTdNomApeEmisorSolX = sSolicitud.find('#tdNomApeEmisorSolX');
        var sImgTdFotoEmisorSolX = sSolicitud.find('#tdFotoEmisorSolX img');
        var sTdNomApeCirculoSolX = sSolicitud.find('#tdNomApeCirculoSolX');
        var sImgFotoCirculoSolX = sSolicitud.find('#fotoCirculoSolX img');

        var sTextoSolXFamiliar = sSolicitud.find('#textoSolXFamiliar');
        var sTextoSolXRelacionado = sSolicitud.find('#textoSolXRelacionado');
        var sTextoSolXPeticionEditor = sSolicitud.find('#textoSolXPeticionEditor');
        var sTextoSolXInvitado = sSolicitud.find('#textoSolXInvitado');
        var sBNaranjaSolXAceptar = sSolicitud.find('#bNaranjaSolXAceptar');
        var sBNaranjaSolXRechazar = sSolicitud.find('#bNaranjaSolXRechazar');
        var sBGrisSolXCancelar = sSolicitud.find('#bGrisSolXCancelar');

        sSolicitud.attr('class', 'solicitud');
        sBarraClon.attr('class', 'barra');
        sSolicitud.attr('id', 'solX_'+i);
        sBarraClon.attr('id', 'barraSolX_'+i);

        arrTextoSolX = [sTextoSolXFamiliar, sTextoSolXRelacionado, sTextoSolXPeticionEditor, sTextoSolXInvitado];
        arrBotonesSolX = [sBNaranjaSolXAceptar, sBNaranjaSolXRechazar, sBGrisSolXCancelar];
        $.each(arrTextoSolX, function (i, sel) { sel.hide(); });
        $.each(arrBotonesSolX, function (i, sel) { sel.hide(); });
        Sustituir(sTdNomApeEmisorSolX, "_Nombre", solicitud.NombreA);
        Sustituir(sTdNomApeEmisorSolX, "_Apellidos", solicitud.ApellidosA);
        PonerFotoUsuario(sImgTdFotoEmisorSolX, solicitud.FotoA, solicitud.SexoA, 40);
        arrTextoSolX[solicitud.TipoSolicitud - 1].show();
        Sustituir(sTdNomApeCirculoSolX, "_Nombre", solicitud.NombreB);
        Sustituir(sTdNomApeCirculoSolX, "_Apellidos", solicitud.ApellidosB);
        PonerFotoUsuario(sImgFotoCirculoSolX, solicitud.FotoB, solicitud.SexoB, 40);
        if (gOpcionTree == 'recibidas') {
            sBNaranjaSolXAceptar.show();

            sBNaranjaSolXAceptar.click(function () {
                switch (solicitud.TipoSolicitud) {
                    case 1: // Aceptar Miembro Familiar
                        //alert('Click Aceptar Miembro Familiar');
                        //Hay que entrar en el círculo de la solicitud si no es el actual

                      //  console.log('gCirculo: ' + gCirculo + ' solicitud.IdCirculoA: ' + solicitud.IdCirculoA + ' solicitud.IdCirculoB: ' + solicitud.IdCirculoB);
                        if (solicitud.IdCirculoB != gCirculo) {

                            LifeBook.LibreriaWebService.WsActualizarSesionSolicitudTree('aceptarMiembro',solicitud.IdSolicitud,
                                function () {
                                    var aliasCirculoSolicitud = '';
                                    $.each(listCirculosFamiliares, function (i, circulo) {
                                        console.log('circulo.IdCirculo: ' + circulo.IdCirculo);
                                        if (circulo.IdCirculo == solicitud.IdCirculoB) {
                                            aliasCirculoSolicitud = circulo.Alias;
                                            return false;
                                        };
                                    });
                                    // console.log('aliasCirculoSolicitud: ' + aliasCirculoSolicitud);
                                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + aliasCirculoSolicitud;
                                });
                        }
                        else {
                            gOpcionTree = 'aceptarMiembro';
                            gSolicitudSel = solicitud;
                            /*
                            Sustituir(sTdNomApeEmisorConArbol, "_Nombre", solicitud.NombreA);
                            Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", solicitud.ApellidosA);
                            PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), solicitud.FotoA, solicitud.SexoA, 40);
                            Sustituir(sTdNomApeCirculoConArbol, "_Nombre", solicitud.NombreB);
                            Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", solicitud.ApellidosB);
                            PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), solicitud.FotoB, solicitud.SexoB, 40);
                            //sTextoConArbol.show();
                            //sTableTipoInvitado.hide();
                            haySeleccion = false;
                            sBNaranjaConArbol.click(function () {
                                console.log('sBNaranjaConArbol.click - haySeleccion: ' + haySeleccion);
                                if (haySeleccion) {
                                    LifeBook.LibreriaWebService.WsAceptarSolicitud(solicitud.IdSolicitud, gMiembroSel.IdMiembro, 1,
                                        function () {

                                            // window.location.href='/tree/solicitudesRecibidas';
                                            //window.location.href = '/Tree.aspx';
                                            location.reload();
                                        });
                                }
                                else {
                                    Notifica('Solicitudes_SeleccionaMiembro', listNotGen);
                                };
                            });

                            */
                            ActualizarTree();

                        };
                        break;
                    case 2: //Aceptar Relacionado
                        LifeBook.LibreriaWebService.WsAceptarSolicitud(solicitud.IdSolicitud, null, 2,
                                   function () {
                                       // alert('Solicitud aceptada');
                                       //window.location.href = '/tree/solicitudesRecibidas';
                                       //window.location.href = '/Tree.aspx';
                                       location.reload();
                                   });
                        //ActualizarTree();

                        break;

                    case 3: //Aceptar Petición Editor
                        LifeBook.LibreriaWebService.WsAceptarSolicitud(solicitud.IdSolicitud, null, 3,
                                  function () {
                                      // alert('Solicitud aceptada');
                                      //window.location.href = '/tree/solicitudesRecibidas';
                                      //window.location.href = '/Tree.aspx';
                                      location.reload();
                                  });
                        break;

                    case 4: // Aceptar Invitado
                        //alert('Click Aceptar Invitado');
                        if (solicitud.IdCirculoB != gCirculo) {

                            LifeBook.LibreriaWebService.WsActualizarSesionSolicitudTree('aceptarInvitado', solicitud.IdSolicitud,
                                function () {
                                    var aliasCirculoSolicitud = '';
                                    $.each(listCirculosFamiliares, function (i, circulo) {
                                        //console.log('circulo.IdCirculo: ' + circulo.IdCirculo);
                                        if (circulo.IdCirculo == solicitud.IdCirculoB) {
                                            aliasCirculoSolicitud = circulo.Alias;
                                            return false;
                                        };
                                    });
                                    // console.log('aliasCirculoSolicitud: ' + aliasCirculoSolicitud);
                                    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + aliasCirculoSolicitud;
                                });
                        }
                        else {
                            gOpcionTree = 'aceptarInvitado';
                            gSolicitudSel = solicitud;


                            /*
                            Sustituir(sTdNomApeEmisorConArbol, "_Nombre", solicitud.NombreA);
                            Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", solicitud.ApellidosA);
                            PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), solicitud.FotoA, solicitud.SexoA, 40);
                            Sustituir(sTdNomApeCirculoConArbol, "_Nombre", solicitud.NombreB);
                            Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", solicitud.ApellidosB);
                            PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), solicitud.FotoB, solicitud.SexoB, 40);
                            haySeleccion = false;
                            esFamiliar = false;
                            esRelacionado = false;
                            esEditor = false;
                            sRbFamiliar.prop('checked', false);
                            sRbRelacionado.prop('checked', false);
                            sCbPermisoEditor.prop('checked',false);
                            sBNaranjaConArbol.click(function () {
                                esFamiliar = sRbFamiliar.prop('checked');
                                esRelacionado = sRbRelacionado.prop('checked');
                                esEditor = sCbPermisoEditor.prop('checked');
                                if (!esFamiliar && !esRelacionado) Notifica('Solicitudes_SeleccionaTipoInvitado', listNotGen);
                                else if (esRelacionado) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(solicitud.IdSolicitud,null,'relacionado',esEditor,
                                    function () {
                                        //window.location.href = '/Tree.aspx';
                                        location.reload();
                                    }); 
                                else if (esFamiliar && !haySeleccion) Notifica('Solicitudes_SeleccionaMiembro', listNotGen);
                                else if (esFamiliar && haySeleccion) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(solicitud.IdSolicitud, gMiembroSel.IdMiembro, 'familiar', esEditor,
                                    function () {
                                        //window.location.href = '/Tree.aspx';
                                        location.reload();
                                    });
                              
                            });
                            */

                            ActualizarTree();
                        };

                        break;
                       
                };
            });
            sBNaranjaSolXRechazar.show();
            sBNaranjaSolXRechazar.click(function () {
                /*
                console.log('solicitud.IdSolicitud: ', solicitud.IdSolicitud);
                console.log('solicitud.IdMiembro: ', solicitud.IdMiembro);
                console.log('solicitud.IdUsuario: ', solicitud.IdUsuario);
                console.log('solicitud.IdCirculoA: ', solicitud.IdCirculoA);
                console.log('solicitud.IdCirculoB: ', solicitud.IdCirculoB);
                console.log('solicitud.TipoSolicitud: ', solicitud.TipoSolicitud);
                console.log('listCirculosFamiliares[0].Alias: ', listCirculosFamiliares[0].Alias);
                */


                
                LifeBook.LibreriaWebService.WsEliminarSolicitud(solicitud.IdSolicitud,
                    function () {
                        //alert('Correcto');
                         if (solicitud.TipoSolicitud == 4)
                            location.reload();
                        else
                        LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
                    });
                
            });
        }
        else { //enviadas
            sBGrisSolXCancelar.show();
            sBGrisSolXCancelar.css('margin-top', '30px');
            sBGrisSolXCancelar.css('margin-left', '0')
            sBGrisSolXCancelar.click(function () {
                
                /*
                console.log('solicitud.IdSolicitud: ', solicitud.IdSolicitud);
                console.log('solicitud.IdMiembro: ', solicitud.IdMiembro);
                console.log('solicitud.IdUsuario: ', solicitud.IdUsuario);
                console.log('solicitud.IdCirculoA: ', solicitud.IdCirculoA);
                console.log('solicitud.IdCirculoB: ', solicitud.IdCirculoB);
                console.log('solicitud.TipoSolicitud: ', solicitud.TipoSolicitud);
                console.log('listCirculosFamiliares[0].Alias: ', listCirculosFamiliares[0].Alias);
                */
                
                LifeBook.LibreriaWebService.WsEliminarSolicitud(solicitud.IdSolicitud,
                    function () {
                        if (solicitud.TipoSolicitud == 4)
                            window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + listCirculosFamiliares[0].Alias;
                        else
                        LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);        
                    });
                
            });
        };
        if (i == listSolicitudes.length - 1) sSolicitud.find('#barraSolX').hide();

        sSolTree.append(sSolicitud);
        //agregar barra
        sSolTree.append(sBarraClon);
    });
    sSolX.hide();
    sBarra.hide();
    // sBarra.not('.barra').hide();
    //$('#barraSolX').attr('style', 'display: none;');
    $('.barra:last').remove();
};

function PresentarSolRecConArbol() {
    sConArbol.show();
};

function InicializarSelectoresCirculo() {
    //Cálculo de iSelectoresCirculoSel
    iSelectorCirculoFamiliarSel = -1;
    iSelectorCirculoRelacionadoSel = -1;
    $.each(listCirculosFamiliares, function (i, circulo) {
        if (circulo.IdCirculo == gCirculo) {
            iSelectorCirculoFamiliarSel = i;
            return false
        };
    });
    if (iSelectorCirculoFamiliarSel < 0) {
        $.each(listCirculosRelacionados, function (i, circulo) {
            if (circulo.IdCirculo == gCirculo) {
                iSelectorCirculoRelacionadoSel = i;
                return false
            };
        });
    };
        //Cálculo de iSelectoresCirculo0 Inicial
        if (iSelectorCirculoFamiliarSel < 0) {
            iSelectorCirculoFamiliar0 = 0;
        }
        else {
            if (iSelectorCirculoFamiliarSel - gVentanaSel + 1 >= 0)
                iSelectorCirculoFamiliar0 = iSelectorCirculoFamiliarSel - gVentanaSel + 1;
            else
                iSelectorCirculoFamiliar0 = 0;
        };
        if (iSelectorCirculoRelacionadoSel < 0) {
            iSelectorCirculoRelacionado0 = 0;
        }
        else {
            if (iSelectorCirculoRelacionadoSel - gVentanaSel + 1 >= 0)
                iSelectorCirculoRelacionado0 = iSelectorCirculoRelacionadoSel - gVentanaSel + 1;
            else
                iSelectorCirculoRelacionado0 = 0;
        };
       
};

function GenerarCirculosSel(tipo) {
    var listCirculos;
    var sResultados;
    var iSelCirculo0;
    var ventanaRes;
    var sPuntaUp;
    var sPuntaDown;
    if (tipo == "TusCirculos") {
        listCirculos = listCirculosFamiliares;
        sResultados = sResTusCirculos;
        iSelCirculo0 = iSelectorCirculoFamiliar0;
        ventanaRes = gVentanaSel;
        sPuntaUp = sTusCirculosPuntaUp;
        sPuntaDown = sTusCirculosPuntaDown;
    }
    else {
        listCirculos = listCirculosRelacionados;
        sResultados = sResRelacionados;
        iSelCirculo0 = iSelectorCirculoRelacionado0;
        ventanaRes = gVentanaSel;
        sPuntaUp = sRelacionadosPuntaUp;
        sPuntaDown = sRelacionadosPuntaDown;
    };
    sResultados.html('');
    sPuntaUp.hide();
    sPuntaDown.hide();
    if (listCirculos.length > 0) {

        if (iSelCirculo0 > 0) sPuntaUp.show();
        //PRUEBAS
    /*   console.log('tipo: ' + tipo);
        console.log('iSelCirculo0: ' + iSelCirculo0);
        console.log('ventanaRes: ' + ventanaRes);
        console.log('listCirculos.length: ' + listCirculos.length);
        for (var i = 0; i < listCirculos.length; i++) {
            console.log('Circulo: ' + listCirculos[i].IdCirculo + ' - Rol: ' + listCirculos[i].Rol);
        };*/
        //========================
        if (iSelCirculo0 + ventanaRes < listCirculos.length) sPuntaDown.show();
        if (tipo == "Relacionados") sNingunaRelacionada.hide();
        sCirculoX.show();
        var iFin;
        if (iSelCirculo0 + ventanaRes > listCirculos.length) iFin = listCirculos.length;
        else iFin = iSelCirculo0 + ventanaRes;

        var listCirculosSel;
        listCirculosSel = $.grep(listCirculos, function (circulo,i) {
            return i >= iSelCirculo0 && i < iFin;
        });

        $.each(listCirculosSel, function (i, circulo) {
            console.log('circulo.Alias: ' + circulo.Alias);
            console.log('circulo.Nombre: ' + circulo.Nombre);
            console.log('circulo.Apellidos: ' + circulo.Apellidos);
            console.log('circulo.Rol: ' + circulo.Rol);



            var sCirculoClon = sCirculoX.clone();
            sCirculoClon.attr('id', 'res_' + circulo.IdCirculo);

            sCirculoClon.find('.leyendaNuevoCirculo').hide();

            if (circulo.IdCirculo == sesCirculoPropio) { //CIRCULO PROPIO

                sCirculoClon.find('.leyendaCirculo').hide();
                sCirculoClon.find('.leyendaCirculoPropio').show();
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 60);
            }
            else { //CIRCULO NO PROPIO
                sCirculoClon.find('.leyendaCirculo').show();
                sCirculoClon.find('.leyendaCirculoPropio').hide();
                var nomApeClon = sCirculoClon.find('.nomApeX').html();
                sCirculoClon.find('.nomApeX').html(nomApeClon.replace('_Nombre', circulo.Nombre).replace('_Apellidos', circulo.Apellidos));
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 60);
            };
            if (circulo.IdCirculo == sesCirculo) {  //CIRCULO SELECCIONADO

                sCirculoClon.find('.logoX').css('background-image', 'url(/Images/support/circuloRojo.gif)');
            };
            //alert('circulo.IdCirculo: ' + circulo.IdCirculo);
            //--------------------------------------------------------------------
            //  sCirculoClon.find('.logoX').click( clickCirculo(circulo.IdCirculo)         
            //      ); //Fin Evento click
            //----------------------------------------------------------------------

            sCirculoClon.find('.logoX').click(function () {

                console.log('circulo.Alias: ' + circulo.Alias);
                console.log('circulo.Nombre: ' + circulo.Nombre);
                console.log('circulo.Apellidos: ' + circulo.Apellidos);
                window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + circulo.Alias
            }); //Fin Evento click

            //----------------------------------------------------------------------
            sCirculoClon.find('.rolX').html(sDdlRol.find('option')[circulo.Rol].innerText);
            /*
            if (tipo == "TusCirculos")
                sCirculoClon.find('.rolX').html(sDdlRol.find('option')[circulo.Rol].innerText);
            else
                sCirculoClon.find('.rolX').html('');
            */

            sResultados.append(sCirculoClon);



        });
/*
        for (var i = iSelCirculo0; i < iFin; i++) {
            var circulo = listCirculos[i];
            console.log('circulo.Alias: ' + circulo.Alias);
            console.log('circulo.Nombre: ' + circulo.Nombre);
            console.log('circulo.Apellidos: ' + circulo.Apellidos);

            var sCirculoClon = sCirculoX.clone();
            sCirculoClon.attr('id', 'res_' + circulo.IdCirculo);


            sCirculoClon.find('.leyendaNuevoCirculo').hide();
            

            if (circulo.IdCirculo == sesCirculoPropio) { //CIRCULO PROPIO
             
                sCirculoClon.find('.leyendaCirculo').hide();
                sCirculoClon.find('.leyendaCirculoPropio').show();
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 60);
            }
            else { //CIRCULO NO PROPIO
                sCirculoClon.find('.leyendaCirculo').show();
                sCirculoClon.find('.leyendaCirculoPropio').hide();
                var nomApeClon = sCirculoClon.find('.nomApeX').html();
                sCirculoClon.find('.nomApeX').html(nomApeClon.replace('_Nombre', circulo.Nombre).replace('_Apellidos', circulo.Apellidos));
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 60);
            };
            if (circulo.IdCirculo == sesCirculo) {  //CIRCULO SELECCIONADO
               
                sCirculoClon.find('.logoX').css('background-image', 'url(/Images/support/circuloRojo.gif)');
            };
            //alert('circulo.IdCirculo: ' + circulo.IdCirculo);
            //--------------------------------------------------------------------
            //  sCirculoClon.find('.logoX').click( clickCirculo(circulo.IdCirculo)         
            //      ); //Fin Evento click
            //----------------------------------------------------------------------
            
            sCirculoClon.find('.logoX').click(function () {

                console.log('circulo.Alias: ' + circulo.Alias);
                console.log('circulo.Nombre: ' + circulo.Nombre);
                console.log('circulo.Apellidos: ' + circulo.Apellidos);
              //  window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + circulo.Alias
            }); //Fin Evento click
          
            //----------------------------------------------------------------------
            if (tipo == "TusCirculos")
                sCirculoClon.find('.rolX').html(sDdlRol.find('option')[circulo.Rol].innerText);
            else
                sCirculoClon.find('.rolX').html('');
            sResultados.append(sCirculoClon);
        };//FIN for

*/

        sCirculoX.hide();
    }
    else {
        if (tipo == "Relacionados") sNingunaRelacionada.show();
    };

    function clickCirculo(cir) {
        return function () {
           // alert('Antes de EntrarEnCirculo ' + cir);
            if (gEstado == 'solicitudes' && gOpcionTree == 'peticionEditor1') {
                LifeBook.LibreriaWebService.WsEntrarEnCirculo(cir,
                    function (result) {
                        if (result >= ROL_EDITOR) { //Entra en el Círculo, ya tiene permiso editor o superior
                            //window.location.href = '/Tree.aspx';
                            location.reload();
                        }
                        else if (result == ROL_RELACIONADO || result == ROL_MIEMBRO) { //Se lanza solicitud de Editor
                            LifeBook.LibreriaWebService.WsActualizarSesionTree('peticionEditor2',
                                function () {
                                    //window.location.href = '/Tree.aspx';
                                    location.reload();
                                });


                            //window.location.href = '/tree/peticionEditor2';
                        };
                    });
            }
            else {

                LifeBook.LibreriaWebService.WsEntrarEnCirculo(cir, function (result) {
                    if (result > 0) {
                        gRol = result;
                        //window.location.href = '/Tree.aspx';
                        location.reload();
                    }
                    else {
                        //Index-Solicitar Acceso Círculo
                        //alert('Index-Solicitar Acceso Círculo');
                        window.location.href = '/index/entrarEnCirculo';
                    };
                });
            };

        };
    };

};//FIN function GenerarCirculosSel



