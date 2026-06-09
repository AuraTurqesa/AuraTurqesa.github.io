// 1. Seleccionamos los elementos del HTML que queremos controlar
// Buscamos el botón por su ID (#boton-color)
const boton = document.getElementById('boton-color');

// Buscamos el cuerpo de la página (body) para poder cambiarle el fondo
const cuerpoPagina = document.body;

// 2. Escuchamos los eventos del usuario
// Le decimos al botón que "escuche" cuando alguien le hace un 'click'
boton.addEventListener('click', () => {
    
    // 3. Modificamos el diseño dinámicamente
    // '.classList.toggle' añade la clase 'modo-oscuro' si no la tiene,
    // o se la quita si ya la tiene puesta.
    cuerpoPagina.classList.toggle('modo-oscuro');
    
    // 4. Opcional: Cambiar el texto del botón según el modo actual
    // Comprobamos si el body tiene ahora mismo la clase 'modo-oscuro'
    if (cuerpoPagina.classList.contains('modo-oscuro')) {
        boton.textContent = "Cambiar a modo claro";
    } else {
        boton.textContent = "Cambiar a modo oscuro";
    }

    // Nota didáctica: Aquí puedes añadir más código si quieres que pase otra cosa al pulsar,
    // por ejemplo, mostrar un mensaje en la consola del navegador para pruebas:
    console.log("El usuario ha cambiado el tema visual.");
});