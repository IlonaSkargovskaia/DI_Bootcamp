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
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);

    const quoteElement = document.createElement('p');
    const quoteText = document.createTextNode(quote['quote']);

    quoteElement.appendChild(quoteText);
    section.appendChild(quoteElement);
})