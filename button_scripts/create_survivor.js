var rndNameGen = require('random-character-name');

export function createRandomSurvivor() {
  let {settlement} = require("../game.js");
  //The split is to only grab the first name, since this name generator is dumb
  settlement.addSurvivor(rndNameGen.single().split(' ')[0]);
}
