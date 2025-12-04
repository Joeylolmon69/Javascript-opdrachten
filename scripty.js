function groet_ochtend() {
  document.getElementById("groeting").innerText = "Goedemorgen!";
  document.getElementById("groeting").style.color = "#333333";

  document.getElementById("foto").src = "zon.png";

  document.body.style.backgroundColor = "#fdc572ff";
}
setTimeout (groet_ochtend) 

function groet_avond() {
  document.getElementById("groeting").innerText = "Goedeavond!";
  document.getElementById("groeting").style.color = "#ffe600ff";

  document.getElementById("foto").src = "maan.png";

  document.body.style.backgroundColor = "#022241ff";
}


