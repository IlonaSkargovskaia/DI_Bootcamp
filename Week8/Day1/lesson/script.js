const btnRed = document.querySelector('#red');
const btnBlue = document.querySelector('#blue');

btnRed.addEventListener('click', changeColor);
btnBlue.addEventListener('click', changeColor);

function changeColor(event) {
    let color = event.target.id;
    document.body.style.background = color;
}


const container = document.querySelector('.container');
const colors = ["blue", "yellow", "green", "pink"];

for (let color of colors) {
    let btn = document.createElement('button');
    let btnText = document.createTextNode(color);
    btn.setAttribute('name', color);

    btn.appendChild(btnText);
    container.appendChild(btn);

    btn.addEventListener('click', changeColorButtons);
}



function changeColorButtons(event) {
    let color = event.target.name;
    console.log(color);
    document.body.style.background = color;
}


