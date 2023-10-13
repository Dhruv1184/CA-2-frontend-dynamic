const playagainbtn = document.getElementById('playagainbtn');

playagainbtn.onclick = () =>{
    location.href = "./playzone.html";
}

const homebtn = document.getElementById('homebtn');
homebtn.onclick = () =>{
    location.href = "./home.html";
}

var finalscore=document.getElementById('finalscore');
fscore = localStorage.getItem("score")
finalscore.innerHTML = fscore

var yname =document.getElementById('name');
 mname =localStorage.getItem("name");
yname.innerHTML = mname;

var finaltime = document.getElementById('finaltime');
ftime = localStorage.getItem('time');
finaltime.innerHTML = ftime;