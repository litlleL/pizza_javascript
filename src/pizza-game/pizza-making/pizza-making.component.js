 import css from './pizza-making.component.css'

 class PizzaMakingController {
     constructor() {
         console.log('hello')
     }

     $onInit() {
         this.action = "Init";
     }

     $onChanges(changes) {

     }

 }

 export const PizzaMaking = {
     bindings: {
         pizzat: '<',
     },
     template: '<p> {{ $ctrl.pizzat }}</p>',
     controller: PizzaMakingController
 }