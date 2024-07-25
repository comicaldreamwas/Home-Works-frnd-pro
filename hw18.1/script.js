let setTime = 125;

function updateTimer(minutes, seconds){
const timerElement = document.getElementById("timer")
timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
function startTimer(duration){
   let timer = duration
const interval = setInterval(() =>{
   const minutes = Math.floor(timer / 60);
   const seconds = timer % 60;
   updateTimer(minutes,seconds);

   if(timer <= 0 ){
      clearInterval(interval);
   }else{
      timer--;
   }
} , 1000);
}
startTimer(setTime);