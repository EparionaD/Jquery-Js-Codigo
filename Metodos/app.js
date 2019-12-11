$(document).ready(function () {
    $('#boton1').click(function () { 
        $('.parrafo1').text('<u>Soy el reemplazo</u>');
    });
    $('#boton2').click(function () { 
        $('.parrafo2').html('<u>Soy el reemplazo del parrafo 2</u>');
    });
    $('.caja').click(function () { 
        var ancho = $('.caja').width();
        var alto = $('.caja').height();
        $('.mostrarA').html('<h3>El ancho es: '+ ancho +' y el alto es :'+ alto+'</h3>');
    });
});