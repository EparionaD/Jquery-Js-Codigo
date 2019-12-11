$(document).ready(function () {
    $('#boton1').click(function () { 
        $('.texto').fadeIn('fast');
    });
    $('#boton2').click(function () { 
        $('.texto').fadeOut('slow');
    });
});