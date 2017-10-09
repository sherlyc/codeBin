const b = {foo: 'bar', useful: 1, useless: 2}
const {useless, ...clean} = b
console.log(clean) // -> {foo: 'bar', useful: 1}
