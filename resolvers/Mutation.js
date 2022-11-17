const { v4: uuid } = require('uuid')

exports.Mutation = {
    addCategory: (parent, { input }, {db}) => {
        const { name } = input
        const newCategory = {
            id: uuid(),
            name,
        }

        db.categories_array.push(newCategory)

        return newCategory
    },

    addProduct: (parent, { input }, { db }) => {
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

        db.products.push(newProduct)

        return newProduct

    },

    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }

        db.reviews.push(newReview)

        return newReview
    },

    deleteCategory: (parent, { id }, { db }) => {

        let responseMsg ="Failed To Delete the Category"

        db.categories_array = db.categories_array.filter(category => {
            if (category.id !== id) {
                return category
            } else {
                db.products = db.products.filter(product => {
                    if (product.categoryId === id) {
                        product.categoryId = null
                    }
                    return product
                })
                responseMsg = "Successfully Deleted the Category" + " " + category.name
            }
        })

        return responseMsg
    },

    deleteProduct: (parent, { id }, { db }) => {

        let responseMsg ="Failed To Delete the Product"

        db.products = db.products.filter(product => {
            if (product.id !== id) {
                return product
            } else {
                db.reviews = db.reviews.map(review => {
                    if (review.productId === id) return {
                        ...review,
                        productId : null
                    }
                    return review
                })
                responseMsg = "Successfully Deleted the Product" + " " + product.name
            }
        })

        return responseMsg
    },

    deleteReview: (parent, { id }, { db }) => {

        let responseMsg ="Failed To Delete the Review"

        db.reviews = db.reviews.filter(review => {
            if (review.id !== id) {
                return review
            } else responseMsg ="Successfully Deleted the Review"  + " " + review.title
        })

        return responseMsg
    },

    updateCategory: (parent, { id, input }, { db }) => {

        // const { name } = input

        // let responseMsg ="Failed To Update the Category"

        // db.categories_array = db.categories_array.map((category => {
        //     if (category.id === id) {
        //         responseMsg = "Successfully Updated the Category" + " " + category.name
        //         return {
        //             ...category,
        //             name
        //         }
        //     }
        //     return category
        // }))

        // return responseMsg


        // 2nd approach
        const index = db.categories_array.findIndex(category => category.id === id)
        if(index === -1) return "Failed Updated the Category"
        db.categories_array[index] = {
            ...db.categories_array[index],
            ...input
        }
        return "Successfully Updated the Category"
    },

    updateProduct: (parent, { id, input }, { db }) => {

        let responseMsg ="Failed To Update the Product"

        db.products = db.products.map((product => {
            if (product.id === id) {
                responseMsg = "Successfully Updated the Product" + " " + product.name
                return {
                    ...product,
                    ...input
                }
            }
            return product
        }))

        return responseMsg
    },

    updateReview: (parent, { id, input }, { db }) => {

        const {
            date,
            title,
            comment,
            rating,
            productId,
        } = input

        let responseMsg ="Failed To Update the Review"

        db.reviews = db.reviews.map((review => {
            if (review.id === id) {
                responseMsg = "Successfully Updated the Review" + " " + review.title
                return {
                    ...review,
                    date,
                    title,
                    comment,
                    rating,
                    productId,
                }
            }
            return review
        }))

        return responseMsg
    },
}