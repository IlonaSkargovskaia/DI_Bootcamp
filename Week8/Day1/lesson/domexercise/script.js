const colors = ["blue", "yellow", "green", "pink"];

function addButtons () {
    const divContainer = document.querySelector("#container");
    for (let color of colors){
        //create button
        const newButton = document.createElement("button");
        const newText = document.createTextNode(color);
        newButton.appendChild(newText);
        newButton.addEventListener("click", changeColor);
        divContainer.appendChild(newButton);
    }
}

function changeColor(event) {
    console.log(event);
    const colorButton = event.target.textContent;
    document.body.style.backgroundColor = colorButton;
}

addButtons()