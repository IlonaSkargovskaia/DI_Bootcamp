function welcome() {
    console.log("hello")
}

function bye() {
    console.log("bye")
}

//retrieve the button
const btnYellow = document.querySelector("#btn_yellow");
btnYellow.addEventListener("click", changeToYellow);
//passing the reference to the function

function changeToYellowTwo () {
    document.documentElement.style.setProperty("--main-bg-color", "yellow");
}

//if the toRed class exists it deletes it
//if the toRed class doesn't exist it adds it
function changeToYellow() {
    document.body.classList.toggle("toYellow");
}

// btnYellow.addEventListener("mouseover", changeToRed);
// btnYellow.addEventListener("mouseout", changeToRed);

// function changeToRed() {
//     document.body.classList.toggle("toRed");
// }


// const btnRed = document.querySelector("#btn_red");
// btnRed.addEventListener("click", changeToRed);

// function changeToRed() {
//     document.body.style.backgroundColor = "red";
// }

// const btnBlue = document.querySelector("#btn_blue");
// btnBlue.addEventListener("click", changeToBlue);

// function changeToBlue() {
//     document.body.style.backgroundColor = "blue";
// }

const btnRed = document.querySelector("#btn_red");
const btnBlue = document.querySelector("#btn_blue");

btnBlue.addEventListener("click", changeColor);
btnRed.addEventListener("click", changeColor);

function changeColor(event) {
    console.log(event); //the event object
    console.log(event.target); //the element I clicked
    const color =  event.target.name;
    document.body.style.backgroundColor = color;
}


