// let delayInSeconds = 3;
// let countdownInterval;

// function startCountdown() {
//   let secondsLeft = delayInSeconds;

//   countdownInterval = setInterval(function () {
//     if (secondsLeft > 0) {
//       console.log(`Time remaining: ${secondsLeft} seconds...`);
//       secondsLeft--;
//     } 
//   }, 1000); 
// }

// function generateRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 100); 
//   console.log(`Random number generated: ${randomNumber}`);
// }


// startCountdown();

let delay = 3;
let countVariable;

function countDown() {
    let secondLeft = delay;
    countVariable = setInterval(function () {
        if(secondLeft > 0){
            console.log(`Time remaining: ${secondLeft} seconds...`);
            secondLeft -- ;
        } else {
            clearInterval(countVariable);
         randomNumber();
          }
    },1000);
   
}


function randomNumber() {
    const number = Math.floor(Math.random()*100);
    console.log(`Random Number is : ${number}`);
}


countDown();