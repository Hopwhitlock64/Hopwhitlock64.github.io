 // Event Data
 const recieveUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

 fetch(recieveUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
     console.table(jsonObject);  // temporary checking for valid response and data parsing
     const towns = jsonObject['towns'];
     for (let i = 0; i < towns.length; i++ ) {
       if(towns[i].name == "Preston"){
 for(let e = 0; e < towns[i].events.length; e++){
     pres = towns[i].events[e];
     let card = document.createElement('section');
     let p = document.createElement('p');
     p.textContent  = pres;
     card.appendChild(p);
     document.querySelector('.events').appendChild(card);
 }  
  }
    }
   })
   .catch(function(error){
    
   });