export class PizzaGameController {
    constructor() {
        this.allPizzas = [{
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

    $onInit() {
        this.pizzasPool = [{
            name: 'Margharita',
            toppings: ["pate", "tomato", "ham", "fromaggio"]
        }]
    }

    start(time) {

    }

    displayRecepicies(pizza) {
        console.log(pizza)
        this.recipie = pizza
    }
}