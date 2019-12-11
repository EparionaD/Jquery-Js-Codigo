$(document).ready(function () {
    var atributo = $('input').attr('type');
    console.log(atributo);
    $('#boton').click(function () { 
        $('#caja').addClass('contenido');
    });
    $('#boton1').click(function () { 
        $('#caja').removeClass('contenido');
    });
});