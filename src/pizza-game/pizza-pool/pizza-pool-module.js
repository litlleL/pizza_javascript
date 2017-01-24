import angular from 'angular'

export default angular.module('PizzaPoolModule', [

])

    .component('pizzaPool', PizzaPool)
    .component('pizzaPoolDisplay', PizzaPoolDisplay)
    .component('pizzaPoolRecipes', PizzaPoolRecipes)

    .service('PizzaPoolService', PizzaPoolService)

.name