document.addEventListener("DOMContentLoaded", function () {
    let flag = true
    const btnColor = document.querySelector('#cambiarColor');
    const btnFontSize = document.querySelector('#cambiarTamanio');
    const resetBtn = document.querySelector('#resetStyles');
    const mostrarMasBtn = document.querySelector('#btnMas');
    const body = document.querySelector('body');
    btnColor.addEventListener('click', cambiarColor);
    btnFontSize.addEventListener('click', cambiarTamanio);
    mostrarMasBtn.addEventListener('click', showMore)
    resetBtn.addEventListener('click', resetStyles)

    function cambiarColor() {
        body.style.backgroundColor = 'rgb(255, 196, 0)';
    }

    function cambiarTamanio() {
        body.style.fontSize = '24px';
    }

    function resetStyles() {
        body.style.fontSize = '16px';
        body.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    function showMore() {
        // lista creada de forma dinamica con javascript
        const section3 = document.querySelector('#section3');
        const lista = document.createElement("ul")
        // se agrega la clase al nuevo elemento lista
        lista.className = "listaDinamica"
        for (let i = 0; i < 3; i++) {
            const elemento = document.createElement("li")
            elemento.innerHTML = "Elemento " + i
            lista.appendChild(elemento)
        }
        if (flag) {
            section3.appendChild(lista)
            mostrarMasBtn.innerHTML = "Mostrar menos"
            flag = !flag
        } else {
            section3.childNodes[section3.childNodes.length - 1].remove()
            mostrarMasBtn.innerHTML = "Mostrar mas"
            flag = !flag
        }
    }
});