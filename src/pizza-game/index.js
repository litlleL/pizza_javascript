import angular from 'angular';

import { PizzaPool } from './pizza-pool/pizza-pool.component'
import { PizzaGame } from './pizza-game.component'

export default angular.module('PizzaGame', [])

.component('pizzaGame', PizzaGame)

.component('pizzaPool', PizzaPool)

.name;