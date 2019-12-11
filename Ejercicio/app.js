$(document).ready(function () {
    console.log("Hola mundo funcionando");

    $('#java').click(function () { 
        console.log("asdas");
        $('.m-java').hide(1000);
    });
    $('#java1').click(function () { 
        $('.m-java').show(800);
    });
    $('#query').click(function () { 
        $('.m-query').css({fontSize:'3em'});
    });
    $('.m-html').hover(function () {
            // over
            $('.m-html').css({background:'red'});
        }, function () {
            // out
            $('.m-html').css({background:'#f8f9fa'});
        }
    );
});