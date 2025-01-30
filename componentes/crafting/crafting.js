class CraftingSystem {
    constructor() {
        this.recipes = [
            {
                input: ['madera', 'madera'],
                output: 'tabla',
                quantity: 4
            },
            // Más recetas...
        ];
    }

    craft(ingredients) {
        const recipe = this.recipes.find(r => 
            this.matchIngredients(r.input, ingredients)
        );
        return recipe ? recipe.output : null;
    }
}
