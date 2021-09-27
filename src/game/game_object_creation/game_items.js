const {Item, LOCATION} = require("../objects/item.js");

let image = "resources/helmet.png";
export let test_helmet = new Item("Test Helmet", [], image, LOCATION.HEAD, 1, "heavy, consumable", "Cursed", "+1 Insanity when Departing", null
);
