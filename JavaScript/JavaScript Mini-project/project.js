let gameSeq =[];
let userSeq = [];

let btns = ["yellow", "red" , "purple" , "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
      console.log("game started");
      started = true;
        levelup();

    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup () {
    level++;
    h2.innerText =`level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

//button pressing is storing by this btnpress function
function btnPress(){
    //console.log("btn was pressed");// can use ("this")
    let btn = this;
    console.log(this);
    btnFlash(btn);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}