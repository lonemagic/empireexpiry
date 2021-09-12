const {settlement} = require("../../game/game.js");

export function displaySurvivor(survivor){
  document.getElementById("name").innerHTML= "Name: " + survivor.name;
  document.getElementById("xp").innerHTML= "Hunt XP: " + survivor.xp;
  document.getElementById("courage").innerHTML= "Courage: " + survivor.courage;
  document.getElementById("understanding").innerHTML= "Understanding: " + survivor.understanding;
  document.getElementById("movement").innerHTML= "Movement: " + survivor.movement;
  document.getElementById("strength").innerHTML= "Strength: " + survivor.strength;
  document.getElementById("speed").innerHTML= "Speed: " + survivor.speed;
  document.getElementById("accuracy").innerHTML= "Accuracy: " + survivor.accuracy;
  document.getElementById("luck").innerHTML= "Luck: " + survivor.luck;
  document.getElementById("weapon_proficiency").innerHTML= "Weapon Proficiency: " + survivor.weapon_proficiency;
  document.getElementById("weapon_proficiency_level").innerHTML= "Weapon Proficiency Level: " + survivor.weapon_proficiency_level;
  document.getElementById("fa_title").innerHTML= "Fighting Arts: ";

  document.getElementById('fa_list').innerHTML = '';

  let fas = 0;
  for (let fa of survivor.fighting_arts){
    fas += 1;
    document.getElementById('fa_list').innerHTML += ('<li>'+fa+'</li>');
  }
  for(;fas < survivor.max_fighting_arts; fas++){
    document.getElementById('fa_list').innerHTML += ('<li>None</li>');
  }
  //TODO: Finish this sometime
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
