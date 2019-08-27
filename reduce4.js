Array.prototype.myReduce = function (callback, initialValue = 0) {
    if (this.length >= 1) {
        return this.slice(1).myReduce(callback, callback(initialValue, this[0]))
    } else {
        return initialValue
    }
}

const withInitialValue = [3, 2, 1, 4].myReduce((accumulator, currentValue) => { return accumulator + currentValue }, 5)

console.log(withInitialValue)

const missingInitialValue = [3, 2, 1].myReduce((accumulator, currentValue) => { return accumulator + currentValue })

console.log(missingInitialValue)