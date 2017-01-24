 class PizzaWorkingController {
     constructor() {}

     $onChanges(changes) {
         if(!angular.equals(this.pizza, [])) {
            this.pizza = changes.actualPizza.currentValue
         } else {             
            this.pizza = []
         }
     }
 }

 export const PizzaWorking = {
     bindings: {
         actualPizza: '<'
     },
     template: `
        <div class="col-xs-4">
            <h2>Pizza Actuel</h2>
            <ul>
                <li ng-repeat="topping in $ctrl.pizza track by $index">{{ topping }}</li>
            </ul>
        </div>`,
     controller: PizzaWorkingController
 }