// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
    alert('Hello world!');
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const myTimeoutTwo = setTimeout(myGreetingDiv, 2000);

function myGreetingDiv() {
    const container = document.querySelector('#container');

    let greet = document.createElement('p');
    let text = document.createTextNode('Hello world');

    greet.appendChild(text);
    container.appendChild(greet);
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


let myInterval = setInterval(myGreetingDiv, 2000);

const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', stopAddP);

function stopAddP(){
    clearInterval(myInterval);
}

