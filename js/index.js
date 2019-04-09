// Your code goes here

//Using mouseOver to change color of main heading 
const fbHeading = document.querySelector('.logo-heading');
fbHeading.addEventListener('mouseover', function(event){
    let target = event.target;
    target.style.color = 'yellow';
    
    target.onmouseout = function(event){
        target.style.color = '';
    }
});

const nav = document.querySelector('.main-navigation');
window.addEventListener('scroll', function(event){
    nav.style.background = 'gray';
});

const intro = document.querySelector( '.intro h2');

window.addEventListener('keydown', function(event){
    intro.style.color = 'yellow';
});

window.addEventListener('keyup', function(event){
    intro.style.color = '';
});

const introImg = document.querySelector('.intro img');
introImg.addEventListener('dblclick', function(event){
    let target = event.target;
    target.style.border = '1px solid red';
})