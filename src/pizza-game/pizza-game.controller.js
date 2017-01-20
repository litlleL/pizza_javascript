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

        this.allRecepies = [{
                name: "Margharita",
                toppings: ["pate", "tomato", "ham", "fromaggio"]
            },
            {
                name: "Regina",
                toppings: ["pate", "tomato", "mushrooms"]
            },
            {
                name: "Quattro fromagi",
                toppings: ["pate", "parmeggiano", "cheese1", "cheeese 2"]
            }
        ]
    }

    $onInit() {
        this.pizzasPool = [{
            name: 'Margharita',
            toppings: ["pate", "tomato", "ham", "fromaggio"]
        }]

        this.toppingsList = [{
            name: "Regina",
            toppings: ["pate", "tomato", "mushrooms"]
        }]
    }

    start(time) {

    }

    displayRecepicies(pizza) {
        console.log(pizza)
        this.recipie = pizza
    }

    addToppings(topping) {
        console.log(topping)
    }
}