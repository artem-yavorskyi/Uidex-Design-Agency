let mainMenu = document.getElementById("mainMenu");
mainMenu.style.maxHeight = "0px";

function toggleMenu() {
  if (mainMenu.style.maxHeight == "0px") {
    mainMenu.style.maxHeight = "1000px";
  } else {
    mainMenu.style.maxHeight = "0px";
  }
}
