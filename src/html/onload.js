const {openTab, hideAllTabs} = require("./tabs/tab.js");
const {createRandomSurvivor} = require("../game/dev/create_survivor.js");
const {createSurvivorList, addDeparting, removeDeparting} = require("./tabs/survivor_tab.js");
const {itemTest} = require("./tabs/depart_tab.js");

window.onload = function(){
  // Tabs
  document.getElementById("settlement_btn").onclick = function() {
    openTab('Settlement');
  }

  document.getElementById("survivors_btn").onclick = function() {
    openTab('Survivors');
    createSurvivorList();
  }

  document.getElementById("dev_btn").onclick = function() {
    openTab('Dev Tools');
  }

  document.getElementById("depart_btn").onclick = function() {
    openTab('Departing Party');
    itemTest();
  }

  // Survivor Tab UI
  document.getElementById("create_survivor_btn").onclick = function() {
    createRandomSurvivor();
  }

  document.getElementById("add_depart_btn").onclick = function() {
    addDeparting();
  }

  document.getElementById("remove_depart_btn").onclick = function() {
    removeDeparting();
  }

  hideAllTabs();

  // TODO: Remove this sometime.
  createRandomSurvivor();
  createRandomSurvivor();
  createRandomSurvivor();
  createRandomSurvivor();
};
