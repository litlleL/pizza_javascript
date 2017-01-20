export class PizzaService {
    constructor($timeout) {
        this.allPizzas = [
            {
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
            }]
        this.allToppings = ["mayo", "eeg", "onions", "creme fraiche", "pate", "tomato", "ham", "fromaggio", "parmeggiano", "cheese1", "cheeese 2", "beets", "potato"]
    }

    getAllRecipes() {
        return this.allPizzas
    }

    getAllToppings() {
        return this.allToppings
    }

    getRecipe(index) {
        return this.getRecipe.find(index)
    }
}