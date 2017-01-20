import css from './pizza-game.component.css'

class PizzaGameController {
    constructor() {
        console.log('test')
    }

    $onInit() {
        this.pizzas = [{
                name: 'Margharita',
                toppings: ["pate", "tomato", "ham", "fromaggio"]
            },
            {
                name: 'Peperoni',
                toppings: ["pate", "tomato", "ham", "fromaggio"]
            },
            {
                name: 'Reine',
                toppings: ["pate", "tomato", "ham", "fromaggio"]
            }
        ]
    }

    displayRecepicies(pizza) {
        console.log(pizza)
        this.recipie = pizza
        console.log(this.recipie)
    }
}

export const PizzaGame = {
    template: require('./pizza-game.component.html'),
    controller: PizzaGameController
}