
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

  });
  // /*Winchill*/
  // wind = document.getElementById("wind").textContent;
  // temp = document.getElementById("temp").textContent;
  // chill = (0.0817 *(3.71*(Math.pow(wind, 0.5)) + 5.81-0.25*wind)*(temp-91.4)+91.4);
  // document.getElementById("chill").textContent = chill.toFixed(2);
  // })
  // // /* 5 day forecast */

  const apiFive = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c6353d1228c4dd7ed9a34d6ec9396b68"
  fetch(apiFive)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.list.length);
    console.log(jsObject.list[0].dt_text);
    for(let i = 0; i<= 6;i++){
     let text = jsObject.list[i].dt_text
    document.getElementById('day' + i).textContent = week_name[mydate.getDay() + i];
     };
     for(let i = 0; i < 5; i++) {
       console.log(mydate.getDay() + i);
       document.getElementById('day' + i).textContent = week_name[mydate.getDay() + i];
     }
     document.getElementById('f-temp' + i).textContent = (jsObject.list[i].getDay)
      let imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';
     let desc = jsonObject.list[i].weather[0].description;
      document.getElementById('icon' + i).setAttribute('src', imagesrc);
      document.getElementById('icon' + i).setAttribute('alt', desc);
    }
  )
     .catch(function(error){
       alert('sorry');
     })
    