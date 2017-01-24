class PizzaMakingcontroller {
    constructor() {}

    $onInit() {
        this.pizza = []
    }

    $onChanges(changes) {
        if(this.toppings){
            this.toppings = changes.toppings.currentValue
        } else {
            this.toppings = []
        }
    }

    addTopping(topping) {
        this.pizza.push(topping)
    }
}

export const PizzaMaking = {
    bindings: {
        onPizza: '&',
        toppings: '<'
    },
    template: `
        <div>
            <pizza-working pizza="$ctrl.pizza"></pizza-working>
            <pizza-toppings toppings="$ctrl.toppings" on-add-topping="$ctrl.addTopping($event)"></pizza-toppings>
        </div>
    `,
    constructor: PizzaMakingcontroller
}