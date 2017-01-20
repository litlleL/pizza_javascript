 import css from './pizza-actions.component.css'

 class PizzaActionsController {

     constructor() {

         this.test = "HELLO you :D"
     }

     $onChanges(changes) {

     }

     setAction() {

         this.onSend({});

     }

 }

 export const PizzaActions = {

     bindings: {
         onSend: '&'
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