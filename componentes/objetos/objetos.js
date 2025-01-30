const menuItems = document.querySelectorAll('.objeto-item');
let objetoSeleccionado = 'libre';

const estructuras = {
    arbol: function(pos) {
        console.log("Creando árbol en", pos);
        // Tronco simple de prueba
        createBox(`${pos.x} ${pos.y} ${pos.z}`, memoria.length, 'Brown');
        memoria.push({
            id: memoria.length,
            x: pos.x,
            y: pos.y,
            z: pos.z,
            mat: 'Brown'
        });
        
        // Hoja de prueba
        createBox(`${pos.x} ${pos.y + 1} ${pos.z}`, memoria.length, 'Green');
        memoria.push({
            id: memoria.length,
            x: pos.x,
            y: pos.y + 1,
            z: pos.z,
            mat: 'Green'
        });
        
        localStorage.setItem("memoria", JSON.stringify(memoria));
    }
};

// Manejo de clicks en el menú
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log("Seleccionado:", item.dataset.tipo);
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        objetoSeleccionado = item.dataset.tipo;
        console.log("objetoSeleccionado actualizado a:", objetoSeleccionado);
    });
});

// Hacer disponible globalmente
window.estructuras = estructuras;
window.objetoSeleccionado = objetoSeleccionado;
