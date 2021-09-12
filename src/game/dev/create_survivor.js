var rndNameGen = require('random-character-name');
let {settlement} = require("../game.js");

export function createRandomSurvivor() {

  let success = false;
  while(!success){
    //The split is to only grab the first name, since this name generator is dumb
    success = settlement.addSurvivor(rndNameGen.single().split(' ')[0]);
  }
}
