class Vehicle {
  constructor(my = {
    speed: 0,
    running: false
  }) {
    this.speed = my.speed
    this.running = my.running
  }

  speed() {
    return this.speed;
  };

  start() {
    this.running = true;
  };

  stop() {
    this.running = false;
  };

  accelerate() {
    this.speed++;
  };

  decelerate() {
    this.speed--;
  };

  getState() {
    if (!this.running) {
      return "parked";
    } else if (this.running && this.speed) {
      return "moving at speed:" + this.speed;
    } else if (this.running) {
      return "idle";
    }
  };
}

class FastVehicle extends Vehicle {
  constructor(my) {
    super(my)
  }

  accelerate() {
    this.speed += 3;
  };
}

let car = new Vehicle({
  speed: 5,
  running: false
})

console.log('car: ', car.getState())
car.start()
console.log('car: ', car.getState())
car.accelerate()
console.log('car: ', car.getState())
car.decelerate()
console.log('car: ', car.getState())
car.stop()
console.log('car: ', car.getState())

let fastCar = new FastVehicle({
  speed: 0,
  running: false
})

console.log('fastCar: ', fastCar.getState())
fastCar.start()
console.log('fastCar: ', fastCar.getState())
fastCar.accelerate()
console.log('fastCar: ', fastCar.getState())
fastCar.accelerate()
console.log('fastCar: ', fastCar.getState())
fastCar.decelerate()
console.log('fastCar: ', fastCar.getState())
fastCar.stop()
console.log('fastCar: ', fastCar.getState())
