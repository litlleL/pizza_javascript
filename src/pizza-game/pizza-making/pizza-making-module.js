import angular from 'angular'

import { PizzaMaking } from './pizza-making.component'
import { PizzaWorking } from './pizza-making-working/pizza-making-working.component'
import { PizzaToppings } from './pizza-making-toppings/pizza-making-toppings.component'

import { ToppingsService } from './toppings.service'

export default angular.module('PizzaMakingModule', [

])

    .component('pizzaMaking', PizzaMaking)
    .component('pizzaMakingWorking', PizzaWorking)
    .component('pizzaMakingToppings', PizzaWorking)
    
    .service('ToppingsService', ToppingsService)

.name