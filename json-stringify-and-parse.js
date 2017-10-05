// JSON.parse() takes a JSON string and transforms it into a JavaScript object. JSON.stringify() takes a JavaScript object and transforms it into a JSON string.

const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}"


const user = {
  name: 'John',
  email: 'john@awesome.com',
  plan: 'Pro'
};

const userStr = JSON.stringify(user, null, '...'); //if 2 as the 3rd argument meaning give 2 whitespaces.
// "{
// ..."name": "John",
// ..."email": "john@awesome.com",
// ..."plan": "Pro"
// }"
