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
dateoutput= weekname + ', ' + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();

/*Summary weather */

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c6353d1228c4dd7ed9a34d6ec9396b68"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = (jsObject.main.temp * 9/5 - 459.67).toFixed(2);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

  /*Winchill*/
  wind = document.getElementById("wind").textContent;
  temp = document.getElementById("temp").textContent;
  chill = (0.0817 *(3.71*(Math.pow(wind, 0.5)) + 5.81-0.25*wind)*(temp-91.4)+91.4);
  document.getElementById("chill").textContent = chill.toFixed(2);
  })
  // /* 5 day forecast */

  const apiFive = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c6353d1228c4dd7ed9a34d6ec9396b68"
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.list[0].dt_text);
    for(let i = 0; i<5;i++){
    text = document.textContent = jsonObject.list[i].main.temp;
    temp = Math.round(text * 9 / 5 - 459.76);
    document.getElementById('day' + i).textContent = temp;
     }
     for(let i = 0; i < 5; i++) {
      imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';
      desc = jsonObject.list[i].weather[0].description;
  
      document.getElementById('icon' + i).setAttribute('src', imagesrc);
      document.getElementById('icon' + i).setAttribute('alt', desc);
  }
  });
