exports.Category = {
    products: ({ id }, { filter }, { products }) => {
        const categoryPrd = products.filter(product => product.categoryId === id)
        
        let filteredCategoryProducts = categoryPrd

        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale)
            }
        }

        return filteredCategoryProducts
    }
}