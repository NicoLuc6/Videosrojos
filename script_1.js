// JavaScript para cambiar el contenido del iframe al hacer clic en los enlaces

// Obtiene los elementos del DOM
const inicioBtn = document.getElementById('inicio-btn');
const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search-input');
const links = document.querySelectorAll('#sidebar ul a');

// Función para cambiar el contenido del iframe
function cambiarContenido(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    mainContent.src = href;
}

// Agrega eventos para cambiar el contenido al hacer clic en los enlaces
links.forEach(link => {
    link.addEventListener('click', cambiarContenido);
});

// Agrega evento para mostrar la página de inicio al hacer clic en el botón INICIO
inicioBtn.addEventListener('click', function () {
    mainContent.src = 'inicio.html';
});

// Función para filtrar los enlaces
function filtrarEnlaces() {
    const filtro = searchInput.value.toUpperCase();
    links.forEach(link => {
        const textoEnlace = link.textContent.toUpperCase();
        const li = link.parentElement;
        if (textoEnlace.indexOf(filtro) > -1) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}

// Agrega evento para filtrar enlaces al escribir en el campo de búsqueda
searchInput.addEventListener('input', filtrarEnlaces);
