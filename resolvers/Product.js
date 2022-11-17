const sortArray = (array) => {
    let tmpObj = array[0]
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[j].rating > array[i].rating) {
                tmpObj = array[i]
                array[i] = array[j]
                array[j] = tmpObj
            }
        }
    }
    return array
}

const firstNElemntsOfArray = (numberOfElements, array) => {
    let tmpArray = []
    for (let i = 0; i < numberOfElements; i++) {
        if (i + 1 <= array.length) {
            tmpArray.push(array[i])
        } else {
            break
        }
    }
    return tmpArray
}

exports.Product = {
    category: ({categoryId}, args, { db }) => {
        for (let i = 0; i < db.categories_array.length; i++) {
            if(db.categories_array[i].id === categoryId) return db.categories_array[i]
        }
        // return db.categories_array.filter(category => category.id === categoryId)[0]
    },

    allReviews: ( { id }, args, { db }) => { 
        return db.reviews.filter(review => review.productId === id)
    },

    bestReviews: ({ id }, { benchMark, maxCount }, { db }) => { 
        return firstNElemntsOfArray(maxCount, sortArray(db.reviews.filter(review => review.productId === id)).filter(chosenSortedReview => chosenSortedReview.rating >= benchMark))
    },
    
    worstReview: ({ id }, args, { db }) => { 
        let sortedReviews = sortArray(db.reviews.filter(review => review.productId === id))
        return sortedReviews[sortedReviews.length - 1]
    },

}