 class PizzaMakingController {
     constructor() {}

     $onChanges(changes) {
         if(this.pizza) {
            this.pizza = changes.pizza.currentValue
         } else {             
            this.pizza = []
         }
     }
 }

 export const PizzaMaking = {
     bindings: {
         pizza: '<'
     },
     template: `
        <div class="col-xs-4">
            <h2>Pizza Actuel</h2>
            <ul>
                <li ng-repeat="topping in $ctrl.pizza track by $index">{{ topping }}</li>
            </ul>
        </div>`,
     controller: PizzaMakingController
 }