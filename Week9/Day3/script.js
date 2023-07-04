// fetch('https://jsonplaceholder.typicode.com/users')
// //retrieve promise as json
// .then(result => {
//     if (result.ok) {
//         return result.json();
//     } else {
//         throw new Error('issues with the fetch')
//     }
// })
// //to retrieve data from second promise
// .then((data) => {
//     displayRobot(data)
//     //console.log('data', data);
// })
// .catch(err => {
//     displayError(err)
// })

// function displayRobot(robots) {
//     for (let robot of robots) {
//         const para = document.createElement('p');
//         const text = document.createTextNode(`the robot is ${robot.name}`);
//         para.appendChild(text);
//         divElement.appendChild(para);
//         console.log(`The name is ${robot.name}, and its email ${robot.email}`);
//     }
// }

// function displayError(error) {
//     divElement.textContent = `ERROR ${error.message}`
//     //console.log('An error happened', error.message);
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', makeRequest);

// function makeRequest () {
//     fetch ('https://jsonplaceholder.typicode.com/users')
//     .then (response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('issues with fetch');
//         }
//     })
//     .then(data => displayRobot(data))
//     .catch(error => displayError(error))
// }

const divElement = document.querySelector('#results')



function getGif(word) {
    fetch (`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then (response => {
            
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('issues with fetch');
            }
        })
        .then(data => {
            
            if (data['data'].length === 0) {
                console.log('Cannot find GIF');
                getCategory();
                
            } else {
                displayGif(data['data']);
            }
        })
        .catch(error => {
            divElement.textContent = `ERROR ${error.message}`
        })
}

function displayGif(gif) {
    
    const img = document.createElement('img');
    img.src = gif['images']['original']['url'];
    
    divElement.appendChild(img);
    
}   


function getCategory() {
    fetch ('http://random-word-api.herokuapp.com/word?number=1')
        .then (response => {
            
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('issues with fetch');
            }
        })
        .then(word => {
            console.log(word);
            getGif(word[0]);

        })
        .catch(error => divElement.textContent = `ERROR ${error.message}`)
}

//function displayCategory(data)

getCategory()
