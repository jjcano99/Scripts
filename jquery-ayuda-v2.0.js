/*------------------------------------------------------------------------*/
/*---------------------- AYUDA DESKTOP ------------------------------------*/
/*------------------------------------------------------------------------*/



/*------------------------------------------------------------------------*/
/*----------------------INICIO - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {

    var $capitulo, $subcapitulo;
  //  sesPaginaOrigen = $('#tbCabSesPaginaOrigen').val();
   // console.log('sesPaginaOrigen: ' + sesPaginaOrigen);


    //EVENTOS CLICK

    $('.tdCapituloTituloBoton_dk, .tdCapituloTituloTexto_dk h2').click(function () {
        //ReiniciarAyuda();
        $capitulo = $(this).parents('.tableCapitulo_dk');
        console.log('Click en Capítulo');
        console.log('parents: ' + $capitulo.attr('id'));
        if ($capitulo.find('.capituloTexto_dk').css('display') == 'none' || $capitulo.find('.tdCapituloCuerpo_dk').css('display') == 'none') {
                    $('.tdCapituloCuerpo_dk').slideUp(200);
                    $capitulo.find('.tdSubcapituloTexto_dk').slideUp(200);
                    $capitulo.find('.tdCapituloCuerpo_dk').fadeIn(300);
                    $capitulo.find('.capituloTexto_dk').fadeIn(300);
                    $capitulo.find('.tdSubcapituloTitulo_dk').slideDown(50);
        }
        else {
            //$capitulo.find('.tdCapituloCuerpo').css('display', 'none');
            $capitulo.find('.tdCapituloCuerpo_dk').fadeOut(300);
        };   
    });
    $('.tdSubcapituloTitulo_dk h3').click(function () {
        $capitulo = $(this).parents('.tableCapitulo_dk');
        $subcapitulo = $(this).parents('.tableSubcapitulo_dk');
        console.log('Click en Subcapítulo');
        console.log('parents: ' + $subcapitulo.attr('id'));
        $capitulo.find('.capituloTexto_dk').fadeOut(200);
        $capitulo.find('.tdSubcapituloTexto_dk').fadeOut(200);
        $subcapitulo.find('.tdSubcapituloTexto_dk').fadeIn(300);



        //ReiniciarAyuda();
        /*
        $('.capituloTexto, .tdSubcapituloTexto').hide();
        $('.tdSubcapituloTitulo').show();
        $(this).find('.tdSubcapituloTexto').show();
        */
    });



});

function ReiniciarAyuda() {
    $('.capituloTexto_dk').hide();
    $('.tdSubcapituloTexto_dk').hide();
    $('.tdSubcapituloTitulo_dk').hide();
};