import angular from 'angular'

import { PizzaGame } from './pizza-game.component'
import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaRecipe } from './pizza-recipe/pizza-recipe.component'
import { PizzaActions } from './pizza-actions/pizza-actions.component'
import PizzaModule from './pizza-making/pizza-module'

import { PizzaService } from './pizza-game.service'

export default angular.module('PizzaGame', [
    PizzaModule
])

    .component('pizzaGame', PizzaGame)
    .component('pizzaPool', PizzaPool)
    .component('pizzaRecipe', PizzaRecipe)
    .component('pizzaActions', PizzaActions)

    .service('PizzaService', PizzaService)

.name