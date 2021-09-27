export const AFFIX = {
  NONE: "none",
  GREEN: "green",
  BLUE: "blue",
  RED: "red",
}

export const LOCATION = {
  NONE: "none",
  HEAD: "head",
  BODY: "body",
  ARM: "arm",
  LEG: "leg",
  WAIST: "waist"
}

export class Item{
  constructor(name, affixes, image, location, armor, categories, keywords, effect, stats){
    this.name = name;
    this.affixes = affixes;
    this.image = image;
    this.location = location;
    this.armor = armor;
    this.categories = categories;
    this.keywords = keywords;
    this.effect = effect;
    this.stats = stats;
  }
}
