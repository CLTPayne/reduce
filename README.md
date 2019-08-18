## Reduce

A Functional Programming paradigm challenge. 

#### The Challenge:
Implement your own version of reduce. You're not allowed to mutate any variables and you can't use a for loop. It has to be done with functions. Don't rely on objects or instance variables. Only functions and conditionals. 

#### Attempts 

`firstAttempt.js`
- Clue status - asked for clarification around using array methods and properties. Did not reveal test data or clues. 
- Thought process - latched onto the idea that it's about using functions and conditionals, hence the vile nested conditionals. 
- Assumptions - assumed you can't use a while loop if a for loop is off the cards. 
- Issues - limitiation of max 5 element array, because I couldn't be bothered to repeat further nested conditionals. Zero effiency. Can't currently see a way to get it to stop calling the callBack / reducer function programmatically.
- Ideas - based on the closing note of "FP is hard at first and recursion gets crazy" I'm wondering if there is away to make the logic a function that calls it self but how do you call do this without a counter of some sort, and a counter would be variable would be mutating so not allowed!

`secondAttempt.js`
- Clue status - looked at the test data and realised didn't have to recreate it as an array method but think that's a mute point. 
- Thought process - not a real second attempt just a slight improvement on the first attempt to half the code and make it more easily accomodate an optional initial value being passed, like in the real reduce(). 
- Issues - really can't currently think of a way to increment with out having a variable that mutates. Thought of using the index of an element but getting the index is another array method that's built in. 
- Ideas - if I could use something like shift() then I could always pass in first and second element of the array to the function and have a check that the second param doesnt === undefined. Is this exercise going to mean I have to write my own version of all the array methods! 

`thirdAttempt.js`
- Clue status - looked at all of them and didn't feel very illuminated as I think they were things I was already kind of aware of but getting bogged down in how it iterate and how to not mutate a variable.  
- Thought process - worried about changing the original API of the reduce function (although that's thinking very javascript about it too, perhaps it has a slightly different API in other languages). But I've added another parameter with a default value and it makes things easier. Similarly give the initialValue (optional param) a default value, this is necessary as not using named params so need to maintain order and number of params in the function signature. 
- Issues - I don't think this counts as mutating values as each time myReduce() gets called will have a new execution context and the const values are scoped within that? 
- Ideas - Feel like this successfully generalises the first value and second value passed to the callback, as well as the return value. I think the terminating condition works well. But I've not added an additional function to the function signature so not confident that I'm meeting requirement in the hint that said that the function "will accept another function and apply that in its body somehow."

#### Clues:

Test data suggestion:
reducePayne([1, 2, 3, 4, 5], function(a, b) { return a + b; })
Your job is to implement reducePayne. You should get a result of 15 for the above call.

Hint 1:
You'll need to use recursion. The reducePayne function will have to call itself until the list is empty. Primitive recursion like this is bad idea in most languages btw. You'll create very deep call stacks and use way too much memory. This whole thing is only a conceptual exercise.

Hint 2:
Remember that this is a higher-order function so you're going to need to think about two functions that fit together. reducePayne will accept another function and apply that in its body somehow.

Hint 3:
Recursive functions must have a terminating condition. Be explicit about what happens when you run out of items in the list.

Hint 4:
Try to think of the first param to your inner (passed-in) function as the accumulating result. This would be param a in the test data suggestion.
