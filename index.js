let hoursSpan = document.querySelector(".hoursSpan");
let minutesSpan = document.querySelector(".minutesSpan");
let secondsSpan = document.querySelector(".secondsSpan");
let timer = 0;

setInterval(updateTimer, 1000);

function updateTimer() {
    timer = timer + 1;

    hoursSpan.textContent = formatTime(getHoursInsecs(timer));
    minutesSpan.textContent = formatTime(getMinutesInsecs(timer));
    secondsSpa.textContent = formatTime(getSecondsInsecs(timer));
}

function getHoursInsecs(seconds){
    return Math.floor(seconds / 3600);
}

function getMinutesInsecs(seconds){
    return Math.floor((seconds - 60 * getHoursInsecs(seconds)) / 60);
}

function getSecondsInsecs(seconds){
    return seconds % 60;
}

function formatTime(time){
    if (time < 10){
        return `0${time}`
    } else{
        return time;
    }
}