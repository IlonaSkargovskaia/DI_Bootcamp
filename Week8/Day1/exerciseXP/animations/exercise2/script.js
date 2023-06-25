// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


let btn = document.querySelector('button');
let box = document.querySelector('#animate');

// click event
btn.addEventListener("click", myMove)

function myMove() {
      let start = Date.now(); // start date

      let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            console.log(timePassed);

            box.style.marginLeft = timePassed / 5 + 'px';
            
            if (timePassed > 1740) {
                clearInterval(timer);
            }
      }, 20);
    }