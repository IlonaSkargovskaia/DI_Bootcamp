setTimeout(welcome, 1000); //callback function
// the function is executed after 1000ms -- 1 sec

function welcome () {
    alert("hello")
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", welcomeTwo);

function welcomeTwo () {
    setTimeout(function () {
        alert("in the welcome func")
    }, 1000)
}

// setTimeout(function, interval) //syntax

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", welcome);

// function welcome () {
//     setTimeout(function () {
//         console.log("in the welcome func")
//         welcome()
//     }, 1000)
// }

// callback function is a function that 
// is called back after something happens
// callback function is an argument of another function

const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop"); 

startbtn.addEventListener("click", notify);
// stopbtn.addEventListener("click", stopInterval);


function notify () {
    let counter = 0;

    let idInterval = setInterval(function () {
        document.body.classList.toggle("toRed");
        if (counter < 2) {
            counter ++
        } else {
            clearInterval(idInterval)
        }
    }, 2000)
}




// let idInterval;

// function notify () {
//     idInterval = setInterval(function () {
//         document.body.classList.toggle("toRed");
//         console.log("hello");
//     }, 1000)
// }

// function stopInterval () {
//     alert("stopped");
//     clearInterval(idInterval); //clear the interval from the memory
// }