/*------------------------------------------------------------------------*/
/*---------------------- ALBUM--------------------------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* VARIABLES REGISTRO FOTO ALBUM *************************/
/***************************************************************************/
var regFoto;
var regFecha;
var regLugar;
var regComentario;
var regPrivacidad;
var reg;

/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
var forAlbum;
var busAlbum;
var fotosAlbum;
var sBAniadirFotoAlbum;
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
var sLugar;
var sBEliminar;
var sBCancelar;
var sBGuardarAniadir;
var sBGuardarModificar;
var sFotoModelo;
var sFotosAlbum;
var sImagenCargada;
var sCabLtAniadir;
var sCabLtEditar ;

/*************** Buscador ****************************/
var sTbTextoComBusAlbum;
var sTbLugarBusAlbum;
var sTbAnioBusAlbum;
var sDdlMesBusAlbum;
var sDdlPrivadas;
var sBBuscarAlbum;
var sBVerTodasAlbum;
var selBusAlbum; /* Array con todos los selectores del buscador */
var iniBusAlbum; /* Array con todos los valores iniciales de los selectores del buscador */
var arrSelForAlbum; /* Array con todos los selectores del formulario  */
var arrIniForAlbum; /* Array con todos los valores inciales del formulario */

/***************************************************************************/
/******************* VARIABLES QUE CONTIENEN LAS TABLAS DE FOTOS ***********/
/***************************************************************************/
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

/***********************  VARIABLES DE CONTROL                   ******************************/

var estaClickActivo;

/*------------------------------------------------------------------------*/
/*-------------------------- DOCUMENT READY ------------------------------*/
/*------------------------------------------------------------------------*/
$(function () {

  //  alert('window width: ' + $(window).width());

    $('.cabMenuOpcion').css("background-color", "none");
    $('#celdaAlbum').css("background-color", "#eff8e0");
    $('#celdaAlbum a').css("color", "#f024bb");
    $('#celdaTree, #celdaLife').hover(
        function () {
            $(this).find('a').css('color', '#f024bb');
        },
        function () {
            $(this).find('a').css('color', 'white');
        });



    /***************************************************************************/
    /******************* ASIGNACIÓN VARIABLES SELECTOR *************************/
    /***************************************************************************/   
    busAlbum = $('#cphPagina_buscadorAlbum');
    fotosAlbum = $('#cphPagina_fotosAlbum');
    sBAniadirFotoAlbum = $('#cphPagina_bAniadirFotoAlbum');
    sFotoModelo = $('#fotoAlbum_x');
    sFotosAlbum = $('#cphPagina_fotosAlbum');
    sImagenCargada = $('#imgFotoCargadaForAlbum');

    /***************************************************************************/
    /******************* ASIGNACIÓN VARIABLES FORMULARIO *************************/
    /***************************************************************************/
    forAlbum = $('#cphPagina_forAlbum_forAlb');
    sBSubirFoto = $('#bSubirFotoForAlbum');
    sBCambiarFoto = $('#bCambiarFotoForAlbum');
    sBSubirCambiarFoto = $('#bSubirFotoForAlbum,#bCambiarFotoForAlbum');
    sPrivada = $('#cphPagina_forAlbum_rbPrivadaForAlbum');
    sCompartida = $('#cphPagina_forAlbum_rbCompartidaForAlbum');
    sComentario = $('#cphPagina_forAlbum_tbComForAlbum');
    sDia = $('#cphPagina_forAlbum_tbDiaForAlbum');
    sMes = $('#cphPagina_forAlbum_ddlMesForAlbum');
    sAnio = $('#cphPagina_forAlbum_tbAnioForAlbum');
    sLugar = $('#cphPagina_forAlbum_tbLugarForAlbum');
    sBEliminar = $('#bEliminarForAlbum');
    sBCancelar = $('#bCancelarForAlbum');
    sBGuardarAniadir = $('#bGuardarAniadirForAlbum');
    sBGuardarModificar = $('#bGuardarModificarForAlbum');
    sBGirarIzdaForAlbum = $('#bGirarIzdaForAlbum');
    sBGirarDchaForAlbum = $('#bGirarDchaForAlbum');
    sCabLtAniadir = $('#cabForAlbumAniadir');
    sCabLtEditar = $('#cabForAlbumEditar');

    arrSelForAlbum = [sComentario, sDia, sMes, sAnio, sLugar, sPrivada, sCompartida];

    /*************** Buscador ****************************/
    sTbTextoComBusAlbum = $('#cphPagina_tbTextoComBusAlbum');
    sTbLugarBusAlbum = $('#cphPagina_tbLugarBusAlbum');
    sTbAnioBusAlbum = $('#cphPagina_tbAnioBusAlbum');
    sDdlMesBusAlbum = $('#cphPagina_ddlMesBusAlbum');
    sDdlPrivadas = $('#cphPagina_ddlPrivadas');
    sBBuscarAlbum = $('#bBuscarAlbum');
    sBVerTodasAlbum = $('#bVerTodasAlbum');

    selBusAlbum = [sTbTextoComBusAlbum, sTbLugarBusAlbum, sTbAnioBusAlbum, sDdlMesBusAlbum, sDdlPrivadas];
    iniBusAlbum = new Array();
    listFotosBus = new Array();
    listFotos = new Array();
    var keyEdit = false;

    estaClickActivo = true;

    /***************************************************************************/
    /******************* VARIABLES SESION ************************************/
    /***************************************************************************/
    sesCirculo = $('#tbCabSesCirculo').val();
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
    sesPresentacion = $('#tbCabSesPresentacion').val();
    
    /***************************************************************************/
    /******************* CARGAR NOTIFICACIONES *********** *********************/
    /***************************************************************************/
   // var jqNot;
    LifeBook.LibreriaWebService.CargarNot("album", jqCargarNot);
    function jqCargarNot(result) {
        jqNot = result;
       // console.log('Cargar Notificaciones: ' + jqNot);
  
        LifeBook.LibreriaWebService.CargarNot("master", function (resultMaster) {
            jqNot = $.merge(jqNot, resultMaster);
            if (jqStatus == 'registroInvitado') {
                Notifica("ConfirmarRegistro", jqNot);
                LifeBook.LibreriaWebService.WsActualizarStatus("album");
                jqStatus = 'album';
            };
            /**********************************************************************************************/
            /****************************  EJECUCION DE ACCIONES ****************************************/
            /**********************************************************************************************/
            InicializarBuscador();
            //console.log('sesPresentacion: ' + sesPresentacion);
            switch (sesPresentacion) {
                case "formularioAniadir":
                    InicializarFormulario();
                    break;
                case "fotosSin":
                    sBAniadirFotoAlbum.hide();
                    if (sesNFotosAlbumCompartidas > 0) {
                        CargarFotos();
                    }
                    else {
                        $('#pagina').hide();
                        Notifica("Album_NoHayCompartidas", jqNot);
                    };
                    break;
                case "fotosCon":
                    InicializarFormulario();
                    CargarFotos();

                    break;
            };

        });
    
    
    };/// OJO: ESPERAMOS A QUE SE CARGUEN LAS NOTIFICACIONES!!!

   
    /***************************************************************************/
    /******************* EVENTO AÑADIR FOTO ************************************/
    /***************************************************************************/
    if(ValorRol(sesRol)>=ROL_EDITOR)
    sBAniadirFotoAlbum.click(function () {  
       sesPresentacion = "formularioAniadir";
       ActualizarPresentacion();
       sComentario.val('');
       sImagenCargada.css('display', 'none');
       sCabLtAniadir.show();
       sCabLtEditar.hide();
    });

    /***************************************************************************/
    /******************* EVENTO BUSCAR FOTOS ************************************/
    /***************************************************************************/
    sBBuscarAlbum.click(function () {
        ActualizarSesBus();
        listFotosBus = new Array();
        CargarFotosBus();
        if (listFotosBus.length > 0) {
            sesAlbumBus = "True";
            EliminarFotos();
            GenerarFotos(0);
        }
        else {
           // alert('No se ha encontrado ninguna foto');
            Notifica("Album_NoHayFotos", jqNot);

        }
    });
    /***************************************************************************/
    /******************* EVENTO VER TODAS LAS FOTOS ************************************/
    /***************************************************************************/
    sBVerTodasAlbum.click(function () {
        listFotosBus = new Array();
        listFotosBus = listFotos;
        EliminarFotos();
        GenerarFotos(0);
        ResetearBuscador();
    });
     ActualizarPresentacion();
});
/*------------------------------------------------------------------------*/
/*-------------------------- FIN DOCUMENT READY --------------------------*/
/*------------------------------------------------------------------------*/
/***************************************************************************/
/******************* FUNCIÓN INICIALIZAR BUSCADOR ************** ***********/
/***************************************************************************/
function InicializarBuscador() {

    var iniMesBus = true;
    var iniAnioBus = true;
    var iniPrivBus = true;
    var mesBus;
    var nMesBus;
    var anioBus;
    var nAnioBus;
    var anioRegexBus;
    var camposCorrectosBus;

    /***************************************************************************/
    /******************* EVENTOS EN BUSCADOR   *********************************/
    /***************************************************************************/  
    $.each(selBusAlbum, function (iSel, sBusAlbum) {
        if (sBusAlbum.is("select")) {
            iniBusAlbum[iSel] = sBusAlbum.find(":selected").text();
            //alert(' iniBusAlbum[iSel]= ' + iniBusAlbum[iSel]);
        }
        else {
            iniBusAlbum[iSel] = sBusAlbum.val();
        }

        sBusAlbum.on('keypress click focusout', function (e) {
            switch (e.type) {
                case 'click':
                    if (sBusAlbum.val() == iniBusAlbum[iSel] && !sBusAlbum.is('select')) {
                        sBusAlbum.val('');
                        keyEdit = true;
                    };
                    break;
                case 'keypress':
                   
                    if (e.which == 13 || e.which == 9) {
                        e.preventDefault();
                       ;
                      if (iSel == (selBusAlbum.length - 1)) {
                         
                            selBusAlbum[0].focus();
                        }
                      else {
                        
                            selBusAlbum[iSel + 1].focus();
                        }
                    }
                    else {
                        if (!keyEdit && sBusAlbum.val() == iniBusAlbum[iSel]) {
                            sBusAlbum.val('');
                            keyEdit = true;
                        }
                    }
                    break;
                case 'focusout':
                    keyEdit = false;
                    if (sBusAlbum.val() == '') {
                        sBusAlbum.val(iniBusAlbum[iSel]);
                    }
                    break;
            };
        });
     
    });
};
/***************************************************************************/
/******************* FUNCIÓN INICIALIZAR FORMULARIO ************************/
/***************************************************************************/
function InicializarFormulario() {

        /***************************************************************************/
        /******************* VARIABLES FORMULARIO ************************************/
        /***************************************************************************/
        iniDia = true;
        iniMes = true;
        iniAnio = true;
        var nDia;
        var nMes;
        var nAnio;
        var reader;
        jqSelectedFiles = null;

        /***************************************************************************/
        /******************* ORDEN DE TABULACIÓN DEL FORMULARIO *********************/
        /***************************************************************************/
        sBSubirFoto.attr('tabIndex', 1);
        sBCambiarFoto.attr('tabIndex', 2);                  
        sPrivada.attr('tabIndex', 3);
        sCompartida.attr('tabIndex', 4);
        sComentario.attr('tabIndex', 5);
        sDia.attr('tabIndex', 6);
        sMes.attr('tabIndex', 7);
        sAnio.attr('tabIndex', 8);
        sLugar.attr('tabIndex', 9);
        sBEliminar.attr('tabIndex', 10);
        sBCancelar.attr('tabIndex', 11);
        sBGuardarAniadir.attr('tabIndex', 12);

        /***************************************************************************/
        /******************* CONFIGURACION INICIAL SELECTORES FORMULARIO  ***********/
        /***************************************************************************/
        sCabLtAniadir.show();
        sCabLtEditar.hide();
        sCompartida.prop('checked', true);
        sBCambiarFoto.hide();
        sBSubirFoto.focus();

        InicializarSelectoresFormulario(arrSelForAlbum, arrIniForAlbum, '#999999', 'black');
 
        /**********************************************************************************************/
        /**************************** EVENTO ONDROP FOTO  *********************************************/
        /**********************************************************************************************/
        var fotoDrop;
        fotoDrop = document.getElementById("fotoDropForAlbum");
        fotoDrop.ondrop = function (e) {
            
            e.preventDefault();
            jqSelectedFiles = e.dataTransfer.files;


            //console.log('Tamaño imagen: ' + Math.round(jqSelectedFiles[0].size / 1024) + ' KB');

            CargarFicheroImg(jqSelectedFiles[0], $('#fotoDropForAlbum'), function () {
                CargarImagen();
                reader.readAsDataURL(jqSelectedFiles[0]);
            });



        };

        /**********************************************************************************************/
        /********************* EVENTOS ONDRAGOVER Y ONDRAGLEAVE  **************************************/
        /**********************************************************************************************/
        fotoDrop.ondragover = function () {
            $('#fotoDropForAlbum').css('border', 'dashed 3px #f024bb');
            return false;
        };

        fotoDrop.ondragleave = function () {
            $('#fotoDropForAlbum').css('border', 'dashed 3px #7596a5');
            return false;
        };
        /**********************************************************************************************/
        /******* EVENTO CLICK BOTÓN SUBIR/CAMBIAR FOTO: UPLOAD FOTO  **********************************/
        /**********************************************************************************************/
        sBSubirCambiarFoto.click(function () {
            document.getElementById('inputFile').click();
        });

        $('#inputFile').change(function () {
            jqSelectedFiles = this.files;

           // console.log('Tamaño imagen: ' + Math.round(jqSelectedFiles[0].size / 1024) + ' KB');

            CargarFicheroImg(jqSelectedFiles[0], $('#fotoDropForAlbum'), function () {
                CargarImagen();
                reader.readAsDataURL(jqSelectedFiles[0]);
            });


            /*
            CargarImagen();
            reader.readAsDataURL(jqSelectedFiles[0]);
            */
        });

        /********************** FUNCTION CARGAR IMAGEN ***************************************/
   /*     function CargarImagen() {
            $('#fotoDropForAlbum').css('border', 'dashed 3px #7596a5');
            reader = new FileReader();

            $('#loading').show()

            reader.onload = function (e) {
                console.log('reader.onload');
            console.log(jqSelectedFiles[0].name);
            console.log(jqSelectedFiles[0].size);

                nuevaImagen = true;
          //      sImagenCargada.attr('src', e.target.result);
                imgOriginal = new Image();


                imgOriginal.src = e.target.result;
             if (jqSelectedFiles[0].size > 3000000) imgOriginal.src = ResizeImg(imgOriginal, 1500);
                sImagenCargada.attr('src', imgOriginal.src);
                AjustarImg(sImagenCargada);
                sBGirarIzdaForAlbum.show();
                sBGirarDchaForAlbum.show();
                $('#arrastraForAlbum').hide();
                sBSubirFoto.hide();
                sBCambiarFoto.show();

                var rotacion = 0;

                sBGirarIzdaForAlbum.off();

                sBGirarDchaForAlbum.off();

                sBGirarIzdaForAlbum.on('click', function () {
                    rotacion--;
                    if (rotacion < 0) rotacion = 3;
                    $('#loading').show();
                    setTimeout(function () {
                        sImagenCargada.attr('src', RotarImg(imgOriginal, rotacion));
                        AjustarImg(sImagenCargada);
                    },0);
                });

                sBGirarDchaForAlbum.on('click', function () {
                    rotacion++;
                    if (rotacion > 3) rotacion = 0;
                    $('#loading').show();
                    setTimeout(function () {
                    sImagenCargada.attr('src', RotarImg(imgOriginal, rotacion));
                    AjustarImg(sImagenCargada);
                    }, 0);
                });

                //    sImagenCargada.attr('src', e.target.result);
                //   AjustarImg(sImagenCargada);

                $('#loading').hide()
            };
        
            
           //  Fecha de la foto si existe 
            if (iniAnio || sAnio.val() == '') {
                nAnio = jqSelectedFiles[0].lastModifiedDate.getFullYear();
                nMes = jqSelectedFiles[0].lastModifiedDate.getMonth();
                nDia = jqSelectedFiles[0].lastModifiedDate.getDate();
                sDia.val(nDia);
                sMes.get(0).selectedIndex = nMes+1;
                sAnio.val(nAnio);
            };
        };

    */
        function CargarImagen() {
            $('#fotoDropForAlbum').css('border', 'dashed 3px #7596a5');
            reader = new FileReader();
            imgOriginal = new Image();

            $('#loading').show()

            reader.onload = function (e) {

               // console.log('reader.onload');
               // console.log(jqSelectedFiles[0].name);
              //  console.log(jqSelectedFiles[0].size);

                nuevaImagen = true;
            
                imgOriginal.src = e.target.result;

               // e.target.removeEventListener(e.type, arguments.callee);
               // console.log('e.type: ' + e.type);
                
                /*-------------------------------------------------------------------------*/
               // imgOriginal.onload = function (ev) {
                imgOriginal.addEventListener('load', function (ev) {
                    ev.target.removeEventListener(ev.type, arguments.callee);
                   // console.log('ev.type: ' + ev.type);

                    //imgOriginal.one("onload", function () {
                   // ev.target.removeEventListener(ev.type, arguments.callee);
                   // console.log('ev.type: ' + ev.type);

                     if (jqSelectedFiles[0].size > 3000000) imgOriginal.src = ResizeImg2(imgOriginal, 1000);
                     sImagenCargada.attr('src', imgOriginal.src);
                     sImagenCargada.on('load',function () {
                         AjustarImg(sImagenCargada);
                     });
                    sBGirarIzdaForAlbum.show();
                    sBGirarDchaForAlbum.show();
                    $('#arrastraForAlbum').hide();
                    sBSubirFoto.hide();
                    sBCambiarFoto.show();

                    var rotacion = 0;

                    sBGirarIzdaForAlbum.off();

                    sBGirarDchaForAlbum.off();

                    sBGirarIzdaForAlbum.on('click', function () {
                        rotacion--;
                        if (rotacion < 0) rotacion = 3;
                        $('#loading').show();
                        setTimeout(function () {
                            sImagenCargada.attr('src', RotarImg(imgOriginal, rotacion));
                            AjustarImg(sImagenCargada);
                        }, 0);
                    });

                    sBGirarDchaForAlbum.on('click', function () {
                        rotacion++;
                        if (rotacion > 3) rotacion = 0;
                        $('#loading').show();
                        setTimeout(function () {
                            sImagenCargada.attr('src', RotarImg(imgOriginal, rotacion));
                            AjustarImg(sImagenCargada);
                        }, 0);
                    });

                    $('#loading').hide()

                    ev.target.removeEventListener(ev.type, arguments.callee);
                   // console.log('ev.type: ' + ev.type);
                }, false);
               // };
                // });
                /*-------------------------------------------------------------------------*/


            };//Fin OnLoad

          



            //  Fecha de la foto si existe 
            if (iniAnio || sAnio.val() == '') {
                nAnio = jqSelectedFiles[0].lastModifiedDate.getFullYear();
                nMes = jqSelectedFiles[0].lastModifiedDate.getMonth();
                nDia = jqSelectedFiles[0].lastModifiedDate.getDate();
                sDia.val(nDia);
                sMes.get(0).selectedIndex = nMes + 1;
                sAnio.val(nAnio);
            };
        };





        /**********************************************************************************************/
        /**************************** EVENTO BOTÓN GUARDAR-ANIADIR FOTO  ******************************/
        /**********************************************************************************************/ 
        sBGuardarAniadir.click(function () {
           // console.log('Click en Guardar - estaClickActivo: '+estaClickActivo);
            if (estaClickActivo) {
                if (CamposCorrectos()) {
                    estaClickActivo = false;
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
        /**********************************************************************************************/
        /****************************  FUNCIONES AÑADIR FOTO CORRECTO / INCORRECTO ********************/
        /**********************************************************************************************/
        function AniadirFotoCorrecto(result) {
            //alert('AniadirFotoCorrecto: ' + result);
            ResetearBuscador();
            reg.Foto = result;
            //alert('listFotos.length: '+listFotos.length);
            if (listFotos.length==0) {
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
            sesParamBusDia = reg.Fecha.slice(6, 8);
            if (sesParamBusDia == "00") sesParamBusDia = "";
            sesParamBusAnio = reg.Fecha.slice(0, 4);
            if (sesParamBusAnio == "0000") sesParamBusAnio = "";
            sesParamBusMes = reg.Fecha.slice(4, 6);
            if (sesParamBusMes == "00") sesParamBusMes = "0";
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
                    data: '{ "imageData" : "' + pic + '","imageName" : "' + result +'" }',
                    success: function (res) {
                        GenerarFotos(0);
                        sesPresentacion = "fotosCon";
                        ActualizarPresentacion();
                    },
                    error: function () {
                        alert('error ' + res);
                    }
                });
            };
       
        };
        function AniadirFotoIncorrecto(result) {
            estaClickActivo = true;
          //  console.log('Resultado AniadirFoto Incorrecto');
            alert('ERROR 2410');
        };

    /**********************************************************************************************/
    /**************************** EVENTO BOTON CANCELAR  *********************************************/
    /**********************************************************************************************/
        sBCancelar.click(function () {

            location.reload();
        });
    };
/*--------------------------------------------------------------------------------------------*/
/*---------------------  FIN INICIALIZAR FORMULARIO -------------------------------------------*/
/*--------------------------------------------------------------------------------------------*/
/*************************************************************************************************/
/****************************  FUNCTION Cargar Fotos *********************************************/
/*****  LLama al WsCargarFotos y cumplimenta dtFotos *********************************************/
/*****  Si hay una búsqueda activa (sesAlbumBus==true) aplica la búsqueda y carga dtFotosBus******/
/*****  Genera y presenta el primer segmento de fotos de dtFotosBus *****************************/
/************************************************************************************************/
function CargarFotos() {
    LifeBook.LibreriaWebService.WsCargarFotos(ResultadosCorrectosCargarFotos, ResultadosIncorrectosCargarFotos);
};

function ResultadosCorrectosCargarFotos(result) {
    listFotos = new Array();
    listFotos = result;
    if (sesAlbumBus == "True")
{
       RestablecerBusqueda();
        CargarFotosBus();
}
    else
        listFotosBus = listFotos;
    EliminarFotos();
    GenerarFotos(0);
};

function ResultadosIncorrectosCargarFotos(result) {
    alert('Resultados Incorrectos Cargar Fotos ' + result);
};

/**********************************************************************************************/
/****************************  FUNCTION Cargar FotosBus ****************************************/
/**********************************************************************************************/
/*   Filtra las fotos cargadas en listFotos[] aplicando las claves de búsqueda y              */
/*   cumplimenta listFotosBus[] con los resultados                                            */
/**********************************************************************************************/
function CargarFotosBus() {
   // alert('Soy CargarFotosBus: '+ NorTexto(sesParamBusTexto));
   
    var j = 0;
    listFotosBus = new Array();
    //alert(listFotos);
   // if (listFotos.length>0) {
        for (var i = 0; i < listFotos.length; i++) {
            // alert('sesParamBusMes= ' + sesParamBusMes + ' - listFotos[i].Fecha.slice(4, 6))= '+listFotos[i].Fecha.slice(4, 6));
            if (
                (sesParamBusTexto == "" ? true : NorPatron(sesParamBusTexto).test(NorTexto(listFotos[i].Comentario))) &&
                (sesParamBusLugar == "" ? true : NorPatron(sesParamBusLugar).test(NorTexto(listFotos[i].Lugar))) &&
                (sesParamBusAnio == "" ? true : sesParamBusAnio == listFotos[i].Fecha.slice(0, 4)) &&
                (sesParamBusMes == "0" ? true : parseInt(sesParamBusMes) == parseInt(listFotos[i].Fecha.slice(4, 6))) &&
                (sesParamBusDia == "" ? true : sesParamBusDia == listFotos[i].Fecha.slice(6, 8)) &&
                (sesParamBusPrivacidad == "0" ? true : (sesParamBusPrivacidad == "1" && listFotos[i].Privacidad == "C") || (sesParamBusPrivacidad == "2" && listFotos[i].Privacidad == "P"))) {
                listFotosBus[j] = listFotos[i];
                j++;
            };
        };
    //};
};

/**********************************************************************************************/
/****************************  FUNCTION Generar Fotos Segmento ********************************/
/**********************************************************************************************/
function GenerarFotos(iSeg) {
    nSegAlbum = 50;
    sFotoModelo.show();
    var nFotosBus = listFotosBus.length;
    var iFotoMax = ((iSeg + 1) * nSegAlbum < nFotosBus) ? (iSeg + 1) * nSegAlbum : nFotosBus;
    for (var iFoto = iSeg * nSegAlbum; iFoto < iFotoMax; iFoto++) {
            GenerarFoto(iFoto);
    };
    sFotoModelo.hide();
};
/**********************************************************************************************/
/****************************  FUNCTION Generar Foto ********************************/
/**********************************************************************************************/
function GenerarFoto(iFoto){
    var foto = listFotosBus[iFoto];
    var sFotoClon = sFotoModelo.clone();
    var sImgClon = sFotoClon.find('img:first');
    var sImgIcono = sFotoClon.find('img.imgEditarFoto');
    var imgFile = sImgClon.attr('src');
    sImgClon.attr('src', imgFile.replace('fotoAlbum.gif', foto.Foto));
    sImgClon.on('load',function(){
    var img = new Image();
        img.src = sImgClon.attr('src');
       // console.log('width: ' + img.width + ' height: ' + img.height);
        var dim = 300;
        var w = img.width;
        var h = img.height;
        var p = w / h;
        var mTop, mLeft;
        if (w > h) {
            sImgClon.attr('width', dim);
            sImgClon.attr('height', 'auto');
            mLeft = 0;
            mTop = dim * (1 - 1 / p) / 2;
            sImgClon.css('margin-left', 0);
            sImgClon.css('margin-top', mTop + 'px');
        }
        else {
            sImgClon.attr('width', 'auto');
            sImgClon.attr('height', dim);
            mTop = 0;
            mLeft = dim * (1 - p) / 2;
            sImgClon.css('margin-top', 0);
            sImgClon.css('margin-left', mLeft + 'px');
        };



    });
     sFotoClon.find('#tdComFotoAlbum_x').text(foto.Comentario);
   // sFotoClon.find('#tdLugarFechaFotoAlbum_x').text(foto.Lugar + ' ( ' + foto.Fecha.slice(0, 4) + ' / ' + foto.Fecha.slice(4, 6) + ' / ' + foto.Fecha.slice(6, 8) + ' )');
    sFotoClon.find('#tdLugarFechaFotoAlbum_x').text(foto.Lugar + ' ( ' + foto.Fecha.slice(6, 8) + ' / ' + foto.Fecha.slice(4, 6) + ' / ' + foto.Fecha.slice(0, 4) + ' )');

    sFotosAlbum.append(sFotoClon);

    if (ValorRol(sesRol) >= ROL_EDITOR) {
        sFotoClon.hover(
            function () {
                sImgIcono.fadeIn(500);
            },
            function () {
                sImgIcono.hide();
            });
        sImgIcono.click(function () {
            iFotoBusSelected = iFoto;
            idFotoSelected = foto.Foto.slice(0, 10);
            EditarFoto(iFoto);
        });
    };

    };
/**********************************************************************************************/
/****************************  FUNCTION Editar Foto *******************************************/
/**********************************************************************************************/
 function EditarFoto(iFotoBus) {
        nuevaImagen = false;
        sesPresentacion = "formularioModificar";
        ActualizarPresentacion();
        sCabLtAniadir.hide();
        sCabLtEditar.show();
        sComentario.val(listFotosBus[iFotoBus].Comentario);
        sLugar.val(listFotosBus[iFotoBus].Lugar);
        sAnio.val(listFotosBus[iFotoBus].Fecha.slice(0,4));
        sDia.val(listFotosBus[iFotoBus].Fecha.slice(6, 8));
        sMes.get(0).selectedIndex = listFotosBus[iFotoBus].Fecha.slice(4, 6);
        $.each([sAnio, sMes, sDia], function (iSel, sel) {
            sel.css('color', 'black');
        });
        switch (listFotosBus[iFotoBus].Privacidad) {
            case "C":
                sCompartida.prop('checked', true);
                break;
            case "P":
                sPrivada.prop('checked', true);
                break;
            default:
                sCompartida.prop('checked', true);
                break;
        };
        sImagenCargada.attr('src', '/image.axd?w=220&h=220&src=App_Data/album/' + listFotosBus[iFotoBus].Foto);
        sImagenCargada.on('load', function () {
            var w = sImagenCargada.width();
            var h = sImagenCargada.height();
            if (w > h) {
                sImagenCargada.css('margin-top', (220 - h) / 2 + 'px');
                sImagenCargada.css('margin-left', '0');
            }
            else {
                sImagenCargada.css('margin-left', (220 - w) / 2 + 'px');
                sImagenCargada.css('margin-top', '0');
            };
            sImagenCargada.css('display', 'block');
        });
        $('#arrastraForAlbum').hide();
        $.each(listFotos, function (iFoto, foto) {
            if (foto.Foto.slice(0, 10) == idFotoSelected) {
                iFotoSelected = iFoto;
                return false;
            }; 
        });

        /**********************************************************************************************/
        /**************************** EVENTO BOTON ELIMINAR  *********************************************/
        /**********************************************************************************************/
       // var nClick = 0;
       // sBEliminar.click(function () {

            sBEliminar.one("click",function(){
          //  nClick++;
          //  alert('Click ' + nClick);
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
                sImagenCargada.css('display', 'none');
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
        };

        /**********************************************************************************************/
        /**************************** EVENTO BOTON GUARDAR-MODIFICAR  *********************************/
        /**********************************************************************************************/
        sBGuardarModificar.on("click", function () {
           // console.log('estaClickActivo: ' + estaClickActivo);
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
                };
            };
            });

    };

    function ModificarFotoCorrecto(result) {
        /* Modificar registro en listFotos */
        listFotos[iFotoSelected].Comentario = reg.Comentario;
        listFotos[iFotoSelected].Lugar = reg.Lugar;
        listFotos[iFotoSelected].Fecha = reg.Fecha;
        listFotos[iFotoSelected].Privacidad = reg.Privacidad;
        if(result !="" && result != null)
            listFotos[iFotoSelected].Foto = result;

        /* Ordenar listFotos por FECHA de mayor a menor */
        listFotos.sort(function (fotoA, fotoB) {
            if (fotoA.Fecha > fotoB.Fecha) return -1;
            else if (fotoA.Fecha < fotoB.Fecha) return 1;
            else return 0;
        });

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
  
/**********************************************************************************************/
/****************************  FUNCTION Redimensionar Imagen  ********************************/
/**********************************************************************************************/

function resize_image(type, quality) {
    var img = new Image(); 
    var canvas;
    img.src = sImagenCargada[0].src;
    var MAX_W = 1000;
    var MAX_H = 1000;
    var w = img.width;
    var h = img.height;

    type = type || 'image/jpeg';
    quality = quality || 0.92;
    if( w>h){
        if(w>MAX_W){
            h*=MAX_W/w;
            w=MAX_W;
        }
        else{
            if(h>MAX_H){
                w*=MAX_H/h;
                h=max_h;
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

/**********************************************************************************************/
/****************************  FUNCTION ACTUALIZAR PRESENTACIÓN  ********************************/
/**********************************************************************************************/
function ActualizarPresentacion() {
    estaClickActivo = true;
    switch (sesPresentacion) {
        case "formularioAniadir":
            busAlbum.hide();
            sBAniadirFotoAlbum.hide();
            fotosAlbum.hide();
            forAlbum.show();
            sBCancelar.show();
            sBEliminar.hide();
            sBGuardarAniadir.show();
            sBGuardarModificar.hide();
            sBSubirFoto.show();
            sBCambiarFoto.hide();
            $('#tdPubliAlbum').hide();
            break;
        case "formularioModificar":
            busAlbum.hide();
            sBAniadirFotoAlbum.hide();
            fotosAlbum.hide();
            forAlbum.show();
            sBCancelar.show();
            sBEliminar.show();
            sBGuardarAniadir.hide();
            sBGuardarModificar.show();
            sBSubirFoto.hide();
            sBCambiarFoto.show();
            $('#tdPubliAlbum').hide();
            break;
        default:
            busAlbum.show();
            sBAniadirFotoAlbum.show();
            fotosAlbum.show();
            if (sesPresentacion == "fotosCon") forAlbum.hide();
            break;
    }
};

/**********************************************************************************************/
/****************************  FUNCTION ELIMINAR FOTOS  ********************************/
/**********************************************************************************************/
function EliminarFotos() {
    sFotosAlbum.show();
    sFotoModelo.hide();
    $('.fotoAlbum').remove();

};
/**********************************************************************************************/
/*****************  FUNCTION ACTUALIZAR PARÁMETROS DE SESIÓN DE BÚSQUEDA DE FOTOS *************/
/**********************************************************************************************/
function ActualizarSesBus() {
    /* Leer valores y asignar a variables sesParamBus */
    sesParamBusTexto = sTbTextoComBusAlbum.val();
    if (sesParamBusTexto == iniBusAlbum[$.inArray(sTbTextoComBusAlbum, selBusAlbum)]) { sesParamBusTexto = "" };
    sesParamBusLugar = sTbLugarBusAlbum.val();
    if (sesParamBusLugar == iniBusAlbum[$.inArray(sTbLugarBusAlbum, selBusAlbum)]) { sesParamBusLugar = "" };
    sesParamBusAnio = sTbAnioBusAlbum.val();  
    if (sesParamBusAnio == iniBusAlbum[$.inArray(sTbAnioBusAlbum, selBusAlbum)]) { sesParamBusAnio = "" };
    sesParamBusMes = (sDdlMesBusAlbum.get(0).selectedIndex).toString();
   // alert('sesParamBusMes= ' + sesParamBusMes);
    sesParamBusDia = "";
    sesParamBusPrivacidad = (sDdlPrivadas.get(0).selectedIndex).toString();
  //  alert('sesParamBusPrivacidad= ' + sesParamBusPrivacidad);

    /* Comunicar al servidor claves de búsqueda para que actualice variables de Session[] correspondientes */
    var parBusAlbum = new LifeBook.ParBusAlbum();
    parBusAlbum.Texto = sesParamBusTexto;
    parBusAlbum.Lugar = sesParamBusLugar;
    parBusAlbum.Anio = sesParamBusAnio;
    parBusAlbum.Mes = sesParamBusMes;
    parBusAlbum.Privacidad = sesParamBusPrivacidad;
    LifeBook.LibreriaWebService.WsActualizarParBusAlbum(parBusAlbum);
};

/**********************************************************************************************/
/*****************  FUNCTION RESTABLECER BUSCADOR A SUS VALORES INICIALES *************/
/**********************************************************************************************/
function ResetearBuscador() {
    $.each(selBusAlbum, function (iSel, sBusAlbum) {
        if (sBusAlbum.is("select")) {
            sBusAlbum.get(0).selectedIndex = 0;
        }
        else {
            //alert(' iniBusAlbum[iSel]= ' + iniBusAlbum[iSel]);
            sBusAlbum.val(iniBusAlbum[iSel]);
            //alert('sBusAlbum.val()= ' + sBusAlbum.val());
        }
    });
   // alert('fin de resetear');
    sesParamBusTexto = "";
    sesParamBusLugar = "";
    sesParamBusAnio = "";
    sesParamBusMes = "0";
    sesParamBusDia = "";
    sesParamBusPrivacidad = "0";
    sesAlbumBus = "False";
    LifeBook.LibreriaWebService.WsActualizarSessionBus(sesAlbumBus);
}
/**********************************************************************************************/
/*****************  FUNCTION RESTABLECER BUSQUEDA CON LOS ÚLTIMOS VALORES BUSCADOS *************/
/**********************************************************************************************/
function RestablecerBusqueda() {
    if (sesParamBusTexto != "") sTbTextoComBusAlbum.val(sesParamBusTexto);
    if (sesParamBusLugar != "") sTbLugarBusAlbum.val(sesParamBusLugar);
    if (sesParamBusAnio != "") sTbAnioBusAlbum.val(sesParamBusAnio);
    sDdlMesBusAlbum.prop('selectedIndex', sesParamBusMes);
    sDdlPrivadas.prop('selectedIndex', sesParamBusPrivacidad);
};
/**********************************************************************************************/
/*****************  FUNCTION AJUSTAR IMAGEN ***************************************************/
/**********************************************************************************************/
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
        sImagen.css('display', 'block');
   
};

function CamposCorrectos() {
    //alert('Soy CamposCorrectos');
    var camposCorrectos = true;
    reg = new LifeBook.RegistroAlbum();
    regLugar = sLugar.val();
    regComentario = sComentario.val();
    /* Día */
     var dia = sDia.val();
    var nDia = parseInt(dia);
    if (nDia < 10) { dia = '0' + dia };
    if (!(nDia > 0 && nDia < 32)) {
        camposCorrectos = false;
    };
    /* Mes */
    var mes = (sMes.get(0).selectedIndex).toString();
    if (parseInt(mes) < 10) { mes = '0' + mes };
    /* Año */
    var anio = sAnio.val();
    var anioRegex = /(0)|(1)|(2)\d{3}/;
    if (!anio.match(anioRegex) | anio == '') {
        camposCorrectos = false; 
    };
    if (camposCorrectos)
        regFecha = anio + mes + dia;

    /* Foto */
    /*
    if (nuevaImagen) {
        if (jqSelectedFiles[0].name) {
            regFoto = jqSelectedFiles[0].name;
        }
        else {
            camposCorrectos = false;
        }
    };
    */
    if (nuevaImagen && jqSelectedFiles[0].name) regFoto = jqSelectedFiles[0].name;
    else if (sesPresentacion == "formularioAniadir") camposCorrectos = false;


    /* Privacidad */
    if (sPrivada.prop('checked'))
        regPrivacidad = "P";
    else if (sCompartida.prop('checked'))
        regPrivacidad = "C";
    else {
        camposCorrectos = false;
    };
    return camposCorrectos;
};
/***************************************************************************************************/
/****************************  FUNCTION PostImg - Enviar una imagen al Servidor ********************/
/***************************************************************************************************/
/*  Se pasan como parámetros el nombre que se le da a la imagen y el procedimiento success         */
/*  Se utilizan las variables globales jqSelectedFiles y jqImgProcesada                            */
/***************************************************************************************************/
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
            error: function () { alert('error ' + res);}
        });
    };
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