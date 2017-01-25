import { PizzaPoolController } from './pizza-pool.controller'

export const PizzaPool = {

    template: `
        <div>
            <pizza-pool-list pool-list="$ctrl.pool"></pizza-pool-list>
            <pizza-pool-display></pizza-pool-display>
        </div>
    `,
    controller: PizzaPoolController
}