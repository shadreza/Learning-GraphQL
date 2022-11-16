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
    category: ({categoryId}, args, { categories_array }) => {
        for (let i = 0; i < categories_array.length; i++) {
            if(categories_array[i].id === categoryId) return categories_array[i]
        }
        // return categories_array.filter(category => category.id === categoryId)[0]
    },

    allReviews: ( { id }, args, { reviews }) => { 
        return reviews.filter(review => review.productId === id)
    },

    bestReviews: ({ id }, { benchMark, maxCount }, { reviews }) => { 
        return firstNElemntsOfArray(maxCount, sortArray(reviews.filter(review => review.productId === id)).filter(chosenSortedReview => chosenSortedReview.rating >= benchMark))
    },
    
    worstReview: ({ id }, args, { reviews }) => { 
        let sortedReviews = sortArray(reviews.filter(review => review.productId === id))
        return sortedReviews[sortedReviews.length - 1]
    },

}