// Singleton Pattern
// Intent:
// The Singleton Pattern ensures a class has only one instance and provides a global point of access to it.

// Real-World Analogy:
// Think of a CEO in a company. There can be only one CEO, and all decisions go through this person.

class SumanthLogger {
  constructor() {
    if (SumanthLogger.instance) {
      return SumanthLogger.instance; // Return the existing instance if it exists
    }
    this.logs = [];
    SumanthLogger.instance = this; // Store the single instance
  }

  log(message) {
    this.logs.push(message);
    console.log(`Log added: ${message}`);
  }

  getLogCount() {
    return this.logs.length;
  }
}

// Client Code
const logger1 = new SumanthLogger();
const logger2 = new SumanthLogger();

logger1.log("Sumanth started learning Singleton Pattern!");
logger2.log("Sumanth is mastering design patterns!");

console.log(`Total logs: ${logger1.getLogCount()}`); // Logs: 2
console.log(`Are logger1 and logger2 the same? ${logger1 === logger2}`); // true

class ConfigurationManager {
  constructor() {
    if (ConfigurationManager.instance) {
      return ConfigurationManager.instance; // Return the existing instance
    }
    this.settings = {}; // Object to hold configuration settings
    ConfigurationManager.instance = this; // Store the single instance
  }

  set(key, value) {
    this.settings[key] = value;
    console.log(`Setting added: ${key} = ${value}`);
  }

  get(key) {
    return this.settings[key];
  }
}

// Client Code
const config1 = new ConfigurationManager();
config1.set("apiUrl", "https://api.example.com");
config1.set("port", 8080);

const config2 = new ConfigurationManager(); // Same instance as config1
console.log(config2.get("apiUrl")); // https://api.example.com
console.log(config2.get("port")); // 8080

console.log(`Are config1 and config2 the same? ${config1 === config2}`); // true

// Use case
//Restricts instantiation of a class to a single object.
//Useful for shared resources like configurations or databases.
