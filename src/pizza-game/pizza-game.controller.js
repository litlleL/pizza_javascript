export class PizzaGameController {
    
    constructor(GameService, $rootScope, $timeout) {
        this.GameService = GameService
        this.$rootScope = $rootScope
        this.$timeout = $timeout
        $rootScope.$on('message', (event, message) => this.showAlert(message))
        $rootScope.$on('gameOver', (event, args) => this.gameOver())
    }

    $onInit() {
        this.score = 0
        this.message = ''
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
        this.$rootScope.$broadcast('start', 'Le jeu commence!')
    }

    gameOver() {
        this.showAlert('Game over! votre score est de : ' + this.score)
        this.score = 0
    }

    showAlert(message) {
        this.message = message
        console.log('Log - ' + new Date().toLocaleString() + ' : ' + message)
    }
}