export class Survivor{
  constructor(name){
    this.name = name;
    this.xp = 0;
    this.courage = 0;
    this.understanding = 0;
    this.strength = 0;
    this.movement = 5;
    this.speed = 0;
    this.luck = 0;
    this.accuracy = 0;
    this.weapon_proficiency = "None";
    this.weapon_proficiency_level = 0;
    this.fighting_arts = [];
    this.max_fighting_arts = 3;
    this.disorders = [];
    this.max_disorders = 3;
    this.abilities = [];
    this.impairments = [];
    this.parents = [];
    this.children = [];
    this.survival = 1;
    this.actions = [];
    this.insanity = 0;
  }
}
