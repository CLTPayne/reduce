Array.prototype.myReduce = function (callback, initialValue) {
    if (initialValue) {
        const totalCalls = this.length
        const firstValue = callback(initialValue, this[0])
        if (totalCalls >= 2 && this[1]) {
            const secondValue = callback(firstValue, this[1])
            if (totalCalls >= 3 && this[2]) {
                const thirdValue = callback(secondValue, this[2])
                if (totalCalls >= 4 && this[3]) {
                    const forthValue = callback(thirdValue, this[3])
                    if (totalCalls >= 5 && this[4]) {
                        const fifthValue = callback(forthValue, this[4])
                        // known / deliberate limitation of this approach - 
                        // only works on an array of max 5 values
                        if (totalCalls >= 6 && this[5]) {
                            throw new Error('No this reduce only works for 5 element array')
                        } else {
                            return fifthValue
                        }
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
    } else {
        const totalCalls = this.length - 1
        const firstValue = callback(this[0], this[1])
        if (totalCalls >= 1 && this[2]) {
            const secondValue = callback(firstValue, this[2])
            if (totalCalls >= 2 && this[3]) {
                const thirdValue = callback(secondValue, this[3])
                if (totalCalls >= 3 && this[4]) {
                    const forthValue = callback(thirdValue, this[4])
                    if (totalCalls >= 4 && this[5]) {
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
}

const withInitialValue = [3, 2, 1, 4].myReduce((accumulator, currentValue) => { return accumulator + currentValue }, 5)

console.log(withInitialValue)

const missingInitialValue = [3, 2, 1, 4].myReduce((accumulator, currentValue) => { return accumulator + currentValue })

console.log(missingInitialValue)