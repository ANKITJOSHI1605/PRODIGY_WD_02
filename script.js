let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ms = String(milliseconds).padStart(2, '0');

    document.getElementById("display").textContent =
        `${h}:${m}:${s}:${ms}`;
}

function stopwatch(){

    milliseconds++;

    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
    }

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startTimer(){

    if(timer !== null) return;

    timer = setInterval(stopwatch,10);
}

function pauseTimer(){

    clearInterval(timer);
    timer = null;
}

function resetTimer(){

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function recordLap(){

    let lapTime = document.getElementById("display").textContent;

    let li = document.createElement("li");

    li.textContent =
        `Lap ${document.querySelectorAll('#laps li').length + 1}: ${lapTime}`;

    document.getElementById("laps").appendChild(li);
}