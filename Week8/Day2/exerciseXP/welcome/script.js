// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (username) {
    const nav = document.querySelector('nav');
    console.log(nav);
    const div = document.createElement('div');
    const text = document.createTextNode(`Hello, ${username}`);
    const img = document.createElement('img');
    img.src = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000';
    img.width = '50';

    
    div.appendChild(img);
    div.appendChild(text);
    nav.appendChild(div);
}) ('John');