var myObject = {
  name: 'JS Nuggets'
};

if (myObject.name) {
  console.log("it is in")
}

console.log(myObject.hasOwnProperty('name')); //true
console.log('name' in myObject); //true

console.log(myObject.hasOwnProperty('valueOf')) //false
console.log('valueOf' in myObject) //true  (object is inherited from the prototype chain)
