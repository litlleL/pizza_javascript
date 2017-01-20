import angular from 'angular';

import { PizzaPool } from './pizza-pool/pizza-pool.component'

export default angular.module('PizzaGame', [])

.component('pizzaPool', PizzaPool)

.name;