import { PizzaMakingController } from './pizza-making.controller.js'

export const PizzaMaking = {

    template: `
        <div>
            <pizza-making-working actual-pizza="$ctrl.pizza"></pizza-making-working>
            <pizza-making-toppings on-topping-click="$ctrl.addTopping($event)"></pizza-making-toppings>
        </div>
    `,
    controller: PizzaMakingController
}