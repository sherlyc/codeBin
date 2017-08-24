switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;


}

var animal = 'Spoon';
switch (animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log("This animal will go on noah's ark")
    break;
  case 'Spoon':
    console.log("A spoon is not an animal");
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not be on the ark')
}
