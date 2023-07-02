const quotes = [
    {
        id : 0,
        author: 'Franklin D. Roosevelt',
        quote: 'When you reach the end of your rope, tie a knot in it and hang on',
        likes: 0,
    },
    {
        id : 1,
        author: 'Anne Frank',
        quote: 'Whoever is happy will make others happy too',
        likes: 0,
    },
    {
        id : 2,
        author: 'Thomas A. Edison',
        quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up',
        likes: 0,
    },
]

//1 part
const section = document.querySelector('section');

const btn = document.querySelector('#generate');
btn.addEventListener(('click'), generate);



// Declare a variable to store the initially generated quote object
let initialQuote;

function generate (){
    section.textContent = '';
    //call function checker
    const quoteIndex = checkQuotes();
    //retrieve the quote object at that particular index.
    const quote = quotes[quoteIndex];

    const quoteElement = document.createElement('p');
    const quoteText = document.createTextNode(`" ${quote['quote']} "`);
    const authorElement = document.createElement('span');
    const authorText = document.createTextNode(`${quote['author']}`);
    authorElement.classList.add('author');

    
    quoteElement.appendChild(quoteText);
    authorElement.appendChild(authorText);

    section.appendChild(quoteElement);
    section.appendChild(authorElement);

    // Store the initially generated quote object in the initialQuote variable
    initialQuote = quote;

    numCharacters.style.display = 'inline-block';
    numChWithoutSpaces.style.display = 'inline-block';
    numWords.style.display = 'inline-block';
    likes.style.display = 'inline-block';
    
}


//check
let previousQuoteIndex = null;

function checkQuotes(){
    //random index by length of array (now it 0-2)
    const quoteIndex = Math.floor(Math.random() * quotes.length);

    //by default quoteIndex = null and we comparing: if current = previous - start function again
    if (quoteIndex === previousQuoteIndex) {
        // Recursively call the function to get a new index
        return checkQuotes(); 
    } else {
        previousQuoteIndex = quoteIndex;
    }
    
    return quoteIndex;
}

//2 part - add new

const form = document.querySelector('#newQuotes');
const inputeQuote = form.querySelector('#newQuote');
const inputeAuthor = form.querySelector('#newAuthor');
const addBtn = form.querySelector('#addNewQuote');
form.addEventListener(('submit'), (event) => {
    event.preventDefault();

    const newObj = {};

    newObj['id'] = quotes.length; 
    newObj['author'] = inputeAuthor.value;
    newObj['quote'] = inputeQuote.value;
    newObj['likes'] = 0;

    // quotes.push(newObj);
    // console.log(quotes);

        // Perform form validation
    if (inputeAuthor.value.trim() !== '' && inputeQuote.value.trim() !== '') {
        // Form is valid
        quotes.push(newObj);
        console.log(quotes);

        // Add a success message
        const successMessage = document.createElement('p');
        successMessage.classList.add('success');
        successMessage.textContent = 'Form submitted successfully!';
        form.appendChild(successMessage);
    } else {
        // Form is not valid
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('err');
        errorMessage.textContent = 'Form is not valid!';
        form.appendChild(errorMessage);
    }
});


//3 part - buttons

const numCharacters = document.querySelector('#numCharacters');
const numChWithoutSpaces = document.querySelector('#numChWithoutSpaces');
const numWords = document.querySelector('#numWords');
const likes = document.querySelector('#likes');
const display = document.querySelector('.display_counts');


numCharacters.addEventListener(('click'), () => {
    
    const textString = initialQuote['quote'];

    const div = document.createElement('div');
    const divText = document.createTextNode(`number of characters in quote: ${textString.length}`);

    div.appendChild(divText);
    display.appendChild(div);
    
})

numChWithoutSpaces.addEventListener(('click'), () => {
    
    const textString = initialQuote['quote'];
    const str = textString.replace(/\s/g, '').length;

    const div = document.createElement('div');
    const divText = document.createTextNode(`number of characters in quote without spaces: ${str}`);

    div.appendChild(divText);
    display.appendChild(div);
})

numWords.addEventListener('click', () => {
    
    const countWords = initialQuote['quote'];
    const countArr = countWords.split(' ').length;

    const div = document.createElement('div');
    const divText = document.createTextNode(`count of words: ${countArr}`);

    div.appendChild(divText);
    display.appendChild(div);
})

likes.addEventListener('click', () => {
    
    const countLikes = initialQuote['quote'];
    initialQuote['likes']++;
    //console.log('Current likes: ', initialQuote.likes);

    likes.textContent = `Likes: ${initialQuote.likes}`;
    
})


// part 3 - search

const searchForm = document.querySelector('#searchForm');
const searchInput = searchForm.querySelector('#search');


searchForm.addEventListener('change', (e) => {
    e.preventDefault();

    section.textContent = '';
    const searchQuery = searchInput.value.toLowerCase().trim();

    const filteredQuotes = quotes.filter((quote) => {
        const author = quote['author'].toLowerCase();

        // Check if the search query matches the author
        return author.includes(searchQuery);
    });

    console.log(filteredQuotes);
    
    filteredQuotes.forEach(element => {
        console.log(element);
        const newLi = document.createElement('li');
        const filteredText = document.createTextNode(`${element['quote']} - (${element['author']})`);

        newLi.appendChild(filteredText)
        section.appendChild(newLi);
    })
    
    

})

