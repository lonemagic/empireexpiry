const {settlement} = require("../game.js");

export function displaySurvivor(survivor){
  document.getElementById("name").innerHTML= "Name: " + survivor.name;
  document.getElementById("xp").innerHTML= "Hunt XP: " + survivor.xp;
}

export function createSurvivorList(){
    document.getElementById('survivor_list').innerHTML = '';
  for(let survivor of settlement.survivors){
    document.getElementById('survivor_list').innerHTML += ('<li><a href="#">'+survivor.name+'</a></li>');
  }

  let list = document.getElementById('survivor_list').getElementsByTagName('li');
  for (let item of list) {

    item.onclick = function() {
      var chosen_survivor = settlement.survivors.find(x => {
        return x.name === item.innerText;
      })
      displaySurvivor(chosen_survivor);
    }
  }
}
