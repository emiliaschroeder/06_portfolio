window.addEventListener("load", sidenVises);

// tilføjer classen "pulse" og event der fører hen til en funktion når man klikker
function sidenVises() {
  document.querySelector("#good_container1").classList.add("pulse");
  document.querySelector("#good_container1").addEventListener("click", clickHandler);
}

// Når der bliver klikket starter animationen "click", som er en class der er blevet tilføjet
function clickHandler() {
  console.log("clickAnimation");
  document.querySelector("#good_container1").classList.add("forsvind");
  //   Lytter efter om animationen er færdig
  document.querySelector("#good_container1").addEventListener("animationend", clickReset);
}

function clickReset() {
  console.log("clickReset");
  // fjerner alle class's fra html elementet, force reflow (for at computeren når at se at classen er fjernet)
  document.querySelector("#good_container1").classList = "";
  document.querySelector("#good_container1").offsetLeft;
  document.querySelector("#good_container1").firstElementChild.offsetLeft;
  // Tilføjer classen igen, som nu starter forfra
  document.querySelector("#good_container1").classList.add("pulse");
  document.querySelector("#good_container1").addEventListener("click", clickHandler);
}
