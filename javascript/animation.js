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

// Tilføjer en event listener til scroll - når brugeren scroller ned vil koden gå i gang
window.addEventListener("scroll", () => {
  // Tjekker den vertikale scroll position af siden. Hvis den er større end 0, betyder det at brugeren har scrollet.
  //   window.scrollY fortæller hvor langt man har scrollet ned ad siden i pixels. Den bliver øget når man scroller ned, og falder når man scroller op
  if (window.scrollY > 0) {
    // if tjekker om brugeren har scrollet ned (om værdien er større end 0).
    // Når værdien er større end 0 bliver classen "scrolled" tilføjet
    document.querySelector("header").classList.add("scrolled");
  } else {
    // Hvis værdien ikke er større end 0 (man er på toppen af siden), bliver classen fjernet
    document.querySelector("header").classList.remove("scrolled");
  }
});
