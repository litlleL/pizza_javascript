export class PizzaService {
    constructor() {
        this.allPizzas = [{
                "id": 1,
                "name": "Margharita",
                "toppings": ["pate", "tomato", "ham", "fromaggio"]
            },
            {
                "id": 2,
                "name": "Regina",
                "toppings": ["pate", "tomato", "mushrooms"]
            },
            {
                "id": 3,
                "name": "Quattro fromagi",
                "toppings": ["pate", "parmeggiano", "cheese1", "cheeese 2"]
            },
            {
                "id": 4,
                "name": "Brazil",
                "toppings": ["pate", "potato", "beets", "ham"]
            },
            {
                "id": 5,
                "name": "germany",
                "toppings": ["pate", "mayo", "eeg", "onions", "creme fraiche"]
            }
        ]
        this.allToppings = ["mayo", "eeg", "onions", "creme fraiche", "pate", "tomato", "ham", "fromaggio", "parmeggiano", "cheese1", "cheeese 2", "beets", "potato"]
    }

    getAllRecipes() {
        return this.allPizzas
    }

    getAllToppings() {
        return this.allToppings
    }

    getRecipe(index) {
        console.log(this.allPizzas[index])
        return this.allPizzas[index]
    }

    checkPizza(pizza) {
        this.allPizzas.forEach(recipe => {
            if (this.isRecipeCompliant(recipe, pizza)) {
                return recipe
            }
        })
    }

    isRecipeCompliant(recipe, pizza) {
        if (pizza.length !== recipe.toppings.length) {
            return false
        }
        return pizza.reduce((boolValue, topping) => boolValue &&
            recipe.toppings.indexOf(topping) !== -1 &&
            pizza.indexOf(topping) === pizza.lastIndexOf(topping), true)
    }
}