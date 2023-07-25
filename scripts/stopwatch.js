let timer = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
const CENTISECONDS_IN_HOUR = 60 * 60 * 100;
const CENTISECONDS_IN_MINUTE = 60 * 100;
const CENTISECONDS_IN_SECONDS = 100;
let intervalId;

document.querySelector('.js-start').addEventListener('click', () => start());

document.querySelector('.js-stop').addEventListener('click', () => stop());

document.querySelector('.js-reset').addEventListener('click', () => reset());

function start(){
  intervalId = setInterval(() => {
    timer++;
    updateTimer();
  }, 10);
}

function updateTimer(){
  setHours();

  setMinutes();

  setSeconds();
}

function setSeconds(){
  seconds = ((timer - hours * CENTISECONDS_IN_HOUR) - minutes * CENTISECONDS_IN_MINUTE) / CENTISECONDS_IN_SECONDS;

  if(seconds === 0){
    seconds = '00.00'
  }else if(seconds < 10){
    seconds = `0${seconds}`;
  }

  document.querySelector('.js-timer-seconds')
    .innerHTML = seconds
}

function setMinutes(){
  minutes = 0;
  if(timer >= CENTISECONDS_IN_MINUTE){
    minutes = Math.floor((timer - hours * CENTISECONDS_IN_HOUR)/ CENTISECONDS_IN_MINUTE);
  }
  if(minutes < 10){
    minutes = `0${minutes}`;
  }

  document.querySelector('.js-timer-minutes')
    .innerHTML = minutes;
}

function setHours(){
  hours = 0;
  if(timer >= CENTISECONDS_IN_HOUR){
    hours = Math.floor(timer / CENTISECONDS_IN_HOUR);
  }

  if(hours < 10){
    hours = `0${hours}`;
  }

  document.querySelector('.js-timer-hours')
    .innerHTML = hours;
}

function stop(){
  if(intervalId){
    clearInterval(intervalId);
  }
}

function reset(){
  stop();
  timer = 0;
  updateTimer();
}