const myReduce = function ([head, ...tail], callback, accumulator = 0) {
    if (head === undefined) {
        return accumulator;
    } else {
        return myReduce(tail, callback, callback(accumulator, head));
    }
}

const myGroupBy = function (collection, grouper) {
    return myReduce(collection, (accumulator, item) => {
        if (accumulator[grouper(item)] && grouper(item)) {
            accumulator[grouper(item)] = [...accumulator[grouper(item)], item]
        } else {
            accumulator[grouper(item)] = [item]
        }
        return accumulator
    }, {})
}

const groupNumbers = myGroupBy([1, 2, 3, 4, 5, 6], (item) => {
    return (item & 1) ? "odd" : "even";
})

console.log(groupNumbers)