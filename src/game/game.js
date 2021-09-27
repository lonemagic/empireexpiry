const {Settlement} = require("./objects/settlement.js");
const {test_helmet} = require("./game_object_creation/game_items.js");

export let settlement = new Settlement();

settlement.addItem(test_helmet);
