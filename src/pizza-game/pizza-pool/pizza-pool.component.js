class PizzaPoolController {
    constructor() {}
}

export const PizzaPool = {

    template: `
        <div>
            <pizza-pool-recipe></pizza-pool-recipe>
            <pizza-pool-display></pizza-pool-display>
        </div>
    `,
    controller: PizzaPoolController
}