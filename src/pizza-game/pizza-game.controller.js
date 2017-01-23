export class PizzaGameController {
    constructor(PizzaService, $timeout, $interval) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.$interval = $interval
    }

    $onInit() {
        this.pool = []
        this.pizza = []
        this.allRecipes = this.PizzaService.getAllRecipes()
        this.allToppings = this.PizzaService.getAllToppings()
    }

    start() {
        const intervalId = this.$interval(() => {
            let index = Math.floor(Math.random() * this.allRecipes.length)
            const recipeToAdd = this.PizzaService.getRecipe(index)
            this.pool.push(recipeToAdd)
            if (this.pool.length >= 10) {
                this.$interval.cancel(intervalId)
            }
        }, 5000)
    }

    displayRecipe(recipe) {
        this.recipe = recipe
    }

    checkIfPizzaExist() {
        let recipeDone = this.PizzaService.checkPizza(this.pizza)
        let idx = this.pool.indexOf(recipeDone) 
        if (idx !== -1) {
            console.log('index of ', recipeDone, ' in the pool: ', idx)
            this.pool.splice(idx, 1)
        }
        this.deletePizza()
    }

    addTopping(topping) {
        this.pizza.push(topping)
    }

    deletePizza() {
        this.pizza = []
    }
}