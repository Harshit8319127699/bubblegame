var bottom = document.querySelector("#bottom");
var settimer = document.querySelector('#settimer');
var click = document.querySelector('#click');
var score = document.querySelector('#score');

var count = 60;
var rno;
var gmscore = 0;
var mytimer = setInterval(timer, 1000)


function Intialize() {
    var temp = ``

    for (i = 1; i <= 70; i++) {
        temp += `<div class="circle">${Math.floor(Math.random()*11)}</div>`
    }
    bottom.innerHTML = temp;

}

function timer() {
    if (count < 0) {
        clearInterval(mytimer);

    } else {
        settimer.textContent = count;
        count--;
    }

}

function RandomNo() {
    rno = Math.floor(Math.random() * 10)
    click.innerHTML = rno;

}

function Score() {
    gmscore = gmscore + 10
    score.textContent = gmscore;

}
document.querySelector('#bottom').addEventListener('click', function(dets) {
    var KeyClicked = Number(dets.target.textContent);
    if (rno === KeyClicked) {

        Intialize();
        RandomNo();
        Score();


    } else {
        Intialize();
        RandomNo();


    }

})



Intialize();
timer();
RandomNo();
score();