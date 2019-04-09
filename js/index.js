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

const aTag = document.querySelector('a');
aTag.addEventListener('click', function(event){
    event.preventDefault();
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
});

const contentPick = document.querySelector('.content-pick');

contentPick.addEventListener('click', function(event){
    //contentPick.style.color = 'red';
    const button = document.querySelector('.btn');
    button.addEventListener('click', function(event){
        TweenMax.to('.btn', 1, {x:50, ease: Bounce.easeOut})
        event.stopPropagation();
    }); 
})

const wheelEvent = document.querySelectorAll('.content-destination img');

wheelEvent.addEventListener('wheel', function(event){
    wheelEvent.style.border = '1px solid red';
});


