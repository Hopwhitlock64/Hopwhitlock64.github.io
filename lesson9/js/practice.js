//let pets = {
  //  "name" : "toby",
    //"breed" : "persian",
    //"age" : 10,
    //"color" : "white",
    //"favorite_food" : ["cream", "tune", "chicken"]
//};
//let a = gets.name;
//let x  = gets.favorite_food[1];

const url = "https://cit111byui.github.io/pets.json";

fetch(url)
    .then(function (response){  // get data
        return response.json(); // convert data to js object
    })
    .then(function (jsonObject) { // once object is ready
       console.log(jsonObject); // show in console
        const pets = jsonObject['pets'];

        for( let i = 0; i < pets.length; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para = document.createElement('p');

            h2.textContent = pets[i].name + 'is a' + pets[i].species;
            card.appendChild(h2);
            document.querySelector('.info').appendChild(card);
        
            para.textContent = pets[i].name + "'s favorite food is " + pets[i].food;
            card.appendChild(para);
            document.querySelector('.info').appendChild(card);
        }

    })
    .catch(function (error){
        alert("sorry data is not available");
    });