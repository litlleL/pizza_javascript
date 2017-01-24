class PizzaRecipeController{
    constructor(){}

    $onInit() {
        this.recipe = ''
    }

    $onChanges(changes){
        if (changes.recipe && changes.recipe.currentValue) {
            this.recipe = angular.copy(changes.recipe.currentValue);  
        }         
    }
}

export const PizzaRecipe = {
     bindings: {
        recipe: '<'
    },
    template: `
        <div>
            <strong>{{$ctrl.recipe.name}}</strong>
            <ul> 
                <li ng-repeat ="topping in $ctrl.recipe.toppings">{{topping}}</li> 
            </ul>
        </div>`,
    controller: PizzaRecipeController

}

                