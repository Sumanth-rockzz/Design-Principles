// 4. Interface Segregation Principle (ISP)
// A class should not be forced to implement interfaces it does not use.

// Bad: Forcing a printer to implement methods it doesn't need
class Printer {
    print() {
      throw new Error("Method not implemented");
    }
  
    scan() {
      throw new Error("Method not implemented");
    }
  }
  
  class BasicPrinter extends Printer {
    print() {
      console.log("Printing document...");
    }
  }
  
  // Good: Split the functionality into smaller interfaces
  class Printable {
    print() {
      throw new Error("Method not implemented");
    }
  }
  
  class Scannable {
    scan() {
      throw new Error("Method not implemented");
    }
  }
  
  class BasicPrinter extends Printable {
    print() {
      console.log("Printing document...");
    }
  }
  
  class AllInOnePrinter extends Printable {
    print() {
      console.log("Printing document...");
    }
  }
  
  // Usage
  const printer = new BasicPrinter();
  printer.print();
  