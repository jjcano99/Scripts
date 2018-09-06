//------------------------------------------------------------------------
//---------------------- ALBUM--------------------------------------------
//------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// VARIABLES REGISTRO FOTO ALBUM 
//----------------------------------------------------------------------------------------------
var regFoto;
var regFecha;
var regLugar;
var regComentario;
var regPrivacidad;
var reg;

//----------------------------------------------------------------------------------------------
// VARIABLES SELECTOR 
//----------------------------------------------------------------------------------------------
var sIcoMenuSubcab;
var sImgIcoMenuSubcab;
var forAlbum;
var busAlbum;
var fotosAlbum;
var menuAlbum;

// Menú 
var sBAniadirFotoAlbum;
var sBBuscarAlbum;
var sBAplicarFiltroAlbum;
var sBVerTodasAlbum;
var sBEliminar;
var sBEditar;
var sBuscadorAlbum;
var sBNaranjaMenuAlbum;
var sBVerdeMenuAlbum;

// Fotos 
var sFotoModelo;
var sFotosAlbum;
var sImagenCargadaFor;

// Formulario 
var sCabLtAniadir;
var sCabLtEditar;
var sBSubirFoto;
var sBCambiarFoto;
var sBSubirCambiarFoto;
var sBGirarIzdaForAlbum;
var sBGirarDchaForAlbum;
var sPrivada;
var sCompartida;
var sComentario;
var sDia;
var sMes;
var sAnio;
var sFecha;
var sLugar;
var sBCancelar;
var sBGuardarAniadir;
var sBGuardarModificar;

// Buscador 
var sTbTextoComBusAlbum;
var sTbLugarBusAlbum;
var sDdlPrivadas;
var sDdlMesAnioBusAlbum;

//----------------------------------------------------------------------------------------------
// ARRAYS 
//----------------------------------------------------------------------------------------------

var selBusAlbum; // Array con todos los selectores del buscador 
var iniBusAlbum; // Array con todos los valores iniciales de los selectores del buscador 
var arrSelForAlbum; // Array con todos los selectores del formulario  
var arrIniForAlbum; // Array con todos los valores inciales del formulario 

//----------------------------------------------------------------------------------------------
// VARIABLES QUE CONTIENEN LAS TABLAS DE FOTOS 
//----------------------------------------------------------------------------------------------
var listFotos;
var listFotosBus;
var jqImgProcesada;
var jqSelectedFiles;
var iFotoSelected;
var iFotoBusSelected;
var idFotoSelected;
var iniDia;
var iniMes;
var iniAnio;
var nuevaImagen;

//----------------------------------------------------------------------------------------------
// OTRAS VARIABLES 
//----------------------------------------------------------------------------------------------
var estaClickActivo;
    

//------------------------------------------------------------------------
//-------------------------- DOCUMENT READY ------------------------------
//------------------------------------------------------------------------
$(function () {

    

    AsignarSelectores();
 
   InicializarVariables();

   CargarNotificaciones();
 
  InicializarBuscador();

    ActivarEventosMenu();

  //  console.log('sesPresentacion: ' + sesPresentacion);
    /*

    switch (sesPresentacion) {
        case "formularioAniadir":
            InicializarFormulario();
            break;
        case "fotosSin":
            if (sesNFotosAlbumCompartidas > 0) {
               CargarFotos();
            }
            else {
                Notifica("Album_NoHayCompartidas", jqNot);
            };
            break;
        case "fotosCon":
            InicializarFormulario();
            CargarFotos();

            break;
    };
*/
   ActualizarPresentacion();

   
});
//------------------------------------------------------------------------
//-------------------------- FIN DOCUMENT READY --------------------------
//------------------------------------------------------------------------

function AsignarSelectores() {
   
    $('#mb_subcab_album').attr('style', 'display:inline;');

    busAlbum = $('#buscadorMenuAlbum_mb');
    fotosAlbum = $('#cphMobile_fotosAlbum_mb');
    menuAlbum = $('#cphMobile_menuAlbum_mb');

    forAlbum = $('#cphMobile_forAlbummb_forAlb');
    // ------------------- MENU ------------------------
    sBAniadirFotoAlbum = $('#bAniadirFotoAlbum_mb');
    sBBuscarAlbum = $('#bBuscarAlbum_mb');
    sBAplicarFiltroAlbum = $('#bAplicarFiltroAlbum_mb');
    sBVerTodasAlbum = $('#bVerTodasAlbum_mb');
    sBEliminar = $('#bEliminarFotoAlbum_mb');
    sBEditar = $('#bEditarFotoAlbum_mb');
    sBuscadorAlbum = $('#cajasBuscadorMenuAlbum_mb');
    sBNaranjaMenuAlbum = $('.bMenuAlbumNaranja_mb');

    sBVerdeMenuAlbum = $('.bMenuAlbumVerde_mb');

    // ------------------- FOTOS ------------------------

    sFotoModelo = $('#fotoAlbum_x_mb');
    sFotosAlbum = $('#cphMobile_fotosAlbum_mb');
    
  
    // ------------------- Formulario ------------------------
    
    sBSubirFoto = $('#bSubirFoto');
    sBCambiarFoto = $('#bCambiarFoto');
    sBSubirCambiarFoto = $('#bSubirFoto,#bCambiarFoto');
    sPrivada = $('#cphMobile_forAlbummb_rbPrivadaForAlbum');
    sCompartida = $('#cphMobile_forAlbummb_rbCompartidaForAlbum');
    sComentario = $('#cphMobile_forAlbummb_tbComForAlbum');
    sFecha = $('#inFechaFoto');

    sLugar = $('#cphMobile_forAlbummb_tbLugarForAlbum');
    sBCancelar = $('#bCancelarForAlbum');
    sBGuardarAniadir = $('#bGuardarAniadirForAlbum');
    sBGuardarModificar = $('#bGuardarModificarForAlbum');
    sBGirarIzdaForAlbum = $('#bGirarIzdaForAlbum');
    sBGirarDchaForAlbum = $('#bGirarDchaForAlbum');
    sCabLtAniadir = $('#cabForAlbumAniadir');
    sCabLtEditar = $('#cabForAlbumEditar');
    sImagenCargadaFor = $('#cphMobile_forAlbummb_imgFotoCargadaForAlbum');
    

    // ------------------- Buscador ------------------------
    sTbTextoComBusAlbum = $('#cphMobile_tbTextoComBusAlbum_mb');
    sTbLugarBusAlbum = $('#cphMobile_tbLugarBusAlbum_mb');
    sDdlPrivadas = $('#cphMobile_ddlPrivadas_mb');
    sDdlMesAnioBusAlbum = $('#ddlMesBusAlbum_mb');
};


function InicializarVariables() {
  
    iniBusAlbum = new Array();
    listFotosBus = new Array();
    listFotos = new Array();
    idFotoSelected = '0000000000';
    estaClickActivo = true;
 
    if (!("url" in window) && ("webkitURL" in window)) {
        window.URL = window.webkitURL;
    };
};

function CargarNotificaciones() {
    LifeBook.LibreriaWebService.CargarNot("album", jqCargarNot);

    function jqCargarNot(result) {
        jqNot = result;

        LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
            jqNot = $.merge(jqNot, resultMaster);
            if (jqStatus == 'registroInvitado') {
                Notifica("ConfirmarRegistro", jqNot);
                LifeBook.LibreriaWebService.WsActualizarStatus("album");
                jqStatus = 'album';
            };

            switch (sesPresentacion) {
                case "formularioAniadir":
                    InicializarFormulario();
                    break;
                case "fotosSin":
                    if (sesNFotosAlbumCompartidas > 0) {
                        CargarFotos();
                    }
                    else {
                        $('#fotoAlbum_x_mb').hide();
                        Notifica("Album_NoHayCompartidas", jqNot);
                    };
                    break;
                case "fotosCon":
                    InicializarFormulario();
                    CargarFotos();

                    break;
            };

        });
    };
};

function ActivarEventosMenu() {

    // ---- Menu Subcabecera -----------
    sIcoMenuSubcab.click(function () {

        if (esMenuSubcabActivo) {
            esMenuSubcabActivo = false;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            sesPresentacion = "fotosAlbum";
        }
        else { //Presentar Menú Subcabecera
             if (esMenuCabActivo) {
                        sMenuCab.click();
                    };
            esMenuSubcabActivo = true;
            sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraRojo.png');
            if (idFotoSelected == '0000000000') sesPresentacion="menuSinSeleccion";
            else sesPresentacion="menuConSeleccion";
        };
        ActualizarPresentacion();   
    });

    sBBuscarAlbum.click(function(){
        sesPresentacion = "buscadorAlbum";
        ActualizarPresentacion();

    });
    if (ValorRol(sesRol) >= ROL_EDITOR)
    sBAniadirFotoAlbum.click(function () {
        sesPresentacion = "formularioAniadir";
        ActualizarPresentacion();
        sComentario.val('');
        sCompartida.prop('checked', true);
        sCompartida.trigger("click");
        sImagenCargadaFor.css('display', 'none');
        sCabLtAniadir.show();
        sCabLtEditar.hide();
    });

    // ---- Aplicar Filtro -----------
    sBAplicarFiltroAlbum.click(function () {
       // console.log('Texto: ' + sTbTextoComBusAlbum.val());
       // console.log('Lugar: ' + sTbLugarBusAlbum.val());
       // console.log('MesAnio: ' + sDdlMesAnioBusAlbum.val());
       // console.log('sDdlPrivadas: ' + sDdlPrivadas.get(0).selectedIndex);

        ActualizarSesBus();
        listFotosBus = new Array();
        CargarFotosBus();
        if (listFotosBus.length > 0) {
           
            sesAlbumBus = "True";
            EliminarFotos();
            GenerarFotos(0);
            sesPresentacion = "fotosAlbum";
            ActualizarPresentacion();
        }
        else {
            InicializarSesion();
           // alert('No se ha encontrado ninguna foto');
            Notifica("Album_NoHayFotos", jqNot);
        }
    });

    // ---- Ver Todas -----------
    sBVerTodasAlbum.click(function () {
        listFotosBus = new Array();
        listFotosBus = listFotos;
        EliminarFotos();
        GenerarFotos(0);
        ResetearBuscador();
        sesPresentacion = "fotosAlbum";
        ActualizarPresentacion();
    });


    sBEditar.click(function () {
        EditarFoto(iFotoBusSelected);
    });


    sBEliminar.on("click", function () {
        var regFoto = new LifeBook.RegistroAlbum();
        regFoto.IdFoto = parseInt(idFotoSelected);
        LifeBook.LibreriaWebService.WsEliminarFoto(regFoto, EliminarFotoCorrecto, EliminarFotoIncorrecto);
    });

    function EliminarFotoCorrecto(result) {
        sesNFotosAlbumTotal = result[0];
        //  alert('foto eliminada, quedan  ' + sesNFotosAlbumTotal);
        sesNFotosAlbumCompartidas = result[1];
        if (sesNFotosAlbumTotal == 0) {
            listFotos = new Array();
            sesPresentacion = "formularioAniadir";
            sComentario.val('');
            sImagenCargadaFor.css('display', 'none');
            sCabLtAniadir.show();
            sCabLtEditar.hide();
        }
        else {
            listFotos = $.grep(listFotos, function (foto) {
                return foto.Foto.slice(0, 10) != idFotoSelected;
            });
            CargarFotosBus();
            EliminarFotos();
            GenerarFotos(0);
            sesPresentacion = "fotosCon";
        };

        ActualizarPresentacion();
    };

    function EliminarFotoIncorrecto(result) {
        //alert('Eliminar Foto Incorrecto: ' + result);
        alert('ERROR 2440');
    };
};

//----------------------------------------------------------------------------------------------
// FUNCIÓN INICIALIZAR BUSCADOR 
//----------------------------------------------------------------------------------------------
function InicializarBuscador() {

    sTbTextoComBusAlbum.val('');
    sTbLugarBusAlbum.val('');;
    sDdlPrivadas.val('1');
    sDdlPrivadas.selectmenu("refresh", true);
    sDdlMesAnioBusAlbum.val('');

};
//----------------------------------------------------------------------------------------------
// FUNCIÓN INICIALIZAR SESION 
//----------------------------------------------------------------------------------------------

function InicializarSesion() {
    sesParamBusTexto = "";
    sesParamBusLugar = "";
    sesParamBusAnio = "";
    sesParamBusMes = "";
    sesParamBusDia = "";
    sesParamBusPrivacidad = "0";
    sesAlbumBus = "False";
    LifeBook.LibreriaWebService.WsActualizarSessionBus(sesAlbumBus);
};
//----------------------------------------------------------------------------------------------
// FUNCIÓN INICIALIZAR FORMULARIO 
//----------------------------------------------------------------------------------------------
function InicializarFormulario() {

    //----------------------------------------------------------------------------------------------
    // VARIABLES FORMULARIO 
    //----------------------------------------------------------------------------------------------
    var nDia;
    var nMes;
    var nAnio;
    var reader;
    jqSelectedFiles = null;

    //----------------------------------------------------------------------------------------------
    // CONFIGURACION INICIAL SELECTORES FORMULARIO  
    //----------------------------------------------------------------------------------------------
    sCabLtAniadir.show();
    sCabLtEditar.hide();
    sCompartida.prop('checked', true);
    sCompartida.trigger("click");
    sBCambiarFoto.hide();
    sBSubirFoto.focus();

    //----------------------------------------------------------------------------------------------
    // EVENTO CLICK BOTÓN SUBIR/CAMBIAR FOTO: UPLOAD FOTO  
    //----------------------------------------------------------------------------------------------
    sBSubirCambiarFoto.click(function () {
        document.getElementById('inputFile').click();
    });
    $('#inputFile').change(function () {
        jqSelectedFiles = this.files;

        CargarFicheroImg(jqSelectedFiles[0], $('#fotoDropForAlbum'), function () {
            CargarImagen();
            reader.readAsDataURL(jqSelectedFiles[0]);
        });


      //  CargarImagen();
       // reader.readAsDataURL(jqSelectedFiles[0]);
    });
  
    function CargarImagen() {
       // console.log('Desde CargarImagen');
        $('#fotoDropForAlbum').css('border', 'dashed 3px #7596a5');
        reader = new FileReader();
        imgOriginal = new Image();

        $('#loading-mb').show();

        reader.onload = function (e) {
           // console.log('reader.onload');
           // console.log(jqSelectedFiles[0].name);
           // console.log(jqSelectedFiles[0].size);
            nuevaImagen = true;
            imgOriginal.src = e.target.result;

            imgOriginal.addEventListener('load', function (ev) {
                ev.target.removeEventListener(ev.type, arguments.callee);
             //   console.log('ev.type: ' + ev.type);
               if (jqSelectedFiles[0].size > 1000000) imgOriginal.src = ResizeImg2(imgOriginal, 800);

                //  PonerImgB64(sImagenCargadaFor, imgOriginal.src, 220); // Funciona bien con la galería pero no con la cámara
                PonerImgB64(sImagenCargadaFor, imgOriginal.src, 220);

                sBGirarIzdaForAlbum.show();
                sBGirarDchaForAlbum.show();
                sBSubirFoto.hide();
                sBCambiarFoto.show();
                var rotacion = 0;
                sBGirarIzdaForAlbum.off();
                sBGirarDchaForAlbum.off();

                sBGirarIzdaForAlbum.on('click', function () {
                    rotacion--;
                    if (rotacion < 0) rotacion = 3;
                    $('#loading-mb').show();
                   
                    PonerImgB64(sImagenCargadaFor, RotarImg(imgOriginal, rotacion), 220);
                });

                sBGirarDchaForAlbum.on('click', function () {
                    rotacion++;
                    if (rotacion > 3) rotacion = 0;
                    $('#loading-mb').show();
                   
                    PonerImgB64(sImagenCargadaFor, RotarImg(imgOriginal, rotacion), 220);
                   
                });

                $('#loading-mb').hide();
               // console.log('sFecha: ' + sFecha.val());
                var fecha;
                if ("lastModifiedDate" in jqSelectedFiles[0]) fecha = jqSelectedFiles[0].lastModifiedDate;
                else fecha = new Date();
                nAnio = fecha.getFullYear();
                nMes = fecha.getMonth() + 1;
                nDia = fecha.getDate();
              //  console.log('Fecha actual: ' + (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate());
               // console.log('FechaINI: ' + nAnio + '-' + nMes + '-' + nDia);
                var fecha1 = nAnio + '-' + nMes + '-' + nDia;
                var fecha2 = nAnio + '-' + ((nMes < 10) ? '0' + nMes : nMes) + '-' + ((nDia < 10) ? '0' + nDia : nDia);
                sFecha.val(fecha2);
               // console.log('FechaFIN: ' + sFecha.val());
            }, false);

        };//Fin OnLoad
    };

    //----------------------------------------------------------------------------------------------
    // EVENTO BOTÓN GUARDAR-ANIADIR FOTO  
    //----------------------------------------------------------------------------------------------
    sBGuardarAniadir.click(function () {
        //alert('Click en Guardar');
        if (estaClickActivo) {
            if (CamposCorrectos()) {
                //alert('Campos Correctos !!! ');
                sBGirarIzdaForAlbum.hide();
                sBGirarDchaForAlbum.hide();
                sBGirarIzdaForAlbum.off();
                sBGirarDchaForAlbum.off();

                reg.Foto = regFoto;
                reg.Fecha = regFecha;
                reg.Lugar = regLugar;
                reg.Comentario = regComentario;
                reg.Privacidad = regPrivacidad;
                LifeBook.LibreriaWebService.WsAniadirFoto(reg, AniadirFotoCorrecto, AniadirFotoIncorrecto);
            }
            else {
                Notifica("Registro_CamposErroneos", jqNot);
            };
        };
    });
    //----------------------------------------------------------------------------------------------
    //  FUNCIONES AÑADIR FOTO CORRECTO / INCORRECTO 
    //----------------------------------------------------------------------------------------------
    function AniadirFotoCorrecto(result) {
        //alert('AniadirFotoCorrecto: ' + result);
        ResetearBuscador();
        reg.Foto = result;
        //alert('listFotos.length: '+listFotos.length);
        if (listFotos.length == 0) {
            listFotos = new Array();
            listFotos[0] = reg;
            //alert('listFotos.length: ' + listFotos.length);
        }
        else {
            $.each(listFotos, function (iFoto, foto) {
                if ((parseInt(foto.Fecha) <= parseInt(reg.Fecha))) {
                    listFotos.splice(iFoto, 0, reg);
                    return false;
                };
            });
        };
        //MARK
        sesParamBusDia = reg.Fecha.slice(6, 8);
        if (sesParamBusDia == "00") sesParamBusDia = "";
        sesParamBusAnio = reg.Fecha.slice(0, 4);
        if (sesParamBusAnio == "0000") sesParamBusAnio = "";
        sesParamBusMes = reg.Fecha.slice(4, 6);
        if (sesParamBusMes == "00") sesParamBusMes = "";

        RestablecerBusqueda();
        ActualizarSesBus();

        //alert('Antes de CargarFotosBus');
        CargarFotosBus();
        //alert('Trs CargarFotosBus');
        EliminarFotos();
        //alert('Tras EliminarFotos');

        if (jqSelectedFiles) {
            resize_image('image/jpeg', 0.92);
            var pic = jqImgProcesada;
            pic = pic.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
            //alert('Antes de ajax');
            $.ajax({
                type: "POST",
                url: '/Save_Picture.aspx/UploadPic',
                contentType: 'application/json;charset=utf-8',
                dataType: 'json',
                timeout: '100000',
                data: '{ "imageData" : "' + pic + '","imageName" : "' + result + '" }',
                success: function (res) {
                    GenerarFotos(0);
                    sesPresentacion = "fotosCon";
                    ActualizarPresentacion();
                },
                error: function () {
                   // alert('error ' + res);
                    alert('ERROR 2431');
                }
            });
        };

    };
    function AniadirFotoIncorrecto(result) {
        // alert('Resultado AniadirFoto Incorrecto');
        estaClickActivo = true;
        alert('ERROR 2410');
    };

    //----------------------------------------------------------------------------------------------
    // EVENTO BOTON CANCELAR  
    //----------------------------------------------------------------------------------------------
    sBCancelar.click(function () {
        location.reload();
    });
};
//--------------------------------------------------------------------------------------------
//---------------------  FIN INICIALIZAR FORMULARIO -------------------------------------------
//--------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//  FUNCTION Cargar Fotos 
//  LLama al WsCargarFotos y cumplimenta dtFotos 
//  Si hay una búsqueda activa (sesAlbumBus==true) aplica la búsqueda y carga dtFotosBus
//  Genera y presenta el primer segmento de fotos de dtFotosBus 
//----------------------------------------------------------------------------------------------
function CargarFotos() {
    LifeBook.LibreriaWebService.WsCargarFotos(ResultadosCorrectosCargarFotos, ResultadosIncorrectosCargarFotos);
};

function ResultadosCorrectosCargarFotos(result) {
    listFotos = new Array();
    listFotos = result;
   // console.log('sesAlbumBus: ' + sesAlbumBus);
    if (sesAlbumBus == "True") {
        RestablecerBusqueda();
        CargarFotosBus();
    }
    else
        listFotosBus = listFotos;
    EliminarFotos();
    GenerarFotos(0);
};

function ResultadosIncorrectosCargarFotos(result) {
    // alert('Resultados Incorrectos Cargar Fotos ' + result);
    alert('ERROR 2420');
};

//----------------------------------------------------------------------------------------------
//  FUNCTION Cargar FotosBus 
//----------------------------------------------------------------------------------------------
//   Filtra las fotos cargadas en listFotos[] aplicando las claves de búsqueda y              
//   cumplimenta listFotosBus[] con los resultados                                            
//----------------------------------------------------------------
function CargarFotosBus() {
    // alert('Soy CargarFotosBus: '+ NorTexto(sesParamBusTexto));
    var j = 0;
    listFotosBus = new Array();
    //alert(listFotos);
 
  //  console.log('listFotos.length: ' + listFotos.length);
   // console.log('sesParamBusMes: ' + sesParamBusMes);
   // console.log('sesParamBusAnio: ' + sesParamBusAnio);

    for (var i = 0; i < listFotos.length; i++) {
        // alert('sesParamBusMes= ' + sesParamBusMes + ' - listFotos[i].Fecha.slice(4, 6))= '+listFotos[i].Fecha.slice(4, 6));
        if (
            (sesParamBusTexto == "" ? true : NorPatron(sesParamBusTexto).test(NorTexto(listFotos[i].Comentario))) &&
            (sesParamBusLugar == "" ? true : NorPatron(sesParamBusLugar).test(NorTexto(listFotos[i].Lugar))) &&
            (sesParamBusAnio == "" ? true : sesParamBusAnio == listFotos[i].Fecha.slice(0, 4)) &&
            (sesParamBusMes == "" ? true : parseInt(sesParamBusMes) == parseInt(listFotos[i].Fecha.slice(4, 6))) &&
            (sesParamBusDia == "" ? true : sesParamBusDia == listFotos[i].Fecha.slice(6, 8)) &&
            (sesParamBusPrivacidad == "0" ? true : (sesParamBusPrivacidad == "1" && listFotos[i].Privacidad == "C") || (sesParamBusPrivacidad == "2" && listFotos[i].Privacidad == "P"))      
            )
        {
            listFotosBus[j] = listFotos[i];
            j++;
        };
    };
};

//-------------------------------------------------------------------------------------------------------
//  FUNCTION Generar Fotos Segmento 
//------------------------------------------------------------------------------------------------
function GenerarFotos(iSeg) {
   // console.log('Desde GenerarFotos');
    nSegAlbum = 50;
    sFotoModelo.show();
    var nFotosBus = listFotosBus.length;
    var iFotoMax = ((iSeg + 1) * nSegAlbum < nFotosBus) ? (iSeg + 1) * nSegAlbum : nFotosBus;
    for (var iFoto = iSeg * nSegAlbum; iFoto < iFotoMax; iFoto++) {
        GenerarFoto(iFoto);
    };
    sFotoModelo.hide();
};
//----------------------------------------------------------------------------------------------
//  FUNCTION Generar Foto 
//----------------------------------------------------------------------------------------------
function GenerarFoto(iFoto) {
  //  console.log('Desde GenerarFoto');
    var foto = listFotosBus[iFoto];
    var sFotoClon = sFotoModelo.clone();
    var sImgClon = sFotoClon.find('img:first');
    var imgFile = sImgClon.attr('src');
    sImgClon.attr('src', imgFile.replace('/Images/support/fotoAlbum.png', '/image.axd?w=300&h=300&src=App_Data/album/' + foto.Foto));
    sFotoClon.find('#tdComFotoAlbum_x_mb').text(foto.Comentario);
    sFotoClon.find('#tdLugarFechaFotoAlbum_x_mb').text(foto.Lugar + ' ( ' + foto.Fecha.slice(6, 8) + ' / ' + foto.Fecha.slice(4, 6) + ' / ' + foto.Fecha.slice(0, 4) + ' )');
    sFotosAlbum.append(sFotoClon);

    sFotoClon.on("tap", function () {
        var idFoto = foto.Foto.slice(0, 10);
       // console.log('idFotoSelected: ' + idFotoSelected + ' idFoto: ' + idFoto );
        $('.imgFotoAlbum').css('border', 'none');
        
        if (idFotoSelected == idFoto) {
            iFotoSelected = 0;
            iFotoBusSelected = 0;
            idFotoSelected = '0000000000';
        }
        else {
                iFotoBusSelected = iFoto;
                idFotoSelected = idFoto;
                sFotoClon.find('img').css('border', '3px solid #7596a5');
        }     
    });
};
//----------------------------------------------------------------------------------------------
//  FUNCTION Editar Foto 
//----------------------------------------------------------------------------------------------
function EditarFoto(iFotoBus) {
    nuevaImagen = false;
    sesPresentacion = "formularioModificar";
    ActualizarPresentacion();
    sCabLtAniadir.hide();
    sCabLtEditar.show();
    sComentario.val(listFotosBus[iFotoBus].Comentario);
    sLugar.val(listFotosBus[iFotoBus].Lugar);
    var fecha = listFotosBus[iFotoBus].Fecha;
    sFecha.val(fecha.slice(0, 4) + '-' + fecha.slice(4, 6) + '-' + fecha.slice(6, 8));
   // console.log('Fecha: '+sFecha.val());

    switch (listFotosBus[iFotoBus].Privacidad) {
        case "C":
            sCompartida.prop('checked', true);
            sCompartida.trigger("click");
            break;
        case "P":
            sPrivada.prop('checked', true);
            sPrivada.trigger("click");
            break;
        default:
            sCompartida.prop('checked', true);
            sCompartida.trigger("click");
            break;
    };
    sImagenCargadaFor.attr('src', '/image.axd?w=220&h=220&src=App_Data/album/' + listFotosBus[iFotoBus].Foto);
    sImagenCargadaFor.one('load', function () {
        var image = new Image();
        image.src = sImagenCargadaFor.attr('src');

        var w = image.width;
        var h = image.height;
        var ml, mt;
       // console.log('w1=' + w + ' h1=' + h);
        var r = w / h; // APAISADA r > 1
        if (w < 221 && h < 221) {
            if (r > 1) { // APAISADA         
                w = 220;
                h = parseInt(220 / r);
            }
            else { //VERTICAL
                h = 220;
                w = parseInt(220 * r);
            };
           // console.log('w2=' + w + ' h2=' + h);
        };
        if (w > h) {
            mt = parseInt((220 - h) / 2);
            ml = 0;
        }
        else {

            ml = parseInt((220 - w) / 2);
            mt = 0;
        };
        sImagenCargadaFor.attr('style', 'display:inline;width:'+w+'px;height:'+h+'px;margin-left:'+ml+'px;margin-top:'+mt+'px;');
    });
 
    $.each(listFotos, function (iFoto, foto) {
        if (foto.Foto.slice(0, 10) == idFotoSelected) {
            iFotoSelected = iFoto;
            return false;
        };
    });

    //----------------------------------------------------------------------------------------------
    // EVENTO BOTON ELIMINAR  
    //----------------------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------------------
    // EVENTO BOTON GUARDAR-MODIFICAR  
    //----------------------------------------------------------------------------------------------
    sBGuardarModificar.on("click", function () {
        if (estaClickActivo) {
            reg = new LifeBook.RegistroAlbum();
            if (CamposCorrectos()) {
                estaClickActivo = false;
                sBGuardarModificar.off("click");
                reg.IdFoto = parseInt(idFotoSelected);
                reg.Foto = regFoto;
                reg.Fecha = regFecha;
                reg.Lugar = regLugar;
                reg.Comentario = regComentario;
                reg.Privacidad = regPrivacidad;
                if (nuevaImagen) {
                    LifeBook.LibreriaWebService.WsModificarFotoNuevaImagen(reg, ModificarFotoCorrecto);
                }
                else {
                    LifeBook.LibreriaWebService.WsModificarFotoNoNuevaImagen(reg, ModificarFotoCorrecto);
                }
            }
            else {
                Notifica("Registro_CamposErroneos", jqNot);
            }
        };
    });

};

//FIN EditarFoto


function ModificarFotoCorrecto(result) {
    // Modificar registro en listFotos 
    listFotos[iFotoSelected].Comentario = reg.Comentario;
    listFotos[iFotoSelected].Lugar = reg.Lugar;
    listFotos[iFotoSelected].Fecha = reg.Fecha;
    listFotos[iFotoSelected].Privacidad = reg.Privacidad;
    if (result != "" && result != null)
        listFotos[iFotoSelected].Foto = result;

    // Ordenar listFotos por FECHA de mayor a menor 
    listFotos.sort(function (fotoA, fotoB) {
        if (fotoA.Fecha > fotoB.Fecha) return -1;
        else if (fotoA.Fecha < fotoB.Fecha) return 1;
        else return 0;
    });

    //MARK

    ResetearBuscador();

    sesParamBusDia = reg.Fecha.slice(6, 8);
    if (sesParamBusDia == "00") sesParamBusDia = "";
    sesParamBusAnio = reg.Fecha.slice(0, 4);
    if (sesParamBusAnio == "0000") sesParamBusAnio = "";
    sesParamBusMes = reg.Fecha.slice(4, 6);
    if (sesParamBusMes == "00") sesParamBusMes = "";

    RestablecerBusqueda();
    ActualizarSesBus();
    CargarFotosBus();
    EliminarFotos();
    if (nuevaImagen) {
        PostImg(result, PresentarFotos);
        jqSelectedFiles = null;
        jqImgProcesada = null;
    }
    else {
        PresentarFotos();
    };
};

function PresentarFotos() {
    GenerarFotos(0);
    sesPresentacion = "fotosCon";
    ActualizarPresentacion();
}

//----------------------------------------------------------------------------------------------
//  FUNCTION Redimensionar Imagen  
//----------------------------------------------------------------------------------------------

function resize_image(type, quality) {
    var img = new Image();
    var canvas;
    img.src = sImagenCargadaFor[0].src;
    var MAX_W = 1000;
    var MAX_H = 1000;
    var w = img.width;
    var h = img.height;

    type = type || 'image/jpeg';
    quality = quality || 0.92;
    if (w > h) {
        if (w > MAX_W) {
            h *= MAX_W / w;
            w = MAX_W;
        }
        else {
            if (h > MAX_H) {
                w *= MAX_H / h;
                h = max_h;
            }
        }
    }
    canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, w, h);
    jqImgProcesada = canvas.toDataURL(type, quality);
};
// The images sent as parameters can be in the DOM or be image objects

//----------------------------------------------------------------------------------------------
//  FUNCTION ACTUALIZAR PRESENTACIÓN  
//----------------------------------------------------------------------------------------------
function ActualizarPresentacion() {
   // console.log('Desde ActualizarPresentacion - sesPresentación: ' + sesPresentacion);
    estaClickActivo = true;
    switch (sesPresentacion) {
        case "fotosAlbum":
        case "fotosCon":
        case "fotosSin":
            if (esMenuSubcabActivo) {
                esMenuSubcabActivo = false;
                sImgIcoMenuSubcab.attr('src', '/Images/support/menuSubCabeceraBlanco.png');
            };

            if (forAlbum) forAlbum.hide();
            menuAlbum.hide();
            fotosAlbum.show();
            break;
    
        case "menuAlbum":
        case "menuConSeleccion":
        case "menuSinSeleccion":

            fotosAlbum.hide();
            if (forAlbum) forAlbum.hide();
            menuAlbum.show();
            sBuscadorAlbum.hide();
            busAlbum.show();
            if (ValorRol(sesRol) >= ROL_EDITOR) {
                sBAniadirFotoAlbum.show();
                if(sesPresentacion=="menuConSeleccion") sBNaranjaMenuAlbum.show();
                else sBNaranjaMenuAlbum.hide();
            }
            else {
                sBAniadirFotoAlbum.hide();
                sBNaranjaMenuAlbum.hide();

            };
            sBVerdeMenuAlbum.show();
            sBAplicarFiltroAlbum.hide();
            
            break;
     
        case "buscadorAlbum":
            fotosAlbum.hide();
            if (forAlbum) forAlbum.hide();
            menuAlbum.show();
            sBuscadorAlbum.show();
            busAlbum.show();
            sBVerdeMenuAlbum.hide();
            sBAplicarFiltroAlbum.show();
            sBAniadirFotoAlbum.hide();
            sBNaranjaMenuAlbum.hide();
            break;

        case "formularioAlbum":
        case "formularioAniadir": 
        case "formularioModificar":
            menuAlbum.hide();
            fotosAlbum.hide();
            forAlbum.show();
            sBCancelar.show();
            if (sesPresentacion == "formularioModificar") {
                    sBGuardarAniadir.hide();
                    sBGuardarModificar.show();
                    sBSubirFoto.hide();
                    sBCambiarFoto.show();
                    $('.bGirar').hide();
            }
            else {
                    sBGuardarAniadir.show();
                    sBGuardarModificar.hide();
                    sBSubirFoto.show();
                    sBCambiarFoto.hide();
                    $('.bGirar').show();
            };
            break;

        default:
           // console.log('sesPresentacion desconocido');
            break;
    }
};

//----------------------------------------------------------------------------------------------
//  FUNCTION ELIMINAR FOTOS  
//----------------------------------------------------------------------------------------------
function EliminarFotos() {
    sFotosAlbum.show();
    sFotoModelo.hide();
    $('.fotoAlbum').remove();
};
//----------------------------------------------------------------------------------------------
//  FUNCTION ACTUALIZAR PARÁMETROS DE SESIÓN DE BÚSQUEDA DE FOTOS 
//----------------------------------------------------------------------------------------------
function ActualizarSesBus() {
    // Leer valores y asignar a variables sesParamBus 
    sesParamBusTexto = sTbTextoComBusAlbum.val();
    sesParamBusLugar = sTbLugarBusAlbum.val();
    var anioMes = sDdlMesAnioBusAlbum.val();
    if (anioMes) {
        sesParamBusAnio = anioMes.slice(0, 4);
        sesParamBusMes = anioMes.slice(5, 7);
    }
    else {
        sesParamBusAnio = '';
        sesParamBusMes = '';
    };
    sesParamBusDia = "";
    sesParamBusPrivacidad = (sDdlPrivadas.get(0).selectedIndex).toString();
 
    // Comunicar al servidor claves de búsqueda para que actualice variables de Session[] correspondientes 
    var parBusAlbum = new LifeBook.ParBusAlbum();
    parBusAlbum.Texto = sesParamBusTexto;
    parBusAlbum.Lugar = sesParamBusLugar;
    parBusAlbum.Anio = sesParamBusAnio;
    parBusAlbum.Mes = sesParamBusMes;
    parBusAlbum.Privacidad = sesParamBusPrivacidad;
    LifeBook.LibreriaWebService.WsActualizarParBusAlbum(parBusAlbum);
};

//----------------------------------------------------------------------------------------------
//  FUNCTION RESTABLECER BUSCADOR A SUS VALORES INICIALES 
//----------------------------------------------------------------------------------------------
function ResetearBuscador() {

    InicializarBuscador();
    InicializarSesion();
}
//----------------------------------------------------------------------------------------------
//  FUNCTION RESTABLECER BUSQUEDA CON LOS ÚLTIMOS VALORES BUSCADOS 
//----------------------------------------------------------------------------------------------
function RestablecerBusqueda() {

    if (sesParamBusTexto != "") sTbTextoComBusAlbum.val(sesParamBusTexto);
    if (sesParamBusLugar != "") sTbLugarBusAlbum.val(sesParamBusLugar);
    if (sesParamBusAnio != "") sDdlMesAnioBusAlbum.val(sesParamBusAnio + '-' + sesParamBusMes);
   // console.log('sDdlMesAnioBusAlbum: ' + sDdlMesAnioBusAlbum.val());
    sDdlPrivadas.prop('selectedIndex', sesParamBusPrivacidad);
    sDdlPrivadas.selectmenu("refresh", true);
};
//----------------------------------------------------------------------------------------------
//  FUNCTION AJUSTAR IMAGEN 
//----------------------------------------------------------------------------------------------

function AjustarImg(sImagen) {

   // console.log('Desde AjustarImg - width: ' + sImagen.width() + ' height: ' + sImagen.height());
    if (sImagen.width() > sImagen.height()) {
        sImagen.css('width', '220px');
        sImagen.css('height', 'auto');
        sImagen.css('margin-top', (220 - sImagen.height()) / 2 + 'px');
        sImagen.css('margin-left', '0');
    }
    else {
        sImagen.css('width', 'auto');
        sImagen.css('height', '220px');
        sImagen.css('margin-left', (220 - sImagen.width()) / 2 + 'px');
        sImagen.css('margin-top', '0');
    };
    sImagen.css('display', 'inline');

};


function CamposCorrectos() {

    var camposCorrectos = true;
    reg = new LifeBook.RegistroAlbum();
    regLugar = sLugar.val();
    regComentario = sComentario.val();
    regFecha = sFecha.val().replace(/-/g, "");
    //console.log('regFecha: ' + regFecha);

    // Foto 
    if (nuevaImagen && jqSelectedFiles[0].name) regFoto = jqSelectedFiles[0].name;
    else if (sesPresentacion == "formularioAniadir") camposCorrectos = false;
 
    // Privacidad 
    if (sPrivada.prop('checked'))
        regPrivacidad = "P";
    else if (sCompartida.prop('checked'))
        regPrivacidad = "C";
    else {
        camposCorrectos = false;
    };
  //  console.log('CamposCorrectos: ' + camposCorrectos);

    return camposCorrectos;
};
//----------------------------------------------------------------------------------------------
//  FUNCTION PostImg - Enviar una imagen al Servidor 
//----------------------------------------------------------------------------------------------
//  Se pasan como parámetros el nombre que se le da a la imagen y el procedimiento success         
//  Se utilizan las variables globales jqSelectedFiles y jqImgProcesada                            
//----------------------------------------------------------------------------------------------
function PostImg(nombreImg, procSuccess) {
    if (jqSelectedFiles) {
        resize_image('image/jpeg', 0.92);
        var pic = jqImgProcesada;
        pic = pic.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
        $.ajax({
            type: "POST",
            url: '/Save_Picture.aspx/UploadPic',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            timeout: '100000',
            data: '{ "imageData" : "' + pic + '","imageName" : "' + nombreImg + '" }',
            success: procSuccess,
            error: function () { /*alert('error ' + res);*/ alert('ERROR 2430'); }
        });
    };
};

