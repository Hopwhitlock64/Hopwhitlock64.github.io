const recieveUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(recieveUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let h4 = document.createElement('h4');
          let par1 = document.createElement('p');
          let par2 = document.createElement('p');
          let par3 = document.createElement('p');
          let image = document.createElement('img');
  
          
          h2.textContent = towns[i].name;
          card.appendChild(h2);
          h2.setAttribute("class", "h2name");
          document.querySelector('div.cards').appendChild(card);
  
          h4.textContent = towns[i].motto;
          card.appendChild(h4);
          h4.setAttribute("class", "h4motto");
          document.querySelector('div.cards').appendChild(card);
  
          par1.textContent = 'Year Founded: ' + towns[i].yearFounded;
          card.appendChild(par1);
          par1.setAttribute("class", "par1year");
          document.querySelector('div.cards').appendChild(card);
  
          par2.textContent = 'Population: ' + towns[i].currentPopulation;
          card.appendChild(par2);
          par2.setAttribute("class", "par2pop");
          document.querySelector('div.cards').appendChild(card);
  
          par3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
          card.appendChild(par3);
          par3.setAttribute("class", "par3rain")
          document.querySelector('div.cards').appendChild(card);
  
          image.setAttribute("src", "https://Hopwhitlock64.github.io/lesson9/images/" + towns[i].photo);
          image.setAttribute("alt", "picture of" + towns[i].name);
          card.appendChild(image);
          card.classList.add('section');
  
          document.querySelector('div.cards').appendChild(card);
        

        
      }
     
    }
  })
  .catch(function(error){
   
  });