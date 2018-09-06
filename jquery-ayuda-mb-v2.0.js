/*------------------------------------------------------------------------*/
/*---------------------- AYUDA MOBILE ------------------------------------*/
/*------------------------------------------------------------------------*/



/*------------------------------------------------------------------------*/
/*----------------------INICIO - DOCUMENT READY ------------------------*/
/*------------------------------------------------------------------------*/
$(function () {

    var $capitulo, $subcapitulo;
    //  sesPaginaOrigen = $('#tbCabSesPaginaOrigen').val();
    // console.log('sesPaginaOrigen: ' + sesPaginaOrigen);


    //EVENTOS CLICK

    $('.tdCapituloTituloBoton_mb, .tdCapituloTituloTexto_mb h2').click(function () {
        //ReiniciarAyuda();
        $capitulo = $(this).parents('.tableCapitulo_mb');
        console.log('Click en Capítulo');
        console.log('parents: ' + $capitulo.attr('id'));
        if ($capitulo.find('.capituloTexto_mb').css('display') == 'none' || $capitulo.find('.tdCapituloCuerpo_mb').css('display') == 'none') {
            $('.tdCapituloCuerpo_mb').slideUp(200);
            $capitulo.find('.tdSubcapituloTexto_mb').slideUp(200);
            $capitulo.find('.tdCapituloCuerpo_mb').fadeIn(300);
            $capitulo.find('.capituloTexto_mb').fadeIn(300);
            $capitulo.find('.tdSubcapituloTitulo_mb').slideDown(50);
        }
        else {
            //$capitulo.find('.tdCapituloCuerpo').css('display', 'none');
            $capitulo.find('.tdCapituloCuerpo_mb').fadeOut(300);
        };
    });
    $('.tdSubcapituloTitulo_mb h3').click(function () {
        $capitulo = $(this).parents('.tableCapitulo_mb');
        $subcapitulo = $(this).parents('.tableSubcapitulo_mb');
        console.log('Click en Subcapítulo');
        console.log('parents: ' + $subcapitulo.attr('id'));
        $capitulo.find('.capituloTexto_mb').fadeOut(200);
        $capitulo.find('.tdSubcapituloTexto_mb').fadeOut(200);
        $subcapitulo.find('.tdSubcapituloTexto_mb').fadeIn(300);



        //ReiniciarAyuda();
        /*
        $('.capituloTexto, .tdSubcapituloTexto').hide();
        $('.tdSubcapituloTitulo').show();
        $(this).find('.tdSubcapituloTexto').show();
        */
    });



});

function ReiniciarAyuda() {
    $('.capituloTexto_mb').hide();
    $('.tdSubcapituloTexto_mb').hide();
    $('.tdSubcapituloTitulo_mb').hide();
};