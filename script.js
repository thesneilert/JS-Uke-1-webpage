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
  this.classList.toggle("bi-brightness-high");
  const isBrightnessHigh = this.classList.toggle("bi-moon");
  if (isBrightnessHigh) {
    body.style.background = "#C7A68B";
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
var hoverGithub = document.getElementById("hoverGithub");

hoverGithub.addEventListener("mouseenter", function () {
    dropdown.style.display = "block";
});

dropdown.addEventListener("mouseleave", function (e) {
    if (!e.relatedTarget.classList.contains("githubKnapp")) {
        dropdown.style.display = "none";
    }
});