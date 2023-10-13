
var image =[
    "./assets/car2.png",
    "./assets/car3.png",
    "./assets/car.png",
    "./assets/car4.png"
]

const bgsound = new Audio("./assets/bg-sound.mp3");
bgsound.play();
bgsound.loop = true;
const hornsound = new Audio("./assets/hornsound.mp3");
// const accident = new Audio("./assets/accident.mp3");

const bike=document.getElementsByClassName('bike')[0];
function moveup(){
    let up = parseInt(window.getComputedStyle(bike).getPropertyValue("top"));
    up-=80;
    if(up>400 && up<625){
        bike.style.top = up +"px";
    }
    
}
function movedown(){
    let up = parseInt(window.getComputedStyle(bike).getPropertyValue("top"));
    up+=80;
    if(up>400 && up<625){
        bike.style.top = up +"px";
    }
   
}
document.addEventListener("keydown", event =>{
    if (event.key==="ArrowUp"){
        moveup();
    }
    if (event.key==="h" || event.key==="H"){
        hornsound.pause();
        hornsound.currentTime=0;
        hornsound.play()
    }
    if (event.key==="ArrowDown"){
        movedown();
    }
})


function randomimg(){
    var randomimg = Math.floor(Math.random()*image.length)
    return image[randomimg]
}
const car = document.getElementById('car');

function randomposition(){
    var carposition = [460,540 ,620];
    var randomplace = Math.floor(Math.random()*carposition.length);
    var randomm = carposition[randomplace];
    // console.log(randomm);
    // console.log(car);
    car.style.top = randomm + "px"
    var randomimage = randomimg()
    car.src = randomimage

    
}


var time = 0;
var timer= document.getElementById('timer');
var score = document.getElementById('score');
var sco = 0;

function startTimer(){
    time=0;
    sco=0;
    
    timer.innerHTML = time;
    setInterval(() => {
        time++;
        sco+=10
        if (flag==true) 
            location.href= './gameover.html?score=';
            timer.innerHTML=time;
            score.innerHTML = sco;
            localStorage.setItem("score",sco);
            localStorage.setItem("time",time);
    }, 1000);
}

startTimer();

var flag=false;
car.addEventListener("animationiteration", () => {
    function collision(){
        var biketop = parseInt(window.getComputedStyle(bike).getPropertyValue("top"));
        console.log("Biketop ",biketop);
        var cartop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
        console.log("Cartop ",cartop);
        var carleft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
        console.log("Car left ",carleft);
        var carright = parseInt(window.getComputedStyle(car).getPropertyValue("right"));
        console.log("Car right ",carright);

        if(biketop == cartop ){
            
            flag=true;
            location.href="./gameover.html";
            console.log("gameover");
            car.style.animation = "none";
            
        }
        
    }
    collision()
    randomposition();
    // detectcollision();
    // collision()
});
















