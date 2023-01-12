//darkmode mode funksjon
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggleDark.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        
    }else{
        body.style.background = '#1c1c1c';
        body.style.color = '#ff652f';
        body.style.transition = '2s';
    }
});


//like button
const heart = document.getElementById('clickHeart');
let isHeartFilled = false;

heart.addEventListener('click', function() {
    if (isHeartFilled) {
        this.classList.remove('bi-heart-fill');
        this.classList.add('bi-heart');
        isHeartFilled = false;
    } else {
        this.classList.remove('bi-heart');
        this.classList.add('bi-heart-fill');
        isHeartFilled = true;
    }
});


//github dropdown
var toggleGithub = document.getElementById("toggleGithub");
  var dropdown = document.getElementById("dropdown");
  
  toggleGithub.addEventListener("click", function() {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });

  window.onclick = function(event) {
    if (!event.target.matches('.githubKnapp')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }