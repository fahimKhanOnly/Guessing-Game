const form = document.querySelector(".play-ground");
const usrNum = document.querySelector(".numInput");
const usrBtn = form.querySelector(".submit-btn");
const totalResults = document.querySelector(".game-results");

const attemptMsg = document.createElement("p");
totalResults.appendChild(attemptMsg);
let attemptMsgInit = `Total Remaining Attempt: `;
attemptMsg.textContent = `${attemptMsgInit} 10`;
const resultMsg = document.createElement("p");
totalResults.appendChild(resultMsg);
const wonLostMsg = document.createElement("div");
totalResults.appendChild(wonLostMsg);
wonLostMsg.setAttribute("class", "won-lost");
const wonMsg = document.createElement("p");
wonLostMsg.appendChild(wonMsg);
wonMsg.setAttribute("class", "won-style");
const lostMsg = document.createElement("p");
wonLostMsg.appendChild(lostMsg);
lostMsg.setAttribute("class", "lost-style");
const reloadBtn = document.querySelector(".reload");

let attemptsCount = 0;
let wonCount = 0;
let lostCount = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkingResult(usrNum.value);
    attemptsCount++;
    if(10 <= attemptsCount){
        attemptMsg.textContent = `${attemptMsgInit} ${10 - attemptsCount}`;
        usrNum.disabled = true;
        usrNum.style.backgroundColor = "lightgrey";
        usrNum.style.cursor = "not-allowed";
        usrBtn.disabled = true;
        usrBtn.style.backgroundColor = "gray";
        usrBtn.style.textDecoration = "line-through";
        usrBtn.style.cursor = "not-allowed";
        usrNum.setAttribute("placeholder", "Game over");
        reloadBtn.style.display = "block";
    }else attemptMsg.textContent = `${attemptMsgInit}${10 - attemptsCount}`;
    usrNum.value = "";
});
const checkingResult = (value) => {
    let getRandomNum = randomNum(5);
    if(getRandomNum == value){
        wonCount++;
        wonMsg.textContent = `Won: ${wonCount}`;
        resultMsg.textContent = `You have Won!`;
    }else{
        lostCount++;
        lostMsg.textContent = `Lost: ${lostCount}`;
        resultMsg.textContent = `You have lost, Random Number was: ${getRandomNum}`;
    }
};
const randomNum = (limit) => Math.floor(Math.random() * limit + 1);
reloadBtn.addEventListener("click", () => window.location.reload());