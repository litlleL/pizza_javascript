 class PizzaPoolController {
     constructor() {}

     $onInit() {
         this.pizza = []
     }

     $onChanges(changes) {
        this.pizzas = changes.pizzas.currentValue
     }

     recipeSelect(pizza) {
         this.onRecipeClick({ $event: pizza })
     }
 }

 export const PizzaPool = {
     bindings: {
         pizzas: '<',
         onRecipeClick: '&'
     },

     template: `
            <div class="col-xs-10">
                <button ng-repeat="pizza in $ctrl.pizzas track by $index"
                    ng-click="$ctrl.recipeSelect(pizza)"
                    type="button" 
                    class="btn btn-lg ">
                    {{ pizza.name }}
                </button>
            </div>
    `,
     controller: PizzaPoolController
 }