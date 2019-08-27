const myReduce = function ([head, ...tail], callback, accumulator = 0) {
    if (head === undefined) {
        return accumulator;
    } else {
        return myReduce(tail, callback, callback(accumulator, head));
    }
}

const myMap = function ([head, ...tail], callback) {
    return myReduce([head, ...tail], (accumulator, head) => {
        return accumulator.concat(callback(head))
    }, accumulator = [])
}

const plusTen = myMap([3, 2, 1], currentValue => { return currentValue + 10 })

console.log(plusTen)