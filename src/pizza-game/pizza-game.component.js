import css from './pizza-game.component.css'
class PizzaGameController {
    constructor() {
        console.log('test')
    }
}

export const PizzaGame = {
    template: ` 
       <pizza-pool></pizza-pool>
    `,
    controller: PizzaGameController
}