1)

const dates = {
  a: { start: 5, end: 6},
  b: { start: 7, end: 8}
};

const { a : { start : startA, end : endA },
        b : { start: startB, end : endB }} = dates;

console.log(startA, endA); // 5, 6
console.log(startB, endB); // 7, 8


2)

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max : maxOfTomorrow } } = forecast  ; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
