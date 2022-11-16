exports.Query = {

    name: (parent, args, context) => "Tubamoni",
    age: (parent, args, context) => 23,
    salary: (parent, args, context) => 491913.102,
    married: (parent, args, context) => true,
    visitedPlaces: (parent, args, context) => ["Darjeeling", "Agra", "Cox's Bazar", "Bogra"],
    boughtProducts: (parent, args, { products}) => {
        return products
    },

    product: (parent, {id}, {products}) => {

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return products[i]
            }
        }

        return null

    },

    categories: (parent, args, { categories_array }) => categories_array
    ,

    category: (parent, {id}, { categories_array}) => {
        for (let i = 0; i < categories_array.length; i++) {
            return categories_array.find((c) => c.id === id)
            // if (categories_array[i].id === args.id) {
            //     return categories_array[i]
            // }
        }
    },

}