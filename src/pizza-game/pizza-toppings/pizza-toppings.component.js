class PizzaToppingsController {
    constructor() {}

    toppingSelect(topping) {
        this.onToppingback({ $event: topping })
    }
}

export const PizzaToppings = {
    bindings: {
        toppings: '<',
        onToppingback: '&' //topping-back
    },

    template: `<div class="col-xs-6">
                    <button ng-repeat="topping in $ctrl.toppings track by $index"
                        ng-click="$ctrl.toppingSelect(topping)"
                        type="button"
                        class="btn btn-large">
                        {{topping}}
                     </button>
                </div>
                `,
    controller: PizzaToppingsController
}