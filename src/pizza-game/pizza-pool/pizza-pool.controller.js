export class PizzaPoolController {
    constructor(PizzaPoolService, $scope) {
        this.PizzaPoolService = PizzaPoolService
        this.$scope = $scope
    }

    $onInit() {
        this.pool = []
    }

    addRecipe(recipe) {
        this.pool.push(recipe)
    }

    displayRecipe(recipe) {
        this.recipe = recipe
    }
}