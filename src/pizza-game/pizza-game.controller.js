export class PizzaGameController {
    constructor(PizzaService, $timeout) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.pool = []
        this.allRecipes = this.getAllPizzas();

    }

    start() {
        console.log('ici')
        const intervalId = setInterval(() => {
            let index = Math.floor(Math.random() * this.allRecipes.length)
            console.log(index)
            const recipeToAdd = this.PizzaService.getRecipe(index)
            this.pool.push(recipeToAdd)

            console.table(this.pool)
            if (this.pool.length >= 10) {
                clearInterval(intervalId)
            }
        }, 1000)
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