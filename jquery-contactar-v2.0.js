/*------------------------------------------------------------------------*/
/*---------------------- CONTACTO --------------------------------------------*/
/*------------------------------------------------------------------------*/

/***************************************************************************/
/******************* VARIABLES SELECTOR ************************************/
/***************************************************************************/
//FORMULARIO

var sTbNombreCompleto;
var sTbEmail;
var sTbAsunto;
var sTbMensaje;
var sBEnviarForContacto;

/***************************************************************************/
/******************* VARIABLES GLOBALES ************************************/
/***************************************************************************/
var listNotGen;
var arrSelForContacto;
var regexEmail;
var camposCorrectos;
var jqNot;
/*
var regNombre;
var regEmail;
var regAsunto;
var regMensaje;
*/
var reg; //Variable con las propiedades Nombre, Email, Asunto, y Mensaje
/*------------------------------------------------------------------------*/
/*----------------------INICIO 1 - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {
    AsignarSelectoresBase();
    InicializarVariables();
   // alert('Tras InicializarVariables');
    CargarNotificacionesContacto();
    //alert('Tras CargarNotificaciones');
    ActivarEventosBase();
    //alert('Tras ActivarEventosBase');
    });

/***************************************************************************/
/******************* ASIGNACIÓN SELECTORES BASE *************************/
/***************************************************************************/
function AsignarSelectoresBase() {
    sTbNombreCompleto = $('#cphPagina_tbNombreCompleto');
    sTbEmail = $('#cphPagina_tbEmail');
    sTbAsunto = $('#cphPagina_tbAsunto');
    sTbMensaje = $('#cphPagina_tbMensaje');
    sBEnviarForContacto = $('#bEnviarForContacto');


};
/***************************************************************************/
/******************* INICIALIZAR VARIABLES      *************************/
/***************************************************************************/
function InicializarVariables() {
    arrSelForContacto = [sTbNombreCompleto, sTbEmail, sTbAsunto];
    regexEmail = /\S+@(\S+\.)+[A-z]{2,4}/;
};
/***************************************************************************/
/******************* CARGAR NOTIFICACIONES CONTACTO*********** *********************/
/***************************************************************************/
function CargarNotificacionesContacto() {
    LifeBook.LibreriaWebService.CargarNot("contacto",
        function (result) {
            listNotGen = result;
        }
     );
};
/***************************************************************************/
/******************* ACTIVAR EVENTOS FORMULARIO *************************/
/***************************************************************************/

function ActivarEventosBase() {
    sBEnviarForContacto.click(function () {
       // alert('Click');
        LeerFormulario();
       // alert('Tras leer formulario');
        if (camposCorrectos) {
            //alert(reg.Nombre + ' ' + reg.Asunto + ' ' + reg.Email + ' ' + reg.Mensaje);
           // Notifica("Mensaje_Enviado", listNotGen);
            LifeBook.LibreriaWebService.WsEnviarFormularioContacto(reg,
                function (result) {
                    //alert(result);
                    Notifica("Mensaje_Enviado", listNotGen);
                    //Desactivar click
                    sBEnviarForContacto.off('click');
                    //window.setTimeout("window.location.href = '/Index.aspx'",5000);//FUNCIONA !
                    window.setTimeout(
                        function(){
                            window.location.href = '/Index.aspx';
                        }
                        , 1500);
                });
        };
    });
};

/******************* ACTIVAR EVENTOS FORMULARIO *************************/
function LeerFormulario() {
    reg = { Nombre: "", Email: "", Asunto: "", Mensaje: "" };
   
    reg.Nombre = sTbNombreCompleto.val();
    reg.Email = sTbEmail.val();
    reg.Asunto = sTbAsunto.val();
    reg.Mensaje = sTbMensaje.val();

    //alert(reg.Nombre);

    if (!reg.Nombre || !reg.Email || !reg.Asunto || !reg.Mensaje) {
        camposCorrectos = false;
        Notifica("Contactar_CamposErroneos", listNotGen);
    }
    else if (!reg.Email.match(regexEmail)) {
        camposCorrectos = false;
        Notifica("Contactar_EmailErroneo", listNotGen);
    }
    else
        camposCorrectos=true;

};
