// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planets = ['earth', 'mars', 'uranus', 'jupiter', 'mercury', 'neptune', 'saturn', 'pluton'];

const bgColors = ['green', 'red', 'yellow', 'orange', 'brown', 'lightblue', 'lightyellow', 'violet'];

const section = document.querySelector('section');

for (let item = 0; item < planets.length && item < bgColors.length; item++) {
    const div = document.createElement('div');
    div.classList.add('planet', bgColors[item]);

    div.textContent = `${planets[item]}`;

    


    section.appendChild(div);
}