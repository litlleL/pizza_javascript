class PizzaToppingsController {
    constructor() {

    }
    $onInit() {


    }

    toppingSelect(topping) {

        this.onToppingback({ $event: topping });

    }
}

export const PizzaToppings = {
    bindings: {
        topping: '<',
        onToppingback: '&' //topping-back
    },

    template: `<div>
                    <button ng-click="$ctrl.toppingSelect($ctrl.topping)" type="button" class="btn btn-large" >
                        {{$ctrl.topping}}
                     </button>
                </div><br>
                     `,
    controller: PizzaToppingsController
}