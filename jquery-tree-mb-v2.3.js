/*------------------------------------------------------------------------*/
/*---------------------- TREE MOBILE  -------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* VARIABLES GLOBALES ************************************/
/***************************************************************************/
//PARAMETROS
var GEN_ARBOL_MAX = 2; // Generación máxima que se representará en el árbol, desde 0
var topLeyenda1;
var topLeyenda2;
var height1;
var height2;
var wDispositivo;
var wSeccion;
var wArbol;
var wArbolIni;
var wFoto;

//LISTAS
var listNotGen;
var listNotSol;
var listNotTop;
var listMiembrosCirculo;
var listSolicitudesEnviadas;
var listSolicitudesRecibidas;
var listCirculosFamiliares;
var listCirculosRelacionados;
var listCirculosPeticionEditor;

//ARRAYS
var arrFotosArbolIni;
var arrSelForTree;
var arrIniForTree;
var arrSelectedFilesMiembro;
var arrOpcionesEdicion;
var arrSelEdicion;
var arrTitulos;
var arrTitulosForTreeIni;

//ARBOL
var gIdMiembroSel;
var gMiembroSel;
var gMiembro0;
var gIdMiembro0;
var gMiembroTitular;
var gMiembroD;
var gPrimogenito;
var gPrimogenitoAsc;
var gBenjamin;
var gGeneracionSel;
var gGradoParentescoSel;
var gTipoMiembroSel;
var gMiembroAscDirectoSel;
var gMiembroAscConsorteSel;
var gNMiembrosCirculo;
var gGenArbolMax;
var gHRama;
var gIRama;
var gVentanaSel;
var gSolicitudSel;

//CONTROL
var gOpcionTree;
var gEstado;
var gEstadoAnt;
var gRol;
var gCirculo;
var gCirculoSel;
var gCirculo8;
var gCirculoPropio;
var gCirculoPropio8;

var iMiembroSel;
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

var presentacionAnterior;

//NOTIFICACIONES
var gNotificaTopTree;
var jqNot;

//SOLICITUDES
var gNSolRecibidas;
var gNSolEnviadas;

//FORMULARIO
var imgB64Miembro;
var gNombreImgMiembro;
var reader;
var gDate;
var gAnioActual;
var gMesActual;
var gDiaActual;
var regexEmail;
var regexFecha;
//var regexAnio;
var camposCorrectos;

//REGISTRO
var lbInfoTree;
var lbRegTree;
var regNombre;
var regEmail;

//SELECTORES CIRCULO
var iSelectorCirculoPropio;
var iSelectorCirculoSeleccionado;
var iSelectorCirculoFamiliarSel;
var iSelectorCirculoRelacionadoSel;
var iSelectorCirculoFamiliar0;
var iSelectorCirculoRelacionado0;

/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
//SELECTORES CIRCULOS
var sDdlRol;
var sCirculoX;
var sResTusCirculos;
var sResRelacionados;
var sNingunaRelacionada;

//NOTIFICACIONES
var sNotTree;
var sTdCabNotTreeTitulo;
var sTextoNotTree;
var sBNaranjaNotTree;
var sBGrisNotTree;

//ARBOL INICIAL
var sArbolIni;
var sFotoTitularArbolIni; //Titular
var sFotoConsorteArbolIni;//Consorte
var sFotoDescendienteArbolIni; //Descendiente
var sFotoAscendienteArbolIni; //Ascendiente
var sLeyendaTitularCirculoPropioArbolIni;
var sLeyendaTitularNuevoCirculoArbolIni;

//ARBOL
var sArbol;
var sRama;
var sTableRama;
var sSeccion;
var sTableSeccion;
var sDdlParentesco;

//SOLICITUDES -RECIBIDAS/ENVIADAS
var sSolTree;
var sTituloCabSolRecibidas;
var sTituloCabSolEnviadas;
var sSolX;

//SOLICITUDES - CONECTAR ARBOL
var sConArbol;
var sTdNomApeEmisorConArbol;
var sTdFotoEmisorConArbol;
var sTdNomApeCirculoConArbol;
var sTdFotoCirculoConArbol;
var sBNaranjaConArbol;
var sBGrisConArbol;
var sTituloConArbol;
var sTituloConArbolInvitado;
var sTextoConArbol;
var sTipoInvitado;
var sRbFamiliar;
var sRbRelacionado;
var sCbPermisoEditor;

//SOLICITUDES - PETICION EDITOR
var sPetEditor;
var sFotoCirculoPetEditor;
var sTdNomApeCirculoPetEditor;
var sTextoPetEditor;
var sBNaranjaPetEditor;
var sBGrisPetEditor;
var sBarra;

//MENU - SOLICITUDES
var sOpcionesSol;
var sBMenuTreeSolicitudes;
var sSolRecibidas;
var sSolEnviadas;
var sSolPeticionEditor;

//MENU - EDITAR
var sBMenuTreeEditarCirculo;
var sTableOpcionesEdit;
var sOpcionesEditar;
var sEditDatos;
var sEditAniadirConsorte;
var sEditAniadirAscendiente;
var sEditAniadirDescendiente;
var sEditEliminar;

//MENU - NUEVO CIRCULO
var sBMenuTreeNuevoCirculo;

//MENU - ELIMINAR CIRCULO
var sBMenuTreeEliminarCirculo;

//FORMULARIO
var sForArbol;

//FORMULARIO - TITULO
var sTituloCabForTreeModificarDatos;
var sTituloCabForTreeAniadirConsorte;
var sTituloCabForTreeAniadirAscendiente;
var sTituloCabForTreeAniadirDescendiente;
var sTituloCabForTreeNuevoCirculo;

//FORMULARIO - CONTROLES
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
//var sTbCiudadResObi;
var sTbCiudadRes;
var sTbCiudadObi;



var sDdlRelacionH;
var sDdlRelacionM;

//FORMULARIO - CAJAS
var sFechaObi;
var sFechaNac;
var sInFechaObi;
var sInFechaNac;
var sEmail;
var sFoto;
var sFotoDrop;
var sFotoCargada;
var sImgFotoCargada;
var sInputFile;
var sRelacionH;
var sRelacionM;
var sForRelacion;
var sCiudadRes;
var sCiudadObi;

//FORMULARIO - BOTONES
var sBSubirFoto;
var sBCambiarFoto;
var sBCancelar;
var sBGuardar;



/*------------------------------------------------------------------------*/
/*----------------------INICIO 1 - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {

  // console.log('HOLA soy jquery-tree-mb');

   CalcularParametrosDispositivo();

   LeerSesionTree();
     
    AsignarSelectoresBase();

    InicializarVariables();
 
    CargarNotificacionesTree();

    //arrIniForTree = InicializarSelectoresFormularioTree(arrSelForTree, '#999999', 'black'); // ELIMINAR
    //ActivarEventosBase(); //ELIMINAR

    ActivarEventosMenuTree();
 ActivarEventosEditar();
 ActivarEventosFormulario();
 ActivarEventoNuevoCirculo();
 ActivarEventoEliminarCirculo();
 ActivarEventosSolicitudes();

 //ActivarEventosSelectores();

/*
   
   
   
   
    ActivarEventoEliminarCirculo();
  */
    lbInfoTree = new LifeBook.InfoTree();

  LifeBook.LibreriaWebService.WsCargarInfoTree(CargarInfoTreeCorrecto);
    
    
    $(window).on("orientationchange", function (event) {

    //    jqOrientacionVertical = !jqOrientacionVertical;
     //   console.log("This device is in " + event.orientation + " mode! " + jqOrientacionVertical + " jqPresentacionMaster= " + jqPresentacionMaster);
        CalcularParametrosDispositivo();
        if (gEstado == 'navegacion') PresentarArbol();
    });
    
   

    //console.log('FIN DOCUMENT READY');
});

/*------------------------------------------------------------------------*/
/*------------------ INICIO 2 - CARGAR InfoTree Correcto ------------------*/
/*------------------------------------------------------------------------*/
function CargarInfoTreeCorrecto(result) {
    //console.log('CargarInfoTreeCorrecto');
    lbInfoTree = result;
    listCirculosFamiliares = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol > ROL_RELACIONADO;
    });
    
    listCirculosRelacionados = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol <= ROL_RELACIONADO;
    });

    listCirculosPeticionEditor = $.grep(lbInfoTree.CirculosSelector, function (circulo) {
        return circulo.Rol == ROL_RELACIONADO || circulo.Rol == ROL_MIEMBRO;
    });

    
    listMiembrosCirculo = lbInfoTree.CirculoTree.MiembrosCirculo;
    OrdenarListMiembros();
   // listAutoresCirculo = lbInfoTree.CirculoTree.AutoresCirculo; //ELIMINAR
    gNMiembrosCirculo = listMiembrosCirculo.length;
    
    gMiembroTitular = $.grep(listMiembrosCirculo, function (miembro) {
        return miembro.TipoMiembro == 0;
    })[0];
    if (gIdMiembroSel > 0) {
        gMiembroSel = Miembro(gIdMiembroSel);
    };
    CalcularMiembro0Inicial();
    gMiembroSel = gMiembroTitular;
    gIdMiembroSel = gMiembroSel.IdMiembro;
    
    DeterminarEstado();
    
    //GenerarCirculosSelector();
    InicializarSelectoresCirculo();

    
    if (gEstado == 'solicitudes') LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
    else ActualizarTree();
    

   // if (gEstado == 'solicitudes') gEstado = 'navegacion';

   // ActualizarTree();
};


/*------------------------------------------------------------------------*/
/*--------- INICIO 3 y CAMBIOS DE ESTADO - ACTUALIZAR TREE --------------*/
/*------------------------------------------------------------------------*/
function ActualizarTree() {
   
    estaClickActivo = true;

 $('.fragmentTree').hide();
    //console.log('ActualizarTree - gEstado: '+gEstado);
  /*
    if (gCirculo == gCirculoPropio || gRol < 3) {
        sBMenuTreeEliminarCirculo.hide();
    };
    */
    // console.log('estadoAnt: ' + gEstadoAnt);
    // console.log('estado: ' + gEstado);
    // console.log('gCirculoPropio: ' + gCirculoPropio);
    // console.log('gCirculoSel: ' + gCirculoSel);
    //  console.log('gCirculo: ' + gCirculo);
 sBNaranjaNotTree.css('opacity', '1.0');

    switch (gEstado) {

        case "selector":
            //console.log('gOpcionTree: ' + gOpcionTree);
          //  gEstado = "navegacion";

            //sMenuCab.click();
            switch (gOpcionTree) {
                case "tusCirculos":
                    sTusCirculos.show();
                    
                    GenerarCirculosSel('TusCirculos');
                    break;

                case "relacionados":
                    sRelacionados.show();
                    GenerarCirculosSel('Relacionados');
                    break;

            };
            
            LifeBook.LibreriaWebService.WsActualizarSesionTree('navegacion' /* ,
                                function () {
                                    // window.location.href = '/Tree.aspx';
                                    location.reload();
                                }  */ );

            break;

        case "menuTree":
            console.log('ActualizarTree-menuTree');
            console.log('gEstadoAnt: ' + gEstadoAnt);
            console.log('presentacionAnterior: ' + presentacionAnterior);

            sMenuTree.show();

            if ((presentacionAnterior == 'navegacion' || presentacionAnterior == 'edicionInicio' || presentacionAnterior == 'selector')
           && gCirculo != gCirculoPropio
           && gRol > ROL_EDITOR)
                sBMenuTreeEliminarCirculo.show();
            else
                sBMenuTreeEliminarCirculo.hide();

            switch (gEstadoAnt) {
                case "navegacion":
                    sMenuTree.css('margin-top', '50px');
                    sOpcionesEditar.hide();
                   // sOpcionesSol.hide();
                    break;

                case "edicion":
                    sMenuTree.css('margin-top', '0px');
                    gNotificaTopTree = "EdicionOpcionMenu_mb";
                    NotificaTopTree(gNotificaTopTree, listNotTop);
                    $('.bMenuTreeNaranja_mb').hide();
                    sBMenuTreeEditarCirculo.show();
                    sOpcionesEditar.show();

                    //OCULTAR
                    sTableCompartir.hide();
                    sTableAyudaMenu.hide();
                    
       
                    break;

            };

            break;

        case "edicionInicio":
            sArbol.html('');
           
            if (gCirculo == gCirculoPropio)
                            gNotificaTopTree = "EdicionInicio";
            else
                gNotificaTopTree = "EdicionNuevoCirculo";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            gMiembro0 = listMiembrosCirculo[0];
            gMiembroSel = gMiembro0;
            PresentarArbolIni();
            sOpcionesSol.hide();
            sEditDatos.hide();
            sEditEliminar.hide();
            //sOpcionesSol.css('display', 'none');
            /*
            
            sArbol.hide();
            sConArbol.hide();
            
     
            sSolTree.hide();
            sBMenuTreeNuevoCirculo.show();
            
            */
            break;

        case "formulario":
           
            sForArbol.show();
            PresentarFormulario();
            /*
            sTableOpcionesEdit.slideUp(200);
            sBMenuTreeNuevoCirculo.hide()
            
            if (gEstadoAnt == 'edicionInicio' || gEstadoAnt == 'formulario') {
                PresentarArbolIni();
            }
            else if (gEstadoAnt == 'edicion') {
            };
            */
            break;

        case "edicion":
            sBNaranjaNotTree.css('opacity', '0.5');
            gNotificaTopTree = "EdicionMiembroArbol_mb";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            PresentarArbol();
            //CODIGO
            /*
            sSolTree.hide();
            sArbolIni.hide();
            sAutoresArbol.hide();
            sBMenuTreeNuevoCirculo.hide();
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
            */
            break;

        case "eliminar":
            /*
            sConArbol.hide();
            sBMenuTreeNuevoCirculo.hide()
            */
            if (esMenuSubcabActivo) {
                esMenuSubcabActivo = false;
                sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            };
            gNotificaTopTree = "Eliminar";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            
            break;

        case "eliminarCirculo":
            gNotificaTopTree = "EliminarCirculo";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            Sustituir(sTextoNotTree, "_Nombre", gMiembroTitular.Nombre);
            Sustituir(sTextoNotTree, "_Apellidos", gMiembroTitular.Apellidos);




            /*
            sConArbol.hide();
            sAutoresArbol.hide();
            sTableOpcionesEdit.slideUp(200);
            $('.menu').css('color', '#0377aa');
            sBMenuTreeEliminarCirculo.css('color', '#f024bb');
            gNotificaTopTree = "EliminarCirculo";
            NotificaTopTree(gNotificaTopTree, listNotTop);
            Sustituir(sTextoNotTree, "_Nombre", gMiembroTitular.Nombre);
            Sustituir(sTextoNotTree, "_Apellidos", gMiembroTitular.Apellidos);
            */
            break;

        case "navegacion":
            //console.log('case "navegacion" :' + gEstado);
            if (esMenuSubcabActivo) {
                esMenuSubcabActivo = false;
                sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            };
            /*
            
            sTableOpcionesEdit.hide();
            sNotTree.hide();
            sConArbol.hide();
            sSolTree.hide();
            sArbol.css('margin-top', '10px');
            sBMenuTreeNuevoCirculo.show();
            switch (gEstadoAnt) {
                case 'forNuevoCirculo':
                    sArbolIni.hide();
                    break;
                case 'solicitudes':
                    sOpcionesSol.slideUp(200);
                    break;
            };
            
            */
            PresentarArbol();
            break;

        case "forNuevoCirculo":
            
            if (esMenuSubcabActivo) {
                esMenuSubcabActivo = false;
                sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            };
            //if (gEstadoAnt == 'edicionInicio') sOpcionesEditar.show();
            PresentarFormulario();
           
            //InsertarSelectorNuevoCirculo();
            
            /*
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
            sBMenuTreeNuevoCirculo.css('color', '#f024bb');
            */
            break;

        case "solicitudes":
            if (esMenuSubcabActivo) {
                esMenuSubcabActivo = false;
                sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            };
            switch (gOpcionTree) {
                case 'solicitudes':
                    if (gNSolRecibidas > 0) {
                        gOpcionTree = 'recibidas';
                        //sSolRecibidas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else if (gNSolEnviadas > 0) {
                        gOpcionTree = 'enviadas';
                        //sSolEnviadas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {
                        //sSolTree.find('.solicitud').remove();
                        //sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                    };
                    break;

                case 'enviadas':
                    if (gNSolEnviadas > 0) {
                        gOpcionTree = 'enviadas';
                        //sSolEnviadas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {

                        //sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                        gOpcionTree = 'solicitudes';
                    };
                    break;

                case 'recibidas':
                    if (gNSolRecibidas > 0) {
                        gOpcionTree = 'recibidas';
                        //sSolRecibidas.css('color', '#f024bb');
                        PresentarSolicitudes();
                    }
                    else {
                        //sSolTree.find('.solicitud').remove();
                        //sSolTree.hide();
                        gNotificaTopTree = 'NoHaySolicitudes';
                        NotificaTopTree("NoHaySolicitudes", listNotTop);
                        gOpcionTree = 'solicitudes';
                    };
                    break;

                case 'aceptarMiembro':
                    console.log('aceptarMiembro');

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
                    //----------------------------------
                    Sustituir(sTdNomApeEmisorConArbol, "_Nombre", gSolicitudSel.NombreA);
                    Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", gSolicitudSel.ApellidosA);
                    PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), gSolicitudSel.FotoA, gSolicitudSel.SexoA, 40);
                    haySeleccion = false;
                    sBNaranjaConArbol.click(function () {
                        //console.log('sBNaranjaConArbol.click - haySeleccion: ' + haySeleccion);
                        if (haySeleccion) {
                            LifeBook.LibreriaWebService.WsAceptarSolicitud(gSolicitudSel.IdSolicitud, gMiembroSel.IdMiembro, 1,
                                function () {
                                    // alert('Solicitud aceptada');
                                    //window.location.href = '/tree/solicitudesRecibidas';
                                    //window.location.href = '/Tree.aspx';
                                    location.reload();

                                });
                        }
                        else {
                            Notifica('Solicitudes_SeleccionaMiembro', listNotGen);
                        };
                    });

                    //----------------------------------
                    sConArbol.show();
                    sTituloConArbol.show();
                    sTituloConArbolInvitado.hide();
                    sTextoConArbol.show();
                    sTipoInvitado.hide();
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
                    //------------------------------------
                    
                                                    Sustituir(sTdNomApeEmisorConArbol, "_Nombre", gSolicitudSel.NombreA);
                                                    Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", gSolicitudSel.ApellidosA);
                                                    PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), gSolicitudSel.FotoA, gSolicitudSel.SexoA, 40);
                                                    //Sustituir(sTdNomApeCirculoConArbol, "_Nombre", gSolicitudSel.NombreB);
                                                    //Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", gSolicitudSel.ApellidosB);
                                                    //PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), gSolicitudSel.FotoB, gSolicitudSel.SexoB, 40);
                                                    haySeleccion = false;
                                                    esFamiliar = false;
                                                    esRelacionado = false;
                                                    esEditor = false;
                                                    sRbFamiliar.prop('checked', false);
                                                    sRbRelacionado.prop('checked', false);
                                                    sCbPermisoEditor.prop('checked', false);
                                                    sBNaranjaConArbol.click(function () {
                                                        esFamiliar = sRbFamiliar.prop('checked');
                                                        esRelacionado = sRbRelacionado.prop('checked');
                                                        esEditor = sCbPermisoEditor.prop('checked');
                                                        if (!esFamiliar && !esRelacionado) Notifica('Solicitudes_SeleccionaTipoInvitado', listNotGen);
                                                        else if (esRelacionado) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(gSolicitudSel.IdSolicitud, null, 'relacionado', esEditor,
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
                                                    



                    //------------------------------------
                    //sSolTree.hide();
                    sConArbol.show();
                    sTipoInvitado.show();
                    sTituloConArbol.hide();
                    sTituloConArbolInvitado.show();


                    break;



                case 'peticionEditor1':
                    
                    gNotificaTopTree = 'PeticionMiembroEditor';
                    NotificaTopTree("PeticionMiembroEditor", listNotTop);
                    sTusCirculos.show();
                    sTusCirculos.css('margin-top', '2px');
                    GenerarCirculosSel('PeticionEditor');
                   
                    break;

                case 'peticionEditor2':
                  
                    sPetEditor.show();
                    Sustituir(sTdNomApeCirculoPetEditor, "_Nombre", gMiembroTitular.Nombre);
                    Sustituir(sTdNomApeCirculoPetEditor, "_Apellidos", gMiembroTitular.Apellidos);
                    PonerFotoUsuario(sFotoCirculoPetEditor.find('img'), gMiembroTitular.Foto, gMiembroTitular.Sexo, 40);
                    Sustituir(sTextoPetEditor, "_NomCirculo", gMiembroTitular.Nombre);
                    Sustituir(sTextoPetEditor, "_ApeCirculo", gMiembroTitular.Apellidos);
                    break;

                case 'peticionEditor3':
                   // sPetEditor.hide();
                    gNotificaTopTree = 'PeticionMiembroEditorEnviada_mb';
                    NotificaTopTree(gNotificaTopTree, listNotTop);
                    break;







                    /*
                    sForArbol.hide();
                    sConArbol.hide();
                    sArbolIni.hide();
                    sArbol.hide();
                    sAutoresArbol.hide();
                    sNotTree.hide();
                    sOpcionesSol.slideDown(200);
                    sTableOpcionesEdit.slideUp(200);
                    $('.opcion').css('color', '#0377aa');
                    switch (gOpcionTree) {
                        case 'solicitudes':
                            if (gNSolRecibidas > 0) {
                                gOpcionTree = 'recibidas';
                                sSolRecibidas.css('color', '#f024bb');
                                PresentarSolicitudes();
                            }
                            else if (gNSolEnviadas > 0) {
                                gOpcionTree = 'enviadas';
                                sSolEnviadas.css('color', '#f024bb');
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
                                sSolEnviadas.css('color', '#f024bb');
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
                                sSolRecibidas.css('color', '#f024bb');
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
                            sSolTree.hide();
                            sConArbol.show();
                            PresentarArbol();
        
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
                    */
                    break;
            };
    }
};
/*------------------------------------------------------------------------*/
/*-------------------------- FIN INICIO ----------------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* LEER VARIABLES SESION ************************************/
/***************************************************************************/
function LeerSesionTree() {
    //console.log('LeerSesionTree');
 
    //sesRol = $('#tbCabSesRol').val();
    sesMiembroSeleccionado = $('#tbCabSesMiembroSeleccionado').val();
    if (sesMiembroSeleccionado) gIdMiembroSel = sesMiembroSeleccionado;
    else gIdMiembroSel = 0;
   // sesPresentacionTree = $('#tbCabSesPresentacionTree').val();
    //console.log('sesPresentacionTree: ' + sesPresentacionTree);
    sesOpcionTree = $('#tbCabSesOpcionTree').val();
    //sesCirculo = $('#tbCabSesCirculo').val();
    //sesCirculoPropio = $('#tbCabSesCirculoPropio').val();
    sesIdSolicitud = $('#tbCabSesIdSolicitud').val();

    console.log('sesPresentacionTree: ' + sesPresentacionTree);
    console.log('sesOpcionTree: ' + sesOpcionTree);
    console.log('sesIdSolicitud: ' + sesIdSolicitud);



};
  
/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES BASE *************************/
/***************************************************************************/

function AsignarSelectoresBase() {

    // Fragmentos Principales
    sSolTree = $('#cphMobile_solTree_mb');
    sNotTree = $('#cphMobile_notificacionTreemb_notTree');
    sConArbol = $('#cphMobile_conArbol_mb');
    sTituloConArbol = $('#tituloConArbol_mb');
    sTituloConArbolInvitado = $('#tituloConArbolInvitado_mb');
    sTipoInvitado = $('#tipoInvitado_mb');
    sTextoConArbol = $('#textoConArbol_mb');
    sPetEditor = $('#cphMobile_petEditor_mb');
    sForArbol = $('#cphMobile_forTreemb_forArbol');
    sArbolIni = $('#cphMobile_arbolIni_mb');
    sArbol = $('#cphMobile_arbol_mb');
    sSeccion = $('#seccion_mb');
    sTusCirculos = $('#cphMobile_tusCirculos_mb');
    sRelacionados = $('#cphMobile_relacionados_mb');
    sMenuTree = $('#cphMobile_menuTree_mb');

    //MENU SOLICITUDES
    sOpcionesSol = $('#cphMobile_opcionesSol_mb');
    sBMenuTreeSolicitudes = $('#cphMobile_bMenuTreeSolicitudes_mb');
    sSolRecibidas = $('#solRecibidas_mb');
    sSolEnviadas = $('#solEnviadas_mb');
    sSolPeticionEditor = $('#solPeticionEditor_mb');
    //MENU EDITAR
    sBMenuTreeEditarCirculo = $('#cphMobile_bMenuTreeEditarCirculo_mb');
    sOpcionesEditar = $('#cphMobile_opcionesEditar_mb');
    sEditDatos = $('#editDatos_mb');
    sEditAniadirConsorte = $('#editAniadirConsorte_mb');
    sEditAniadirAscendiente = $('#editAniadirAscendiente_mb');
    sEditAniadirDescendiente = $('#editAniadirDescendiente_mb');
    sEditEliminar = $('#editEliminar_mb');
    //MENU NUEVO CIRCULO
    sBMenuTreeNuevoCirculo = $('#cphMobile_bMenuTreeNuevoCirculo_mb');
    //MENU ELIMINAR CIRCULO
    sBMenuTreeEliminarCirculo = $('#cphMobile_bMenuTreeEliminarCirculo_mb');
    //MENU TUS CIRCULOS / RELACIONADOS
    sBTusCirculos = $('#mb-bTusCirculos');
    sBRelacionados = $('#mb-bRelacionados');

    //CIRCULOS SELECTOR
    sDdlRol = $('#cphMobile_ddlRol_mb');
    sDdlParentesco = $('#cphMobile_ddlParentesco_mb');
    sCirculoX = $('#circuloX_mb');
    sResTusCirculos = $('#resTusCirculos_mb');
    sResRelacionados = $('#resRelacionados_mb');
    sNingunaRelacionada = $('#ningunaRelacionada_mb');
   
    //ARBOL INICIAL
    sFotoTitularArbolIni = $('#fotoTitularArbolIni_mb');
    sFotoConsorteArbolIni = $('#fotoConsorteArbolIni_mb');
    sFotoDescendienteArbolIni = $('#fotoDescendienteArbolIni_mb');
    sFotoAscendienteArbolIni = $('#fotoAscendienteArbolIni_mb');
    sLeyendaTitularCirculoPropioArbolIni = $('#leyendaTitularCirculoPropioArbolIni_mb');
    sLeyendaTitularNuevoCirculoArbolIni = $('#leyendaTitularNuevoCirculoArbolIni_mb');
    sTableOpcionesSol = $('#tableOpcionesSol_mb');
    sTableOpcionesEdit = $('#tableOpcionesEdit_mb');

    //ARBOL
  
    sTableSeccion = $('#tableSeccion_mb');
    
    //SOLICITUDES - RECIBIDAS/ENVIADAS
    sTituloCabSolRecibidas = $('#tituloCabSolRecibidas_mb');
    sTituloCabSolEnviadas = $('#tituloCabSolEnviadas_mb');
    sSolX = $('#solX_mb');
    sBarra = $('#barraSolX_mb');

  //SOLICITUDES - CONECTAR ARBOL
    sTdNomApeEmisorConArbol = $('#tdNomApeEmisorConArbol_mb');
    sTdFotoEmisorConArbol = $('#tdFotoEmisorConArbol_mb');
    sTdNomApeCirculoConArbol = $('#tdNomApeCirculoConArbol_mb');
    sTdFotoCirculoConArbol = $('#fotoCirculoConArbol_mb');
    sBNaranjaConArbol = $('#bNaranjaConArbol_mb');
    sBGrisConArbol = $('#bGrisConArbol_mb');
    sRbFamiliar = $('#cphMobile_rbFamiliar_mb');
    sRbRelacionado = $('#cphMobile_rbRelacionado_mb');
    sCbPermisoEditor = $('#cbPermisoEditor_mb');




  //SOLICITUDES - PETICION EDITOR
    sFotoCirculoPetEditor = $('#fotoCirculoPetEditor_mb');
    sTdNomApeCirculoPetEditor = $('#tdNomApeCirculoPetEditor_mb');
    sTextoPetEditor = $('#textoPetEditor_mb');
    sBNaranjaPetEditor = $('#bNaranjaPetEditor_mb');
    sBGrisPetEditor = $('#bGrisPetEditor_mb');

   //NOTIFICACION TREE
    sTdCabNotTreeTitulo = $('#cabNotTree');
    sTextoNotTree = $('#textoNotTree');
    sBNaranjaNotTree = $('#cphMobile_notificacionTreemb_bNaranjaNotTree');
    sBGrisNotTree = $('#cphMobile_notificacionTreemb_bGrisNotTree');

    //FORMULARIO - TITULO
    sTituloCabForTreeModificarDatos = $('#tituloCabForTreeModificarDatos');
    sTituloCabForTreeAniadirConsorte = $('#tituloCabForTreeAniadirConsorte');
    sTituloCabForTreeAniadirAscendiente = $('#tituloCabForTreeAniadirAscendiente');
    sTituloCabForTreeAniadirDescendiente = $('#tituloCabForTreeAniadirDescendiente');
    sTituloCabForTreeNuevoCirculo = $('#tituloCabForTreeNuevoCirculo');

    //FORMULARIO - CONTROLES
    sTbNombre = $('#cphMobile_forTreemb_tbNombre');
    sTbApellidos = $('#cphMobile_forTreemb_tbApellidos');
    sRbVida = $('#cphMobile_forTreemb_rbVida');
    sRbAntepasado = $('#cphMobile_forTreemb_rbAntepasado');
   // sTbDiaNac = $('#cphMobile_forTree_tbDiaNac');
    //sDdlMesesNac = $('#cphMobile_forTree_ddlMesesNac');
    //sTbAnioNac = $('#cphMobile_forTree_tbAnioNac');
    //sTbDiaObi = $('#cphMobile_forTree_tbDiaObi');
    //sDdlMesesObi = $('#cphMobile_forTree_ddlMesesObi');
   // sTbAnioObi = $('#cphMobile_forTree_tbAnioObi');
    sTbEmail = $('#cphMobile_forTreemb_tbEmail');
    sRbMujer = $('#cphMobile_forTreemb_rbMujer');
    sRbHombre = $('#cphMobile_forTreemb_rbHombre');
    sTbCiudadNac = $('#cphMobile_forTreemb_tbCiudadNac');
    //sTbCiudadResObi = $('#cphMobile_forTree_tbCiudadResObi');
    sTbCiudadRes = $('#cphMobile_forTreemb_tbCiudadRes');
    sTbCiudadObi = $('#cphMobile_forTreemb_tbCiudadObi');


    sDdlRelacionH = $('#cphMobile_forTreemb_ddlRelacionH');
    sDdlRelacionM = $('#cphMobile_forTreemb_ddlRelacionM');

    //FORMULARIO - CAJAS
    sFechaObi = $('#fechaObi');
    sFechaNac = $('#fechaNac');
    sInFechaObi = $('#inFechaObi');
    sInFechaNac = $('#inFechaNac');

    sEmail = $('#email');
    sFoto = $('#foto');
    sFotoDrop = $('#fotoDrop');
    fotoDrop = document.getElementById("fotoDrop");
    sFotoCargada = $('#fotoCargada');
    sImgFotoCargada = $('#cphMobile_forTreemb_imgFotoCargada');
    sInputFile = $('#inputFile');
    sRelacionH = $('#relacionH');
    sRelacionM = $('#relacionM');
    sForRelacion = $('.forRelacion');
    sRelacion = $('#relacion');
    sCiudadRes = $('#ciudadRes');
    sCiudadObi = $('#ciudadObi');

    //FORMULARIO - BOTONES
    sBSubirFoto = $('#bSubirFoto');
    sBCancelar = $('#bCancelar');
    sBGuardar = $('#bGuardar');
    sBCambiarFoto = $('#bEliminarFoto');

};

/***************************************************************************/
/******************* INICIALIZAR VARIABLES      *************************/
/***************************************************************************/
function InicializarVariables() {
    $('#mb_subcab_arbol').attr('style', 'display:inline;');

    //Revisar
    /*
    topLeyenda1 = '94px';
    topLeyenda2 = '140px';
    height1 = '110px';
    height2 = '160px';
    
   // MOBILE:
    topLeyenda1 = '64px';
    topLeyenda2 = '110px';
    height1 = '80px';
    height2 = '130px';

*/
    //-----------------------

    gVentanaSel = 2;
    iSelectorCirculoFamiliar0 = 0;
    iSelectorCirculoRelacionado0 = 0;

    //Revisar
    arrSelForTree = [sTbNombre, sTbApellidos, sTbDiaNac, sDdlMesesNac, sTbAnioNac, sTbEmail, sTbDiaObi, sDdlMesesObi, sTbAnioObi, sTbCiudadNac, sTbCiudadRes, sTbCiudadObi, sDdlRelacionM, sDdlRelacionH];
    arrSelEdicion = [sEditDatos, sEditAniadirConsorte, sEditAniadirDescendiente, sEditAniadirAscendiente /*,sEditEliminar*/];
    arrFotosArbolIni = [sFotoTitularArbolIni, sFotoConsorteArbolIni, sFotoDescendienteArbolIni, sFotoAscendienteArbolIni];
    //-------------------------------------
    arrOpcionesEdicion = ["modificarDatos", "aniadirConsorte", "aniadirDescendiente", "aniadirAscendiente" /*,"eliminar */];
    arrTitulosForTreeIni = [sTituloCabForTreeModificarDatos.html(), sTituloCabForTreeAniadirConsorte.html(), sTituloCabForTreeAniadirDescendiente.html(), sTituloCabForTreeAniadirAscendiente.html()];
    arrIniForTree = new Array();
    regexEmail = /\S+@(\S+\.)+[A-z]{2,4}/;
    // regexAnio = /(\d{0}|\d{4})/;
    regexFecha = /(\d{4})[-\/ .]([01]?\d)[-\/ .]([0123]?\d)/;

    gDate = new Date();
    //gAnioActual = (new Date).getFullYear();
    gAnioActual = gDate.getFullYear();
    gMesActual = gDate.getMonth() + 1;
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
};

/***************************************************************************/
/******************* CARGAR NOTIFICACIONES TREE*********** *********************/
/***************************************************************************/
function CargarNotificacionesTree() {
    //console.log('CargarNotificacionesTree');
    LifeBook.LibreriaWebService.WsCargarNotificacionesTree(CargarNotificacionesTreeCorrecto);
};

function CargarNotificacionesTreeCorrecto(result) {
    //console.log('CargarNotificacionesTreeCorrecto');
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
/******************* FUNCION ActivarEventosMenuTree *************************/
/***************************************************************************/
function ActivarEventosMenuTree() {

    sIcoMenuSubcab.click(function () {
        if (esMenuSubcabActivo) {
            esMenuSubcabActivo = false;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            gEstado = presentacionAnterior;
            //sesPresentacion = presentacionAnterior;
            
        }
        else { //Presentar Menú Subcabecera
            if (esMenuCabActivo) {
                sMenuCab.click();
            };
            sOpcionesEditar.hide();
            sOpcionesSol.hide();
            $('.bMenuTreeNaranja_mb').show();
            esMenuSubcabActivo = true;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraRojo.png');
            //presentacionAnterior = sesPresentacion;
            //sesPresentacion = "menuTree";
            presentacionAnterior = gEstado;
            gEstado = "menuTree";
        };
        //console.log('gEstado: ' + gEstado);
        ActualizarTree();
    });


};

/***************************************************************************/
/******************* FUNCION OrdenarListMiembros ********************************/
/*     Ordena listMiembrosCirculo primero por TipoMiembro y luego por Edad   */
/********************************************************************************/
function OrdenarListMiembros() {
    //console.log('OrdenarListMiembros');
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

/***************************************************************************/
/******************* FUNCION CalcularMiembro0Inicial ***********************/
/*     Calcula gMiembro0 por defecto                                        */
/***************************************************************************/
function CalcularMiembro0Inicial() {
    //console.log('CalcularMiembro0Inicial');
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
/******************* FUNCION DeterminarEstado *************************/
/***************************************************************************/
function DeterminarEstado() {
    //console.log('DeterminarEstado - gEstado: '+gEstado + ' sesPresentacionTree: ' + sesPresentacionTree);
    //alert('DeterminarEstado: gRol: ' + gRol + ' gEstado: ' + gEstado);
    if (gEstado != "solicitudes" && gEstado !="selector") {
        if (gRol >= ROL_EDITOR && gNMiembrosCirculo < 2) gEstado = "edicionInicio";
        else gEstado = "navegacion";

    };
};

/***************************************************************************/
/******************* FUNCION NGeneraciones **************************/
/*     Número de generaciones de descendientes desde el miembro dado         */
/***************************************************************************/
function NGeneraciones(miembro0) {
    //console.log('NGeneraciones');
    if (miembro0.NDescendientes > 0)
        return Math.max.apply(Math, ExtraeListDescendencia(miembro0, 'Generacion')) - miembro0.Generacion;
    else return 0;
};
/***************************************************************************/
/******************* FUNCION ExtraeListDescendencia ********************************/
/***************************************************************************/
function ExtraeListDescendencia(miembro, propiedad) {
    var listDescendencia = new Array();
    AniadirDescendientes(miembro);
    return listDescendencia;

    function AniadirDescendientes(member) {
        var listDescendientes = $.grep(listMiembrosCirculo, function (m) {
            return m.IdMiembroAscDirecto == member.IdMiembro || m.IdMiembroAscConsorte == member.IdMiembro;
        });
        $.each(listDescendientes, function (iDescendiente, descendiente) {
            listDescendencia.push(descendiente[propiedad]);
            AniadirDescendientes(descendiente);
        });
    };
};

/***************************************************************************/
/******************* FUNCION PresentarArbol ********************************/
/***************************************************************************/
function PresentarArbol() {
   
    //console.log('PresentarArbol');
    //console.log('gEstado: ' + gEstado + ' gOpcionTree: ' + gOpcionTree);
    var pad;
    switch (gEstado) {
        case 'navegacion':
            pad = 100;
            break;
        case 'edicion':
            pad = 70;
            break;
        case 'solicitudes':
            if (gOpcionTree == 'aceptarMiembro') pad = 335;
            else if (gOpcionTree == 'aceptarInvitado') pad = 500;
            else pad = 270;
            break;
        default:
            pad = 250;
            break;
    };

    sArbol.css('padding-top', pad + 'px');
   
    sArbol.html('');
    //Calcula la máxima generación, si es superior a la máxima configurada, se iguala a la máxima
    gGenArbolMax = NGeneraciones(gMiembro0);
    if (gGenArbolMax > GEN_ARBOL_MAX) gGenArbolMax = GEN_ARBOL_MAX;
    else if (gGenArbolMax == 0) gGenArbolMax = 1;

    wArbol = (gGenArbolMax+1) * wSeccion;
    sArbol.css('width', wArbol + 'px');

    //console.log('gGenArbolMax: ' + gGenArbolMax);
    //console.log('wSeccion: ' + wSeccion);
    //console.log('wArbol: ' + sArbol.css('width'));

    arrTitulos = new Array();
    for (var i = 0; i < gGenArbolMax; i++) {
        arrTitulos[i] = false;
    };
    var idTableRama = '#tableRamaMb_' + gGenArbolMax;
    sTableRama = $(idTableRama);
    sRama = $('#ramaMb_' + gGenArbolMax);

    sArbol.show();
    
    sRama.show();
    sSeccion.show();
    wFoto = sSeccion.find('.fotoMiembro').width();
    //console.log('wFoto: ' + wFoto);

    gPrimogenito = true;
    gPrimogenitoAsc = true;
    gBenjamin = false;
    gIRama = 0;
    gMiembroD = gMiembro0;
    GenerarArbol(gMiembro0, 0, gGenArbolMax);
    sSeccion.hide();
    sRama.hide();
    haySeleccion = false;
};

/***************************************************************************/
/*******************   FUNCION GenerarArbol  *****************************/
/*  Parámetros                                                          */
/*  Miembro0 - Miembro orígen del árbol                                 */
/*  genArbolMax - Número máximo de generaciones que se representan         */
/*  genArbol - Generación del árbol - Inicialmente 0                       */
/***************************************************************************/
function GenerarArbol(miembro0, genArbol, genArbolMax) {
    //console.log('GenerarArbol');
    if (genArbol > genArbolMax) return;
    if (miembro0) {
        gMiembroD = miembro0;
        if (miembro0.NConsortes > 0) {
            $.each(ListConsortes(miembro0.IdMiembro), function (iConsorteMiembro0, consorteMiembro0) {
                gPrimogenito = true;
                //console.log('miembro0.Id: ' + miembro0.IdMiembro + ' consorteMiembro0.Id: ' + consorteMiembro0.IdMiembro + ' genArbol: ' + genArbol);
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
                        AniadirVerticales(miembro0.IdMiembro, consorteMiembro0.IdMiembro);
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
        var sVertical = sArbol.find('#linVerticalRMb_' + idRelacion);
        for (i = genArbol; i >= 0; i--) {
            var hVertical = sVertical.height();
            hVertical += gHRama;
            sVertical.height(hVertical);
            if (i > 0) {
                idRelacion = IdRelacion(Miembro(idAncestroD).IdMiembroAscDirecto, Miembro(idAncestroD).IdMiembroAscConsorte);
                sVertical = sArbol.find('#linVerticalRMb_' + idRelacion);
                if (sVertical.length > 0) {
                    idMiembroD = Miembro(idAncestroD).IdMiembroAscDirecto;
                    idMiembroC = Miembro(idAncestroD).IdMiembroAscConsorte;
                }
                else {
                    idRelacion = IdRelacion(Miembro(idAncestroC).IdMiembroAscDirecto, Miembro(idAncestroC).IdMiembroAscConsorte);
                    sVertical = sArbol.find('#linVerticalRMb_' + idRelacion);
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
    //console.log('GenerarRama');
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
        var sFotoD = sTableSeccionClon.find('#fotoDMb');
        sFotoD.attr('id', 'fotoDMb_' + miembroD.IdMiembro);
        //PonerFotoUsuario(sFotoD, miembroD.Foto, miembroD.Sexo, 65);
        PonerFotoUsuario(sFotoD, miembroD.Foto, miembroD.Sexo, wFoto);
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
        sTableSeccionClon.find('#nomApeD_mb').html(nomApeD);
        var datosDirectoClon = sTableSeccionClon.find('#leyendaDatosD_mb').html();
        datosDirectoClon = datosDirectoClon.replace('_cronoDirecto', cronoD)
                                            .replace('_ciudadDirecto', ciudadD);
        sTableSeccionClon.find('#leyendaDatosD_mb').html(datosDirectoClon);
        sTableSeccionClon.find('#flechaArribaD_mb').hide();
        if (miembroD.IdMiembro == gMiembro0.IdMiembro) sTableSeccionClon.find('#linHorizontalD_mb').remove();
        if (!(gPrimogenito && !arrTitulos[genArbol]) || !(miembroD.TipoMiembro == 0 || miembroD.TipoMiembro == 1 || miembroD.TipoMiembro == 3))
            sTableSeccionClon.find('#textoParentescoD_mb').remove();
        else {
            arrTitulos[genArbol] = true;
            if (NGeneraciones(gMiembro0) == 0) {
                sTableSeccionClon.find('#textoParentescoD_mb').html(sDdlParentesco.find('option')[0].innerText);
            }
            else {
                var dGen0 = miembroD.Generacion - gMiembro0.Generacion
                var nParentesco = gGenArbolMax - dGen0 + 1;
                if (nParentesco > 5) nParentesco = 5;
                sTableSeccionClon.find('#textoParentescoD_mb').html(sDdlParentesco.find('option')[nParentesco].innerText);
            };
        };
        if (miembroD.IdMiembro != gMiembroTitular.IdMiembro && miembroD.IdCirculoConectado == null) {
            sTableSeccionClon.find('#circuloD_mb').remove();
            sTableSeccionClon.find('#leyendaDatosD_mb').css('top', topLeyenda1);
            if ((genArbol == gGenArbolMax || miembroD.NDescendientes == 0 || miembroC.OcultarDescendecia) && !gBenjamin || miembroD.NConsortes > 1 && miembroC.NDescendientes == 0) {
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
                sTableSeccionClon.find('#circuloD_mb img').attr('src', '/Images/support/circuloGris.gif');
            };
        };
        if (genArbol == 0 && miembroD.IdMiembroAscDirecto) {
            var sFlechaArribaD = sTableSeccionClon.find('#flechaArribaD_mb');
            sFlechaArribaD.show();
            sFlechaArribaD.click(function () {
                if (gEstado == 'navegacion' | gEstado == 'solicitudes') {
                    gMiembro0 = Miembro(miembroD.IdMiembroAscDirecto);
                    gIdMiembro0 = gMiembro0.IdMiembro;
                    PresentarArbol();
                };
            });
        }
    }
    else {
        sTableSeccionClon.find('#seccionD_mb').html('');
    }; //Fin MiembroD
    /*------ Miembro C -------------------------------------------------------------------------------*/
    if (miembroC) {
        var cronoC;
        var anioNacC, anioObiC;
        var mesNacC;
        var diaNacC;
        var edadC;
        var ciudadC = '';
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
                edadC = Edad(anioNacC, mesNacC, diaNacC);
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
    
            if (sexoMiembroD == "M") {
           // if (miembroD.Sexo == "M") {
                miembroC.Sexo = "H";
            }
            else {
                miembroC.Sexo = "M";
            };
        };
        var sFotoC = sTableSeccionClon.find('#fotoCMb');
        sFotoC.attr('id', 'fotoCMb_' + miembroC.IdMiembro);
        //PonerFotoUsuario(sFotoC, miembroC.Foto, miembroC.Sexo, 65);
        PonerFotoUsuario(sFotoC, miembroC.Foto, miembroC.Sexo, wFoto);
        sTableSeccionClon.find('#nomApeC_mb').html(nomApeC);
        var datosConsorteClon = sTableSeccionClon.find('#leyendaDatosC_mb').html();
        datosConsorteClon = datosConsorteClon.replace('_cronoConsorte', cronoC)
                                             .replace('_ciudadConsorte', ciudadC);
        sTableSeccionClon.find('#leyendaDatosC_mb').html(datosConsorteClon);
        sTableSeccionClon.find('#flechaArribaC_mb').hide();
        sTableSeccionClon.find('#flechaDerechaC_mb').hide();
        //FLECHA ARRIBA CONSORTE
        if (miembroC.TipoMiembro == 3 && miembroC.IdMiembroAscDirecto) {
            var sFlechaArribaC = sTableSeccionClon.find('#flechaArribaC_mb');
            sFlechaArribaC.show();
            sFlechaArribaC.click(function () {
                if (gEstado == 'navegacion' | gEstado == 'solicitudes') {
                    gMiembro0 = Miembro(miembroC.IdMiembroAscDirecto);
                    gIdMiembro0 = gMiembro0.IdMiembro;
                    PresentarArbol();
                };
            });
        };
        //BOTON MOSTRAR / OCULTAR DESCENDENCIA
        if (miembroC.OcultarDescendecia) {
            sTableSeccionClon.find('#botonR_mb img').attr('src', '\\Images\\support\\botonRelacionMostrar.gif');
            sTableSeccionClon.find('#linVerticalRMb').remove();
        }
        else if (miembroC.NDescendientes == 0) {
            sTableSeccionClon.find('#linVerticalRMb').remove();
            sTableSeccionClon.find('#botonR_mb').remove();
        }
        else if (genArbol == gGenArbolMax) {
            sTableSeccionClon.find('#linVerticalRMb').remove();
            sTableSeccionClon.find('#botonR_mb img').attr('src', '\\Images\\support\\botonRelacionMostrar.gif');
        }
        else {
            sTableSeccionClon.find('#botonR_mb img').attr('src', '\\Images\\support\\botonRelacionOcultar.gif');
            //sTableSeccionClon.find('#linVerticalRMb').attr('id', 'linVerticalRMb_' + miembroC.IdMiembro);
            sTableSeccionClon.find('#linVerticalRMb').attr('id', 'linVerticalRMb_' + IdRelacion(gMiembroD.IdMiembro, miembroC.IdMiembro));
        };
        //EVENTO OCULTAR / MOSTRAR DESCENDENCIA
        sTableSeccionClon.find('#botonR_mb').click(function () {
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
            sTableSeccionClon.find('#circuloC_mb').remove();
            sTableSeccionClon.find('#leyendaDatosC_mb').css('top', topLeyenda1);
        }
        else {
            if (miembroC.fechaObi) {
                sTableSeccionClon.find('#circuloC_mb img').attr('src', '/Images/support/circuloGris.gif');
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
        sTableSeccionClon.find('#logoR_mb img').attr('src', '/Images/support/' + logoRelacion);
        //FLECHA DERECHA
        if (genArbol == gGenArbolMax && miembroC.NDescendientes > 0) {
            var sFlechaDerechaC = sTableSeccionClon.find('#flechaDerechaC_mb');
            sFlechaDerechaC.show();
            sFlechaDerechaC.click(function () {
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
            if (miembroC.Sexo == 'H')
                sTextoRelacion.html(sDdlRelacionH.find('option')[miembroC.Relacion].innerText);
            else
                sTextoRelacion.html(sDdlRelacionM.find('option')[miembroC.Relacion].innerText);
        },
        function () {
            sTextoRelacion.hide();
        });
    }
    else {
        sTableSeccionClon.find('#seccionR_mb').html('');
        sTableSeccionClon.find('#seccionC_mb').html('');
    };
    /*------ COMÚN -------------------------------------------------------------------------------*/
    sTableSeccionClon.find('.leyendaAniadir').hide();
    sTableSeccionClon.find('.fotoMiembro').click(function () {
        gIdMiembroSel = parseInt($(this).attr('id').split('_')[1]);
        gMiembroSel = Miembro(gIdMiembroSel);
        //alert('gMiembroSel: ' + gMiembroSel.Nombre + ' ' + gMiembroSel.Apellidos);
        gTipoMiembroSel = gMiembroSel.TipoMiembro;
        haySeleccion = true;
        switch (gEstado) {
            case 'edicion':
                sArbol.find('.fotoMiembro').css('border', '#82a542 solid 3px');
                $(this).css('border', '4px solid #f024bb');
                sBNaranjaNotTree.css('opacity', '1');
               // if (sTableOpcionesEdit.css('display', 'none')) sTableOpcionesEdit.fadeIn(400);
                // sTableOpcionesEdit.find('.opcion').css('color', '#0377aa');
                sOpcionesEditar.css('display', 'block');

                //OPCIONES EDICION DISPONIBLES
                //dispoAniadirConsorte
                if (gTipoMiembroSel == 2) dispoAniadirConsorte = false;
                else dispoAniadirConsorte = true;
                //dispoAniadirDescendiente
                if ((gTipoMiembroSel == 1 || gTipoMiembroSel == 4 || gTipoMiembroSel == 0) && (gMiembroSel.NConsortes < 2) ||
                      gTipoMiembroSel == 2 ||
                      gTipoMiembroSel == 3 && gMiembroSel.IdMiembro == miembroC.IdMiembro ||
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
                    gTipoMiembroSel == 3 && !miembroD.IdMiembroAscDirecto && !miembroC.IdMiembroAscDirecto && gMiembroSel.NDescendientes < 2)
                    dispoEliminar = true;
                else
                    dispoEliminar = false;
                //PRESENTAR OPCIONES DISPONIBLES
                sEditDatos.show();
                if (dispoAniadirConsorte) sEditAniadirConsorte.show();
                else sEditAniadirConsorte.hide();
                if (dispoAniadirDescendiente) sEditAniadirDescendiente.show();
                else sEditAniadirDescendiente.hide();
                if (dispoAniadirAscendiente) sEditAniadirAscendiente.show();
                else sEditAniadirAscendiente.hide();
                if (dispoEliminar) sEditEliminar.show();
                else sEditEliminar.hide();
                break;
            case 'navegacion':
                // alert('IdCirculoConectado: '+gMiembroSel.IdCirculoConectado);
                if (gMiembroSel.IdCirculoConectado > 0) {
                    //LifeBook.LibreriaWebService.WsEntrarEnCirculo(gMiembroSel.IdCirculoConectado, EntrarEnCirculoCorrecto);
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
    sTableRamaClon.attr('id', 'tableRamaMb_' + gGenArbolMax + '_' + gIRama);
    sArbol.append(sTableRamaClon);
    gHRama = sArbol.find('#tableRamaMb_' + gGenArbolMax + '_' + gIRama).height();
    gIRama++;
};

/***************************************************************************/
/******************* FUNCION Miembro *******************************************/
/* Función que extrae de listMiembros el miembro correspondiente a un idMiembro */
/********************************************************************************/
function Miembro(idMiembro) {
    var miembroList;
    miembroList = $.grep(listMiembrosCirculo, function (m) {
        return m.IdMiembro == idMiembro
    });
    if (miembroList) return miembroList[0]; else return null;
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
    var gen = 0;
    while (ancestro.IdMiembroAscDirecto && gen < generaciones) {
        ancestro = Miembro(ancestro.IdMiembroAscDirecto);
        gen++;
    };
    return ancestro;
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
/******************* FUNCION IdRelacion *************************/
/***************************************************************************/
function IdRelacion(idMiembro1, idMiembro2) {
    if (idMiembro1 < idMiembro2)
        return idMiembro1 + "_" + idMiembro2;
    else
        return idMiembro2 + "_" + idMiembro1;
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
/******************* FUNCION CalcularParametrosDispositivo *************************/
/***************************************************************************/
function CalcularParametrosDispositivo() {


    wDispositivo = $(window).width();

    //console.log('jqEsMovil: ' + jqEsMovil);
    //console.log('jqEsTabletMini: ' + jqEsTabletMini);
    //console.log('jqEsTablet: ' + jqEsTablet);
    //console.log('wDispositivo: ' + wDispositivo);

    if (jqEsMovil) {
        topLeyenda1 = '64px';
        topLeyenda2 = '110px';
        height1 = '80px';
        height2 = '130px';
        wSeccion = 160;
        if (wDispositivo < 480) GEN_ARBOL_MAX = 1;
        else if (wDispositivo >= 480 && wDispositivo < 640) GEN_ARBOL_MAX = 2;
        else GEN_ARBOL_MAX = 3;
    }
    else if (jqEsTabletMini) {
        topLeyenda1 = '74px';
        topLeyenda2 = '110px';
        height1 = '115px';
        height2 = '150px';
        wSeccion = 200;
        if (wDispositivo < 600) GEN_ARBOL_MAX = 1;
        else if (wDispositivo >= 600 && wDispositivo < 800) GEN_ARBOL_MAX = 2;
        else GEN_ARBOL_MAX = 3;
    }
    else if (jqEsTablet) {
       topLeyenda1 = '90px';
        topLeyenda2 = '110px';
        height1 = '130px';
        height2 = '160px';
        wSeccion = 255;
        if (wDispositivo < 765) GEN_ARBOL_MAX = 1;
        else if (wDispositivo >= 765 && wDispositivo < 1020) GEN_ARBOL_MAX = 2;
        else GEN_ARBOL_MAX = 3;
    }
    else {
        wSeccion = 160;
        GEN_ARBOL_MAX = 1;
    };

};


/***************************************************************************/
/******************* FUNCION NotificaTopTree  *************************/
/***************************************************************************/
function NotificaTopTree(ref, listNotTop) {
    //console.log('NotificaTopTree: ' + ref);
    $.each(listNotTop, function (i, notTop) {
        if (notTop.NotTopTreeId == ref) {
            var nT = listNotTop[i];
            PresentaNotTopTree(nT.Titulo, nT.Texto, nT.BotonNaranja, nT.BotonGris);
            return;
        };
    });

    function PresentaNotTopTree(titulo, texto, bNaranja, bGris) {
        //console.log('PresentaNotTopTree - titulo: ' + titulo+' texto: '+texto);
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
        sNotTree.focus();
        sNotTree.fadeIn(400);
    };
};


/***************************************************************************/
/******************* FUNCION PresentarArbolIni*************************/
/***************************************************************************/
function PresentarArbolIni() {
    //alert('PresentarArbolIni - gEstado: '+ gEstado);

    sArbolIni.show();
    wArbolIni = 1.5 * wSeccion;
    sArbolIni.css('width', wArbolIni + 'px');

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
            //MostrarOpcionesEdicion();//ERROR
            sOpcionesEditar.show();
            //sTdEditDatos.hide();
            //sTdEditEliminar.hide();

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
        sLeyendaTitularNuevoCirculoArbolIni.hide();
        sLeyendaTitularCirculoPropioArbolIni.show();
    };
    function MostrarLeyendaNuevoCirculo() {
        sLeyendaTitularNuevoCirculoArbolIni.show();
        sLeyendaTitularCirculoPropioArbolIni.hide();
    };
    function SeleccionarMiembro0() {
        // alert('SeleccionarMiembro0');
        sFotoTitularArbolIni.css('border', '4px solid #f024bb');
        //alert('src1: ' + sFotoTitularArbolIni.find('img').attr('src'));
        //sFotoTitularArbolIni.find('img').hide();
        // sFotoTitularArbolIni.find('img').attr('src', '/Images/support/siluetaHombre.gif');
        //sFotoTitularArbolIni.find('img').attr('src', '');
        sFotoTitularArbolIni.find('img').remove();
        sFotoTitularArbolIni.html('<img src="/Images/support/siluetaHombre.gif" />');
        // sFotoTitularArbolIni.find('img').attr('src', '/Images/support/siluetaHombre.gif');
        // $('#fotoTitularArbolIni img').attr("src", "/Images/support/siluetaHombre.gif");
        //sFotoTitularArbolIni.find('img').show();
        //alert('src2: ' + sFotoTitularArbolIni.find('img').attr('src'));
        // PonerFotoUsuario(sFotoTitularArbolIni, '', "H", 63);
    };
    function SeleccionarMiembroArbolIni() {
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
        wFoto = sSeccion.find('.fotoMiembro').width();
        //console.log('wFoto: ' + wFoto);
        PonerFotoUsuario(sFotoTitularArbolIni, gMiembro0.Foto, gMiembro0.Sexo, wFoto);
       // sFotoAscendienteArbolIni.find('img').css('width', '65px');
        //sFotoConsorteArbolIni.find('img').css('width', '65px');
        //sFotoDescendienteArbolIni.find('img').css('width', '65px');
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
        sLeyendaTitularCirculoPropioArbolIni.find('#nomApeLeyendaTitularCirculoPropioArbolIni_mb').html(nomApe0);
        var datosMiembro0 = sLeyendaTitularCirculoPropioArbolIni.html();
        datosMiembro0 = datosMiembro0.replace('_cronoTitular', crono0)
                                            .replace('_ciudadTitular', ciudad0);
        sLeyendaTitularCirculoPropioArbolIni.html(datosMiembro0);
    };
};
function MostrarLeyendaPropia() {
    sLeyendaTitularNuevoCirculoArbolIni.hide();
    sLeyendaTitularCirculoPropioArbolIni.show();
  
};

function ActivarEventosEditar() {

    $.each(arrOpcionesEdicion, function (iOpcion, opcion) {

        arrSelEdicion[iOpcion].click(function () {
            SeleccionarOpcionEdicion(iOpcion, opcion);
            if (gEstadoAnt == 'edicionInicio') SeleccionarFotoArbolIni(iOpcion, opcion);
            ActualizarTree();
        });

        arrFotosArbolIni[iOpcion].click(function () {
            //console.log('click - opcion: ', opcion);
            if (gEstado == 'edicionInicio') {
                SeleccionarOpcionEdicion(iOpcion, opcion);
                SeleccionarFotoArbolIni(iOpcion, opcion);
                ActualizarTree();
            };
        });
    });

    function SeleccionarOpcionEdicion(iOp, op) {
        //sIcoMenuSubcab.click();

        if (esMenuSubcabActivo) {
            esMenuSubcabActivo = false;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
        };
        gOpcionTree = op;
        gEstadoAnt = gEstado;
        presentacionAnterior = gEstadoAnt;
        gEstado = 'formulario';
        //$('.opcion').css('color', '#0377aa');
        //arrSelEdicion[iOp].css('color', '#f024bb');
        
    };

    function SeleccionarFotoArbolIni(iOp, op) {
        $.each(arrFotosArbolIni, function (iFoto, foto) {
            foto.css('border', '3px solid #82a542');
        });
        arrFotosArbolIni[iOp].css('border', '3px solid #f024bb');
    };

    sBMenuTreeEditarCirculo.click(function () {
        console.log('click sBMenuTreeEditarCirculo');
        console.log('gEstado: ' + gEstado);
        sBNaranjaNotTree.css('opacity', '0.5');
        gEstadoAnt = gEstado;
        presentacionAnterior = "edicion";
        sIcoMenuSubcab.click();
       
      //  gEstado = "edicion";
        //ActualizarTree();
    });


  

    sEditEliminar.click(function () {
        gOpcionTree = 'eliminar';
        gEstadoAnt = gEstado;
        gEstado = 'eliminar';
       // $('.opcion').css('color', '#0377aa');
        //$(this).css('color', '#f024bb');
        ActualizarTree();
    });
  /*
    //CODIGO
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
                if (gRol >= 3 && gNMiembrosCirculo < 2) gEstado = "edicionInicio";
                else gEstado = "navegacion";
                gEstadoAnt = "solicitudes";
                break;
        };
        ActualizarTree();
    });
    */
    //Evento Botón Naranja Notificaciones TopTree
    sBNaranjaNotTree.click(function () {
        //console.log('sBNaranjaNotTree.click - gNotificaTopTree: ' + gNotificaTopTree);
        //console.log('sBNaranjaNotTree.click - gEstado: ' + gEstado);
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

            case "EdicionMiembroArbol_mb":
                console.log('click en Editar Miembro');
                //console.log('haySeleccion: ' + haySeleccion);

                if (haySeleccion) {
                    gEstadoAnt = "edicion";
                    sIcoMenuSubcab.click();
                };
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

            case "PeticionMiembroEditorEnviada_mb":
                // VOLVER
                LifeBook.LibreriaWebService.WsEntrarEnCirculo(gCirculoPropio, function (result) {
                    if (result > 0) {
                        gRol = result;
                        LifeBook.LibreriaWebService.WsActualizarSesionTree('solicitudesEnviadas',
                                function () {
                                   // window.location.href = '/Tree.aspx';
                                    location.reload();
                                });
                        //window.location.href = '/tree/solicitudesEnviadas';
                    };
                });

                break;
               

        }; //Fin switch


    });

    sBGrisNotTree.click(function () {
        //console.log('sBGrisNotTree.click - gNotificaTopTree: ' + gNotificaTopTree);
        //console.log('sBGrisNotTree.click - gEstado: ' + gEstado);
/*
        switch (gEstado) {
            case 'eliminarCirculo':

                $('.menu').css('color', '#0377aa');
                gEstado = gEstadoAnt;
                gEstadoAnt = 'eliminarCirculo';
                ActualizarTree();
                break;

            case "edicion":
                gEstado = "navegacion";
                gEstadoAnt = "edicion";
                ActualizarTree();
                break;

            case "menuTree":

                break;
        };*/
        switch (gNotificaTopTree) {
            case "EliminarCirculo":
                gEstado = "navegacion";
                presentacionAnterior = "navegacion";
                gEstadoAnt = "navegacion";
                ActualizarTree();
                break;

            case "EdicionMiembroArbol_mb":
                //console.log('click en TERMINADO');
                gEstado = "navegacion";
                presentacionAnterior = "navegacion";
                gEstadoAnt = "navegacion";
                ActualizarTree();
                break;

            case "EdicionOpcionMenu_mb":
                gEstadoAnt = "navegacion";
                presentacionAnterior = "navegacion";
                sIcoMenuSubcab.click();
                break;
        };



    });
    
};
//Fin function ActivarEventosEditar

/***************************************************************************/
/******************* FUNCION ActivarEventosFormulario  *********************/
/***************************************************************************/

function ActivarEventosFormulario() {
    
    var patron = "Images/support/";

  

    $('#cphMobile_forTreemb_rbHombre, #cphMobile_forTreemb_rbMujer').change(function () {
        if (sImgFotoCargada.attr('src').indexOf('/support/') > -1) PonerFotoUsuario(sImgFotoCargada, '', ((sRbHombre.prop('checked')) ? "H" : "M"), W_FOTO_USUARIO_MB);
        sForRelacion.hide();
        (sRbHombre.prop('checked')) ? sRelacionH.show() : sRelacionM.show();
        /*
        if (sRbHombre.prop('checked')) {
            sRelacionM.hide();
            sRelacionH.show();
        }
        else {
            sRelacionM.show();
            sRelacionH.hide();
        };*/
    });


    /*
      sRbVida = $('#cphMobile_forTree_rbVida');
    sRbAntepasado = $('#cphMobile_forTree_rbAntepasado');
    sRbMujer = $('#cphMobile_forTree_rbMujer');
    sRbHombre = $('#cphMobile_forTree_rbHombre');

    */




    /********************* EVENTOS EN VIDA / ANTEPASADO *********************************************/
    sRbVida.click(function () {
        //console.log('Has pulsado En Vida');
        sEmail.show();
        sFechaObi.hide();
        sCiudadRes.show();
        sCiudadObi.hide();
    });
    sRbAntepasado.click(function () {
        //console.log('Has pulsado Antepasado');
        sEmail.hide();
        sFechaObi.show();
        sCiudadRes.hide();
        sCiudadObi.show();
    });

    /********************* EVENTOS MUJER / HOMBRE *********************************************/

    /*
    sRbMujer.mousedown(function () {
        console.log('click en sRbMujer');
        sRelacionM.show();
        $('#relacionH').attr('style', 'display:none;');
        //sRelacionH.hide();
        if (sImgFotoCargada.attr('src').indexOf(patron) > -1) sImgFotoCargada.attr('src', "/Images/support/siluetaM.jpg");
    });
    sRbHombre.mousedown(function () {
        console.log('click en sRbHombre');
        sRelacionM.hide();
        sRelacionH.show();
        // alert(sImgFotoCargada.attr('src').indexOf(patron));
        if (sImgFotoCargada.attr('src').indexOf(patron) > -1) sImgFotoCargada.attr('src', "/Images/support/siluetaH.jpg");
    });

/*

    /********************* EVENTO AÑADIR FOTO MIEMBRO *********************************************/
    sBSubirFoto.click(function () {
        document.getElementById('inputFile').value = "";
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

       // CargarImagenMiembro();
       // reader.readAsDataURL(arrSelectedFilesMiembro[0]);
    });

    /************* EVENTOS ONDRAGOVER, ONDRAGLEAVE, y ONDROP  ************************/
    /*
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
        CargarImagenMiembro();
        reader.readAsDataURL(arrSelectedFilesMiembro[0]);
    };
    */
    /************* EVENTO GUARDAR  ***************************************************/
    sBGuardar.click(function () {
        //console.log('click sBGuardar');

        console.log('estaClickActivo: ' + estaClickActivo);

        var fechaNac;
        var fechaObi;


        /*
        var anioNac;
        var mesNac;
        var diaNac;
        var nDiaNac;
        var anioObi;
        var mesObi;
        var diaObi;
        var nDiaObi;
        */
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
                //console.log('listos para SubirFotoMiembro');
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

            /*
            diaNac = sTbDiaNac.val();
            if (diaNac == ValorInicial(sTbDiaNac, arrSelForTree, arrIniForTree)) diaNac = '';
            mesNac = (sDdlMesesNac.get(0).selectedIndex).toString();
            anioNac = sTbAnioNac.val();
            if (anioNac == ValorInicial(sTbAnioNac, arrSelForTree, arrIniForTree)) anioNac = '';
            nDiaNac = (diaNac != '') ? parseInt(diaNac) : 0;
            anioNac = (anioNac != '') ? anioNac : '0000';
            */

            fechaNac = sInFechaNac.val();
            //console.log('Fecha de nacimiento1: ' + fechaNac);
            fechaNac = fechaNac.replace(regexFecha, '$1$2$3');
            //registro.FechaNac = fechaNac;
            //console.log('Fecha de nacimiento2: ' + fechaNac);

            if (sRbAntepasado.prop('checked')) {
                fechaObi = sInFechaObi.val();
                //console.log('Fecha de óbito1: ' + fechaObi);
                fechaObi = fechaObi.replace(regexFecha, '$1$2$3');
                //registro.fechaObi = fechaObi;
                //console.log('Fecha de óbito2: ' + fechaObi);

                /*
                diaObi = sTbDiaObi.val();
                if (diaObi == ValorInicial(sTbDiaObi, arrSelForTree, arrIniForTree)) diaObi = '';
                mesObi = (sDdlMesesObi.get(0).selectedIndex).toString();
                anioObi = sTbAnioObi.val();
                if (anioObi == ValorInicial(sTbAnioObi, arrSelForTree, arrIniForTree)) anioObi = '';
                nDiaObi = (diaObi != '') ? parseInt(diaObi) : 0;
                if (sRbAntepasado.prop('checked') && anioObi == '') anioObi = '9999';
                anioObi = (anioObi != '') ? anioObi : '0000';
                */
            };


            regNombre = sTbNombre.val();
            regEmail = sTbEmail.val();
            if (!regNombre) {
                camposCorrectos = false;
                Notifica("FormularioTree_CamposErroneos", listNotGen);
            }
            else if ((gOpcionTree == 'aniadirConsorte' || gOpcionTree == 'aniadirAscendiente') && ((sRbHombre.prop('checked') && sDdlRelacionH.get(0).selectedIndex == 0) ||
                       (sRbMujer.prop('checked') && sDdlRelacionM.get(0).selectedIndex == 0))) {
                camposCorrectos = false;
                Notifica("FormularioTree_RelacionNoCumplimentada", listNotGen);
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
                    gNombreImgMiembro = "M" + gCirculo8 + strNumber((Math.random() * 10000).toFixed(0).toString(), 4) + gNombreImgMiembro;
                else
                    gNombreImgMiembro = "A" + gCirculoPropio8 + strNumber((Math.random() * 10000).toFixed(0).toString(), 4) + gNombreImgMiembro;
                lbRegTree.Foto = gNombreImgMiembro;
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

         //   lbRegTree.FechaNac = anioNac + ((parseInt(mesNac) < 10) ? ('0' + mesNac) : mesNac) + ((nDiaNac < 10) ? ('0' + nDiaNac) : nDiaNac);
         //   if (parseInt(lbRegTree.FechaNac) == 0) lbRegTree.FechaNac = '';

            lbRegTree.FechaNac = fechaNac;

            if (sRbAntepasado.prop('checked')) {
               // lbRegTree.FechaObi = anioObi + ((parseInt(mesObi) < 10) ? ('0' + mesObi) : mesObi) + ((nDiaObi < 10) ? ('0' + nDiaObi) : nDiaObi);
                // if (parseInt(lbRegTree.FechaObi) == 0) lbRegTree.FechaObi = '';

                lbRegTree.FechaObi = fechaObi;
            };
            if (sRbHombre.prop('checked')) lbRegTree.Sexo = 'H'; else lbRegTree.Sexo = "M";

            lbRegTree.CiudadNac = sTbCiudadNac.val();
            lbRegTree.CiudadRes = sTbCiudadRes.val();
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
                        if (Miembro(gIdMiembroSel).NConsortes > 0) {
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
                    if (gTipoMiembroSel == 2 || gTipoMiembroSel == 3) {
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

    /************* EVENTO CANCELAR  ***************************************************/
    sBCancelar.click(function () {
        //console.log('Inicio CANCELAR- gEstado: ' + gEstado + ' - gEstadoAnt: ' + gEstadoAnt);
        //console.log('presentacionAnterior ' + presentacionAnterior);

        if (estaClickActivo) {

            switch (gEstado) {
                case 'formulario':
                    //$('.opcion').css('color', '#0377aa');

                    // var estado = gEstado;
                    // gEstado = presentacionAnterior;
                    // gEstadoAnt = estado;
                    gEstadoAnt = presentacionAnterior;
                    gEstado = 'edicion';


                    break;
                case 'forNuevoCirculo':
                    //$('.menu').css('color', '#0377aa');
                    gEstadoAnt = presentacionAnterior;
                    gEstado = 'navegacion';

                    // GenerarCirculosSelector(); //PENDIENTE
                    break;
                    /*      case 'eliminarCirculo':
                              alert('Cancelar');
                              $('.menu').css('color', '#0377aa');
                              gEstado=gEstadoAnt;
                              gEstadoAnt='eliminarCirculo';
                              ActualizarTree();
                              break;*/
            };

            //console.log('Fin CANCELAR- gEstado: ' + gEstado + ' - gEstadoAnt: ' + gEstadoAnt);
            // gEstado = gEstadoAnt;


            //  sForArbol.hide();

            ActualizarTree();
        };
        });
    
  
};
//Fin activar eventos Formulario

/***************************************************************************/
/******************* FUNCION PresentarFormulario*************************/
/***************************************************************************/
function PresentarFormulario() {
    /*
    gNombreImgMiembro = "";
    $('.tituloCabForTree').hide();
    // ResetearFormulario(arrSelForTree, arrIniForTree, '#999999');

    sRbVida.parent().find('label').click();
    sRbHombre.parent().find('label').click();
    sBCambiarFoto.hide();
    sBSubirFoto.show();

    arrSelForTree[0].focus();
    */

    InicializarFormularioTree();

    var sTituloSel;
    var tituloSel;
    //console.log('Tras InicializarFormularioTree - gOpcionTree: ' + gOpcionTree);
    switch (gOpcionTree) {
        case "modificarDatos":
            sTituloSel = sTituloCabForTreeModificarDatos;
            CumplimentarFormulario();
            break;
        case "aniadirConsorte":
            sTituloSel = sTituloCabForTreeAniadirConsorte;
            
            //sRelacion.show();
            break;
        case "aniadirDescendiente":
    
            sTituloSel = sTituloCabForTreeAniadirDescendiente;
            
            sForRelacion.hide();
            break;
        case "aniadirAscendiente":
            sTituloSel = sTituloCabForTreeAniadirAscendiente;
 
            break;

        case "nuevoCirculo":
            //console.log('Opción nuevoCirculo');
            sTituloSel = sTituloCabForTreeNuevoCirculo;
            sForRelacion.hide();
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
    //console.log('tituloSel: ' + sTituloSel.html());

    function CumplimentarFormulario() {
        sTbNombre.val(gMiembroSel.Nombre);
        if (gMiembroSel.Apellidos) sTbApellidos.val(gMiembroSel.Apellidos);
        if (gMiembroSel.Email) sTbEmail.val(gMiembroSel.Email);
        if (gMiembroSel.CiudadNac) sTbCiudadNac.val(gMiembroSel.CiudadNac);
        if (gMiembroSel.CiudadRes) sTbCiudadRes.val(gMiembroSel.CiudadRes);
        if (gMiembroSel.FechaNac) {
            /*
            var anioNac = parseInt(gMiembroSel.FechaNac.slice(0, 4));
            if (anioNac > 0) sTbAnioNac.val(anioNac);
            var diaNac = parseInt(gMiembroSel.FechaNac.slice(6, 8));
            if (diaNac > 0) sTbDiaNac.val(diaNac);
            var mesNac = parseInt(gMiembroSel.FechaNac.slice(4, 6));
            if (mesNac > 0) sDdlMesesNac.val(mesNac + 1);
            */
            var fechaNac = gMiembroSel.FechaNac;
            //console.log('fechaNac: ' + fechaNac);
            sInFechaNac.val(fechaNac.slice(0, 4) + '-' + fechaNac.slice(4, 6) + '-' + fechaNac.slice(6, 8));

        };
        if (gMiembroSel.FechaObi) {
            sRbAntepasado.prop('checked', true);
            //sRbAntepasado.mousedown();
            sRbAntepasado.trigger("click");
            /*
            var anioObi = parseInt(gMiembroSel.FechaObi.slice(0, 4));
            if (anioObi > 0) sTbAnioObi.val(anioObi);
            var diaObi = parseInt(gMiembroSel.FechaObi.slice(6, 8));
            if (diaObi > 0) sTbDiaObi.val(diaObi);
            var mesObi = parseInt(gMiembroSel.FechaObi.slice(4, 6));
            if (mesObi > 0) sDdlMesesObi.val(mesObi + 1);*/
            var fechaObi = gMiembroSel.fechaObi;
            sInFechaObi.val(fechaObi.slice(0, 4) + '-' + fechaObi.slice(4, 6) + '-' + fechaObi.slice(6, 8));
        }
        else {
            sRbVida.prop('checked', true);
            //sRbVida.mousedown();
            sRbVida.trigger("click");
        };
        if (gMiembroSel.Sexo == "M") {
            //sRbMujer.mousedown();
            sRbMujer.prop('checked', true);
            sRbMujer.trigger("click");
           
        }
        else {
            sRbHombre.prop('checked', true);
            //sRbHombre.mousedown();
            sRbHombre.trigger("click");
           
        };
        if (gMiembroSel.TipoMiembro == '2' || gMiembroSel.TipoMiembro == '3') {
            sForRelacion.show();
            if (gMiembroSel.Sexo == "M") {
                sRelacionM.show();
                sRelacionH.hide();
                sDdlRelacionM.val(gMiembroSel.Relacion + 1);
                sDdlRelacionM.selectmenu("refresh", true);
            }
            else {
                sRelacionH.show();
                sRelacionM.hide();
                sDdlRelacionH.val(gMiembroSel.Relacion + 1);
                sDdlRelacionH.selectmenu("refresh", true);
            };
           // sDdlRelacionH.val(gMiembroSel.Relacion + 1);
           // sDdlRelacionM.val(gMiembroSel.Relacion + 1);
        }
        else {
            sForRelacion.hide();
        };
        gNombreImgMiembro = '';
        if (gMiembroSel.Foto) {
            hayFotoAntes = true;
            PonerFotoUsuario(sImgFotoCargada, gMiembroSel.Foto, ((sRbHombre.prop('checked')) ? "H" : "M"), W_FOTO_USUARIO_MB);
         /*   sImgFotoCargada.attr('src', '\\Images\\users\\' + gMiembroSel.Foto);
            if (sImgFotoCargada.width() > sImgFotoCargada.height()) {
                sImgFotoCargada.css('width', '110px');
                sImgFotoCargada.css('height', 'auto');
            }
            else {
                sImgFotoCargada.css('width', 'auto');
                sImgFotoCargada.css('height', '110px');
            };
            sImgFotoCargada.css('display', 'block');
            */
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
    $('#loading-mb').show();
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
            AjustarImagen(sImgFotoCargada, sBSubirFoto, sBCambiarFoto,sForArbol);
            sImgFotoCargada.off('load');
        });
    };
};


/***************************************************************************/
/******************* FUNCION GuardarFormularioTreeCorrecto*************************/
/***************************************************************************/
function GuardarFormularioTreeCorrecto(result) {

    gIdMiembroSel = result.MiembroSeleccionado;
    listMiembrosCirculo = result.CirculoTree.MiembrosCirculo;
    OrdenarListMiembros();
    gNMiembrosCirculo = listMiembrosCirculo.length;
    //CODIGO
    //sIcoMenuSubcab.click();
    if (esMenuSubcabActivo) {
        esMenuSubcabActivo = false;
        sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
    };
    gEstado = "edicion";
    gEstadoAnt = "formulario";
    gMiembro0 = Miembro(gMiembro0.IdMiembro);
    //console.log('gOpcionTree: ' + gOpcionTree);

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


/***************************************************************************/
/******************* FUNCION GuardarFormularioNuevoCirculoCorrecto*************************/
/***************************************************************************/
function GuardarFormularioNuevoCirculoCorrecto(result) {
    //alert('GuardarFormularioNuevoCiculoCorrecto');
    // location.reload();
    sesAliasCirculo = result;
    window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + sesAliasCirculo;

};
/***************************************************************************/
/******************* FUNCION InicializarFormularioTree*************************/
/***************************************************************************/
function InicializarFormularioTree(){
    gNombreImgMiembro = "";
    sForArbol.show();
    //sForArbol.hide();
    //sForArbol.fadeIn(1000);
    //sNotTree.hide();
    $('.tituloCabForTree').hide();
    sForRelacion.hide();
    $('.opcion').css('color', '#0377aa');
    // ResetearFormulario(arrSelForTree, arrIniForTree, '#999999');
    PonerFotoUsuario(sImgFotoCargada, '', "H", W_FOTO_USUARIO_MB);
    sRbVida.parent().find('label').click();
    sRbHombre.parent().find('label').click();
    sBCambiarFoto.hide();
    sBSubirFoto.show();

    sForArbol.find('input').val('');
    sForArbol.find('select').val('1');
    /*
    sRbVida.mousedown();
    sRbVida.prop('checked', true);
    sRbMujer.prop('checked', true);
    */
    // sImgFotoCargada.css('width', '110px');
    //sImgFotoCargada.attr('src', '/Images/support/siluetaM.jpg');
    // sRelacionH.hide();
    // sRelacionM.show();
    arrSelForTree[0].focus();


};

/***************************************************************************/
/******************* FUNCION ActivarEventoNuevoCirculo   *************************/
/***************************************************************************/
function ActivarEventoNuevoCirculo() {
    sBMenuTreeNuevoCirculo.click(function () {
        //console.log('Nuevo Círculo');
      //  if (presentacionAnterior == 'navegacion' || presentacionAnterior == 'edicionInicio') {
            gEstadoAnt = gEstado;
            gEstado = 'forNuevoCirculo';
            gOpcionTree = 'nuevoCirculo';
            presentacionAnterior = gEstado;
            ActualizarTree();
     //   };
        /*
        if (gEstado == 'navegacion' || gEstado == 'edicionInicio') {
            gEstadoAnt = gEstado;
            gEstado = 'forNuevoCirculo';
            gOpcionTree = 'nuevoCirculo';
            ActualizarTree();
        };
        */

    });
};

/***************************************************************************/
/******************* FUNCION ActivarEventoNuevoCirculo   *************************/
/***************************************************************************/
function ActivarEventoEliminarCirculo() {
    sBMenuTreeEliminarCirculo.click(function () {
        //console.log('presentacionAnterior= ' + presentacionAnterior);
        //console.log('gEstado= ' + gEstado);
        //console.log('gEstadoAnt= ' + gEstadoAnt);
        //console.log('gRol= ' + gRol);

        /*
        if ((presentacionAnterior == 'navegacion' || presentacionAnterior == 'edicionInicio' || presentacionAnterior == 'selector')
            && gCirculo != gCirculoPropio
            && gRol > ROL_EDITOR ) {
            gEstadoAnt = presentacionAnterior;
            gEstado = 'eliminarCirculo';
            ActualizarTree();
        };
        */
        gEstadoAnt = presentacionAnterior;
        gEstado = 'eliminarCirculo';
        ActualizarTree();


    });

};


/***************************************************************************/
/******************* FUNCION ActivarEventosSelectores   *************************/
/***************************************************************************/
/*
function ActivarEventosSelectores() {

    sBTusCirculos.click(function () {
        sMenuCab.click();
        gEstadoAnt = gEstado;
        gEstado = 'selector';
        gOpcionTree = 'tusCirculos';
        ActualizarTree();


    });


    sBRelacionados.click(function () {
        sMenuCab.click();
        gEstadoAnt = gEstado;
        gEstado = 'selector';
        gOpcionTree = 'relacionados';
        ActualizarTree();

    });

};
*/

/***************************************************************************/
/******************* FUNCION InicializarSelectoresCirculo   *************************/
/***************************************************************************/
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


};

/***************************************************************************/
/******************* FUNCION GenerarCirculosSel   *************************/
/***************************************************************************/

function GenerarCirculosSel(tipo) {
    var listCirculos;
    var sResultados;
    var iSelCirculo0;
  /*
    if (tipo == "TusCirculos") {
        listCirculos = listCirculosFamiliares;
        sResultados = sResTusCirculos;
    }
    else {
        listCirculos = listCirculosRelacionados;
        sResultados = sResRelacionados;
    };
    */
    switch (tipo) {
        case 'TusCirculos':
            listCirculos = listCirculosFamiliares;
            sResultados = sResTusCirculos;
            break;
        case 'Relacionados':
            listCirculos = listCirculosRelacionados;
            sResultados = sResRelacionados;
            break;
        case 'PeticionEditor':
            listCirculos = listCirculosPeticionEditor;
            sResultados = sResTusCirculos;
            break;
    };


    sResultados.html('');
 
    if (listCirculos.length > 0) {

        if (tipo == "Relacionados") sNingunaRelacionada.hide();
        if (tipo == "PeticionEditor") $('#tusCirculosTitulo_mb').hide();
        sCirculoX.show();
 //----------------------------------------
      //  for (var i = 0; i < listCirculos.length; i++) {
        //      var circulo = listCirculos[i];

        $.each(listCirculos, function (i, circulo) {

            var sCirculoClon = sCirculoX.clone();
            sCirculoClon.find('.leyendaNuevoCirculo').hide();

            if (circulo.IdCirculo == sesCirculoPropio) { //CIRCULO PROPIO
                sCirculoClon.find('.leyendaCirculo').hide();
                sCirculoClon.find('.leyendaCirculoPropio').show();
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 70);
            }
            else { //CIRCULO NO PROPIO
                sCirculoClon.find('.leyendaCirculo').show();
                sCirculoClon.find('.leyendaCirculoPropio').hide();
                var nomApeClon = sCirculoClon.find('.nomApeX').html();
                sCirculoClon.find('.nomApeX').html(nomApeClon.replace('_Nombre', circulo.Nombre).replace('_Apellidos', circulo.Apellidos));
                PonerFotoUsuario(sCirculoClon.find('.fotoX'), circulo.Foto, circulo.Sexo, 70);
            };
            if (tipo!= "PeticionEditor" && circulo.IdCirculo == sesCirculo) {  //CIRCULO SELECCIONADO
                sCirculoClon.find('.logoX').css('background-image', 'url(/Images/support/circuloRojo.gif)');
            };

         //  sCirculoClon.find('.logoX').click(clickCirculo(circulo.IdCirculo)); //Fin Evento click

            /*
            if (tipo == "TusCirculos" || tipo=="PeticionEditor")
                sCirculoClon.find('.rolX').html(sDdlRol.find('option')[circulo.Rol].innerText);
            else
                sCirculoClon.find('.rolX').html('');
            */
            sCirculoClon.find('.logoX').click(function () {

                //console.log('circulo.Alias: ' + circulo.Alias);
                //console.log('circulo.Nombre: ' + circulo.Nombre);
                //console.log('circulo.Apellidos: ' + circulo.Apellidos);
               window.location.href = '/' + sDdlPaginas.find('option')[0].innerText + '/' + circulo.Alias
            }); //Fin Evento click

            //----------------------------------------------------------------------
            sCirculoClon.find('.rolX').html(sDdlRol.find('option')[circulo.Rol].innerText);



            sResultados.append(sCirculoClon);
            //  };
        });
        //--------------------------------- fin bucle

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
                        else if (result == ROL_RELACIONADO || result==ROL_MIEMBRO) { //Se lanza solicitud de Editor
                            LifeBook.LibreriaWebService.WsActualizarSesionTree('peticionEditor2',
                               function () {
                                   //window.location.href = '/Tree.aspx';
                                   location.reload();
                               });
                           // window.location.href = '/tree/peticionEditor2';
                        };
                    });
            }
            else {

                LifeBook.LibreriaWebService.WsEntrarEnCirculo(cir, function (result) {
                    if (result > 0) {
                        gRol = result;
                        // window.location.href = '/Tree.aspx';
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


/*-------------------------- Funciones SOLICITUDES --------------------------------------------------*/

/***************************************************************************/
/******************* FUNCION ActivarEventosSolicitudes   *************************/
/***************************************************************************/
function ActivarEventosSolicitudes() {
    sBMenuTreeSolicitudes.click(function () {
        if (sOpcionesSol.css('display') == 'none') {
            sOpcionesSol.show();
            LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
            if (listCirculosPeticionEditor.length > 0) sSolPeticionEditor.show();
            else sSolPeticionEditor.hide();
        }
        else {
            sOpcionesSol.hide();
        };
    });

    sSolEnviadas.click(function () {
        if (gNSolEnviadas > 0) {
            gEstado = "solicitudes";
            gOpcionTree = "enviadas";
            // $('.opcion').css('color', '#0377aa');
            // sTdSolEnviadas.css('color', '#f024bb');
            ActualizarTree();
        };
    });
    sSolRecibidas.click(function () {
        if (gNSolRecibidas > 0) {
            gEstado = "solicitudes";
            gOpcionTree = "recibidas";
            //  $('.opcion').css('color', '#0377aa');
            // sTdSolRecibidas.css('color', '#f024bb');
            ActualizarTree();
        };
    });
     //PENDIENTE
    sSolPeticionEditor.click(function () {
        gEstado = "solicitudes";
        gOpcionTree = "peticionEditor1";
        //$('.opcion').css('color', '#0377aa');
        //$(this).css('color', '#f024bb');
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

    /*
    sRbFamiliar.mousedown(function () {
        console.log('click sRbFamiliar');
        sTextoConArbol.show();
        PresentarArbol();
    });
    sRbRelacionado.mousedown(function () {
        console.log('click sRbRelacionado');
        sTextoConArbol.hide();
        sArbol.hide();
    });
    */
    $('#cphMobile_rbFamiliar_mb, #cphMobile_rbRelacionado_mb').change(function(){
        if (sRbFamiliar.prop('checked')) {
            //console.log('click sRbFamiliar');
            sTextoConArbol.show();
            PresentarArbol();
        }
        else if (sRbRelacionado.prop('checked')) {
            //console.log('click sRbRelacionado');
            sTextoConArbol.hide();
            sArbol.hide();
        };
    });




};

/***************************************************************************/
/******************* FUNCION CargarSolicitudesCorrecto   *************************/
/***************************************************************************/
function CargarSolicitudesCorrecto(result) {
    //console.log('CargarSolicitudesCorrecto!');
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
    sSolRecibidas.find('.contaSol').html(' (' + gNSolRecibidas + ')');
    //Sustituir(sTdSolRecibidas, '_nRec', gNSolRecibidas);
    // alert('gNSolEnviadas: ' + gNSolEnviadas);
    //Sustituir(sTdSolEnviadas, '_nEnv', gNSolEnviadas);
    sSolEnviadas.find('.contaSol').html(' (' + gNSolEnviadas + ')');

    //alert('listSolicitudesEnviadas: ' + listSolicitudesEnviadas.length+' listSolicitudesRecibidas: ' + listSolicitudesRecibidas.length);
    //    if(listSolicitudesEnviadas!=null) alert('listSolicitudesEnviadas: ' + listSolicitudesEnviadas.length);
    //   if (listSolicitudesRecibidas!=null) alert('listSolicitudesRecibidas: ' + listSolicitudesRecibidas.length);

    ActualizarTree();
};


/***************************************************************************/
/******************* FUNCION PresentarSolicitudes   *************************/
/***************************************************************************/

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
        var sTdNomApeEmisorSolX = sSolicitud.find('#tdNomApeEmisorSolX_mb');
        var sImgTdFotoEmisorSolX = sSolicitud.find('#tdFotoEmisorSolX_mb img');
        var sTdNomApeCirculoSolX = sSolicitud.find('#tdNomApeCirculoSolX_mb');
        var sImgFotoCirculoSolX = sSolicitud.find('#fotoCirculoSolX_mb img');

        var sTextoSolXFamiliar = sSolicitud.find('#textoSolXFamiliar_mb');
        var sTextoSolXRelacionado = sSolicitud.find('#textoSolXRelacionado_mb');
        var sTextoSolXPeticionEditor = sSolicitud.find('#textoSolXPeticionEditor_mb');
        var sTextoSolXInvitado = sSolicitud.find('#textoSolXInvitado_mb');

        var sBNaranjaSolXAceptar = sSolicitud.find('#bNaranjaSolXAceptar_mb');
        var sBNaranjaSolXRechazar = sSolicitud.find('#bNaranjaSolXRechazar_mb');
        var sBGrisSolXCancelar = sSolicitud.find('#bGrisSolXCancelar_mb');

        sSolicitud.attr('class', 'solicitud');
        sBarraClon.attr('class', 'barra');
        sSolicitud.attr('id', 'solX_' + i);
        sBarraClon.attr('id', 'barraSolX_' + i);

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
                        if (solicitud.IdCirculoB != gCirculo) {

                            LifeBook.LibreriaWebService.WsActualizarSesionSolicitudTree('aceptarMiembro', solicitud.IdSolicitud,
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
                            gOpcionTree = 'aceptarMiembro';
                            gSolicitudSel = solicitud;

                            /*
                            Sustituir(sTdNomApeEmisorConArbol, "_Nombre", solicitud.NombreA);
                            Sustituir(sTdNomApeEmisorConArbol, "_Apellidos", solicitud.ApellidosA);
                            PonerFotoUsuario(sTdFotoEmisorConArbol.find('img'), solicitud.FotoA, solicitud.SexoA, 40);
                            haySeleccion = false;
                            sBNaranjaConArbol.click(function () {
                                console.log('sBNaranjaConArbol.click - haySeleccion: ' + haySeleccion);
                                if (haySeleccion) {
                                    LifeBook.LibreriaWebService.WsAceptarSolicitud(solicitud.IdSolicitud, gMiembroSel.IdMiembro, 1,
                                        function () {
                                            // alert('Solicitud aceptada');
                                            //window.location.href = '/tree/solicitudesRecibidas';
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
                                       // window.location.href = '/Tree.aspx';
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
                                                    //Sustituir(sTdNomApeCirculoConArbol, "_Nombre", solicitud.NombreB);
                                                    //Sustituir(sTdNomApeCirculoConArbol, "_Apellidos", solicitud.ApellidosB);
                                                    //PonerFotoUsuario(sTdFotoCirculoConArbol.find('img'), solicitud.FotoB, solicitud.SexoB, 40);
                                                    haySeleccion = false;
                                                    esFamiliar = false;
                                                    esRelacionado = false;
                                                    esEditor = false;
                                                    sRbFamiliar.prop('checked', false);
                                                    sRbRelacionado.prop('checked', false);
                                                    sCbPermisoEditor.prop('checked', false);
                                                    sBNaranjaConArbol.click(function () {
                                                        esFamiliar = sRbFamiliar.prop('checked');
                                                        esRelacionado = sRbRelacionado.prop('checked');
                                                        esEditor = sCbPermisoEditor.prop('checked');
                                                        if (!esFamiliar && !esRelacionado) Notifica('Solicitudes_SeleccionaTipoInvitado', listNotGen);
                                                        else if (esRelacionado) LifeBook.LibreriaWebService.WsAceptarSolicitudInvitado(solicitud.IdSolicitud, null, 'relacionado', esEditor,
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
                LifeBook.LibreriaWebService.WsEliminarSolicitud(solicitud.IdSolicitud,
                    function () {
                        //alert('Correcto');
                        LifeBook.LibreriaWebService.WsCargarSolicitudesUsuario(CargarSolicitudesCorrecto);
                    });
            });
        }
        else {
            sBGrisSolXCancelar.show();
            //sBGrisSolXCancelar.css('margin-top', '30px');
            //sBGrisSolXCancelar.css('margin-left', '0')
            sBGrisSolXCancelar.click(function () {
                //console.log('Cancelar.click - IdSolicitud: ' + solicitud.IdSolicitud);
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

/***************************************************************************/
/******************* FUNCION EntrarEnCirculoCorrecto   *************************/
/***************************************************************************/

function EntrarEnCirculoCorrecto(result) {
    //alert('EntrarEnCirculoCorrecto - result: '+result);
    if (result > 0) {
        gRol = result;
        location.reload();
        //window.location.href = '/Tree.aspx';
    }
    else {
        //Index-Solicitar Acceso Círculo
        //alert('Index-Solicitar Acceso Círculo');
        window.location.href = '/index/entrarEnCirculo';
    };

};

/***************************************************************************/
/******************* FUNCION EliminarMiembroCorrecto   *************************/
/***************************************************************************/

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

/***************************************************************************/
/******************* FUNCION EliminarCirculoCorrecto   *************************/
/***************************************************************************/
function EliminarCirculoCorrecto() {

    location.reload();

};
