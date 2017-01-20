import angular from 'angular';

import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaGame } from './pizza-game.component'
import { PizzaRecipes } from './pizza-recipes/pizza-recipes.component'
export default angular.module('PizzaGame', [])

.component('pizzaGame', PizzaGame)
.component('pizzaPool', PizzaPool)
.component('pizzaRecipes',PizzaRecipes)

.name;