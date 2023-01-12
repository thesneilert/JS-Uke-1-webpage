//darkmode mode funksjon
const toggle = document.getElementById("toggleDark");
//like button
const heart = document.getElementById("clickHeart");
//github dropdown
const toggleGithub = document.getElementById("hoverGithub");
//body
const body = document.querySelector("body");

//darkmode mode funksjon
toggleDark.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  const isBrightnessHigh = this.classList.toggle("bi-brightness-high");
  if (isBrightnessHigh) {
    body.style.background = "white";
    body.style.transition = "2s";
    setTimeout(() => {
      toggleDark.style.color = "black";
      toggleDark.style.transition = "2s";
    }, 600);
    setTimeout(() => {
      clickHeart.style.color = "black";
      clickHeart.style.transition = "2s";
    }, 400);
    setTimeout(() => {
      hoverGithub.style.color = "black";
      hoverGithub.style.transition = "2s";
    }, 200);
  } else {
    body.style.background = "#1c1c1c";
    body.style.transition = "2s";
    setTimeout(() => {
      toggleDark.style.color = "#ff652f";
      toggleDark.style.transition = "2s";
    }, 200);
    setTimeout(() => {
      clickHeart.style.color = "#14a76c";
      clickHeart.style.transition = "2s";
    }, 400);
    setTimeout(() => {
      hoverGithub.style.color = "#ffe400";
      hoverGithub.style.transition = "2s";
    }, 600);
  }
});

//like button
let isHeartFilled = false;

heart.addEventListener("click", function () {
  if (isHeartFilled) {
    this.classList.remove("bi-heart-fill");
    this.classList.add("bi-heart");
    isHeartFilled = false;
  } else {
    this.classList.remove("bi-heart");
    this.classList.add("bi-heart-fill");
    isHeartFilled = true;
  }
});

//github dropdown
var dropdown = document.getElementById("dropdown");

hoverGithub.addEventListener("click", function () {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

window.onclick = function (event) {
  if (
    !event.target.matches(".githubKnapp") &&
    !event.target.closest(".githubKnapp")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
