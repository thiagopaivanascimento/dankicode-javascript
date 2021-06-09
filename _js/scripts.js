//Scripts 02
var p = document.getElementsByTagName('p');
console.log("Quantidade da tag <p>:" +p.length);

console.log(p[0]); //retorna a tag HTML 0
console.log(p[1].innerHTML) //retorna dentro da Tag

p[2].innerHTML = "Manipulado via JS"; //Retorna o conteúdo alterado na [2]

/*for (var i=0; i < p.length; i++){
    p[i].innerHTML = "Manipulação de todos <p> -";
}*/



