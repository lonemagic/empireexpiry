const {dragElement} = require("./drag_div.js");

export function drawItem(item){
  let clone = document.getElementById("item_template").cloneNode(false);

  var name = document.createElement("P");
  var categories = document.createElement("P");
  var keywords = document.createElement("P");
  var effect = document.createElement("P");

  name.style.textAlign = "center";
  categories.style.textAlign = "center";
  keywords.style.textAlign = "center";
  effect.style.textAlign = "center";

  name.style.margin = 0;
  categories.style.margin = 0;
  name.style.padding = 0;
  categories.style.padding = 0;
  keywords.style.margin = 0;
  effect.style.margin = 0;
  keywords.style.padding = 0;
  effect.style.padding = 0;

  name.innerHTML  += item.name;
  categories.innerHTML  += item.categories;
  keywords.innerHTML  += item.keywords;
  effect.innerHTML  += item.effect;

  var image = document.createElement("img");
  image.src = item.image;
  image.style.backgroundColor = "red";

  clone.appendChild(name);
  clone.appendChild(categories);
  clone.appendChild(image);
  clone.appendChild(keywords);
  clone.appendChild(effect);
  // Make visible
  clone.style.display = "block";
  // Add new item to the Depart tab, perhaps makes this an arg later
  document.getElementById("Departing Party").appendChild(clone);
  // Add dragable property
  dragElement(clone);
}
