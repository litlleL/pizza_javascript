import angular from 'angular';
import ngRoute from 'angular-route';

import PizzaPool from './components/pizza-pool/pizza-pool.component';

angular.module('app', [
  PizzaPool
])
.value('Version', '1.0.0')
.run(function() {
  console.log('PizzaYOLO !');
})
