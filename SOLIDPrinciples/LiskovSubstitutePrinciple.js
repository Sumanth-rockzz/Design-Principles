// 3. Liskov Substitution Principle (LSP)
// Subtypes must be substitutable for their base types without altering the correctness of the program.

// Bad: Subclass changes the behavior in an unexpected way
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  setWidth(width) {
    this.width = width;
    this.height = width; // Unexpected behavior
  }
}

// Good: Use composition instead of inheritance
class Shape {
  getArea() {
    throw new Error("getArea() must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

// Usage
const shapes = [new Rectangle(10, 20), new Square(15)];
shapes.forEach((shape) => console.log(shape.getArea()));
