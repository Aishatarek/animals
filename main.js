var loading = document.querySelector('.loading');
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function () { loading.parentElement.removeChild(loading) }, 3000);
}
/////////////////////////////
function myTime(){
    var D = new Date();
    var h= D.getHours();
    var m= D.getMinutes();
    var s= D.getSeconds();
 
    var p="AM";
    if(h>11){ p ="PM";
    h-12; 
    }
    if(h<10){h="0"+h;}
    if(m<10){m="0"+m;}
    if(s<10){s="0"+s;}
    
    document.getElementById("clock").innerHTML= h +":"+ m +":"+ s + " " + p ;
      
    t=setTimeout('myTime()',1000);
    }
    myTime();
    













//////////////////////////
var i = 0;

function myfunc() {
    if (i == 0) {
        document.getElementById("item1").style.transform = "translateX(-150px)";
        document.getElementById("item2").style.transform = "translate(-100px,-100px)";
        document.getElementById("item3").style.transform = "translate(50px,-100px)";
        document.getElementById("item4").style.transform = "translateX(150px)";

        i = 1;

    }
    else {
        document.getElementById("item1").style.transform = "translate(0)";
        document.getElementById("item2").style.transform = "translate(0)";
        document.getElementById("item3").style.transform = "translate(0)";
        document.getElementById("item4").style.transform = "translate(0)";
        i = 0;
    }
}
//////////////////////////////////////
















const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
const cat_btn1 = document.getElementById('cat_btn1');
const dog_btn1 = document.getElementById('dog_btn1');
const cat_result1 = document.getElementById('cat_result1');
const dog_result1 = document.getElementById('dog_result1');

cat_btn1.addEventListener('click', getRandomCat1);
dog_btn1.addEventListener('click', getRandomDog1);

const cat_btn2 = document.getElementById('cat_btn2');
const dog_btn2 = document.getElementById('dog_btn2');
const cat_result2 = document.getElementById('cat_result2');
const dog_result2 = document.getElementById('dog_result2');

cat_btn2.addEventListener('click', getRandomCat2);
dog_btn2.addEventListener('click', getRandomDog2);

const cat_btn3 = document.getElementById('cat_btn3');
const dog_btn3 = document.getElementById('dog_btn3');
const cat_result3 = document.getElementById('cat_result3');
const dog_result3 = document.getElementById('dog_result3');

cat_btn3.addEventListener('click', getRandomCat3);
dog_btn3.addEventListener('click', getRandomDog3);





function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}




function getRandomCat1() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result1.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog1() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result1.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}




function getRandomCat2() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result2.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog2() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result2.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}




function getRandomCat3() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result3.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}

function getRandomDog3() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result3.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}
//////////////////////////////////////////////////////////////
const months = ["january", "february", "march", "april", "may", "jaune", "july", "augest", "september", "october", "novamber", "december"]
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futuredate = new Date(2021, 7, 13, 6, 53, 0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
const date = futuredate.getDate();
const weekday = weekdays[futuredate.getDate()];

giveaway.textContent = `luner eclipce on ${date},${month},${year} ${hours}:${minutes} am`
const futuretime = futuredate.getTime();
function getRemainingTime() {
    const today = new Date().getTime();
    const t = futuretime - today;
    const oneday = 24 * 60 * 60 * 1000;
    const onehour = 60 * 60 * 1000;
    const oneminute = 60 * 1000;
    let days = t / oneday
    days = Math.floor(days);
    let hours = Math.floor((t % oneday) / onehour);
    let minutes = Math.floor((t % onehour) / oneminute);
    let seconds = Math.floor((t % oneminute) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item;


    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();