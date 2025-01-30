AFRAME.registerComponent('ambient-audio', {
    init: function() {
        // Crear el audio ambiente
        this.ambientSound = new Audio('sonidos/ambient.mp3');
        this.ambientSound.loop = true;
        this.ambientSound.volume = 0.5; // Volumen al 30%
        
        // Agregar listener para comenzar el audio cuando el usuario interactúe
        document.addEventListener('click', () => {
            this.startAudio();
        }, { once: true });
        
        // Manejar cambios de visibilidad de página
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.ambientSound.pause();
            } else {
                this.ambientSound.play();
            }
        });
    },
    
    startAudio: function() {
        this.ambientSound.play()
            .catch(error => console.log("Error reproduciendo audio:", error));
    }
});
