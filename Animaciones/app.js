$(document).ready(function () {
    console.log("Hola mundo funcionando");

    $('#animar').on('click',function(){
        $('div').animate({fontSize:'3em', color:'red',backgroundColor:'blue'},3000,function(){
            $('div').css({fontSize:'1em'});
        });
    });
});