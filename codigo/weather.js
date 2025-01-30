AFRAME.registerComponent('weather-system', {
    init: function() {
        this.weatherStates = ['clear', 'rain', 'snow', 'storm'];
        this.currentWeather = 'clear';
        this.particles = [];
    },

    changeWeather: function(weatherType) {
        this.clearWeather();
        this.currentWeather = weatherType;
        this.createWeatherEffects();
    }
});
