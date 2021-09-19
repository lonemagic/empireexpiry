const {openTab, hideAllTabs} = require("./tabs/tab.js");
const {createRandomSurvivor} = require("../game/dev/create_survivor.js");
const {createSurvivorList, addDeparting, removeDeparting} = require("./tabs/survivor_tab.js");

window.onload = function(){
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

  document.getElementById("create_survivor_btn").onclick = function() {
    createRandomSurvivor();
  }

  document.getElementById("depart_btn").onclick = function() {
    addDeparting();
  }

  document.getElementById("undepart_btn").onclick = function() {
    removeDeparting();
  }

  // 4 Basic Survivors
  createRandomSurvivor();
  createRandomSurvivor();
  createRandomSurvivor();
  createRandomSurvivor();

  hideAllTabs();
};
