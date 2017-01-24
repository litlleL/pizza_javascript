export class PizzaGameController {
    
    constructor(PizzaService, $timeout, $interval) {
        this.PizzaService = PizzaService
        this.$timeout = $timeout
        this.$interval = $interval
    }

    $onInit() {

        this.intervalId = {}
        this.pool = []
        this.score = 0
        this.message = ''
        this.hover = []
        this.allRecipes = this.PizzaService.getAllRecipes()
    }

    /**
     * Pizza content Controller
     */

    checkIfPizzaExist() {
        const POINTS_LOSE_INEXISTANT_PIZZA_SEND = 100
        const POINTS_LOSE_PIZZA_NOT_IN_POOL     = 50
        const POINTS_LOSE_PIZZA_DUMB            = 25
        const POINTS_WIN_PIZZA_VALID            = 100
        let recipeDone = this.PizzaService.checkPizza(this.pizza)
        if(!angular.equals(recipeDone, {})){
            let idx = this.pool.indexOf(recipeDone) 
            if (idx !== -1) {
                this.score += POINTS_WIN_PIZZA_VALID
                this.pool.splice(idx, 1)
                this.showAlert('Bonne pizza! + ', POINTS_WIN_PIZZA_VALID, ' points')
            } else {
                this.score -= POINTS_LOSE_PIZZA_NOT_IN_POOL
                this.showAlert('Cette pizza n\'est pas demandé... -', POINTS_LOSE_PIZZA_NOT_IN_POOL, ' points')
            }
            this.pizza = []
        } else {
            this.score -= POINTS_LOSE_INEXISTANT_PIZZA_SEND
            this.showAlert('Aucune pizza ne correspond avec ce que tu as fait! ', POINTS_LOSE_INEXISTANT_PIZZA_SEND, ' points')
            this.pizza = []
        }
    }

    // TODO: Four qui prend les pizzas valide et les fait cuire. Impl d'un état (0: vide, 1: remplir, 2: valide, 3:cru, 4:mi-cuite, 5:cuite, 6:vendu)
    hoverPizza(pizza) {
        if(this.hover >= 4) {
            this.showAlert('Le four est déjà plein!')
        } else {
            this.hover.push(pizza)
        }
    }

    deletePizza() {
        if(!angular.equals(this.pizza, [])){
            this.score -= POINTS_LOSE_PIZZA_DUMB
            this.showAlert('Une pizza de plus à la poubelle! ', POINTS_LOSE_PIZZA_DUMB, ' points')
            this.pizza = []
        }
    }

    /**
     * Game content controller
     */

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

    showAlert(message) {
        this.message = message
        this.$timeout(message => {
            this.message = ''
        }, 2000)
    }

    displayRecipe(recipe) {
        this.recipe = recipe
    }

    gameOver() {
        window.alert('GAME OVER!... Ton score est de : ' + this.score)
        this.pool.forEach(element => {
            this.$timeout.cancel(element.timeout)
        });
        this.pool.length = 0
        this.pizza = []
        this.score = 0
        this.message = ''
    }
}