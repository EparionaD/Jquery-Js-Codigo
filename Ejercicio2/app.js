$(document).ready(function () {

    /*$('#rojo').click(function () { 
        $('#cajita').addClass('rojo').removeClass('verde azul');
    });
    $('#verde').click(function () { 
        $('#cajita').addClass('verde').removeClass('rojo azul');
    });
    $('#azul').click(function () { 
        $('#cajita').addClass('azul').removeClass('verde rojo');
    });*/

    $('#padre').on('click','button', function(){
        var atributo = $(this).attr('id');
        $('#cajita').removeClass('verde rojo azul').addClass(atributo);

    });
});