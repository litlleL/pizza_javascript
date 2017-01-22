export class PizzaGameController {
    constructor(PizzaService, $timeout, $interval) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.$interval = $interval
        this.pool = []
        this.allRecipes = this.getAllPizzas();
        this.allToppings = this.getAllToppings();
        this.pizza = [];

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

    displayRecepicies(pizza) {
        this.recipie = pizza
    }

    getAllPizzas() {
        return this.PizzaService.getAllRecipes()
    }

    getAllToppings() {
        return this.PizzaService.getAllToppings()

    }


    checkIfPizzaExist() {
        console.log('checkIfPizzaExist Pizza : ', this.pizza)
        let recipeDone = this.PizzaService.checkPizza(this.pizza)
        console.log('checkIfPizzaExist :', recipeDone)
        if (this.pool.includes(recipeDone)) {
            console.log('pizza to remove from pool :', recipeDone.name)
            this.pool = this.pool.filter(pizza => pizza !== recipeDone)
            console.table(this.pool)
        }
        this.deletePizza()
    }

    deletePizza() {
        this.pizza = []
    }

    addTopping(topping) {
        this.pizza.push(topping);
    }

}