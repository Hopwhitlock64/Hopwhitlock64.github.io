const recieveUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(recieveUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        let sections = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let par1 = document.createElement('p');
        let par2 = document.createElement('p');
        let par3 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        card.appendChild(h2);
        card.classList.add('sections');
        document.querySelector('div.cards').appendChild(card);

        h3.textContent = towns[i].motto;
        card.appendChild(h3);
        card.classList.add('sections');
        document.querySelector('div.cards').appendChild(card);

        par1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(par1);
        card.classList.add('sections');
        document.querySelector('div.cards').appendChild(card);

        par2.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(par2);
        card.classList.add('sections');
        document.querySelector('div.cards').appendChild(card);

        par3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        card.appendChild(par3);
        card.classList.add('sections');
        document.querySelector('div.cards').appendChild(card);

        image.setAttribute("src", towns[i].photo);
        image.setAttribute("alt", "picture of the town");
        card.appendChild(image);
        card.classList.add('sections');

        document.querySelector('div.cards').appendChild(card);

        let onlyTowns = recieveUrl;
        let town_filter = onlyTowns.filter( jsonObject => jsonObject.towns[i].name =="Preston")
console.log(town_filter)
    }
  })
  .catch(function(error){
   
  });