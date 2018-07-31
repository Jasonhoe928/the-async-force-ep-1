let person4NameRequest = new XMLHttpRequest();
person4NameRequest.addEventListener('load', function(res) {
  // console.log('response ', res)
  // console.log('response object', JSON.parse(res.currentTarget.response));
  // console.log('response name', JSON.parse(res.currentTarget.response).name)
  let person4NameId = document.getElementById('person4Name');
  person4NameId.innerHTML = JSON.parse(res.currentTarget.response).name;
  
})
person4NameRequest.open('GET', 'https://swapi.co/api/people/4/');
person4NameRequest.send();


let person4NameHomeWorldRequest = new XMLHttpRequest();
person4NameHomeWorldRequest.addEventListener('load', function(res) {
  // console.log('response ', res)
  // console.log('response object', JSON.parse(res.currentTarget.response));
  // console.log('response name', JSON.parse(res.currentTarget.response).name)
  // console.log('homeworld', JSON.parse(res.currentTarget.response).name)
  
  let person4HomeWorldId = document.getElementById("person4HomeWorld");
  // console.log('person 4 homeworld Id', person4HomeWorldId);
  person4HomeWorldId.innerHTML = JSON.parse(res.currentTarget.response).name; //this is where the error is, says it is null
})
person4NameHomeWorldRequest.open('GET', 'https://swapi.co/api/planets/1/');
person4NameHomeWorldRequest.send();


let person14NameRequest = new XMLHttpRequest();
person14NameRequest.addEventListener('load', function(res) {
  person14NameId = document.getElementById('person14Name')
  // console.log('person 14 object ', JSON.parse(res.currentTarget.response))
  person14NameId.innerHTML = JSON.parse(res.currentTarget.response).name;
})
person14NameRequest.open('GET', 'https://swapi.co/api/people/14/')
person14NameRequest.send();


person14SpeciesRequest = new XMLHttpRequest();
person14SpeciesRequest.addEventListener('load', function(res) {
  person14SpeciesId = document.getElementById('person14Species');
  person14SpeciesId.innerHTML = JSON.parse(res.currentTarget.response).species;
})
person14NameRequest.open('GET', 'https://swapi.co/api/species/1/')
person14NameRequest.send();


let filmListRequest = new XMLHttpRequest();
filmListRequest.addEventListener('load', function(res) {
  console.log('film list object', JSON.parse(res.currentTarget.response))
  let filmObject = JSON.parse(res.currentTarget.response);
  let filmListId = document.getElementById('filmList');
  for(let i = 0; i < JSON.parse(res.currentTarget.response).results.length; i++) {
    let filmTitleCreateLi = document.createElement('li');
    filmTitleCreateLi.className = 'film';
    filmListId.appendChild(filmTitleCreateLi);
   
    let filmTitleCreateH2 = document.createElement('h2');
    filmTitleCreateH2.className = 'filmTitle';
    filmTitleCreateH2.innerHTML = filmObject.results[i].title;
    filmTitleCreateLi.appendChild(filmTitleCreateH2);
    // console.log('film lists', filmObject.results[i].title)

    let filmPlanetCreateH3 = document.createElement('h3');
    filmPlanetCreateH3.innerHTML = 'Planets';
    filmTitleCreateLi.appendChild(filmPlanetCreateH3);

    let filmPlanetsUl = document.createElement('ul');
    filmPlanetsUl.className = 'filmPlanets';
    filmTitleCreateLi.appendChild(filmPlanetsUl);

    let filmPlanetsList = document.createElement('li');
    filmPlanetsList.className = 'planet';
    filmPlanetsUl.appendChild(filmPlanetsList);

    for(let j = 0; j < filmObject.results[i].planets.length; j++) {
      let planetListCreateH4 = document.createElement('h4');
      planetListCreateH4.className = 'planetName';
      filmPlanetsList.appendChild(planetListCreateH4);
    
    let newPlanet1 = new XMLHttpRequest();
    newPlanet1.addEventListener('load', function(res) {
      planetListCreateH4.innerHTML = JSON.parse(res.currentTarget.response).name;
    })

    newPlanet1.open('GET', filmObject.results[i].planets[j]);
    newPlanet1.send();

    }

    
  }

})
filmListRequest.open('GET', 'https://swapi.co/api/films');
filmListRequest.send();