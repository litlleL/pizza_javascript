import angular from 'angular';

import { PizzaGame } from './pizza-game.component'
import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaRecipe } from './pizza-recipe/pizza-recipe.component'
import { PizzaToppings } from './pizza-toppings/pizza-toppings.component'
import { PizzaMaking } from './pizza-making/pizza-making.component'
import { PizzaActions } from './pizza-actions/pizza-actions.component'

import { PizzaService } from './pizza-game.service'

export default angular.module('PizzaGame', [])

.component('pizzaGame', PizzaGame)
.component('pizzaPool', PizzaPool)
.component('pizzaRecipe', PizzaRecipe)
.component('pizzaToppings', PizzaToppings)
.component('pizzaMaking', PizzaMaking)
.component('pizzaActions', PizzaActions)

.service('PizzaService', PizzaService)

.name;