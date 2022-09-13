const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let timerInterval;


const getTimeRemaining = () => {
  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;
  let hours = Math.floor(timeRemaining / 60 / 60);
  let minutes = Math.floor((timeRemaining / 60) % 60);
  let seconds = Math.floor((timeRemaining) % 60);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return {
    timeRemaining,
    hours,
    minutes,
    seconds

  }
  
};

const updateClock = () => {

  let getTime = getTimeRemaining();
  timerHours.textContent = getTime.hours;
  timerMinutes.textContent = getTime.minutes;
  timerSeconds.textContent = getTime.seconds;

  if (getTime.timeRemaining < 0) {
    clearInterval(timerInterval);
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }
  

};

timerInterval = setInterval(updateClock, 1000);



};

export default timer;

