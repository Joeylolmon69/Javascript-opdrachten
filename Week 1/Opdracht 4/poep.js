  let geboortejaar = prompt("In welk jaar ben je geboren?");
  let leeftijd = 2025 - geboortejaar;
console.log("De leeftijd is ongeveer " + leeftijd);
document.getElementById("leeftijd").innerHTML = "Je bent ongeveer <span style='color: red;'>" + leeftijd + "</span> jaar oud!";