export class Observable{
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    console.log(observer)
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data) {
    console.log(data,"data")
    this.observers.forEach((observer) => observer(data));
  }
}
