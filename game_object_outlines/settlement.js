const {Survivor} = require("./survivor.js");
const {displaySurvivor} = require("../html_helpers/display_survivor.js");

export class Settlement{
  constructor(){
    this.name = null;
    this.year = 0;
    this.survivors = [];
  }

  addSurvivor(name) {
    let survivor = new Survivor(name);
    this.survivors.push(survivor);
    //TODO: Move this somewhere else
    displaySurvivor(survivor);
  }
}
