//Manipular Id
var box = document.getElementById('boxID');
box.style.backgroundColor = 'red';
box.style.marginLeft = '100px';
box.style.borderColor = 'black';
box.style.width = '50px';
box.style.height = '100px';

//manipular as classes
var boxClass = document.getElementsByClassName('box1');
//boxClass[2].style.backgroundColor = 'green';

//Manipular todas as classes
for (var i = 0; i < boxClass.length; i++) {
    var el = boxClass[i];
    el.style.backgroundColor = 'green';
    el.style.borderWidth = '1px';
    el.style.borderStyle = 'solid'; 
    el.style.borderColor = 'black';
    el.style.padding = '5px';
    el.style.width = '50px';
}

