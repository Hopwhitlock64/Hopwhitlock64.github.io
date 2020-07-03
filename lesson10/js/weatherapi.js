
/*Summary weather */

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c6353d1228c4dd7ed9a34d6ec9396b68"

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
  })
  // /*Winchill*/
  // /*Winchill*/
  wind = document.getElementById("wind").textContent;
  temp = document.getElementById("current-temp").textContent;
  chill = (0.0817 *(3.71*(Math.pow(wind, 0.5)) + 5.81-0.25*wind)*(temp-91.4)+91.4);
  document.getElementById("chill").textContent = chill.toFixed(2);

  // // /* 5 day forecast */

  const apiFive = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c6353d1228c4dd7ed9a34d6ec9396b68"
  fetch(apiFive)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.list.length);
    console.log(jsObject.list[0].dt_txt);
    for(let i = 0; i<= 6;i++){
     let text = jsObject.list[i].dt_txt
    document.getElementById('day' + i).textContent = week_name[mydate.getDay() + i];
       console.log(mydate.getDay() + i);
     document.getElementById('temp' + i).textContent = (jsObject.list[i].main.temp * 9/5 - 459.67).toFixed(2);
      let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
     let desc = jsObject.list[i].weather[0].description;
      document.getElementById('icon' + i).setAttribute('src', imagesrc);
      document.getElementById('icon' + i).setAttribute('alt', desc);
    }
  })
     .catch(function(error){
     
     })
     