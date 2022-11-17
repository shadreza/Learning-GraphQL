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
    }
}