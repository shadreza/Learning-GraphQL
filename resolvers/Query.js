exports.Query = {

    name: (parent, args, context) => "Tubamoni",
    age: (parent, args, context) => 23,
    salary: (parent, args, context) => 491913.102,
    married: (parent, args, context) => true,
    visitedPlaces: (parent, args, context) => ["Darjeeling", "Agra", "Cox's Bazar", "Bogra"],
    boughtProducts: (parent, args, { db}) => {
        return db.products
    },

    product: (parent, {id}, {db}) => {

        for (let i = 0; i < db.products.length; i++) {
            if (db.products[i].id === id) {
                return db.products[i]
            }
        }

        return null

    },

    categories: (parent, args, { db }) => db.categories_array,

    category: (parent, {id}, { categories_array}) => {
        for (let i = 0; i < categories_array.length; i++) {
            return categories_array.find((c) => c.id === id)
            // if (categories_array[i].id === args.id) {
            //     return categories_array[i]
            // }
        }
    },

    allReviews: (parent, args, { db }) => db.reviews,
    
    products: (parent, {filter}, {db}) => {
        let filteredProducts = db.products

        if (filter) {
            if (filter.onSale === true) {
                filteredProducts = filteredProducts.filter(product => product.onSale)
            }

            // if ([1.0, 2.0, 3.0, 4.0, 5.0].includes(filter.avgRating)) {
                // this part of the code will work if the avgRating is of this array
            // }

            if (filter.avgRating > 0.0) {
                filteredProducts = filteredProducts.filter(product => {
                    let avgPrdRating = 0.0
                    let reviewCount = 0
                    db.reviews.filter(review => {
                        if (review.productId === product.id) {
                            avgPrdRating += review.rating
                            reviewCount += 1
                        }
                    })
                    if((reviewCount > 0) && (avgPrdRating >= filter.avgRating)) return product
                })
            }
        }

        return filteredProducts
    }

}