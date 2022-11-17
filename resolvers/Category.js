exports.Category = {
    products: ({ id }, { filter }, { db }) => {
        const categoryPrd = db.products.filter(product => product.categoryId === id)
        
        let filteredCategoryProducts = categoryPrd

        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale)
            }

            // if ([1.0, 2.0, 3.0, 4.0, 5.0].includes(filter.avgRating)) {
                // this part of the code will work if the avgRating is of this array
            // }

            if (filter.avgRating > 0.0) {
                filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                    let avgPrdRating = 0.0
                    let reviewCount = 0
                    db.reviews.filter(review => {
                        if (review.productId === product.id) {
                            avgPrdRating += review.rating
                            reviewCount += 1
                        }
                    })
                    if ((reviewCount > 0) && (avgPrdRating / reviewCount >= filter.avgRating)) return product
                })
            }
        }

        return filteredCategoryProducts
    }
}