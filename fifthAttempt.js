const myReduce = (array, callback, initialValue = 0) => {
    if (array.length >= 1) {
        [valueOne, ...rest] = array;
        return myReduce(rest, callback, callback(initialValue, valueOne))
    } else {
        return initialValue
    }
}

const withInitialValue = myReduce([3, 2, 1, 4, 1], (accumulator, currentValue) => { return accumulator + currentValue }, 5)

console.log(withInitialValue)

const missingInitialValue = myReduce([3, 2, 1], (accumulator, currentValue) => { return accumulator + currentValue })

console.log(missingInitialValue)