const playbtn = document.getElementById('playbtn');
playbtn.onclick = () =>{
    location.href = "./playzone.html";
}

const info = document.getElementById('info');
info.onclick = () =>{
    location.href = "./instruction.html";
}

const enterbtn = document.getElementById("enter");
const yourname = document.getElementById('yourname');


yourname.onchange = () =>{
    localStorage.setItem('name', yourname.value);
}

