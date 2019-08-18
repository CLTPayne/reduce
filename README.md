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

#### Clues:

