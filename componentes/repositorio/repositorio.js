const elementos = Array.from(document.querySelectorAll('#repositorio .elemento'));
let repositorioactivo = 0;

function actualizarColorActivo(index) {
    // Asegurar que el índice sea válido (circular)
    repositorioactivo = ((index % elementos.length) + elementos.length) % elementos.length;
    
    // Remover clase activo de todos los elementos
    elementos.forEach(el => el.classList.remove('activo'));
    
    // Agregar clase activo al elemento seleccionado
    elementos[repositorioactivo].classList.add('activo');
    
    // Actualizar el color activo global y hacer scroll
    const elementoActivo = elementos[repositorioactivo];
    window.colorActivo = elementoActivo.dataset.color;
    
    elementoActivo.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

// Inicializar
actualizarColorActivo(0);

// Manejar scroll globalmente en lugar de solo en el repositorio
document.addEventListener('wheel', function(e) {
    // No interceptar el scroll si estamos sobre elementos que necesitan scroll
    const target = e.target;
    if (target.classList.contains('needs-scroll')) {
        return;
    }

    e.preventDefault();
    e.stopPropagation();
    
    const direction = e.deltaY > 0 ? 1 : -1;
    actualizarColorActivo(repositorioactivo + direction);
}, { passive: false });

// Manejar clicks
elementos.forEach((elemento, index) => {
    elemento.addEventListener('click', () => actualizarColorActivo(index));
});

// Hacer que el scroll funcione incluso cuando el juego está bloqueado
document.addEventListener('pointerlockchange', function() {
    if (document.pointerLockElement) {
        // Cuando el puntero está bloqueado, usar las teclas Q y E para cambiar colores
        document.addEventListener('keydown', function(e) {
            if (e.key.toLowerCase() === 'q') {
                actualizarColorActivo(repositorioactivo - 1);
            } else if (e.key.toLowerCase() === 'e') {
                actualizarColorActivo(repositorioactivo + 1);
            }
        });
    }
});

// Exportar variables necesarias
window.elementos = elementos;
window.repositorioactivo = repositorioactivo;
