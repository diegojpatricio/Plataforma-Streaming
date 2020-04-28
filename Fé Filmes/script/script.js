
var d = "http://diegopatricio.com.br/";
var milagre = "superacao-milagre-da-fe";
var entrevista = "entrevista-com-deus";
var defesa = "em-defesa-de-cristo";
var terraMaria = "terra-de-maria";
var url_atual = window.location.href;

if(url_atual == d.concat(milagre)){
    document.getElementById("foto-capa").style.backgroundImage = "url('../img-filme/superacao.png')";
}
else if(url_atual == d.concat(entrevista)){
    document.getElementById("foto-capa").style.backgroundImage = "url('../img-filme/entrevista-com-deus.png')";
}
else if(url_atual == d.concat(defesa)){
    document.getElementById("foto-capa").style.backgroundImage = "url('../img-filme/em-defesa-de-cristo.png')";
}
else if(url_atual == d.concat(terraMaria)){
    document.getElementById("foto-capa").style.backgroundImage = "url('../img-filme/terra-de-maria.png')";
}



$(function(){
    $('.close').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});




