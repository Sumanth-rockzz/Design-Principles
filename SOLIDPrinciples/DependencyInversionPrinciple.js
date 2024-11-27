// 5. Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// Bad: High-level module depends on low-level module
class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL database");
  }
}

class UserService {
  constructor() {
    this.database = new MySQLDatabase(); // Tight coupling
  }

  getUser() {
    this.database.connect();
    console.log("Fetching user...");
  }
}

// Good: Use an abstraction (interface)
class Database {
  connect() {
    throw new Error("connect() must be implemented");
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log("Connected to MySQL database");
  }
}

class UserService {
  constructor(database) {
    this.database = database; // Dependency Injection
  }

  getUser() {
    this.database.connect();
    console.log("Fetching user...");
  }
}

// Usage
const database = new MySQLDatabase();
const userService = new UserService(database);
userService.getUser();
