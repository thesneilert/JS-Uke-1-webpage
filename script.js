//darkmode mode funksjon

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
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

const toggle = document.getElementById('toggleHeart');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi bi-heart-fill');
    if(this.classList.toggle('bi bi-heart')){
        body.style.color = 'black';
        body.style.transition = '2s';
        
    }else (this.classList.toggle('bi bi-heart-fill');{
        body.style.color = '#ff652f';
        body.style.transition = '2s';
    }
});
