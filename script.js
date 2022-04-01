// make menu disappear or appear
const header = document.getElementById("head");
const menu = document.getElementById("menu");
const menuItem = document.getElementById("menuItem")
if (page == "index") {
  const banner = document.getElementById("banner");
}
let pressed = true;
function toggleMenu() {
  if(pressed) {
    menu.style.display = "block";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
    pressed = false;
  }
  else {
    menu.style.display = "none";
    pressed = true;
  }
}
console.log(page)
let scroll = document.scrollingElement.scrollTop;
if (page == "index") {
  let xvalue = "center";
  let yvalue = scroll * 0.5;
  banner.style.backgroundPosition = xvalue + " " + yvalue + "px";
}
document.getElementById("body").onscroll = function myFunc() {
  let scroll = document.scrollingElement.scrollTop;
  if (page == "index") {
  let xvalue = "center";
  let yvalue = scroll * 0.5;
  banner.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }
  if (scroll == 0) {
    // make header white or invisible
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "";
    menu.style.transition = "all 0.3s ease-in-out";
    menu.style.background = "";
  }
  else {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "white";
    menu.style.transition = "all 0.3s ease-in-out";
    menu.style.background = "white";
  }
}