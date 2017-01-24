import angular from 'angular'

import { PizzaMaking } from './pizza-making.component'
import { PizzaWorking } from './pizza-working/pizza-working.component'
import { PizzaToppings } from './pizza-toppings/pizza-toppings.component'

import { PizzaMakingService } from './pizza-making.service'

export default angular.module('pizzaMaking', [

])

    .component('pizzaMaking', PizzaMaking)
    .component('pizzaWorking', PizzaWorking)
    .component('pizzaToppings', PizzaToppings)

    .service('pizzaMakingService', PizzaMakingService)

.name