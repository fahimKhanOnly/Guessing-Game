var p = console.log.bind();


// Finding elements
const playGround = document.querySelector(".play-ground");
const numInput = playGround.querySelector(".numInput");
const submitBtn = playGround.querySelector(".submit-btn");
const result = document.querySelector(".results");
const remainingMsg = result.nextElementSibling;
const wonMsg = document.querySelector(".won-style");
const lostMsg = document.querySelector(".lost-style");


let wonCount = 0;
let lostCount = 0;

for(let x = 0; x <= 5; x++){
    const mainFunc = () => {


        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let randomNum = parseInt(Math.random() * 5 + 1);
            let userNum = numInput.value;
            

            if(userNum === randomNum){
                wonCount++;
                p("you have won" + wonCount);
            }else{
                lostCount++;
                p("you have lost" + lostCount);
            }

            numInput.value = "";
        })
    }

};