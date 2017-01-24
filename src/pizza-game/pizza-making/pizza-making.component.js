class PizzaMakingcontroller {
    constructor(PizzaService, ToppingsService) {
        this.PizzaService = PizzaService
        this.ToppingsService = ToppingsService
    }

    $onInit() {
        this.pizza = []
    }

    addTopping(topping) {
        console.log('PizzaMakingController addTopping() : ', topping)
        this.pizza.push(topping)
    }
}

export const PizzaMaking = {

    template: `
        <div>
            <pizza-working pizza="$ctrl.pizza"></pizza-working>
            <pizza-toppings on-topping-click="$ctrl.addTopping($event)"></pizza-toppings>
        </div>
    `,
    constructor: PizzaMakingcontroller
}