exports.Product = {
    category: ({categoryId}, args, { categories_array }) => {
        for (let i = 0; i < categories_array.length; i++) {
            if(categories_array[i].id === categoryId) return categories_array[i]
        }
        // return categories_array.filter(category => category.id === categoryId)[0]
    }
}