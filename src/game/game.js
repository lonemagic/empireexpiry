const {Settlement} = require("./objects/settlement.js");
const {Item, LOCATION} = require("./objects/item.js");

let image = "../../resources/helment.png";

export let settlement = new Settlement();
let item = new Item("helmet", [], image, LOCATION.HEAD, 1);
settlement.addItem(item);
