let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'img/firefox_1.png') {
        miImage.setAttribute('src', 'img/firefox_2.jpg');
    } else {
        miImage.setAttribute('src', 'img/firefox_1.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
    let miNombre = prompt('Por favon ingresa tu nombre.');
    if (!miNombre) {
        establecerNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozila es Genial, ' + miNombre; 
    }
}

if (!localStorage.getItem('nombre')) {
    establecerNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es Genial, ' + nombreAlmacenado;
}

miBoton.onclick = function () {
    establecerNombreUsuario();
}