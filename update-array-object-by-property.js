// update an object in array by property
const initial = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}]
const newValue = {id: 3, score: 3}
const updated = initial.map(x => x.id === newValue.id ? newValue : x)
console.log(updated) // => [ {id: 1, score: 1}, { id: 2, score: 2 }, { id: 3, score: 3 }]
