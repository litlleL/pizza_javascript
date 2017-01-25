import angular from 'angular'

import { PizzaPool } from './pizza-pool.component'
import { PizzaPoolDisplay } from './pizza-pool-display/pizza-pool-display.component'
import { PizzaPoolRecipes } from './pizza-pool-recipes/pizza-pool-recipes.component'

import { PizzaPoolService } from './pizza-pool.service'

export default angular.module('PizzaPoolModule', [

])

    .component('pizzaPool', PizzaPool)
    .component('pizzaPoolDisplay', PizzaPoolDisplay)
    .component('pizzaPoolRecipes', PizzaPoolRecipes)

    .service('PizzaPoolService', PizzaPoolService)

.name