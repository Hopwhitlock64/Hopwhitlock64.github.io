// lazy loader
const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
const source = img.getAttribute('data-src');
if(!source) {
return;
}

img.src = source;
}

const options = {threshold: [.5]};

const io = new IntersectionObserver (
(entries, io) => {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
} else {
preloadImage(entry.target);
io.unobserve(entry.target);
}
});
}, options
);


images.forEach(image => {
io.observe(image);
});

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