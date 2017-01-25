export class PizzaMakingController {
    constructor() {}

    $onInit() {
        this.pizza = []
    }

    addTopping(topping) {
        this.pizza.push(topping)
    }

    dumpPizza() {
        if(!angular.equals(this.pizza, [])){
            this.score -= POINTS_LOSE_PIZZA_DUMB
            this.showAlert('Une pizza de plus à la poubelle! ', POINTS_LOSE_PIZZA_DUMB, ' points')
            this.pizza = []
        }
    }
}