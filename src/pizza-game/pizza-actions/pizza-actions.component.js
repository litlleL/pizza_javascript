 import css from './pizza-actions.component.css'

 class PizzaActionsController {
     constructor() {}

     sendPizza() {
         this.onSend()
     }

     start() {
         this.onStart()
     }

     delete() {
         this.onDelete()
     }
 }

 export const PizzaActions = {
     bindings: {
         onSend: '&',
         onStart: '&',
         onDelete: '&'
     },
     template: `
        <div>
            <button ng-click="$ctrl.start()" type="button">
                <span>START</span>
            </button>
            <button ng-click="$ctrl.sendPizza()" type="button">
                <span>ENVOYER</span>
            </button>
            <button ng-click="$ctrl.delete()" type="button">
                <span>JETER</span>
            </button>
        </div>
        `,
     controller: PizzaActionsController
 }