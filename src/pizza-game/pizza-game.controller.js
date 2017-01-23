export class PizzaGameController {
    constructor(PizzaService, $timeout, $interval) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.$interval = $interval
    }

    $onInit() {
        this.intervalId = {}
        this.pool = []
        this.pizza = []
        this.score = 0
        this.message = ''
        this.allRecipes = this.PizzaService.getAllRecipes()
        this.allToppings = this.PizzaService.getAllToppings()
    }

    start() {
        const intervalId = this.$interval(() => {
            let index = Math.floor(Math.random() * this.allRecipes.length)
            const recipeToAdd = this.PizzaService.getRecipe(index)
            this.pool.push({
                toppings: recipeToAdd,
                timeout: this.$timeout(() => {
                    this.$interval.cancel(intervalId),
                    this.gameOver()             
                }, 3000)
            })
            console.table(this.pool)
        }, 1000)
    }

    displayRecipe(recipe) {
        this.recipe = recipe
    }

    checkIfPizzaExist() {
        let recipeDone = this.PizzaService.checkPizza(this.pizza)
        if(!angular.equals(recipeDone, {})){
            let idx = this.pool.indexOf(recipeDone) 
            if (idx !== -1) {
                this.score += 100
                this.pool.splice(idx, 1)
                this.showAlert('Bonne pizza! + 100 points')
            } else {
                this.score -= 50
                this.showAlert('Cette pizza n\'est pas demandé... -50 points')
            }
            this.pizza = []
        } else {
            this.showAlert('Aucune pizza ne correspond avec ce que tu as fait! -100 points')
            this.score -= 100
            this.pizza = []
        }
    }

    addTopping(topping) {
        this.pizza.push(topping)
    }

    deletePizza() {
        if(!angular.equals(this.pizza, [])){
            this.score -= 20
            this.showAlert('Une pizza de plus à la poubelle! -20 points')
            this.pizza = []
        }
    }

    showAlert(message) {
        this.message = message
        this.$timeout(message => {
            this.message = ''
        }, 2000)
    }

    gameOver() {
        window.alert('GAME OVER!... Ton score est de : ' + this.score)
        this.pool.length = 0
        this.pizza = []
        this.score = 0
        this.message = ''
        
    }
}