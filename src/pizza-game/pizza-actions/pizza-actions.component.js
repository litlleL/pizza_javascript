 import css from './pizza-actions.component.css'

 class PizzaActionsController {

     constructor() {

         this.test = "HELLO you :D"
     }

     $onChanges(changes) {

     }

     setAction(str) {

         console.log(str)
         
     }

 }

 export const PizzaActions = {

     bindings: {
         
     },

     template: `
        <div>
            <button ng-click="$ctrl.setAction('CHAMPIGNON')" type="button">
            <span>CHAMPIGNON</span>
        </button>
        </div>
    `,

     controller: PizzaActionsController
 }