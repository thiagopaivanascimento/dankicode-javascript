//Animação com JavaScript
/*
var box = document.getElementsByClassName('box')[0];
setTimeout(function(){
    box.classList.add('animeParaDireita');
}, 1000);
box.addEventListener('click', function(){
    box.classList.add('animeParaEsquerda');
});
*/

//Mostrar e ocultar conteúdo
var el = document.querySelector('.noticia span');
var texto = document.querySelector('.noticia .texto');
el.addEventListener('click', function(){
    //alert("clique funcionando!");
    //texto.classList.add('mostrar');
    if (texto.classList.contains('mostrar')){
        //alert('esconde conteudo');
        texto.classList.remove('mostrar');
        el.innerHTML ='Ver mais [+]';
        el.style.color = 'blue';
    } else {
        texto.classList.add('mostrar');
        el.innerHTML ='Ocultar [-]';
        el.style.color = 'red';
    }
});
