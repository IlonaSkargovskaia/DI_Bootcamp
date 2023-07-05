const content = document.querySelector('.content');
const btn = document.querySelector('#find');
btn.addEventListener('click', getCharacters);

content.textContent = 'Go to button and click on it 👇'

async function getCharacters() {
    
    content.textContent = '';

    //get 1 random object from array of objects
    const randomIndex = Math.floor(Math.random() * 83) + 1;
    console.log(randomIndex);

    //loading
    const loading = document.createElement('i');
    const loadingText = document.createElement('p');
    const loadingTextNode = document.createTextNode('Loading...');
    loading.classList.add('fa-solid','fa-spinner','fa-spin-pulse', 'fs', 'false');
    
    loadingText.appendChild(loadingTextNode);
    content.appendChild(loading);
    content.appendChild(loadingText);


    try{
        const response = await fetch(`https://www.swapi.tech/api/people/${randomIndex}`);
        
        if (response.ok) {
            const getData = await response.json();
            const getDataCharacter = getData['result']['properties'];
            console.log(getDataCharacter);
            
            const homeWorldResponse = await fetch(getDataCharacter['homeworld']);

            if (homeWorldResponse.ok) {
                const getPlanet = await homeWorldResponse.json();
                const getDataPlanet = getPlanet['result']['properties']['name'];
                console.log(getDataPlanet);
                displayCharacter(getDataCharacter, getDataPlanet);
            } else {
                throw new Error('Something wrong with fetch in Planet');
            }
                
            
        } else {
            throw new Error('Something wrong with fetch');
        }

    } catch(err) {
        content.textContent = "Oh no! That person isn't avaliable "
        console.log('Error in catch', err);
    }
}



function displayCharacter(obj, planetName) {
    content.textContent = '';

    const div = document.createElement('div');

    const h3 = document.createElement('h3');
    const h3Text = document.createTextNode(`Hi, I am ${obj['name']}`);

    const height = document.createElement('p');
    const heightText = document.createTextNode(`Height: ${obj['height']}`);

    const gender = document.createElement('p');
    const genderText = document.createTextNode(`Gender: ${obj['gender']}`);

    const birth = document.createElement('p');
    const birthText = document.createTextNode(`Birth year: ${obj['birth_year']}`);

    const planetParagraph = document.createElement('p');
    const planetText = document.createTextNode(`Home world: ${planetName}`);

    h3.appendChild(h3Text);
    div.appendChild(h3);
    height.appendChild(heightText);
    div.appendChild(height);
    gender.appendChild(genderText);
    div.appendChild(gender);
    birth.appendChild(birthText);
    div.appendChild(birth);
    planetParagraph.appendChild(planetText);
    div.appendChild(planetParagraph);

    content.appendChild(div);
}

