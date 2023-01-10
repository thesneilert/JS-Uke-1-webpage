//dark&day mode button function
var nightmode = true;
function changecolormode() {
  if (nightmode == false) {
    document.getElementById("background").style.backgroundColor = "#1c1c1c";
    document.getElementById("list").style.color = "#cccccc";
    document.getElementById("button-changecolor").style.color = "#e4e4e4";
    nightmode = true;
  } else {
    document.getElementById("background").style.backgroundColor = "white";
    document.getElementById("list").style.color = "black";
    document.getElementById("button-changecolor").style.color = "white";
    nightmode = false;
  }
}
