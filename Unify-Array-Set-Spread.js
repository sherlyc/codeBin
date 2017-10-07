//Unify an Array with Set and Spread Operator.
// get uniques from array
const numbers = [ 1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] //=> [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ]
