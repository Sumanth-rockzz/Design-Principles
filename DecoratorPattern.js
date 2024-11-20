// Decorator Pattern

//The Decorator Pattern dynamically adds behaviors or responsibilities to an object without modifying its structure.

// Base Component
class Pizza {
  cost() {
    return 50; // Base cost
  }
  description() {
    return "Plain Pizza";
  }
}

// Concrete Component
class MargheritaPizza extends Pizza {
  cost() {
    return 200; // Base cost for Margherita
  }
  description() {
    return "Margherita Pizza";
  }
}

// Decorator Base Class
class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }
  cost() {
    return this.pizza.cost();
  }
  description() {
    return this.pizza.description();
  }
}

// Concrete Decorators
class CheeseTopping extends ToppingDecorator {
  cost() {
    return this.pizza.cost() + 50; // Cheese cost
  }
  description() {
    return this.pizza.description() + ", Cheese";
  }
}

class PepperoniTopping extends ToppingDecorator {
  cost() {
    return this.pizza.cost() + 70; // Pepperoni cost
  }
  description() {
    return this.pizza.description() + ", Pepperoni";
  }
}

class OlivesTopping extends ToppingDecorator {
  cost() {
    return this.pizza.cost() + 30; // Olives cost
  }
  description() {
    return this.pizza.description() + ", Olives";
  }
}

// Using the Decorator Pattern
const basicPizza = new MargheritaPizza();
console.log(`${basicPizza.description()} costs ₹${basicPizza.cost()}`);

const cheesePizza = new CheeseTopping(basicPizza);
console.log(`${cheesePizza.description()} costs ₹${cheesePizza.cost()}`);

const loadedPizza = new OlivesTopping(new PepperoniTopping(cheesePizza));
console.log(`${loadedPizza.description()} costs ₹${loadedPizza.cost()}`);

/*
  Pizza Customization:

Start with a base pizza (Margherita).
Dynamically add toppings (Cheese, Pepperoni, Olives).
Each topping adds functionality (cost and description) without altering the original class.
Flexibility:

You can create any combination of toppings by chaining decorators.
No need to modify existing classes when adding new toppings.
This alternative focuses on how the Decorator Pattern is used in food customization scenarios, which are intuitive and relatable
   */
