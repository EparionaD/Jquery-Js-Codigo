$(document).ready(function () {
    console.log("Hola mundo funcionando");

    //Sintaxis
    //$('h1').show(); /*Selector>Accion o efecto*/
    $('h3').css({color:'blue'});
    $('.dia').css({color:'red'});
    $('#soyId').css({background:'black',color:'white'});
    $('h4:first').css({background:'violet'});
    $('h4:last').css({background:'cyan'});
});