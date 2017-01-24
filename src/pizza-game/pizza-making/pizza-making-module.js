import angular from 'angular'

import { PizzaMaking } from './pizza-making.component'
import { pizzaMakingWorking } from './pizza--making-working/pizza-making-working.component'
import { pizzaMakingToppings } from './pizza-making-toppings/pizza-making-toppings.component'

import { ToppingsService } from './toppings.service'

export default angular.module('PizzaMakingModule', [

])

    .component('pizzaMaking', PizzaMaking)
    .component('pizzaMakingWorking', pizzaMakingWorking)
    .component('pizzaMakingToppings', pizzaMakingToppings)
    
    .service('ToppingsService', ToppingsService)

.name