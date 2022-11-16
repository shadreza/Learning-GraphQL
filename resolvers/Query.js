const { products, categories_array } = require("../db")

exports.Query = {
    name: (parent, args, context) => "Tubamoni",
    age: (parent, args, context) => 23,
    salary: (parent, args, context) => 491913.102,
    married: (parent, args, context) => true,
    visitedPlaces: (parent, args, context) => ["Darjeeling", "Agra", "Cox's Bazar", "Bogra"],
    boughtProducts: (parent, args, context) => {
        return products
    },

    product: (parent, args, context) => {

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === args.id) {
                return products[i]
            }
        }

        return null

    },

    categories: (parent, args, context) => categories_array,

    category: (parent, args, context) => {
        for (let i = 0; i < categories_array.length; i++) {
            const { id } = args
            return categories_array.find((c) => c.id === id)

            // if (categories_array[i].id === args.id) {
            //     return categories_array[i]
            // }
        }
    },

}