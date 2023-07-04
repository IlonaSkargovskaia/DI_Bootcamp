const form = document.querySelector('form');
const input = form.querySelector('input');
const results = document.querySelector('.results');

//??? add btn delete all if on page already exist at least one image ???

const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All';

deleteAllButton.addEventListener(('click'), () => {
    input.value = '';
    results.textContent = '';
})

form.appendChild(deleteAllButton);

//form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value !== ''){
        getGifsSun(input.value);
    } else {
        const p = document.createElement('p');
        const pText = document.createTextNode('Your input is empty, write the word');
        p.appendChild(pText);
        results.appendChild(p);
    }
    
});


//get the gif from input
async function getGifsSun(word) {
    try {
        const gifsSunPromise = await fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        if (gifsSunPromise.ok) {
            
            const gifsData = await gifsSunPromise.json();

            //get 1 random object from array of objects
            const randomIndex = Math.floor(Math.random() * gifsData['data'].length);
            const randomObj = gifsData['data'][randomIndex];
            console.log(randomObj);

            //go to display on the page
            displayGif(randomObj);

        } else {
            throw new Error ("Issues with Fetch");
        }    
    } catch(err) {
        console.log("IN THE CATCH", err);
    }
}


function displayGif(object) {
    
    const img = document.createElement('img');
    img.src = object['images']['original']['url'];
    img.width = '150';

    const btnDel = document.createElement('button');
    const btnDelText = document.createTextNode('Delete');

    results.appendChild(img);
    btnDel.appendChild(btnDelText);
    results.appendChild(btnDel);
    

    btnDel.addEventListener('click', () => {
        img.remove();
        btnDel.remove();
    })
}



