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
  constructor(name, affixes, image, location, armor){
    this.name = name;
    this.affixes = affixes;
    this.image = image;
    this.location = location;
    this.armor = armor;
  }
}
