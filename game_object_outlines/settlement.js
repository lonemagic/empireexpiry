const {Survivor} = require("./survivor.js");

export class Settlement{
  constructor(){
    this._name = "Dev Settlement";
    this._year = 0;
    this._survivors = [];
  }

  addSurvivor(name) {
    let survivor = new Survivor(name);
    this._survivors.push(survivor);
  }

  get survivors() {
    return this._survivors;
  }

  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
}
