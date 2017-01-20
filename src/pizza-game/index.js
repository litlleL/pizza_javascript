import angular from 'angular';

import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaGame } from './pizza-game.component'
import { PizzaRecipes } from './pizza-recipes/pizza-recipes.component'
import { PizzaToppings } from './pizza-toppings/pizza-toppings.component'
export default angular.module('PizzaGame', [])

.component('pizzaGame', PizzaGame)
.component('pizzaPool', PizzaPool)
.component('pizzaRecipes',PizzaRecipes)
.component('pizzaToppings',PizzaToppings)

.name;