// Iteration 2: Generate 2 random number and display it on the screen
const num1 = Math.floor(Math.random()*100)+1;
const num2 = Math.floor(Math.random()*100)+1;

const contnum1 = document.getElementById("number1")
const contnum2 = document.getElementById("number2")

contnum1.innerText = num1;
contnum2.innerText = num2;

var score = Number(sessionStorage.getItem("chavi")) || 0
// Iteration 3: Make the options button functional
const btns = document.getElementById("buttons")
btns.addEventListener("click", function (event){
    if(num1>num2 && event.target.alt == "greater-than-button"){
        console.log("correct")
        score += 5
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(num1 == num2 && event.target.id == "equal-to" ){
        console.log("correct")
        score += 5
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(num1<num2 && event.target.alt == "less-than-button"){
        console.log("correct");
        score += 5
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else{
        window.location.href="gameover.html"
    }
})

// Iteration 4: Build a timer for the game

const timer = document.getElementById('timer');
let countdown = 5;

timer.textContent=`${countdown}`;

const timeinterval=setInterval(()=>{
    countdown--;

    timer.innerText=`${countdown}`;

    if(countdown==0){
        clearInterval(timeinterval);
        window.location.href='gameover.html'
    }
},1000);
