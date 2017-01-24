class PizzaMakingController {
    constructor() {}

    $onInit() {
        this.pizza = []
    }

    addTopping(topping) {
        this.pizza.push(topping)
    }
}

export const PizzaMaking = {

    template: `
        <div>
            <pizza-working actual-pizza="$ctrl.pizza"></pizza-working>
            <pizza-toppings on-topping-click="$ctrl.addTopping($event)"></pizza-toppings>
        </div>
    `,
    controller: PizzaMakingController
}