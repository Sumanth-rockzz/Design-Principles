// Strategy Pattern


// Intent:
// The Strategy Pattern defines a family of algorithms and makes them interchangeable at runtime.

// Real-World Analogy:
// When booking a cab, you can choose different ride types (e.g., economy, premium) based on your needs. 
// The app dynamically selects the algorithm for calculating the fare.

class BookCabRide{
    constructor(strategy) {
        this.strategy = strategy;
      }

    setStrategy(strategy) {
        this.strategy = strategy;
      }

    calculateFare(distance) {
    return this.strategy.calculate(distance);
    }
}

// Strategies
class EconomyRide {
    calculate(distance) {
      return distance * 5;
    }
  }
  
  class PremiumRide {
    calculate(distance) {
      return distance * 10;
    }
  }

const economy = new EconomyRide();
const premium = new PremiumRide();

const context = new StrategyContext(economy);
console.log("Economy Fare:", context.calculateFare(10)); // Economy Fare: 50

context.setStrategy(premium);
console.log("Premium Fare:", context.calculateFare(10)); // Premium Fare: 100

//Use Case
// Promotes Open/Closed Principle by allowing new strategies to be added without changing existing code.

// Makes algorithms easier to swap dynamically.