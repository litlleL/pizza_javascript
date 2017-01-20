export class PizzaGameController {
    constructor(PizzaService, $timeout) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.pool = [] 
    }

    start(time) {
        const intervalId = serInterval(() => {
            const index = Math.floor(Math.random() * recipesNames.lenght)
            const recipeToAdd = PizzaService.getRecipe(index)
            this.pool.push(recipeToAdd)
            if(this.pool.lenght >= 10) {
                clearInterval(intervalId)
            }
        }, 10000)
    }

    displayRecepicies(pizza) {
        console.log(pizza)
        this.recipie = pizza
    }

    getAllPizzas() {
        return PizzaService.getAllPizzas()
    }

    getAllToppings() {
        return PizzaService.getAllToppings()
    }
}