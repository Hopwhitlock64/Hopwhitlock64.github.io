const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        card.classList.add('card');
        document.querySelector('div.cards').appendChild(card);

        para1.textContent = 'Date of birth: ' + prophets[i].birthdate;
        card.appendChild(para1);
        card.classList.add('card');
        document.querySelector('div.cards').appendChild(card);

        para2.textContent = 'Place of birth: ' + prophets[i].birthplace;
        card.appendChild(para2);
        card.classList.add('card');
        document.querySelector('div.cards').appendChild(card);

        image.setAttribute("src", prophets[i].imageurl);
        image.setAttribute("alt", "picture of a prophet");
        card.appendChild(image);
        card.classList.add('card');

        document.querySelector('div.cards').appendChild(card);
    }
  })
  .catch(function(error){
   
  });