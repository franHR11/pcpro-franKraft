AFRAME.registerComponent('day-night-cycle', {
    schema: {
        cycleLength: {type: 'number', default: 600}, // 10 minutos por ciclo
        timeScale: {type: 'number', default: 1}
    },

    init: function() {
        this.time = 0;
        this.skyEl = document.querySelector('a-sky');
        this.sunLight = document.querySelector('[light]');
    },

    tick: function(time, deltaTime) {
        this.time += deltaTime * this.data.timeScale;
        const dayPhase = (this.time % this.data.cycleLength) / this.data.cycleLength;
        
        // Actualizar iluminación y color del cielo
        this.updateLighting(dayPhase);
    }
});
