
// Finding elements
const form = document.querySelector(".play-ground");
const submitBtn = form.querySelector(".submit-btn");
const guessingNum = form.querySelector(".numInput");


const gameResults = document.querySelector(".game-results");


const result = document.createElement("p");
result.setAttribute("class", "results");
gameResults.appendChild(result);


// const result = document.querySelector(".results");
const remainingMsg = document.querySelector(".remaining-msg");


const wonLostMsg = document.querySelector(".won-lost");
const wonMsg = document.createElement("span");
wonMsg.setAttribute("class", "won-style");
wonLostMsg.appendChild(wonMsg);


const lostMsg = document.createElement("span");
lostMsg.setAttribute("class", "lost-style");
wonLostMsg.appendChild(lostMsg);


// Initializing some value
let wonCount = 0;
let lostCount = 0;
let attemptsCount = 0;
let totalAttempts = 5;




form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkResults(guessingNum.value);
    attemptsCount++;

    if(attemptsCount >= totalAttempts){
        guessingNum.disabled = true;
        guessingNum.style.backgroundColor = "lightGray";
        submitBtn.disabled = true;
        submitBtn.style.textDecoration = "line-through";
        submitBtn.style.backgroundColor = "grey";
        remainingMsg.innerHTML = `Remaining Attempts: ${totalAttempts - attemptsCount}`;
    }else{
        remainingMsg.textContent = `Remaining Attempts ${totalAttempts - attemptsCount}`;
    }
    guessingNum.value = "";
});


const checkResults = (value) => {
    const randomNum = getRandomNumber(5);

    if(value == randomNum){
        wonCount++;
        wonMsg.textContent = `Won: ${wonCount}`;
        result.textContent = `You have Won`;
    }else{
        lostCount++;
        lostMsg.textContent = `Lost: ${lostCount}`;
        result.textContent = `You have lost, Random Number was ${randomNum}`;
    }


};
const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit + 1);
};