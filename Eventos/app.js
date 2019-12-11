$(document).ready(function () {
    console.log("Hola mundo funcionando");

    $('#boton1').click(function () { 
        $('.h2-hide').hide(1000);
    });
    $('#boton2').click(function () { 
        $('.h2-hide').show(200);
    });
    $('.parrafo').mouseenter(function () { 
        $('.parrafo').css({fontSize:'3em'});
    });
    $('.parrafo').mouseleave(function () { 
        $('.parrafo').css({fontSize:'.5em'});
    });
    $('.h3-hover').hover(function () {
            // over
            $('.h3-hover').css({background:'red',color:'white'});
        }, function () {
            // out
            $('.h3-hover').css({background:'blue',color:'white'});
        }
    );
    $('#capturar').keyup(function (e) { 
        var valor = $('#capturar').val();
        console.log(valor);
        $('.resultado').html(valor);
    });
});