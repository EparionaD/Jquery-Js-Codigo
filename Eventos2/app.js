$(document).ready(function () {
    console.log("Hola mundo funcionando");

    $('#enlace').on('click',function(e){
        e.preventDefault()
        $('.col-4').css({background:'black'});
    });
    $('#hijo').on('click', function(e){
        e.stopPropagation()
        console.log('Esta escuchando el hijo');
    });
    $('#padre').on('click', function(){
        console.log('Esta escuchando el padre');
    });
    $('#padre-botones').on('click','button', function(){
        alert('funcionando');
    });
    
});