// Builder Pattern


// Intent:
// The Builder Pattern simplifies the creation of complex objects by constructing them step-by-step 
//and separating the construction logic from the representation.


//Think of ordering a custom pizza. 
//You specify step-by-step what toppings and crust you want, and the chef follows the instructions to build it.


class Pizza {
    constructor() {
      this.toppings = [];
      this.crust = "regular";
      this.size = "medium";
    }
  }
  
  class PizzaBuilder {
    constructor() {
      this.pizza = new Pizza();
    }
  
    setCrust(crust) {
      this.pizza.crust = crust;
      return this;
    }
  
    setSize(size) {
      this.pizza.size = size;
      return this;
    }
  
    addTopping(topping) {
      this.pizza.toppings.push(topping);
      return this;
    }
  
    build() {
      return this.pizza;
    }
  }
  
  const pizza = new PizzaBuilder()
    .setCrust("thin")
    .setSize("large")
    .addTopping("cheese")
    .addTopping("pepperoni")
    .build();
  
  console.log(pizza);
  // Pizza { toppings: [ 'cheese', 'pepperoni' ], crust: 'thin', size: 'large' }


  //Use Case

// Provides control over the object creation process.
// Enables constructing objects with complex configurations.
  