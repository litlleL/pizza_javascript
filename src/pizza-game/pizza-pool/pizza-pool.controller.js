export class PizzaPoolController {
    constructor(RecipeService, $timeout, $interval, $rootScope) {
        this.RecipeService = RecipeService
        this.$timeout = $timeout
        this.$interval = $interval
        this.$rootScope = $rootScope
        $rootScope.$on('start', (event, args) => this.start(args))
    }

    $onInit() {
        this.pool = []
        this.intervalId = {}
        this.allRecipes = this.RecipeService.getAllRecipes()

    }

    start(args) {
        this.$rootScope.$emit('message', args)
        const intervalId = this.$interval(() => {
            let index = Math.floor(Math.random() * this.allRecipes.length)
            const recipeToAdd = this.RecipeService.getRecipe(index)
            this.pool.push({
                type: recipeToAdd.name,
                toppings: recipeToAdd.toppings,
                timeout: this.$timeout(() => {
                    this.$interval.cancel(intervalId),
                    this.gameOver()             
                }, 10000)
            })
            this.$rootScope.$emit('message', 'Nouvelle Pizza à faire : ' + recipeToAdd.name)
        }, 1000)
    }

    gameOver() {
        this.$rootScope.$emit('gameOver')
        this.pool.forEach(element => {
            this.$timeout.cancel(element.timeout)
        });
        this.pool.length = 0
    }

    displayRecipe(recipe) {
        this.recipe = recipe
    }
}