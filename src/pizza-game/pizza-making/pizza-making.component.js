 import css from './pizza-making.component.css'

class PizzaMakingController{
   constructor(){
       console.log('hello')
   }
   $onChanges(changes){
       
   }
   
}
export const PizzaMaking = {
  // bindings: {
   //     user: '<',
   //     onSubmit: '&'
   // },
   template: '<div>Pizza making</div>',
   controller: PizzaMakingController
}