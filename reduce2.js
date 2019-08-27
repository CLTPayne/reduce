Array.prototype.myReduce = function (callback, initialValue) {
    const array = initialValue ? [initialValue, ...this] : this
    const totalCalls = array.length - 1
    const firstValue = callback(array[0], array[1])
    if (totalCalls >= 1 && array[2]) {
        const secondValue = callback(firstValue, array[2])
        if (totalCalls >= 2 && array[3]) {
            const thirdValue = callback(secondValue, array[3])
            if (totalCalls >= 3 && array[4]) {
                const forthValue = callback(thirdValue, array[4])
                if (totalCalls >= 4 && array[5]) {
                    // known / deliberate limitation of this approach - 
                    // only works on an array of max 5 values
                    throw new Error('No, this reduce only works for 5 element arrays')
                } else {
                    return forthValue
                }
            } else {
                return thirdValue
            }
        } else {
            return secondValue
        }
    } else {
        return firstValue
    }
}

const withInitialValue = [3, 2, 1, 4].myReduce((accumulator, currentValue) => { return accumulator + currentValue }, 5)

console.log(withInitialValue)

const missingInitialValue = [3, 2, 1, 4].myReduce((accumulator, currentValue) => { return accumulator + currentValue })

console.log(missingInitialValue)