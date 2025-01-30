class Inventario {
    constructor() {
        this.items = [];
        this.maxSlots = 9;
        this.selectedSlot = 0;
    }

    addItem(item) {
        if (this.items.length < this.maxSlots) {
            this.items.push(item);
            this.updateUI();
        }
    }

    selectSlot(index) {
        this.selectedSlot = index;
        this.updateUI();
    }

    updateUI() {
        // Actualizar interfaz visual
    }
}
