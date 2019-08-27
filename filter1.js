const myReduce = function ([head, ...tail], callback, accumulator = 0) {
    if (head === undefined) {
        return accumulator;
    } else {
        return myReduce(tail, callback, callback(accumulator, head));
    }
}

const myFilter = function (array, callback) {
    return myReduce(array, (accumulator, item) => {
        if (callback(item)) {
            return accumulator.concat(item)
        }
        return accumulator
    }, [])
}

const greaterThanTwo = myFilter([3, 2, 1, 5, 0, 1], element => element >= 2)

console.log(greaterThanTwo)