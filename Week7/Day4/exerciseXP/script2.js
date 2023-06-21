// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navbar = document.querySelector('#navBar');
navbar.setAttribute('class', 'socialNetworkNavigation');


// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const navUl = navbar.children[0];
const newLi = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
const logText = document.createTextNode("Logout");

// Append the text node to the newly created list node (<li>).
newLi.appendChild(logText);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
navUl.appendChild(logText);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const firstLi = navUl.firstElementChild.textContent;
const lastLi = navUl.lastElementChild.textContent;
console.log(firstLi);
console.log(lastLi);