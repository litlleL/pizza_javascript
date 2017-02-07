import angular from 'angular'

import { PizzaPool } from './pizza-pool.component'
import { PizzaPoolDisplay } from './pizza-pool-display/pizza-pool-display.component'
import { PizzaPoolList } from './pizza-pool-list/pizza-pool-list.component'

import { RecipeService } from './recipe.service'

export default angular.module('PizzaPoolModule', [

])

    .component('pizzaPool', PizzaPool)
    .component('pizzaPoolDisplay', PizzaPoolDisplay)
    .component('pizzaPoolList', PizzaPoolList)

    .service('RecipeService', RecipeService)

.name