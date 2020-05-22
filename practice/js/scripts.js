
 //const button = document.querySelector('.btn');

 //button.addEventListener('click', 
 //() => {button.classList.toggle('newstyle')});

 // Hamburger menu
 const mainnav = document.querySelector('.navigation');
 const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);




let w_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_name = ['January','February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mydate = new Date();
let weekname = w_name[mydate.getDay()];
let monthname  = m_name[mydate.getMonth()];
const dateoutput = document.querySelector('.date');
dateoutput.textContent = weekname + ', ' + mydate.getDate() + " " + monthname + " " + mydate.getdate();
