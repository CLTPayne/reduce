Array.prototype.myReduce = function (callback, initialValue = 0, numberOfTimesCalled = 0) {
    if (numberOfTimesCalled < this.length) {
        const newCallCount = numberOfTimesCalled + 1
        const result = callback(initialValue, this[numberOfTimesCalled])
        return this.myReduce(callback, result, newCallCount)
    } else {
        return initialValue;
    }
}

const withInitialValue = [3, 2, 1].myReduce((accumulator, currentValue) => { return accumulator + currentValue }, 5)

console.log(withInitialValue)

const missingInitialValue = [3, 2, 1].myReduce((accumulator, currentValue) => { return accumulator + currentValue })

console.log(missingInitialValue)