class PizzaToppingsController {
    constructor() {

    }
    $onInit() {


    }

    toppingSelect(topping) {
        this.toppingBack({ $event: this.topping });
    }
}

export const PizzaToppings = {
    bindings: {
        topping: '<',
        toppingBack: '&' //topping-back
    },

    template: `<div>
                    <button ng-click="$ctrl.toppingSelect(topping)" type="button" class="btn btn-large" >
                        {{$ctrl.topping}}
                     </button>
                </div><br>
                     `,
    controller: PizzaToppingsController
}