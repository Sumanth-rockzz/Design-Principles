/*
Observer Pattern //Subscriber
Intent:
The subscriber Pattern allows an object (Youtuber) to notify other objects (subscribers) about changes to its state.

Real-World Analogy:
A YouTube channel (Youtuber) notifies its subscribers (subscribers) whenever a new video is uploaded.
 */
class MrBeastChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((obs) => obs !== subscriber);
  }

  notify(data) {
    this.subscribers.forEach((subscriber) => subscriber.update(data));
  }
}

class subscriber {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// Usage
const Youtuber = new MrBeastChannel();

const obs1 = new subscriber("subscriber 1");
const obs2 = new subscriber("subscriber 2");

Youtuber.subscribe(obs1);
Youtuber.subscribe(obs2);

Youtuber.notify("New video uploaded!");
// subscriber 1 received update: New video uploaded!
// subscriber 2 received update: New video uploaded!

Youtuber.unsubscribe(obs1);

Youtuber.notify("Another update!");
// subscriber 2 received update: Another update!

//Use Case

//Allows for loose coupling between Youtuber and subscribers.
//Flexible and scalable notification mechanism.
