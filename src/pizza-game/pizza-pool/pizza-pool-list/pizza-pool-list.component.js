 class PizzaPoolListController {
     constructor() {}

     $onInit() {
         this.pool = []
     }

     $onChanges(changes) {
        this.pool = changes.poolList.currentValue
     }

     recipeSelected(pizza) {
         this.onRecipeClick({ $event: recipe })
     }
 }

 export const PizzaPoolList = {
     bindings: {
         poolList: '<',
         onRecipeClick: '&'
     },

     template: `
            <div class="col-xs-10">
                <button ng-repeat="recipe in $ctrl.pool track by $index"
                    ng-click="$ctrl.recipeSelected(recipe)"
                    type="button" 
                    class="btn btn-lg ">
                    {{ recipe.name }}
                </button>
            </div>
    `,
     controller: PizzaPoolListController
 }