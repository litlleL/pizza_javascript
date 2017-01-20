import css from './pizza-game.component.css'

class PizzaGameController {
    constructor() {
        console.log('test')
    }
}

export const PizzaGame = {
    template: require('./pizza-game.component.html'),
    controller: PizzaGameController
}