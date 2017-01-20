
class PizzaRecipesController{
    constructor(){}
    $onInit(){
        //this.recipe=recipeSelect;
    }

    $onChanges(changes){
         this.recipe= changes.recipeSelected;
         console.log( this.recipe)
    }
}

export const PizzaRecipes= {
     bindings: {
        recipeSelected: '<'
  
    },
    template: require('./pizza-recipes.component.html'),
    controller: PizzaRecipesController

}