 class PizzaPoolListController {
     constructor() {}

     $onInit() {
         this.pool = []
     }

     $onChanges(changes) {
         this.pool = changes.list.currentValue
     }

     recipeSelected(recipe) {
         this.onRecipeClick({ $event: recipe })
     }
 }

 export const PizzaPoolList = {
     bindings: {
         list: '<',
         onRecipeClick: '&'
     },

     template: `
            <div class="col-lg-12">
                <button ng-repeat="recipe in $ctrl.list track by $index"
                    ng-click="$ctrl.recipeSelected(recipe)"
                    type="button" 
                    class="btn btn-sm">
                    {{ recipe.type }}
                </button>
            </div>
    `,
     controller: PizzaPoolListController
 }