import {Observable} from "../store/observable"
export class LabelStore extends Observable {
constructor() {
  super();
  this._labels = []
}

  async fetchLabels(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.labels = data;
 await this.notifyObservers(data);
  }

  get labels() {
  return this._labels
  }

  set labels(data) {
  this._labels = data
  }
}