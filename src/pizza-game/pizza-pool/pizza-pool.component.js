 class PizzaPoolController {

     constructor() {

     }


     $onChanges(changes) {
         this.name = changes.pizza.currentValue.name;
     }

     recepiesSelect() {
         this.onRecepiciesselect()
     }
 }

 export const PizzaPool = {
     bindings: {
         pizza: '<',
         onRecepiciesselect: '&'
     },

     template: `
        <div >
            <button ng-click="$ctrl.recepiesSelect()" type="button" class="btn btn-lg " >
                {{ $ctrl.name }}
            </button>
        </div>
    `,

     controller: PizzaPoolController
 }