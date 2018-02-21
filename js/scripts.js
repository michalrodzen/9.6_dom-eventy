var list = document.getElementById('list'),
    add = document.getElementById ('addElem');

    add.addEventListener('click', changeText);

function changeText() {
    var element = document.createElement('li');
    element.innerText = "item " + document.getElementsByTagName('li').length;
    list.appendChild(element);
}


