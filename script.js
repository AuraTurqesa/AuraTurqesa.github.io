// Esperamos a que el HTML esté completamente cargado en el navegador
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. ALTERNACIÓN DE MODO CLARO / OSCURO
    // ==========================================
    const botonModo = document.getElementById('boton-color');
    const cuerpoPagina = document.body;

    if (botonModo) {
        botonModo.addEventListener('click', () => {
            cuerpoPagina.classList.toggle('modo-oscuro');
            
            // Cambia el texto del botón según el modo activo
            if (cuerpoPagina.classList.contains('modo-oscuro')) {
                botonModo.textContent = "Claro";
            } else {
                botonModo.textContent = "Modo";
            }
        });
    }

    // ==========================================
    // 2. FILTRADO INTERACTIVO DE PROYECTOS
    // ==========================================
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Conseguimos la tecnología del botón pulsado (ej: 'python')
            const lenguajeSeleccionado = e.target.getAttribute('data-tech');
            
            // Buscamos la subsección contenedora (Front-end o Back-end) para aislar el filtro
            const subseccion = e.target.closest('.proyectos-subseccion');
            
            // Quitamos la clase 'active' de los otros botones del mismo menú y se la damos al pulsado
            subseccion.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filtramos las filas de esa subsección en específico
            const filasProyectos = subseccion.querySelectorAll('.proyecto-row');
            
            filasProyectos.forEach(fila => {
                // Leemos los tags definidos en el atributo 'data-tags' de la fila
                // Añadimos una validación por si alguna fila no tiene el atributo data-tags
                const atributoTags = fila.getAttribute('data-tags');
                const tagsFila = atributoTags ? atributoTags.toLowerCase() : '';

                // Si se pulsa "Todos" o el tag está incluido en la fila, la mostramos; si no, se oculta
                if (lenguajeSeleccionado === 'todos' || tagsFila.includes(lenguajeSeleccionado)) {
                    fila.classList.remove('oculto');
                } else {
                    fila.classList.add('oculto');
                }
            });
        });
    });

});

// ==========================================
// 3. CONTROLADOR DE CAMBIO DE IDIOMA
// ==========================================
function cambiarIdioma(url) {
    if (url) {
        window.location.href = url;
    }
}