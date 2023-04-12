import {Observable} from "../store/observable"
export class LabelStore extends Observable {
constructor() {
  super();
  this._labels = []
  this._isFormOpened = false
}

  async fetchLabels(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.labels = data;
    console.log(data,"gkatn?")
 await this.notifyObservers(data);
  }


  isTest(){

    this.notifyObservers(this.isFormOpened = !this._isFormOpened)
  }

  get labels() {
  return this._labels
  }

  set labels(data) {
  this._labels = data
  }

  isFormOpened() {
  console.log("tlf?")
      return !this._isFormOpened
  }

  set isFormOpened(status) {
this._isFormOpened = status
    console.log( " why"
    )
    console.log(status,"??")
    // this.notifyObservers(status)
  }


}