class PizzaToppingsController {
    constructor(ToppingsService) {
        this.ToppingsService = ToppingsService
    }

    $onInit() {
        this.toppings = this.ToppingsService.getAllToppings()
    }

    toppingSelected(topping) {
        console.log('PizzaToppingsController toppingSelected() : ', topping)
        this.onToppingClick({ $event: topping })
    }
}

export const PizzaToppings = {
    bindings: {
        onToppingClick: '&' //topping-back
    },

    template: `<div class="col-xs-6">
                    <button ng-repeat="topping in $ctrl.toppings track by $index"
                        ng-click="$ctrl.toppingSelected(topping)"
                        type="button"
                        class="btn btn-large">
                        {{topping}}
                     </button>
                </div>
                `,
    controller: PizzaToppingsController
}