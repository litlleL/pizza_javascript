class PizzaToppingsController{
    constructor(){

    }
    $onInit(){
        
        
    }
    $onChanges(){
        // if (changes.listToppings && changes.listToppings.currentValue) {
        //   this.toppings = angular.copy(changes.listToppings.currentValue);  
        // } 
    }
    toppingSelect(idTopping){
        
    }
}

export const PizzaToppings ={
    bindings:{
        listToppings:'<'

    },
    template : `  <button ng-click="$ctrl.toppingSelect()" type="button" >
                    <span>&times;</span>
                     </button>
                     <pre>
                        
                     </pre>`,
    controller: PizzaToppingsController
}