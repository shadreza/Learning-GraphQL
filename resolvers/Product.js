const { categories_array } = require("../db")

exports.Product = {
    category: (parent, args, context) => {
        const { categoryId } = parent
        for (let i = 0; i < categories_array.length; i++) {
            if(categories_array[i].id === categoryId) return categories_array[i]
        }
        // return categories_array.filter(category => category.id === categoryId)[0]
    }
}