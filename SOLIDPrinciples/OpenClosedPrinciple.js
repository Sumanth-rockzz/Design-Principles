// Open/Closed Principle
//1.Software entities should be open for extension but closed for modification.

// Bad: Adding new discount logic requires modifying the `Discount` class
class Discount {
    getDiscount(type) {
      if (type === 'student') {
        return 20;
      } else if (type === 'senior') {
        return 30;
      }
      return 0;
    }
  }
  
  // Good: Use inheritance or strategy pattern to extend behavior
  class Discount {
    getDiscount() {
      return 0; // Default discount
    }
  }
  
  class StudentDiscount extends Discount {
    getDiscount() {
      return 20; // Student discount
    }
  }
  
  class SeniorDiscount extends Discount {
    getDiscount() {
      return 30; // Senior discount
    }
  }
  
  // Usage
  const discounts = [new StudentDiscount(), new SeniorDiscount()];
  discounts.forEach(d => console.log(d.getDiscount()));
  