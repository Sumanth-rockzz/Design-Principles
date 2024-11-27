//1. Single Responsibility Principle (SRP)
//A class or module should have only one reason to change (i.e., it should only have one responsibility).

// Bad: This class handles both user data and sending emails
class UserManager {
  createUser(name, email) {
    // Create user logic
    console.log(`User ${name} created`);
    this.sendEmail(email);
  }

  sendEmail(email) {
    console.log(`Sending email to ${email}`);
  }
}

// Good: Separate responsibilities into different classes
class UserManager {
  createUser(name) {
    console.log(`User ${name} created`);
  }
}

class EmailService {
  sendEmail(email) {
    console.log(`Sending email to ${email}`);
  }
}

// Usage
const userManager = new UserManager();
const emailService = new EmailService();

userManager.createUser("John Doe");
emailService.sendEmail("john.doe@example.com");
