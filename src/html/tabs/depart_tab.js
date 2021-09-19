const {settlement} = require("../../game/game.js");
const {drawItem} = require("../draw_item.js");

export function itemTest(){
    drawItem(settlement._items[0]);
}
