/*------------------------------------------------------------------------------------------------------*/
/*--------------------   FUNCIONES GENÉRICAS   ---------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/
/*************************************************************************************************************/
/****************************  FUNCTION clickMostrar *********************************************************/
/*************************************************************************************************************/
/*    Esta función pasa un array de ids de selectoresClick de tal forma que cuando se hace click             */
/*   en uno de ellos, se muestra el correspondiente selector de selectoresShow y se ocultan todos los demás  */
/*************************************************************************************************************/
function clickMostrar(selectoresClick, selectoresShow, selectoresHide)
{ 
    $.each(selectoresClick, function (i, selectorClick) {
        $(selectorClick).click(function () {
            $.each(selectoresHide, function (j, selectorHide) {
                $(selectorHide).hide();
            });
            $(selectoresShow[i]).show();
        });
    });
}
/**********************************************************************************************/
/****************************  FUNCTION NORMALIZA EMAIL ****************************************/
/**********************************************************************************************/
/*   En un email con el formato username@domain se pasa a minúsculas la parte domain          */
/*                                                                                            */
/**********************************************************************************************/
function NormalizaEmail(email) {
    if (email.indexOf("@") > 0) {
        var usernameEmail = email.split("@")[0];
        var domainEmail = email.split("@")[1];
        return usernameEmail + "@" + domainEmail.toLowerCase();
    }
    else return email;
}

/**********************************************************************************************/
/****************************  FUNCTION SOLO SIGNIFICATIVOS ****************************************/
/**********************************************************************************************/
/*   Quita los acentos y luego deja sólo los caracteres significativos incluyendo los espacios   */
/*   Lo pasa todo a minúsculas                                                                 */
/**********************************************************************************************/
function SoloSignificativos(cadena) {
    var clave = cadena;
    if (clave != "") {
        var regexSignificativos = new RegExp();
        var acentuados = new Array();
        var sinAcentos = new Array();
        acentuados = [/[À-Äà-ä]/g, /[È-Ëè-ë]/g, /[Ì-Ïì-ï]/g, /[Ò-Öò-ö]/g, /[Ù-Üù-ü]/g];
        sinAcentos = ["a", "e", "i", "o", "u"];
        regexSignificativos = /[^A-Za-z0-9ÑñÇç\s]/g;
        /*  Quitar acentos lo primero */
        $.each(acentuados, function (iAcentuados, regexAcentuados) {
            clave = clave.replace(regexAcentuados, sinAcentos[iAcentuados]);
        });
        /*  Quitar caracteres no siginifcativos */
        clave = clave.replace(regexSignificativos, "");
        return clave.toLowerCase();
    }
    else
        return "";
};

/**********************************************************************************************/
/****************************  FUNCTION NORMALIZA PATRÓN ****************************************/
/**********************************************************************************************/
/*   Toma como parámetro un string que es una clave de búsqueda y devuelve una RegExp         */
/*   Sustituye todas las vocales acentuadas por vocales sin acentos y quita todos los caracteres no significativos */
/*   Sustituye los espacios entre caracteres por comodines para realizar búsquedas de palabras */
/**********************************************************************************************/
function NorPatron(cadenaPatron) {
    var regexEspacios = /\s+/g;
    var clave = SoloSignificativos(cadenaPatron);
    clave = clave.replace(regexEspacios, "\.*");
    return new RegExp(clave, "ig");
};
/**********************************************************************************************/
/****************************  FUNCTION NORMALIZA PATRÓN para búsquedas SQL *******************/
/**********************************************************************************************/
/*   Toma como parámetro un string que es una clave de búsqueda y devuelve otro string         */
/*    normalizado que utiliza el comodín de SQL : %                                            */
/*   Sustituye todas las vocales acentuadas por vocales sin acentos y quita todos los caracteres no significativos */
/*   Sustituye los espacios entre caracteres por comodines % para realizar búsquedas de palabras */
/**********************************************************************************************/
function NorPatronSql(cadenaPatron) {
    var regexEspacios = /\s+/g;
    var clave = SoloSignificativos(cadenaPatron);
    clave ="%"+ clave.replace(regexEspacios, "%")+"%";
    return clave;
};

/**********************************************************************************************/
/****************************  FUNCTION NORMALIZA TEXTO ****************************************/
/**********************************************************************************************/
/*   Toma como parámetro un string que es una cadena de texto en donde se va a efectuar una búsqueda        */
/*   Sustituye todas las vocales acentuadas por vocales sin acentos y quita todos los caracteres no significativos */
/*   Elimina todos los espacios                                                                       */
/**********************************************************************************************/
function NorTexto(cadenaTexto) {
    var regexEspacios = /\s+/g;
    var clave = SoloSignificativos(cadenaTexto);
    clave = clave.replace(regexEspacios, "");
    return clave;
};
/************************************************************************************************************/
/****  FUNCTION GUARDAR UN ARRAY DE VALORES SELECCIONADOS EN UN ARRAY DE LOS SELECTORES CORRESPONDIENTES ****/
/************************************************************************************************************/
/*   Toma como parámetro un array de Selectores y un array de Valores. La función lee los valores de los    */
/*   selectores y los escribe en el array de valores en el mismo orden                                      */
/*                                                                                                          */
/************************************************************************************************************/
function GuardarValoresSeleccionados(arrSelectores, arrValores) {
    $.each(arrSelectores, function (iSel, selector) {
        if (selector.is('select')) {
            arrValores[iSel] = selector.find(':selected').text();
        }
        else if (selector.is('input:radio')) {
            arrValores[iSel] = selector.prop('checked');
        }
        else {
            arrValores[iSel] = selector.val();
        };
    });
};
/************************************************************************************************************/
/****  FUNCTION INICIALIZAR LOS SELECTORES DE UN FORMULARIO   ***********************************************/
/************************************************************************************************************/
/*      Guarda los valores iniciales de los selectores y define los eventos para su funcionamiento.         */
/*                                                                                                          */
/*   PARAMETROS: arrSelectores: Selectores del formulario                                                   */
/*               arrValores: Array en donde se guardarán los valores inciales de los selectores             */
/*               colorInicial: Color del texto que se presentará con los valores inciales                   */
/*               colorValor: Color del texto que se presentará cuando se cumplimente por el usuario         */
/*                                                                                                          */
/************************************************************************************************************/
function InicializarSelectoresFormulario(arrSelectores, arrValores, colorInicial, colorValor) {
    arrValores = new Array();
    /* En primer lugar se guardan los valores inciales seleccionados */
    GuardarValoresSeleccionados(arrSelectores, arrValores);
    $.each(arrSelectores, function (iSel, selector) {
        selector.on('keypress mousedown focusout', function (e) {
            switch (e.type) {
                case 'mousedown':
                    if (selector.is('textarea')) editarText(selector, iSel);
                    else if (selector.is('input:text')) {
                        selector.val('');
                        selector.css('color', 'colorValor');
                    };
                    break;
                case 'keypress':
                    if ((e.which == 13 || e.which == 9) && selector.is('input:text,textarea')) {
                        avanceFocus(iSel, e);
                        var nextSelector = arrSelectores[iSel + 1];
                        if (nextSelector.is('textarea, input:text')) editarText(nextSelector, iSel+1);
                    }
                    else if (((e.which == 13 || e.which == 9) && selector.is('select')) || ((e.which == 9) && selector.is('input:radio')))
                        avanceFocus(iSel,e);
                    else if ((e.which == 13) && selector.is('input:radio')) {
                        selector.prop('checked', true);
                        avanceFocus(iSel, e);
                    }; 
                    break;
                case 'focusout':
                    if( selector.is('input:text,textarea')) checkText(selector,iSel);
                    else if(selector.is('select')) checkSelect(selector,iSel);
                    break;
            }; //Fin switch
        }); //Fin selector
    });//fin $.each

    function editarText(selector, iSel) {
        if (selector.val() == arrValores[iSel]) {
            selector.val('');
            selector.css('color', colorValor);
        };
    };
    function avanceFocus(iSel,e) {
        e.preventDefault();
        if (iSel == arrSelectores.length - 1) arrSelectores[0].focus(); else arrSelectores[iSel + 1].focus();
    };
    function checkText(selector, iSel) {
        if (selector.val() == null || selector.val() == '') {
            selector.val(arrValores[iSel]);
            selector.css('color', colorInicial);
        }
        else if (selector.val() != arrValores[iSel]) selector.css('color', colorValor);
    };
    function checkSelect(selector, iSel) {
        if (selector.val() != arrValores[iSel]) selector.css('color', colorValor);
        else selector.css('color', colorInicial);
    };

};//FIN FUNCTION

function InicializarSelectoresFormularioTree(arrSelectores, colorInicial, colorValor) {
    var arrValores = new Array();
   // alert('Dentro de Inicializar');
    /* En primer lugar se guardan los valores inciales seleccionados */
    GuardarValoresSeleccionados(arrSelectores, arrValores);

    $.each(arrSelectores, function (iSel, sel) {
        sel.attr('tabindex', iSel);
        if (sel.val() == "") sel.css('color', colorValor)
        else
        sel.css('color', colorInicial);
    });

    $.each(arrSelectores, function (iSel, selector) {
        selector.on('keypress mousedown focusout focus keydown', function (e) {
            switch (e.type) {
                case 'mousedown':
                   // alert('mousedown');
                    if (selector.is('textarea')) editarText(selector, iSel);
                    else if (selector.is('input:text')) {
                        selector.val('');
                        selector.css('color', colorValor);
                    }
                    else if (selector.is('select')) selector.css('color', colorValor);
                    break;
            /*    case 'keypress':
                    //alert('e.which: '+ e.which + ' tabindex: ' + selector.attr('tabindex'));
                    if ((e.which == 13 || e.which == 9) && selector.is('input:text,textarea')) {
                        avanceFocus(iSel, e);
                        var nextSelector = arrSelectores[iSel + 1];
                        if (nextSelector.is('textarea, input:text')) editarText(nextSelector, iSel + 1);
                    }
                    else if((e.which == 13 || e.which == 9) && selector.is('select'))
                        avanceFocus(iSel, e);
                    break;
                    */

                case 'keydown':
                    //alert('e.keyCode: ' + e.keyCode);
                    if ((e.keyCode == 13 || e.keyCode == 9) && selector.is('input:text,textarea')) {
                        avanceFocus(iSel, e);
                        var nextSelector = arrSelectores[iSel + 1];
                        if (nextSelector.is('textarea, input:text')) editarText(nextSelector, iSel + 1);
                    }
                    else if ((e.keyCode == 13 || e.keyCode == 9) && selector.is('select')) {
                        avanceFocus(iSel, e);
                        var nextSelector = arrSelectores[iSel + 1];
                        if (nextSelector.is('textarea, input:text')) editarText(nextSelector, iSel + 1);
                    };
                    break;


                case 'focusout':
                    if (selector.is('input:text,textarea')) checkText(selector, iSel);
                    else if (selector.is('select')) checkSelect(selector, iSel);
                    break;

                case 'focus':
                    $(this).autocomplete({ source: [] });

                    break;



            }; //Fin switch
        }); //Fin selector
    });//fin $.each

    arrSelectores[0].click();

    return arrValores;

    function editarText(selector, iSel) {
        if (selector.val() == arrValores[iSel]) {
            selector.val('');
            selector.css('color', colorValor);
        };
    };
    function avanceFocus(iSel, e) {
        var iSelNext;
        var nOcultos;
        e.preventDefault();
        iSelNext = iSel + 1;
        nOcultos=0;
        if (iSelNext > arrSelectores.length - 1) iSelNext = 0;
        //alert(arrSelectores[iSelNext].parent().css('display'));
        while ( ( arrSelectores[iSelNext].css('display') == 'none' || arrSelectores[iSelNext].parent().css('display') == 'none' ) && nOcultos < arrSelectores.length) {
            iSelNext++;
            if (iSelNext > arrSelectores.length - 1) iSelNext = 0;
            nOcultos++;
        };
       // alert('iSel: ' + iSel + ' iSelNext: ' + iSelNext);
        arrSelectores[iSelNext].focus();
    };


    function checkText(selector, iSel) {
        if (selector.val() == null || selector.val() == '') {
            selector.val(arrValores[iSel]);
            selector.css('color', colorInicial);
        }
        else if (selector.val() != arrValores[iSel]) selector.css('color', colorValor);
    };
    function checkSelect(selector, iSel) {
          // alert('CheckSelect - Valor: ' + selector.find('option')[selector.val()-1].innerText + ' Valor Inicial: ' + arrValores[iSel]);
        if (selector.find('option')[selector.val()-1].innerText != arrValores[iSel]) selector.css('color', colorValor);
        else selector.css('color', colorInicial);
    };

};//FIN FUNCTION



/************************************************************************************************************/
/****  FUNCTION ENVIAR IMAGEN B64 AL SERVIDOR   *************************************************************/
/************************************************************************************************************/
/*      Envía mediante AJAX a la página Save_Picture.aspx una imagen codificada en B64 para                 */
/*      salvarla en el directorio del servidor especificado.                                               */
/*   PARAMETROS: imgB64: Es la imagen codificada procendente de un canvas que se va a enviar               */
/*               nombreImg: Es el nombre de la imagen                                                      */
/*               dirServer: Es el path del directorio del servidor en donde se va a guardar                */
/*               procSuccess: Es el nombre del procedimiento que se ejecutará en caso de éxito             */
/*                                                                                                          */
/************************************************************************************************************/
function PostImgB64ToServer(imgB64, nombreImg, dirServer, procSuccess,procError) {
    //console.log('Desde PostImgB64 - nombreImg: '+ nombreImg);
    if (nombreImg != '') {
        var pic = imgB64.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
        //alert(pic);
        $.ajax({
            type: "POST",
            url: '/Save_Picture.aspx/Upload_Picture?dir=' + dirServer,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            timeout: '100000',
            data: '{ "imageData" : "' + pic + '","imageName" : "' + nombreImg + '" }',
            success: procSuccess,
            error: procError                     //function () { alert('error ' + res); }
        });
    }
    else
        return procSuccess();
};
    /************************************************************************************************************/
    /****  FUNCTION RESIZE UNA IMAGEN (SELECTOR IMG) *************************************************************/
    /************************************************************************************************************/
    /*      Redimensiona una imagen mediante Canvas y devuelve esta imagen codificada en B64                      */
    /*                                                                                                           */
    /*   PARAMETROS: sImagenCargada: Es el selector Img de la imagen                                            */
    /*               maxDim: Se ajusta la imagen para que el lado mayor tenga maxDim pixeles                   */
    /*                                                                                                          */
    /************************************************************************************************************/
    function ResizeSImg(sImagenCargada, maxDim) {
        var img = new Image();
        var canvas;
        img.src = sImagenCargada[0].src;
        var MAX_W = maxDim;
        var MAX_H = maxDim;
        var w = img.width;
        var h = img.height;

       var type = 'image/jpeg';
       var quality = 0.92;
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
        return canvas.toDataURL(type, quality);
    };

    function ResizeSImgMaxDim(sImg, maxDim) {
        var img = new Image();

     //   sImg.on('load', function () {

            img.src = sImg[0].src;
        /*
            sImg.on('load', function () {
                console.log('ResizeSImgMaxDim - sImg.get(0).naturalWidth: ' + sImg.get(0).naturalWidth);
                console.log('ResizeSImgMaxDim - sImg.get(0).naturalHeight: ' + sImg.get(0).naturalHeight);
            });
        */
        var n1 = img.src.length;
        if (n1 > 30) n1 = 30;
       // console.log('ResizeSImgMaxDim - img.src: ' + img.src.length + " - " + img.src.substring(0, n1));
       // console.log('ResizeSImgMaxDim - img.width: ' + img.width);
       // console.log('ResizeSImgMaxDim - img.height: ' + img.height);

     //   var wIni = sImg.prop('naturalWidth'); //No funciona con Safari
      //  var hIni = sImg.prop('naturalHeight'); //No funciona con Safari

        var wIni = img.width;
        var hIni = img.height;

       // console.log('ResizeSImgMaxDim - wIni: ' + wIni);
       // console.log('ResizeSImgMaxDim - hIni: ' + hIni);
 
        var canvas;
        var type = 'image/jpeg';
        /*  var quality = 0.92;*/
          var quality = 0.99;
        var pIni = wIni / hIni;
        var h, w;
        var marginTop, marginLeft;

        if (pIni > 1) {
            w = maxDim;
            h = maxDim / pIni;
            marginLeft = 0;
            marginTop = (maxDim - h) / 2;
        }
        else {
            w = maxDim * pIni;
            h = maxDim;
            marginLeft = (maxDim - w) / 2;
            marginTop = 0;

        };
        h = h.toFixed();
        w = w.toFixed();
        marginLeft = marginLeft.toFixed();
        marginTop = marginTop.toFixed();

        //alert(sImg.parent().attr('id'));
        //sImg.parent().css('border', '2px solid blue');
       $('.fotoIni').css('padding-top', marginTop+'px');
       $('.fotoIni').css('padding-left', marginLeft + 'px');

        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");

       // console.log('maxDim: ' + maxDim + ' wIni: ' + wIni + ' hIni: ' + hIni + ' w: ' + w + ' h: ' + h);

        ctx.drawImage(img, 0, 0, wIni, hIni, 0, 0, w, h);

        var resultado = canvas.toDataURL(type, quality);

        var n2 = resultado.length;
        if (n2 > 30) n2 = 30;
       // console.log('ResizeSImgMaxDim - resultado: ' + resultado.length + " - " + resultado.substring(0, n2));

        return resultado;
     //   return canvas.toDataURL(type, quality);

      //  });
    };

    function HolaMundo() {
        alert("Hola Mundo");
    };

    function ResizeImgCom(imageSrc, maxDim) {
       // alert('Desde ResizeImg');
        var img = new Image();
        var canvas;
        img.src = imageSrc;
      // alert(img.src);

        var w = img.width;
        var h = img.height;

        var type = 'image/jpeg';
        var quality = 0.92;
        /*
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
        */
        if (w > h) {
            if (w > maxDim) {
               
                h *= maxDim / w;
                w = maxDim;
            }
        }
        else {
            if (h > maxDim) {
                
                w *= maxDim / h;
                h = maxDim;
            }
        };

        //alert('h: ' + h + ' w: ' + w);

        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        return canvas.toDataURL(type, quality);
    };

/**********************************************************************************************/
/*********  FUNCTION CONVERTIR NÚMERO EN TEXTO CON UN NÚMERO FIJO DE DIGITOS ******************/
/**********************************************************************************************/
/*   PARAMETROS:                                                                              */
/*   NUMBER - Es el número que se convertirá en texto justificado a la derecha                */
/*   DIGITOS - Es el número de dígitos que tendrá la cadena de salida rellenando con ceros a  */
/*             la izquierda                                                                   */
/**********************************************************************************************/
    function strNumber(number, digitos) {
        //alert('strNumber: ' + number + ' con ' + digitos + ' digitos');
        var str0 = '';
        var result = '';
        for (var i = 0; i < digitos; i++) {
            str0 += '0';
        };
        result = str0 + number;
        result = result.substr(result.length - digitos, digitos);
        
        return result;
    }

/**********************************************************************************************/
/*********  FUNCTION PONER FOTO DE USUARIO EN UN SELECTOR IMAGEN ******************************/
/**********************************************************************************************/
/*   PARAMETROS:                                                                              */
/*   selImg - Selector Imagen                                                                 */
/*   nomFoto - Nombre de la foto que se encontrará en /Images/users                           */
/*   sexo - Si el nombre de la foto es null se pondrá una silueta en función del sexo         */
/**********************************************************************************************/
    function PonerFotoUser(selImg, nomFoto, sexo) {
        if (nomFoto) {
            selImg.attr('src', '/image.axd?w=110&h=110&src=Images/users/' + nomFoto);
        }
        else if (sexo == "M") {
            selImg.attr('src', '/Images/support/siluetaM.jpg');
        }
        else {
            selImg.attr('src', '/Images/support/siluetaH.jpg');
        }

        };
/**********************************************************************************************/
/*  FUNCTION PONER FOTO DE USUARIO EN UN SELECTOR DE IMAGEN O ENVOLVENTE  (Versión Mejorada)  */
/**********************************************************************************************/
/*     Acopla una imagen dentro de una caja cuadrada cuya longitud se pasa como parámetro.    */
/*     El selector puede ser directamente una imagen o bien una caja envolvente.              */
/*     La imagen se centrará dentro de la caja cuadrada definida                              */
/*                                                                                            */
/*   PARAMETROS:                                                                              */
/*   selector - Selector Imagen o de una caja envolvente                                    */
/*   nomFoto - Nombre de la foto que se encontrará en /Images/users                           */
/*   sexo - Si el nombre de la foto es null se pondrá una silueta en función del sexo         */
/*   cajaHW - longitud del lado cuadrado de la caja                                           */
/**********************************************************************************************/
    function PonerFotoUsuarioAnt(selector, nomFoto, sexo, cajaHW) {
        var sImg;
        var margenW;
        var margenH;
        var hImgAxd;
        var wImgAxd;
        var pFoto;
        var idImg;
        var jSImg;

        var h, w;

        if (selector.is('img')) {
            sImg = selector;   
        }
        else {
            sImg = selector.find('img');
        };
       // idImg = sImg.attr('id');
       
       // jSImg = document.getElementById(idImg); //No funciona

        if (nomFoto) {

          /*  sImg.removeAttr('margin-top');
            sImg.removeAttr('margin-left');
            sImg.removeAttr('width');
            sImg.removeAttr('height');
            sImg.removeAttr('src');*/
         //   var img = new Image();
         //   img.src = "Images/users/" + nomFoto;
            sImg.attr('src', '/image.axd?w=' + cajaHW + '&h=' + cajaHW + '&src=Images/users/' + nomFoto);
            // sImg.on('load', AjustarCssImg);
          
            /*
            if (w > h) {
                margenW = 0;
                margenH = parseInt(cajaHW * (1 - h / w) / 2);
            }
            else {
                margenH = 0;
                margenW = parseInt(cajaHW * (1 - w / h) / 2);
            };
            */
            var img = new Image();
            img.src = "Images/users/" + nomFoto;


            
           // alert('w: ' +img.width+' h: '+img.height+           ' pFoto: ' + pFoto);
           
              //  wImgAxd = parseInt(cajaHW * pFoto);
              //  hImgAxd = cajaHW;
        

          //  sImg.css('margin-top',margenH+'px');
          //  sImg.css('margin-left', margenW + 'px');
            sImg.on('load', function () {
                pFoto = img.width / img.height;
                if (pFoto > 1) {
                    margenW = 0;
                    margenH = parseInt(cajaHW * (1 - 1 / pFoto) / 2);  
                }
                else {
                    margenH = 0;
                    margenW = parseInt(cajaHW * (1 - pFoto) / 2);
                };
                sImg.css('margin-top', margenH + 'px');
                sImg.css('margin-left', margenW + 'px');
               // sImg.attr('src', '/image.axd?w=' + cajaHW + '&h=' + cajaHW + '&src=Images/users/' + nomFoto);
            });



           // alert(margenW + 'px');

/*
            var img = new Image();
            img.src="Images/users/" + nomFoto;
            pFoto = img.width / img.height;
            //alert('pFoto: ' + pFoto);
            if (pFoto > 1) {
                margenW = 0;
                margenH = parseInt(cajaHW * (1 - 1 / pFoto) / 2);
                wImgAxd = cajaHW;
                hImgAxd = parseInt(cajaHW / pFoto);
              
            //   sImg.css('margin-top', margenH + 'px');
            //    sImg.attr('style', 'margin-top:' + margenH + 'px');
            }
            else {
                margenH = 0;
                margenW = parseInt(cajaHW * (1 - pFoto) / 2);
                wImgAxd = parseInt(cajaHW * pFoto);
                hImgAxd = cajaHW;
              
               // sImg.css('margin-left', margenW + 'px');
               // sImg.attr('style', 'margin-left:' + margenW + 'px');
            };*/
            //alert('margenH: ' + margenH + ' margenW: ' + margenW);

          //  sImg.css('margin-top', margenH + 'px');
           // sImg.css('margin-left', margenW + 'px');
           
          //  sImg.css('width', wImgAxd + 'px');
           // sImg.css('height', hImgAxd + 'px');
          //  sImg.css('height', 'auto');
            //sImg.attr('src', '/image.axd?w=' + cajaHW + '&h=' + cajaHW + '&src=Images/users/' + nomFoto);
           // sImg.attr('src', 'Images/users/' + nomFoto);

            
            //alert('margen ' + sImg.css('margin-left'));
            
           // AjustarCssImg();
           // sImg.on('load', AjustarCssImg());
          //  alert(idImg);
/*
            if (sImg.prop('complete')) {
               // alert('a la primera');
                AjustarCssImg();
            }
            else {
               //alert('evento');
                sImg.on('load', AjustarCssImg());
              //  jSImg.onload = function (e) {
                
                                //AjustarCssImg();

            };*/
          //  alert('jSImg: ' + jSImg);
/*
            jSImg.onload = function (e) { //No funciona
                alert('jSImg');
                AjustarCssImg();
            };
            */
  //        sImg.on('load', AjustarCssImg);

          


        }
        else {
            sImg.css('width', cajaHW + 'px');
            sImg.attr('src', '/Images/support/silueta' + sexo + '.jpg');
        };
        
        function AjustarCssImg() {
            // alert('ajuste Css imagen: ' + idImg);
            var img = new Image();
            img.src = "Images/users/" + nomFoto;
            pFoto = img.width / img.height;
            //alert('pFoto: ' + pFoto);
            if (pFoto > 1) {
                margenW = 0;
                margenH = parseInt(cajaHW * (1 - 1 / pFoto) / 2);
                wImgAxd = cajaHW;
                hImgAxd = parseInt(cajaHW / pFoto);

                //   sImg.css('margin-top', margenH + 'px');
                //    sImg.attr('style', 'margin-top:' + margenH + 'px');
            }
            else {
                margenH = 0;
                margenW = parseInt(cajaHW * (1 - pFoto) / 2);
                wImgAxd = parseInt(cajaHW * pFoto);
                hImgAxd = cajaHW;

                // sImg.css('margin-left', margenW + 'px');
                // sImg.attr('style', 'margin-left:' + margenW + 'px');
            };


            sImg.css('margin-top', margenH + 'px');
            sImg.css('margin-left', margenW + 'px');
           // sImg.css('width', wImgAxd + 'px');
           // sImg.css('height', 'auto');
        };
        


    };

    function PonerFotoUsuario(selector, nomFoto, sexo, dim) {

        var sImg;
        if (selector.is('img')) {
            sImg = selector;
        }
        else {
            sImg = selector.find('img');
        };
        if (nomFoto) {
            
            sImg.removeAttr('style');
            sImg.removeAttr('width');
            sImg.removeAttr('heigth');
            sImg.attr('style', 'display:none;');
            sImg.attr('src', "/Images/users/" + nomFoto);

            sImg.on('load',function(){
                var img = new Image();
                img.src = sImg.attr('src');

                    var w = img.width;
                    var h = img.height;
                    var p = w / h;
                    var mTop, mLeft;
                    if (w > h) {
                        sImg.attr('width', dim);
                        sImg.attr('height', 'auto');
                        mLeft = 0;
                        mTop = parseInt(dim * (1 - 1 / p) / 2);
                    }
                    else {
                        sImg.attr('width', 'auto');
                        sImg.attr('height', dim);
                        mTop = 0;
                        mLeft = parseInt( dim * (1 - p) / 2);

                    };
                     console.log('nomFoto: ' + nomFoto+' mTop: ' + mTop + ' mLeft: ' + mLeft)
                     console.log('nomFoto: ' + nomFoto + ' w: ' + w + ' h: ' + h)
                    sImg.attr('style', 'display:block;');
                    sImg.css('margin-left', mLeft + 'px');
                    sImg.css('margin-top', mTop + 'px');

                

            });//fin onload sImg
            
        }
        else {
            sImg.css('width', dim + 'px');
            sImg.attr('src', '/Images/support/silueta' + sexo + '.jpg');
        };
    };

/************************************************************************************************************/
/****  FUNCTION VALOR INICIAL DE UN SELECTOR DE UN FORMULARIO   ***********************************************/
/************************************************************************************************************/
/*      Devuelve el Valor Inicial de un Selector de un formulario                                           */
/*                                                                                                          */
/*   PARAMETROS: selector: Selector de un formulario del que queremos saber el Valor Inicial                 */
 /*                arrSelectores: Selectores del formulario                                                   */
/*               arrValores: Array en donde están guardados los valores inciales de los selectores             */
/*                                                                                                          */
/*                                                                                                          */
/************************************************************************************************************/
    function ValorInicial(selector, arrSelectores, arrValores) {
     /*   alert('Dentro de ValorInicial');
        $.each(arrValores, function (iVal, val) {
            alert('valor ' + ival + ' = ' + val);
        });
        */

       // alert(selector.attr('id'));
       // alert(arrSelectores[0].attr('id'));
        //alert(arrValores[0]);
        return arrValores[$.inArray(selector, arrSelectores)];
    };

/************************************************************************************************************/
/****  FUNCTION RESETEAR LOS SELECTORES DE UN FORMULARIO   ***********************************************/
/************************************************************************************************************/
/*      Pone los valores iniciales a los selectores (Input:Text, Textarea, y Select) de un formulario       */
/*                                                                                                          */
/*   PARAMETROS:                                                                                            */
/*                arrSelectores: Selectores del formulario                                                   */
/*               arrValores: Array en donde están guardados los valores inciales de los selectores          */
/*               colorInicial: Color de los campos en el inicio                                             */
/*                                                                                                          */
/*                                                                                                          */
/************************************************************************************************************/
    function ResetearFormulario(arrSelectores, arrValores, colorInicial) {
        $.each(arrSelectores, function (iSel, selector) {
            selector.css('color', colorInicial);
            if (selector.is('input:text, textarea')) {
                selector.val(arrValores[iSel]);
            }
            else {
                if (selector.is('select')) {
                  selector.val("1");
                    //selector.prop('selectedIndex', '0'); //También funciona!!!
                };
            };//FIN if-else
        });//FIN each
    };//FIN ResetearFormulario

/************************************************************************************************************/
/****  FUNCTION SUSTITUIR   ***********************************************/
/************************************************************************************************************/
/*      Es un Replace simplificado             */
/*                                                                                                          */
/*   PARAMETROS:                                                                                            */
/*                selector: Selector dentro del cual se manipula el html                                    */
/*               cadenaIni: Cadena que se sustituirá          */
/*               cadenaFin: Valor que se pondrá en lugar de la cadenaIni                                             */
/*                                                                                                          */
/*                                                                                                          */
/************************************************************************************************************/
    function Sustituir(selector, cadenaIni, cadenaFin) {
        var selectorHtml = selector.html();
        selectorHtml = selectorHtml.replace(cadenaIni, cadenaFin);
        selector.html(selectorHtml);
    };
/************************************************************************************************************/
/****  FUNCTION FechaHora   ***********************************************/
/************************************************************************************************************/
/*      Da la FechaHora en una cadena con formato AAAAMMDDHHMMSS                                            */
/*                                                                                                          */
/************************************************************************************************************/
    function FechaHora() {
        var fecha = new Date();
        fecha = fecha.toISOString();
         return fecha.replace(/([-:TZD])|((\..*)$)/g, '');
    };
/************************************************************************************************************/
/****  FUNCTION PonerImgB64   ***********************************************/
/************************************************************************************************************/
/*      Presenta una imagen B64 en el selector de imagen para encajar en un cuadrado                        */
/*                                                                                                          */
/************************************************************************************************************/
    function PonerImgB64(sImg, srcImgB64, dim) {
      
       // console.log('Desde PonerImgB64');
       // sImg.parent().hide();
           
         sImg.removeAttr('style');
         sImg.removeAttr('width');
         sImg.removeAttr('heigth');
         sImg.css('opacity', 0.01);
         sImg.attr('width', dim);
         sImg.attr('height', dim);

        var img = new Image();
        img.src = srcImgB64;

        img.addEventListener('load', function (ev) {

            sImg.one('load', function () {

                 //sImg.attr('style', 'display:block;');

            

                var w = sImg.prop('naturalWidth');
                var h = sImg.prop('naturalHeight');
                var p = w / h;
                var mTop, mLeft;

               // console.log('img.width: ' + w + ' img.height: ' + h);
           
                if (w > h) {
                    sImg.attr('width', dim);
                    sImg.attr('height', 'auto');
                    mLeft = 0;
                    mTop = dim * (1 - 1 / p) / 2;
                    sImg.css('margin-left', 0);
                    sImg.css('margin-top', mTop + 'px');
                }
                else {
                    sImg.attr('width', 'auto');
                    sImg.attr('height', dim);
                    mTop = 0;
                    mLeft = dim * (1 - p) / 2;
                    sImg.css('margin-top', 0);
                    sImg.css('margin-left', mLeft + 'px');
                };
               
                sImg.attr('tabIndex', 99);
                //sImg.parent().show();
                sImg.css('opacity', 1);
                sImg.focus();
              
            });
            sImg.attr('src', srcImgB64);

        });

    };

/************************************************************************************************************/
/****  FUNCTION RotarImg   ***********************************************/
/************************************************************************************************************/
/*      Devuelve el src en B64 de una imagen rotada el número de cuadrantes indicado en rotacion                        */
/*                                                                                                          */
/************************************************************************************************************/
    function RotarImg(imgOriginal, rotacion) {
       
        var canvasRotacion = document.createElement('canvas');
        var ctx = canvasRotacion.getContext('2d');
        var wOri = imgOriginal.width;
        var hOri = imgOriginal.height;

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

        $('#loading').hide();
        $('#loading-mb').hide();


        return canvasRotacion.toDataURL("image/png");

    };
/************************************************************************************************************/
/****  FUNCTION ResizeImg   ***********************************************/
/************************************************************************************************************/
/*      Devuelve el src en B64 de una imagen redimensionada según un cuadrado de lado maxDim                        */
/*                                                                                                          */
/************************************************************************************************************/
    function ResizeImg(imgOriginal, maxDim, tipo, calidad) {
      //  console.log('Desde ResizeImg');
        var img = new Image();
        var canvas;
        var w, h;

        img.onload = function () {
           // console.log('img.width: ' + img.width + 'img.height: ' + img.height);
        };

        img.src = imgOriginal.src;
       // console.log('img.src.lengh: '+img.src.length);
        var MAX_W = maxDim;
        var MAX_H = maxDim;

      
      //      w = img.width;
        //     h = img.height;

        w = imgOriginal.width;
        h = imgOriginal.height;

      //  console.log('h: ' + h + ' w: ' + w);
   

       // w = img.width;
       // h = img.height;

        tipo = tipo || 'image/jpeg';
        calidad = calidad || 0.99;

       
       // console.log('tipo: ' + tipo);
       // console.log('calidad: ' + calidad);

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
      //  console.log('h: ' + h + ' w: ' + w);
        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        return canvas.toDataURL(tipo, calidad);
    };

    function ResizeImg2(imgOriginal, maxDim, tipo, calidad) {
      //  console.log('Desde ResizeImg2: '+maxDim);
     //   var img = new Image();
        var canvas;
        var w, h;
        var p;

    //    img.onload = function () {
     //       console.log('img.width: ' + img.width + 'img.height: ' + img.height);
      //  };

     //   img.src = imgOriginal.src;
      //  console.log('img.src.lengh: ' + img.src.length);
       // var MAX_W = maxDim;
      //  var MAX_H = maxDim;




        //      w = img.width;
        //     h = img.height;

        w = imgOriginal.width;
        h = imgOriginal.height;
        p = w / h;

       // console.log('h1: ' + h + ' w1: ' + w);


        // w = img.width;
        // h = img.height;

        tipo = tipo || 'image/jpeg';
        calidad = calidad || 0.99;


       // console.log('tipo: ' + tipo);
       // console.log('calidad: ' + calidad);

        if (w > maxDim || h > maxDim) {
            if (p > 1) { //APAISADA
                w = maxDim;
                h = maxDim / p;

            }
            else { //VERTICAL
                w = maxDim * p;
                h = maxDim;
            };
        };

        /*
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
        };
        */

       // console.log('h2: ' + h + ' w2: ' + w);
        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgOriginal, 0, 0, w, h);
        return canvas.toDataURL(tipo, calidad);
    };



/************************************************************************************************************/
/****  FUNCTION Edad   ***********************************************/
/************************************************************************************************************/
/*      Devuelve la edad si se cumplimenta el año de nacimiento, tiendo en cuenta el día y                  */
/*      mes del año de nacimiento si se cumplimentan. Si no hay año devuelve null                           */
/************************************************************************************************************/
    function Edad(anioNac, mesNac, diaNac) {
        var edad;
        var date = new Date();
        var anioAct = date.getFullYear();
        var mesAct = date.getMonth()+1;
        var diaAct = date.getDate();

        if (anioNac>0 && anioNac < anioAct) {
            edad = anioAct - anioNac;       
            if (mesNac>0 && mesAct < mesNac) edad--;
            else if (mesAct == mesNac)
                if (diaNac>0 && diaAct < diaNac) edad--;
        }
        else edad = null;
       // console.log('anioAct: ' + anioAct + ' mesAct: ' + mesAct + ' diaAct: ' + diaAct + ' Edad: ' + edad);
        return edad;
    };


/************************************************************************************************************/
/****  FUNCTION CargaFicheroImg   ***********************************************/
/************************************************************************************************************/
/*      Se utiliza para cargar una imagen haciendo las oportunas comprobaciones, y en caso de               */
/*      que haya un error se hace la notificación correspondiente                                           */
/************************************************************************************************************/
    function CargarFicheroImg(fichero, selector, funcion) {

        //-----------------------------------------
        if(fichero)

        if (fichero.type.match("image.*") && fichero.name.match(/\.(jpg|jpeg|bmp|gif|png)$/i)) {
            if (Math.round(fichero.size / 1024) < 16000) {

                try {

                    funcion();

                }
                catch (err) {
                    // alert("Error al cargar la foto. Inténtalo de nuevo");
                    Notifica("Master_ErrorCargaImagen", jqNot);
                   // console.log("Error al cargar la foto: " + err.message);
                    if(selector)selector.css('border', 'dashed 3px #7596a5');
                };

            }
            else {
                if (selector) selector.css('border', 'dashed 3px #7596a5');
                //alert("Tamaño de la imagen excesivo");
                Notifica("Master_TamanioImagen", jqNot);
            };

        }
        else {
            if (selector) selector.css('border', 'dashed 3px #7596a5');
            //alert("No es una imagen JPG");
            Notifica("Master_NoEsImagen", jqNot);
        };
        //-----------------------------------------

    };

/************************************************************************************************************/
/****  FUNCTION PonerCookies   ***********************************************/
/************************************************************************************************************/
    function PonerCookies() {
        $.cookie.raw = true;
        $.cookie('e', jqEmail, { expires: 36500, path: '/' });
        $.cookie('p', jqClave, { expires: 36500, path: '/' });
    };
/************************************************************************************************************/
/****  FUNCTION QuitarCookies   ***********************************************/
/************************************************************************************************************/
    function QuitarCookies() {
        try {
           // console.log('Quitando Cookies');
            $.removeCookie('e', { path: '/' });
            $.removeCookie('p', { path: '/' });
        }
        catch (error) {
            console.log('ERROR Quitando Cookies'+error.message);
        };

    };
