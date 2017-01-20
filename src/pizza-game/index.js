import angular from 'angular';

import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaMaking } from './pizza-making/pizza-making.component'
import { PizzaActions } from './pizza-actions/pizza-actions.component'
import { PizzaRecipes } from './pizza-recipes/pizza-recipes.component'
import { PizzaGame } from './pizza-game.component'
export default angular.module('PizzaGame', [])

.component('pizzaGame', PizzaGame)
.component('pizzaPool', PizzaPool)
.component('pizzaRecipes',PizzaRecipes)
.component('pizzaMaking',PizzaMaking)
.component('pizzaActions',PizzaActions)


.name;