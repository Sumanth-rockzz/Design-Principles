//Command Pattern

//Intent:
// The Command Pattern encapsulates a request as an object, allowing for parameterization, queuing, and logging.

// Real-World Analogy:
// Think of a TV remote control. Each button (command) performs a specific action (turn on, turn off, change channel).


class Light {
    on() {
      console.log("Light is ON");
    }
  
    off() {
      console.log("Light is OFF");
    }
  }
  
  class LightOnCommand {
    constructor(light) {
      this.light = light;
    }
  
    execute() {
      this.light.on();
    }
  }
  
  class LightOffCommand {
    constructor(light) {
      this.light = light;
    }
  
    execute() {
      this.light.off();
    }
  }
  
  class RemoteControl {
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
        console.log(this.command)
      this.command.execute();
    }
  }
  
  // Client Code
  const light = new Light();
  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);
  
  const remote = new RemoteControl();
  
  remote.setCommand(lightOn);
  remote.pressButton(); // Light is ON
  
  remote.setCommand(lightOff);
  remote.pressButton(); // Light is OFF

// Use Case :
// Decouples the invoker from the receiver.
// Supports undo/redo functionality.

// Smart Home Devices:

// You can turn devices on or off using a single button press.
// Undo functionality can revert the last action.

// Flexibility:
// Adding new devices or commands is straightforward without altering the existing code.
  