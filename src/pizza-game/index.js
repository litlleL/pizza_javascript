import angular from 'angular'

import { PizzaGame } from './pizza-game.component'
import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaRecipe } from './pizza-recipe/pizza-recipe.component'
import { PizzaActions } from './pizza-actions/pizza-actions.component'
import { PizzaMaking } from './pizza-making/pizza-making'

import { PizzaService } from './pizza-game.service'

export default angular.module('PizzaGame', [
    PizzaMaking
])

.component('pizzaGame', PizzaGame)
.component('pizzaPool', PizzaPool)
.component('pizzaRecipe', PizzaRecipe)
.component('pizzaActions', PizzaActions)

.service('PizzaService', PizzaService)

.name;