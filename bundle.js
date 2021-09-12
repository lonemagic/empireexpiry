(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _require = require("./tab.js"),
    openTab = _require.openTab,
    hideAllTabs = _require.hideAllTabs;

var _require2 = require("./create_survivor.js"),
    createRandomSurvivor = _require2.createRandomSurvivor;

window.onload = function () {
  document.getElementById("settlement_btn").onclick = function () {
    openTab('Settlement');
  };

  document.getElementById("survivors_btn").onclick = function () {
    openTab('Survivors');
  };

  document.getElementById("dev_btn").onclick = function () {
    openTab('Dev Tools');
  };

  document.getElementById("create_survivor_btn").onclick = function () {
    createRandomSurvivor();
  };

  hideAllTabs();
};

},{"./create_survivor.js":2,"./tab.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomSurvivor = createRandomSurvivor;

var _require = require("../game.js"),
    settlement = _require.settlement;

function createRandomSurvivor() {
  settlement.addSurvivor('Nate');
}

},{"../game.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openTab = openTab;
exports.hideAllTabs = hideAllTabs;

function openTab(id) {
  // Declare all variables
  var i, tablinks;
  hideAllTabs(); // Get all elements with class="tablinks" and remove the class "active"

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  } // Show the current tab, and add an "active" class to the link that opened the tab


  document.getElementById(id).style.display = "block";
  document.getElementById(id).classList.add("active");
}

function hideAllTabs() {
  // Get all elements with class="tabcontent" and hide them
  var tabcontent = document.getElementsByClassName("tabcontent");

  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settlement = void 0;

var _require = require("./game_object_outlines/settlement.js"),
    Settlement = _require.Settlement;

var settlement = new Settlement();
exports.settlement = settlement;

},{"./game_object_outlines/settlement.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settlement = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("./survivor.js"),
    Survivor = _require.Survivor;

var _require2 = require("../html_helpers/display_survivor.js"),
    displaySurvivor = _require2.displaySurvivor;

var Settlement = /*#__PURE__*/function () {
  function Settlement() {
    _classCallCheck(this, Settlement);

    this.name = null;
    this.year = 0;
    this.survivors = [];
  }

  _createClass(Settlement, [{
    key: "addSurvivor",
    value: function addSurvivor(name) {
      var survivor = new Survivor(name);
      this.survivors.push(survivor); //TODO: Move this somewhere else

      displaySurvivor(survivor);
    }
  }]);

  return Settlement;
}();

exports.Settlement = Settlement;

},{"../html_helpers/display_survivor.js":7,"./survivor.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Survivor = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Survivor = function Survivor(name) {
  _classCallCheck(this, Survivor);

  this.name = name;
  this.xp = 0;
  this.courage = 0;
  this.understanding = 0;
  this.str = 0;
  this.move = 5;
  this.speed = 0;
  this.luck = 0;
  this.accuracy = 0;
  this.weapon_proficiency = null;
  this.weapon_proficiency_level = 0;
  this.fighting_art_1 = null;
  this.fighting_art_2 = null;
  this.fighting_art_3 = null;
  this.disorder_1 = null;
  this.disorder_2 = null;
  this.disorder_3 = null;
  this.abilities = null;
  this.impairments = null;
  this.parents = null;
  this.children = null;
  this.survival = 1;
  this.actions = null;
  this.insanity = 0;
};

exports.Survivor = Survivor;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displaySurvivor = displaySurvivor;

function displaySurvivor(survivor) {
  document.getElementById("name").innerHTML = "Name: " + survivor.name;
  document.getElementById("xp").innerHTML = "Hunt XP: " + survivor.xp;
}

},{}],8:[function(require,module,exports){
"use strict";

require("./game.js");

require("./button_scripts/button_init.js");

},{"./button_scripts/button_init.js":1,"./game.js":4}]},{},[8]);
