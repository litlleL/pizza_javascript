import angular from 'angular'

import { PizzaMaking } from './pizza-making.component'
import { PizzaWorking } from './pizza-working/pizza-working.component'
import { PizzaToppings } from './pizza-toppings/pizza-toppings.component'

import { PizzaService } from './pizza.service'
import { ToppingsService } from './toppings.service'

export default angular.module('PizzaModule', [

])

    .component('pizzaMaking', PizzaMaking)
    .component('pizzaWorking', PizzaWorking)
    .component('pizzaToppings', PizzaToppings)

    .service('PizzaService', PizzaService)
    .service('ToppingsService', ToppingsService)

.name