document.addEventListener("DOMContentLoaded", function() {
        const btnColor = document.querySelector('#cambiarColor');
    const btnFontSize = document.querySelector('#cambiarTamanio');
    const body = document.querySelector('body');

    btnColor.addEventListener('click', cambiarColor);
    btnFontSize.addEventListener('click', cambiarTamanio);

    function cambiarColor() {
    body.style.backgroundColor = 'rgb(255, 196, 0)';
    }

    function cambiarTamanio() {
    body.style.fontSize = '24px';
    }
});