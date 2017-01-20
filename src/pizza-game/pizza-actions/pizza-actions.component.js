 import css from './pizza-actions.component.css'

 class PizzaActionsController {

     constructor() {

         this.test = "HELLO you :D"
     }

     $onChanges(changes) {

     }

     setAction() {

         this.onChampignon({});

     }

 }

 export const PizzaActions = {

     bindings: {
         onChampignon: '&'
     },

     template: `
        <div>
            <button ng-click="$ctrl.setAction('Champ!')" type="button">
            
            <span>ENVOYER</span>
        </button>
        </div>
    `,

     controller: PizzaActionsController
 }