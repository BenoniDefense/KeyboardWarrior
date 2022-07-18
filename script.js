'use strict'

let score1 = document.querySelector('.player-1__score');
let score2 = document.querySelector('.player-2__score');

let circle1 = document.querySelector('.player-1__progress-circle');
let circle2 = document.querySelector('.player-2__progress-circle');

let circle1Bottom = Number(window.getComputedStyle(circle1).bottom.replace(/[^0-9]/g,""));
let circle2Bottom = Number(window.getComputedStyle(circle2).bottom.replace(/[^0-9]/g,""));

let player1Modal = document.querySelector('.player-1__modal');
let player2Modal = document.querySelector('.player-2__modal');

let againBtn = document.querySelectorAll('.player__modal-btn');



document.addEventListener('keydown', function(e) { 
    if (e.keyCode == '32') {
        score1.textContent = Number(score1.textContent) + 1;

        circle1.style.bottom = (circle1Bottom + 1) + '%';
        circle1Bottom++;
    } else if (e.key === 'Enter') {
        score2.textContent = Number(score2.textContent) + 1;

        circle2.style.bottom = (circle2Bottom + 1) + '%';
        circle2Bottom++;
    };

    if (circle1Bottom === 100) {
        player1Modal.classList.add('active');
    } else if (circle2Bottom === 100) {
        player2Modal.classList.add('active');
    };
});

againBtn.forEach(item => {
    item.addEventListener('click', event => {
        score1.textContent = '0';
        score2.textContent = '0';
    
        circle1.style.bottom = 0 + 'px';
        circle2.style.bottom = 0 + 'px';
    
        circle1Bottom = 0;
        circle2Bottom = 0;
    
        player1Modal.classList.remove('active');
        player2Modal.classList.remove('active');
    });
});



