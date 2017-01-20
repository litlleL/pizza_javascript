
class PizzaRecipesController{
    constructor(){}
    $onInit(){
        
        
    }

    $onChanges(changes){
        if (changes.recipeSelected && changes.recipeSelected.currentValue) {
          this.recipe = angular.copy(changes.recipeSelected.currentValue);  
        }         
    }
}

export const PizzaRecipes= {
     bindings: {
        recipeSelected: '<'
  
    },
     template: require('./pizza-recipes.component.html'),
    controller: PizzaRecipesController

}

                