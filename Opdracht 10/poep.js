function groet_ochtend() {
  document.getElementById("groeting").innerText = "Goedemorgen!";
  document.getElementById("groeting").style.color = "#333333";

  document.getElementById("position1").src = "zon.png";
  document.getElementById("position3").src = "maan.png";

  document.getElementById("position1").style.display = "block";
  document.getElementById("position3").style.display = "block";
  document.getElementById("position2").style.display = "none";
  document.body.style.background =
    "linear-gradient(90deg,rgba(205, 232, 255, 1) 0%, rgba(255, 245, 158, 1) 50%, rgba(11, 16, 38, 1) 100%)";
}

function groet_middag() {
  document.getElementById("groeting").innerText = "Goedemiddag!";
  document.getElementById("groeting").style.color = "#333333";

  document.getElementById("position2").src = "zon.png";

  document.getElementById("position2").style.display = "block";
  document.getElementById("position1").style.display = "none";
  document.getElementById("position3").style.display = "none";

  document.body.style.background =
    "linear-gradient(90deg,rgba(8, 59, 122, 1) 0%, rgba(205, 232, 255, 1) 50%, rgba(255, 245, 158, 1) 100%)";
}

function groet_avond() {
  document.getElementById("groeting").innerText = "Goedenavond!";
  document.getElementById("groeting").style.color = "#FFD93D";

  document.getElementById("position1").src = "maan.png";
  document.getElementById("position3").src = "zon.png";

  document.getElementById("position1").style.display = "block";
  document.getElementById("position3").style.display = "block";
  document.getElementById("position2").style.display = "none";

  document.body.style.background =
    "linear-gradient(90deg,rgba(10, 10, 10, 1) 0%, rgba(8, 59, 122, 1) 50%, rgba(205, 232, 255, 1) 100%)";
}
