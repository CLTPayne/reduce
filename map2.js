const myReduce = function ([head, ...tail], callback, accumulator = 0) {
    if (head === undefined) {
        return accumulator;
    } else {
        return myReduce(tail, callback, callback(accumulator, head));
    }
}

const myMap = function (collection, mapper) {
    return myReduce(collection, (accumulator, item) => {
        return accumulator.concat(mapper(item))
    }, [])
}

const plusTen = myMap([3, 2, 1], currentValue => { return currentValue + 10 })

console.log(plusTen)