export class PizzaGameController {
    constructor(PizzaService) {
        this.PizzaService = PizzaService
    }

    start(time) {

    }

    displayRecepicies(pizza) {
        console.log(pizza)
        this.recipie = pizza
    }

    getAllPizzas() {
        return PizzaService.getAllPizzas()
    }

    getAllToppings() {
        return PizzaService.getAllToppings()
    }
}