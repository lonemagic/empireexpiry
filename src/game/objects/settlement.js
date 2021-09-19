const {Survivor} = require("./survivor.js");

export class Settlement{
  constructor(){
    this._name = "Dev Settlement";
    this._year = 0;
    this._survivors = [];
    this._departing= [];
  }

  addSurvivor(name) {
    var existing_survivor = this._survivors.find(x => {
      return x.name === name;
    })

    if(existing_survivor == null){
      let survivor = new Survivor(name);
      this._survivors.push(survivor);
      return true;
    }
    else{
      return false;
    }
  }

  checkDeparting(survivor){
    if(this._departing.includes(survivor)){
      return true;
    }
    return false;
  }

  addDeparting(survivor) {
    if(this._departing.length < 4 && !this.checkDeparting(survivor)){
      this._departing.push(survivor);
    }
  }

  removeDeparting(survivor) {
    let index = this._departing.indexOf(survivor);
    if (index > -1) {
      this._departing.splice(index, 1);
    }
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
