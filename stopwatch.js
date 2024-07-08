let stopwatch;
let lapCounter = 1;
let lapList = document.getElementById('laps');

function startStop() {
    let startStopBtn = document.getElementById('startStopBtn');
    if (startStopBtn.textContent === 'Start') {
        startStopBtn.textContent = 'Stop';
        stopwatch = setInterval(displayTime, 10);
    } else {
        startStopBtn.textContent = 'Start';
        clearInterval(stopwatch);
    }
}

function displayTime() {
    let time = new Date().getTime() - startTime;
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let milliseconds = time % 1000;

    document.getElementById('time').textContent =
        pad(minutes, 2) + ':' +
        pad(seconds, 2) + ':' +
        pad(milliseconds, 3);
}

function lapReset() {
    if (startStopBtn.textContent === 'Stop') {
        let lapTime = document.getElementById('time').textContent;
        let lapItem = document.createElement('li');
        lapItem.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
        lapList.appendChild(lapItem);
        lapCounter++;
    } else {
        resetStopwatch();
    }
}

function resetStopwatch() {
    clearInterval(stopwatch);
    document.getElementById('time').textContent = '00:00:00.000';
    startTime = new Date().getTime();
    lapCounter = 1;
    lapList.innerHTML = '';
    document.getElementById('startStopBtn').textContent = 'Start';
}

function pad(num, size) {
    let s = "000" + num;
    return s.substr(s.length - size);
}

let startTime;
resetStopwatch();
