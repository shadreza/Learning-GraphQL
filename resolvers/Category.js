const { products } = require("../db")

exports.Category = {
    products: (parent, args, context) => {
        const {id} = parent
        return products.filter(product => product.categoryId === id)
    }
}