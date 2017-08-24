    // arr will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    
    let arr = [0, 1, [3, 2], 3]

const arraySum = (arr) => {
  let sum = 0

  arr.forEach((item) => {
    if (typeof item === 'number') {
      sum += item
    }

    if (Array.isArray(item)) {
      sum += arraySum(item)
    }
  })
  return sum;
}

console.log(arraySum(arr)) // 9
