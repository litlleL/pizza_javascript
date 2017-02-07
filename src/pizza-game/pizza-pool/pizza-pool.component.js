import { PizzaPoolController } from './pizza-pool.controller'

export const PizzaPool = {
    template: `
        <div class="row">
            <pizza-pool-list list="$ctrl.pool" on-recipe-click="$ctrl.displayRecipe($event)"></pizza-pool-list>
            <pizza-pool-display recipe="$ctrl.recipe"></pizza-pool-display>
        </div>            
    `,
    controller: PizzaPoolController
}