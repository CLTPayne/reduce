const myReduce = function ([head, ...tail], callback, accumulator = 0) {
    if (head === undefined) {
        return accumulator;
    } else {
        return myReduce(tail, callback, callback(accumulator, head));
    }
}

const myFilter = function (collection, predicate) {
    return myReduce(collection, (accumulator, item) => {
        if (predicate(item)) {
            return accumulator.concat(item)
        }
        return accumulator
    }, [])
}

const greaterThanTwo = myFilter([3, 2, 1, 5, 0, 1], element => element >= 2)

console.log(greaterThanTwo)