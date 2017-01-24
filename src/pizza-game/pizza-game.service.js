export class GameService {
    constructor() {
        this.allRecipes = [{
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
        ]}

    getAllRecipes() {
        return this.allRecipes
    }

    getRecipe(index) {
        return this.allRecipes[index]
    }

    checkPizza(pizza) {
        let recipeValid = {}
        this.allRecipes.forEach(recipe => {
            if (this.isRecipeCompliant(recipe, pizza)) {
                recipeValid = recipe
            }
        })
        return recipeValid
    }

    isRecipeCompliant(recipe, pizza) {
        if (pizza.length !== recipe.toppings.length) {
            return false
        } else {
            let pizzaToppings = angular.copy(pizza)
            let recipeToppings = angular.copy(recipe.toppings)
            pizza.forEach(topping => {
                if (recipe.toppings.includes(topping)) {
                    recipeToppings.splice(topping, 1)
                    pizzaToppings.splice(topping, 1)
                }
            })
            return (pizzaToppings.length <= 0 && recipeToppings.length <= 0)
        }
    }
}