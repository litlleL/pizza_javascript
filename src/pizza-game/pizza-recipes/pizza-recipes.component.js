class PizzaRecipesController {
    constructor() {}
    $onInit() {
        this.pizza = {
            "name": "Margarita",
            "toppings": ["ham", "chesses", "Ham"]
        }
    }
}

export const PizzaRecipes = {
    template: require('./pizza-recipes.component.html')
}