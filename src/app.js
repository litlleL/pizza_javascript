import angular from 'angular';

import PizzaGame from './pizza-game';

angular.module('app', [
    PizzaGame
])

.run(function() {
    console.log('PizzaYOLO !');
})