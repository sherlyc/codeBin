
// remove object from array by property
const removeId = 3
const without3 = initial.filter(x => x.id !== removeId)
console.log(without) // => [ { id: 1, score: 1 }, { id: 2, score: 2 } ]
