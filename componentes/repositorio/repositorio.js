var repositorioactivo = 0;
var elementos = document.querySelectorAll("#repositorio .elemento");

// Añadir tooltip con nombre del color
elementos.forEach(function(elemento) {
    elemento.setAttribute('title', elemento.style.background);
});

// Restaurar el comportamiento original del scroll
document.addEventListener("wheel", function(event) {
    event.preventDefault(); // Prevenir scroll de página
    
    elementos.forEach(function(elemento) {
        elemento.classList.remove("activo");
    });
    
    if(event.deltaY > 0) {
        repositorioactivo++;
    } else {
        repositorioactivo--;
    }
    
    if(repositorioactivo >= elementos.length) {
        repositorioactivo = 0;
    }
    if(repositorioactivo < 0) {
        repositorioactivo = elementos.length-1;
    }
    
    elementos[repositorioactivo].classList.add("activo");
    
    // Scroll suave usando transform
    const contenedor = document.querySelector("#repositorio #contenedor");
    const elementWidth = 54; // ancho del elemento + margen
    const offset = repositorioactivo * elementWidth;
    const maxScroll = (elementos.length * elementWidth) - contenedor.parentElement.offsetWidth;
    
    contenedor.style.transform = `translateX(-${Math.min(offset, maxScroll)}px)`;
});

// Mantener la selección por clic
elementos.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
        elementos.forEach(el => el.classList.remove("activo"));
        elemento.classList.add("activo");
        repositorioactivo = index;
    });
});
