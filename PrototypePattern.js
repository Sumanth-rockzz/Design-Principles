// Prototype Pattern
// Intent:
// The Prototype Pattern creates new objects by copying an existing object, ensuring performance and avoiding repetitive instantiation.

// Real-World Analogy:
// Instead of creating a new house blueprint from scratch, you copy an existing blueprint and customize it.


class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  clone() {
    return new Car(this.model, this.color);
  }
}

const car1 = new Car("Tesla Model S", "red");
const car2 = car1.clone();

car2.color = "blue";

console.log(car1); // Car { model: 'Tesla Model S', color: 'red' }
console.log(car2); // Car { model: 'Tesla Model S', color: 'blue' }


class Person {
    constructor(name, hobby) {
      this.name = name;
      this.hobby = hobby;
    }
  
    clone() {
      return new Person(this.name, this.hobby);
    }
  }
  
  const person1 = new Person("Sumanth", "Reading Books");
  const person2 = person1.clone();
  
  person2.hobby = "Playing Chess";
  
  console.log(person1); // Person { name: 'Sumanth', hobby: 'Reading Books' }
  console.log(person2); // Person { name: 'Sumanth', hobby: 'Playing Chess' }
  
// Benefits:
// Efficient for creating similar objects.
// Reduces the cost of creating objects from scratch.
