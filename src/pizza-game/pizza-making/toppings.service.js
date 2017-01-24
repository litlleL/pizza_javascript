export class ToppingsService {
    constructor() {
        this.allToppings = [
            "mayo",
            "eeg",
            "mushrooms",
            "onions",
            "creme fraiche",
            "pate",
            "tomato",
            "ham",
            "fromaggio",
            "parmeggiano",
            "cheese1",
            "cheeese 2",
            "beets",
            "potato"
        ]
    }

    getAllToppings() {
        return this.allToppings
    }
}