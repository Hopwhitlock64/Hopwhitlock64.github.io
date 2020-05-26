//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

// Footer Date
let week_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month_name = ['January','February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mydate = new Date();
let weekname = week_name[mydate.getDay()];
let monthname  = month_name[mydate.getMonth()];
const dateoutput = document.querySelector('.currentdate');
dateoutput.textContent = weekname + ', ' + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();

// pancake banner
function DayFunction (){
    if (weekname = "Friday"){
        message =  "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion." 
        const bannertxt = document.querySelector('.Friday');
        bannertxt.textContent = document.write(message);
     }
      
}
