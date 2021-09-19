export function drawItem(item){
  let clone = document.getElementById("item_template").cloneNode(false);
  clone.style.display = "block";
 document.getElementById("Departing Party").appendChild(clone);
}
