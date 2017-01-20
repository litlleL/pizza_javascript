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



    checkIfPizzaExist(str) {

        let recipeDone = this.PizzaService.checkPizza(this.pizza)
        if (recipeDone) {
            this.pool.splice(recipeDone.id, 1)
        }
    }

    displayChampignon(str) {
        console.log(str);
        this.action = str;

    }

    addTopping(topping) {
        this.pizza.push(topping);
    }

}