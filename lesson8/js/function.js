//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

// rating scale
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// Footer Date
let week_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month_name = ['January','February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mydate = new Date();
let weekname = week_name[mydate.getDay()];
let monthname  = month_name[mydate.getMonth()];
const date = document.querySelector('.currentdate');
date.textContent = weekname + ', ' + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();

// pancake banner
DayFunction();  
function DayFunction(){
    if (week_name == 'Friday'){
        const fridaydiv = document.getElementById('Friday');
        fridaydiv.style.display = 'block';
        ConstantSourceNode.body.classList.toggle('movedown');
     }
      
}
