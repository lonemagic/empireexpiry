const {openTab, hideAllTabs} = require("./tab.js");
const {createRandomSurvivor} = require("./create_survivor.js");
const {createSurvivorList} = require("../html_helpers/display_survivor.js");

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

  hideAllTabs();
};
