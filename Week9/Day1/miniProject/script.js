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
    const quoteText = document.createTextNode(quote['quote']);

    quoteElement.appendChild(quoteText);
    section.appendChild(quoteElement);

    // Store the initially generated quote object in the initialQuote variable
    
        initialQuote = quote;
    
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
addBtn.addEventListener(('click'), (event) => {
    event.preventDefault();

    const newObj = {};

    newObj['id'] = quotes.length; 
    newObj['author'] = inputeAuthor.value;
    newObj['quote'] = inputeQuote.value;
    newObj['likes'] = 0;

    quotes.push(newObj);
    console.log(quotes);
});


//3 part - buttons

const numCharacters = document.querySelector('#numCharacters');
const numChWithoutSpaces = document.querySelector('#numChWithoutSpaces');
const numWords = document.querySelector('#numWords');
const likes = document.querySelector('#likes');

numCharacters.addEventListener(('click'), () => {
    
    const textString = initialQuote['quote'];
    console.log(`number of characters in quote: `, textString.length);
    
})

numChWithoutSpaces.addEventListener(('click'), () => {
    
    const textString = initialQuote['quote'];
    console.log(`number of characters in quote without spaces: `, textString.replace(/\s/g, '').length);
})

numWords.addEventListener('click', () => {
    
    const countWords = initialQuote['quote'];
    console.log(`count of words: `, countWords.split(' ').length);
})

likes.addEventListener('click', () => {
    
    initialQuote.likes++;
    console.log('Current likes: ', initialQuote.likes);
    
})

