export class PizzaGameController {
    
    constructor(GameService, $timeout, $interval, $rootScope) {
        this.GameService = GameService
        this.$timeout = $timeout
        this.$interval = $interval
        this.$rootScope = $rootScope
    }

    $onInit() {

        this.intervalId = {}
        this.pool = []
        this.score = 0
        this.message = ''
        this.allRecipes = this.GameService.getAllRecipes()
    }

    /**
     * Pizza content Controller
     */
    checkIfPizzaExist() {
        const POINTS_LOSE_INEXISTANT_PIZZA_SEND = 100
        const POINTS_LOSE_PIZZA_NOT_IN_POOL     = 50
        const POINTS_LOSE_PIZZA_DUMB            = 25
        const POINTS_WIN_PIZZA_VALID            = 100
        let recipeDone = this.GameService.checkPizza(this.pizza)
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

    /**
     * Game content controller
     */
    start() {
        const intervalId = this.$interval(() => {
            let index = Math.floor(Math.random() * this.allRecipes.length)
            const recipeToAdd = this.GameService.getRecipe(index)
            this.$rootScope.$broadcast('newPizzaToDo', {
                type: recipeToAdd.name,
                toppings: recipeToAdd,
                timeout: this.$timeout(() => {
                    this.$interval.cancel(intervalId),
                    this.gameOver()             
                }, 10000)
            })
            console.table(this.pool)
        }, 1000)
    }

    addRandomPizza(idx, $rootScope) {
        
    }

    showAlert(message) {
        this.message = message
        this.$timeout(message => {
            this.message = ''
        }, 2000)
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