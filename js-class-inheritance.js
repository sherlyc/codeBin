class Shape {
  constructor(props) {
    this.sides = props.sides
  }

  displaySide() {
    console.log("sides = ", this.sides)
  }

  static shout() {
    console.log("Shape is owning the world!!!")
  }
}

class Rectangle extends Shape {
  constructor(props) {
    super(props)
    this.width = props.width
    this.height = props.height
  }

  displayArea() {
    console.log("area =", this.width * this.height)
  }
}

class Square extends Rectangle {
  constructor(props) {
    let sProps = props
    sProps.sides = 4
    sProps.height = props.height
    console.log('sProps', sProps)
    super(sProps)
    this.height = sProps.height
  }
}

let props = {
  sides: 1
}
console.log("New instance of Shape: ")
let s = new Shape(props)
s.displaySide() // sides = 1
Shape.shout() // Shape is owning the world!!!
s.shout() // if you run this you will get error : s.shout is not a function
// shout() is a Class method - only can be called by Shape class or its children class
// and cannot be called by the instance of Shape class
Shape.displaySide() // we get an error here because displaySide is an instance method,
// can only be called its instances

props = {
  sides: 20,
  height: 5,
  width: 4
}

console.log("New instance of Rectangle: ")
let r = new Rectangle(props)
r.displaySide() // sides = 20
r.displayArea() // area = 20

console.log("New instance of Square: ")
let sq = new Square(props)
sq.displaySide() // sides = 4
sq.displayArea() // area = 20

Rectangle.shout() // this works becaues Rectangle is a child class of Shape.
Rectangle.displaySide() // error : displaySide is an instance method.
