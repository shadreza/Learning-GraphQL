const { v4: uuid } = require('uuid')

exports.Mutation = {
    addCategory: (parent, { input }, {categories_array}) => {
        const { name } = input
        const newCategory = {
            id: uuid(),
            name,
        }

        categories_array.push(newCategory)

        return newCategory
    },

    addProduct: (parent, { input }, { products }) => {
        const { name, description, quantity, price, image, onSale, categoryId } = input

        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId
        }

        products.push(newProduct)

        return newProduct

    },

    addReview: (parent, { input }, { reviews }) => {
        const { date, title, comment, rating, productId } = input

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }

        reviews.push(newReview)
        
        return newReview
    }
}