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
        this.allToppings = ["mayo", "eeg", "mushrooms", "onions", "creme fraiche", "pate", "tomato", "ham", "fromaggio", "parmeggiano", "cheese1", "cheeese 2", "beets", "potato"]
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
        let recipeValid = {}
        this.allPizzas.forEach(recipe => {
            console.log('Checking if ', recipe.toppings, 'and ', pizza, 'are egals')
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
                console.log('checking ', topping)
                if (recipe.toppings.includes(topping)) {

                    console.log('topping deleted : ', topping)
                    recipeToppings.splice(topping, 1)
                    pizzaToppings.splice(topping, 1)
                }
            })
            return (pizzaToppings.length <= 0 && recipeToppings.length <= 0)
                // return pizza.reduce((boolValue, topping) => {
                // boolValue && recipe.toppings.indexOf(topping) !== -1 && pizza.indexOf(topping) === pizza.lastIndexOf(topping)
                // console.log('topping : ', topping)
                // console.log('boolValue : ', boolValue)
                // }, true)

        }
    }
}