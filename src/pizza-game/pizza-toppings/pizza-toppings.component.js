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
    toppingSelect(topping){
        this.topping=angular.copy(topping);
        this.toppingBack({ $event:this.topping});
    }
}

export const PizzaToppings ={
    bindings:{
       allToppings:'<',
       toppingBack:'&'//topping-back
    },

    template : `  <button ng-repeat="topping in $ctrl.allToppings track by $index" ng-click="$ctrl.toppingSelect(topping)" type="button" >
                     </button>
                     <pre>
                        
                     </pre>`,
    controller: PizzaToppingsController
}