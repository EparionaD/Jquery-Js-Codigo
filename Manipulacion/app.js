$(document).ready(function () {
    console.log("Hola mundo funcionando");

    $('.btn').on('click', function(){
        //Agrega solo contenido fuera
        $('#lista li:first').before('cero');
        $('#lista li:last').after('tres');

        //Agrega html fuera
        $('<li>probando1</li>').insertBefore($('#lista li:first'));
        $('<li>probando</li>').insertAfter($('#lista li:last'));

        //Agrega solo contenido dentro
        $('#lista').prepend('Probando antes');
        $('#lista').append('Probando final');

        //Agrega html dentro
        $('<li>Probando antes1</li>').prependTo($('#lista'));
        $('<li>Probando final1</li>').appendTo($('#lista'));

        $('p').wrap('<div></div>');
    });
    
});