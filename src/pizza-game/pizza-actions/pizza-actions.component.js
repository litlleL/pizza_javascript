 import css from './pizza-actions.component.css'

 class PizzaActionsController {
     constructor() {}

     $onInit() {
         this.score = 0
         this.message = ''
     }

     $onChanges(changes) {
         this.score = changes.score.currentValue
         if(changes.message.currentValue){
            this.message = changes.message.currentValue
         } else {
             this.message = ''
         }
     }

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
         score: '<',
         message: '<',
         onSend: '&',
         onStart: '&',
         onDelete: '&'
     },
     template: `
        <div>
            <p><button ng-click="$ctrl.start()" type="button">
                <span>START</span>
            </button>
            <button ng-click="$ctrl.sendPizza()" type="button">
                <span>ENVOYER</span>
            </button>
            <button ng-click="$ctrl.delete()" type="button">
                <span>JETER</span>
            </button>
            <strong>Score : {{$ctrl.score}}</strong>
            {{$ctrl.message}}</p>
        </div>
        `,
     controller: PizzaActionsController
 }