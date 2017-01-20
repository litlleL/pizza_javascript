export class PizzaGameController {
    constructor(PizzaService, $timeout, $interval) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.$interval = $interval
        this.pool = []
        this.allRecipes = this.getAllPizzas();
        this.allToppings = this.getAllToppings();

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


    displayChampignon(str) {
        console.log(str);
        this.action = str;
        
    }

}