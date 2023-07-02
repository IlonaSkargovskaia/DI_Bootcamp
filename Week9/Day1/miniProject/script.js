const quotes = [
    {
        id : 0,
        author: 'Franklin D. Roosevelt',
        quote: 'When you reach the end of your rope, tie a knot in it and hang on'
    },
    {
        id : 1,
        author: 'Anne Frank',
        quote: 'Whoever is happy will make others happy too'
    },
    {
        id : 2,
        author: 'Thomas A. Edison',
        quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up'
    },
]

const section = document.querySelector('section');
const btn = document.querySelector('#generate');
btn.addEventListener(('click'), (event) => {
    event.preventDefault();
    
    //random get 1 object
    // const quote = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log(quote);

    //call function checker
    const quoteIndex = checkQuotes();
    //retrieve the quote object at that particular index.
    const quote = quotes[quoteIndex];

    const quoteElement = document.createElement('p');
    const quoteText = document.createTextNode(quote['quote']);

    quoteElement.appendChild(quoteText);
    section.appendChild(quoteElement);
})


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