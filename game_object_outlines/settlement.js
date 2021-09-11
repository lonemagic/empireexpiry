class Settlement{
  constructor(){
    this.name = null;
    this.year = 0;
    this.survivors = [];
  }

  addSurvivor(name) {
    let survivor = new Survivor(name);
    this.survivors.push(survivor);
    displaySurvivor(survivor);
  }
}
