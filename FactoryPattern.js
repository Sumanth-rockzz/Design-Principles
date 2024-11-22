// Factory Pattern
// Intent:
// The Factory Pattern provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

// Real-World Analogy:
// Imagine a cake factory.
// You order a cake, and the factory delivers the type of cake (e.g., chocolate, vanilla) without you worrying about how it was made.

// Factory for creating different shapes
class ShapeFactory {
  static createShape(type) {
    switch (type) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      default:
        throw new Error("Shape type not supported");
    }
  }
}

// Shape Classes
class Circle {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square {
  draw() {
    console.log("Drawing a square");
  }
}

// Client Code
const shape1 = ShapeFactory.createShape("circle");
shape1.draw(); // Drawing a circle

const shape2 = ShapeFactory.createShape("square");
shape2.draw(); // Drawing a square

// Use case
// Centralized object creation. 
// Reduces the need for repeated code.
// Makes it easy to introduce new shapes by extending the factory.
