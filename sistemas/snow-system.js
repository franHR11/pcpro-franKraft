AFRAME.registerComponent('snow-system', {
    init: function() {
        // Crear sistema de partículas
        const particleCount = 15000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount);
        
        // Inicializar partículas
        for(let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = Math.random() * 400 - 200;     // X: -200 a 200
            positions[i + 1] = Math.random() * 200;       // Y: 0 a 200
            positions[i + 2] = Math.random() * 400 - 200; // Z: -200 a 200
            velocities[i/3] = Math.random() * 0.2 + 0.1;  // Velocidad de caída
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Crear textura para los copos de nieve
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 16;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(8, 8, 4, 0, Math.PI * 2);
        ctx.fill();
        
        const texture = new THREE.CanvasTexture(canvas);
        
        // Material para los copos
        const material = new THREE.PointsMaterial({
            size: 0.5,
            map: texture,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            fog: true
        });
        
        // Crear sistema de partículas
        this.snow = new THREE.Points(geometry, material);
        this.el.sceneEl.object3D.add(this.snow);
        
        // Guardar referencia a los datos
        this.positions = positions;
        this.velocities = velocities;
    },
    
    tick: function(time, delta) {
        const positions = this.positions;
        const velocities = this.velocities;
        
        // Actualizar posición de cada copo
        for(let i = 0; i < positions.length; i += 3) {
            // Mover hacia abajo
            positions[i + 1] -= velocities[i/3];
            
            // Si el copo llega al suelo, reposicionar arriba
            if(positions[i + 1] < 0) {
                positions[i + 1] = 200;
                positions[i] = Math.random() * 400 - 200;
                positions[i + 2] = Math.random() * 400 - 200;
            }
            
            // Movimiento ondulante
            positions[i] += Math.sin(time * 0.001 + i) * 0.01;
        }
        
        this.snow.geometry.attributes.position.needsUpdate = true;
    }
});
