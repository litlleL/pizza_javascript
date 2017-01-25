import angular from 'angular'

//component
import { PizzaGame } from './pizza-game.component'
import { PizzaActions } from './pizza-actions/pizza-actions.component'
//Module
import PizzaMakingModule from './pizza-making/pizza-making-module'
import PizzaPoolModule from './pizza-pool/pizza-pool-module'
//service
import { GameService } from './pizza-game.service'

export default angular.module('PizzaGame', [
    PizzaMakingModule,
    PizzaPoolModule
])

    .component('pizzaGame', PizzaGame)
    
    .component('pizzaActions', PizzaActions)

    .service('GameService', GameService)

.name