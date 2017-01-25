export class PizzaPoolService {
    constructor() {}

    isRecipeCompliant(recipe, pizza) {
        if (pizza.length !== recipe.toppings.length) {
            return false
        } else {
            let pizzaToppings = angular.copy(pizza)
            let recipeToppings = angular.copy(recipe.toppings)
            pizza.forEach(topping => {
                if (recipe.toppings.includes(topping)) {
                    recipeToppings.splice(topping, 1)
                    pizzaToppings.splice(topping, 1)
                }
            })
            return (pizzaToppings.length <= 0 && recipeToppings.length <= 0)
        }
    }
}