const {openTab, hideAllTabs} = require("./tab.js");
const {createRandomSurvivor} = require("./create_survivor.js");

window.onload = function(){
  document.getElementById("settlement_btn").onclick = function() {
    openTab('Settlement');
  }

  document.getElementById("survivors_btn").onclick = function() {
    openTab('Survivors');
  }

  document.getElementById("dev_btn").onclick = function() {
    openTab('Dev Tools');
  }

  document.getElementById("create_survivor_btn").onclick = function() {
    createRandomSurvivor();
  }

  hideAllTabs();
  createRandomSurvivor();
};
