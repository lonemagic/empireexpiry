const {settlement} = require("../../game/game.js");

let chosen_survivor = null;

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

  assessDepartingButtons();
  //TODO: Finish this sometime
}

export function createSurvivorList(){
  document.getElementById('survivor_list').innerHTML = '';
  for(let survivor of settlement.survivors){
    if(settlement.checkDeparting(survivor)){
      document.getElementById('survivor_list').innerHTML += ('<li class="departing_item"><a href="#">'+survivor.name+'</a></li>');
    }
    else{
      document.getElementById('survivor_list').innerHTML += ('<li class="regular_item"><a href="#">'+survivor.name+'</a></li>');
    }
  }

  let list = document.getElementById('survivor_list').getElementsByTagName('li');
  for (let item of list) {

    item.onclick = function() {
      chosen_survivor = settlement.survivors.find(x => {
        return x.name === item.innerText;
      })
      displaySurvivor(chosen_survivor);
    }
  }
  assessDepartingButtons();

}

export function addDeparting(){
  settlement.addDeparting(chosen_survivor);
  createSurvivorList();
}

export function removeDeparting(){
  settlement.removeDeparting(chosen_survivor);
  createSurvivorList();
}

function assessDepartingButtons(){
  let undepart_btn = document.getElementById("remove_depart_btn");
  let depart_btn = document.getElementById("add_depart_btn");

  if(settlement.checkDeparting(chosen_survivor)){
    undepart_btn.disabled = false;
    depart_btn.disabled = true;
  }
  else{
    undepart_btn.disabled = true;
    depart_btn.disabled = false;
  }

  if(settlement._departing.length >= 4){
    depart_btn.disabled = true;
  }
}
