// 1. MODO CLARO / OSCURO
const botonModo = document.getElementById('boton-color');
const cuerpoPagina = document.body;

botonModo.addEventListener('click', () => {
    cuerpoPagina.classList.toggle('modo-oscuro');
    if (cuerpoPagina.classList.contains('modo-oscuro')) {
        botonModo.textContent = "Claro";
    } else {
        botonModo.textContent = "Modo";
    }
});

// 2. FILTRADO FILAS DE PROYECTOS
const botonesFiltro = document.querySelectorAll('.btn-filtro');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const lenguajeSeleccionado = e.target.getAttribute('data-tech');
        const subseccion = e.target.closest('.proyectos-subseccion');
        
        // Activar estado visual en el botón correspondiente
        subseccion.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filtrar filas
        const filasProyectos = subseccion.querySelectorAll('.proyecto-row');
        filasProyectos.forEach(fila => {
            const tagsFila = fila.getAttribute('data-tags').toLowerCase();

            if (lenguajeSeleccionado === 'todos' || tagsFila.includes(lenguajeSeleccionado)) {
                fila.classList.remove('oculto');
            } else {
                fila.classList.add('oculto');
            }
        });
    });
});