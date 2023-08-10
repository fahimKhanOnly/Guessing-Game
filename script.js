const form = document.querySelector(".play-ground");
// const usrInpt = document.querySelector(".usr-input");
const usrNum = form.querySelector(".numInput");
const usrBtn = form.querySelector(".submit-btn");
const totalResults = document.querySelector(".game-results");
const finalResult = totalResults.querySelector(".final-result");
const finalResultInit = "Finally You are ";

const attemptMsg = totalResults.querySelector(".attempt-msg");
let attemptMsgInit = `Total Remaining Attempt: `;
attemptMsg.textContent = `${attemptMsgInit} 10`;
const resultMsg = totalResults.querySelector(".result-msg");
const wonLostMsg = totalResults.querySelector(".won-lost");
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
    totalResults.querySelector(".first-hr").style.display = "block";
    if(10 <= attemptsCount){
        attemptMsg.style.display = "none";
        form.style.display = "none";
        totalResults.querySelector(".second-hr").style.display = "block";
        if(wonCount > lostCount){
            finalResult.textContent = finalResultInit + "Win";
            finalResult.style.color = "green";
            finalResult.style.fontWeight = "bold";
            resultMsg.textContent = "Congratulations";
            resultMsg.style.fontWeight = "bold";
            resultMsg.style.color = "green";
            resultMsg.style.fontFamily = "cursive";
        }else if (wonCount < lostCount){
            finalResult.textContent = finalResultInit + "Lost";
            finalResult.style.color = "red";
            resultMsg.textContent = "So sad";
            resultMsg.style.fontWeight = "bold";
            resultMsg.style.color = "red";
        }else finalResult.textContent = "You are Draw";
        usrBtn.style.display = "none";
        totalResults.style.fontSize = "30px";
        reloadBtn.style.display = "block";
    }else attemptMsg.textContent = `${attemptMsgInit}${10 - attemptsCount}`;
    usrNum.value = "";
});
const checkingResult = (value) => {
    let getRandomNum = randomNum(5);
    if(getRandomNum == value){
        wonCount++;
        wonMsg.textContent = `${wonCount}: Won`;
        resultMsg.textContent = `You have Won!`;
    }else{
        lostCount++;
        lostMsg.textContent = `${lostCount}: Lost`;
        resultMsg.textContent = `You have lost, Random Number was: ${getRandomNum}`;
    }
};
const randomNum = (limit) => Math.floor(Math.random() * limit + 1);
reloadBtn.addEventListener("click", () => window.location.reload());