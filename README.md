## Reduce

A Functional Programming paradigm challenge.

#### Challenge 1:
Implement your own version of reduce. You're not allowed to mutate any variables and you can't use a for loop. It has to be done with functions. Don't rely on objects or instance variables. Only functions and conditionals.

#### Attempts

`reduce1.js`
- Clue status - asked for clarification around using array methods and properties. Did not reveal test data or clues.
- Thought process - latched onto the idea that it's about using functions and conditionals, hence the vile nested conditionals.
- Assumptions - assumed you can't use a while loop if a for loop is off the cards.
- Issues - limitiation of max 5 element array, because I couldn't be bothered to repeat further nested conditionals. Zero efficiency. Can't currently see a way to get it to stop calling the callBack / reducer function programmatically.
- Ideas - based on the closing note of "FP is hard at first and recursion gets crazy" I'm wondering if there is away to make the logic a function that calls it self but how do you call do this without a counter of some sort, and a counter would be variable would be mutating so not allowed!

`reduce2.js`
- Clue status - looked at the test data and realised didn't have to recreate it as an array method but think that's a mute point.
- Thought process - not a real second attempt just a slight improvement on the first attempt to half the code and make it more easily accomodate an optional initial value being passed, like in the real reduce().
- Issues - really can't currently think of a way to increment with out having a variable that mutates. Thought of using the index of an element but getting the index is another array method that's built in.
- Ideas - if I could use something like shift() then I could always pass in first and second element of the array to the function and have a check that the second param doesn't === undefined. Is this exercise going to mean I have to write my own version of all the array methods!

`reduce3.js`
- Clue status - looked at all of them and didn't feel very illuminated as I think they were things I was already kind of aware of but getting bogged down in how it iterate and how to not mutate a variable.  
- Thought process - worried about changing the original API of the reduce function (although that's thinking very javascript about it too, perhaps it has a slightly different API in other languages). But I've added another parameter with a default value and it makes things easier. Similarly give the initialValue (optional param) a default value, this is necessary as not using named params so need to maintain order and number of params in the function signature.
- Issues - I don't think this counts as mutating values as each time myReduce() gets called will have a new execution context and the const values are scoped within that?
- Ideas - Feel like this successfully generalises the first value and second value passed to the callback, as well as the return value. I think the terminating condition works well. But I've not added an additional function to the function signature so not confident that I'm meeting requirement in the hint that said that the function "will accept another function and apply that in its body somehow." Also, have I done it wrong if my function accommodates the optional initial value param.

`reduce4.js`
- Clue status - given that I've done it as a method on the array prototype (in order to mimic the real reduce() in JavaScript) told could use one array method - slice()
- Thought process - but being able to use slice() makes it really easy!
- Issues - would be very happy to switch to a regular javascript function invoked via the function invocation pattern, however I don't currently see how to achieve the 'eating up' / slicing of the data with no variable assignment, mutation, or loops.
- Ideas - is there something I don't currently remember or know about with spread and rest operators? The main es6 aspect I think of that could be relevant is the arrow function - as this doesn't have it's own this object.

`reduce5,js`
- Clue status - I was missing out on a key es6 addition by using the prototype pattern originally.
- Thought process - what es6 features do I know about other than the arrow function? Had considered spread and rest above. Now implemented with them.

#### Clues:

Test data suggestion:
reducePayne([1, 2, 3, 4, 5], function(a, b) { return a + b; })
Your job is to implement reducePayne. You should get a result of 15 for the above call.

#### Challenge 2:
Listed in the issues [here](https://github.com/CLTPayne/reduce/issues/2).

`map1.js`
- Clue status - no further info other than the above issue
- Thought process - not very happy with this, it was a lot of trial and error. I had to put a lot of console.logs into `myReduce()` to follow the flow of the array elements. Potentially knowing that the challenge could be completed in one call to `myReduce` made me fixated on that and not fully trying to work out my own solution. I also took quite a while to realise that I needed to wrap the original callback up in an outer function in order to return the new array and not a single value.
- Issues - initially was trying to use `Array.prototype.push()` to create the new array but was getting just the number `1` returned. Eventually after a bit of googling I realised this is because `push()` has the return value of the new array's length. `concat()` returns the new array, and crucially does not mutate the existing arrays.
- Definitely didn't find it 'easy'.

`map2.js`
- Adjusting the params to be more in accordance with semantic convention.
- Updating my version one as per the improvements detailed [here](https://github.com/CLTPayne/reduce/issues/2)

#### Challenge 3:
Listed in the issues [here](https://github.com/CLTPayne/reduce/issues/3).

`filter1.js`
- Clue status - no further info other than the above issue
- Thought process - looked at the `Array.prototype.filter` to confirm that it also returns an array so heavily based this answer on the prior `myMap.js` so as to have an array as the reduced value. This kind of copy paste initially returned an array of `[true, false, true]` sort of thing so realised needed to check for truthiness and then concat with the item itself, not the return value of the passed in function, hence the conditional.
- Issues - initially missed the outer scope return on L14 so was just getting `0` as a result but used a `console.log` to work this out. Pending query around the naming / semantics of the params etc.
- Ideas - Took less than 14 mins to get to this working solution. There is probably something snazier could do but this is my first working idea, building on the last solutions. Could for example play around with having a ternary to make it more streamlined.

`filter2.js`
- Adjusting the params to be more in accordance with semantic convention as suggested [here](https://github.com/CLTPayne/reduce/issues/2)

#### Challenge 4:
Listed in the issues [here](https://github.com/CLTPayne/reduce/issues/3).

`groupBy1.js`
- Clue status - no further info other than the above issue
- Thought process - looked up `bitwise AND` to check I understood how the example grouper function actually worked and ran it in a REPL to prove it to myself. In terms of turning an array into an object, I have paired on something similar but much less functional previously.
- Issues - initially I missed off the check to see if the property was part of the object and spreading in the previous values  so was only getting the last two values in the array e.g. `{ odd: [5], even: [6]}`
- Ideas - again was surprisingly quick to do - I'd attribute this to having a prior schema for data transformation from array to object. Really pleased that I could recall and apply some of that here on my own! Pretty magical to do this with reduce though.
