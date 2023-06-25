// Prompt the user for a number to begin counting down bottles.


// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect

// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.




function singSong() {

    const bottles = +(prompt("Enter a number bottles: "));
    let counter = 0;
    let word;
    

    for (let i = bottles; i >= 0; i -= counter) {
        
        counter++;

        if (i === 1) {
            console.log(`${i} bottle of beer on the wall`);
        } else if (i === 0) {
            console.log(`No bottle of beer on the wall`);
        } else if (counter > i) {
            console.log(`${i} bottles of beer on the wall`);
            console.log(`${i} bottles of beer`);
            console.log(`Take ${i} down, pass ${counter === 1 ? 'it' : 'them'} around`);
            console.log(`No bottle of beer on the wall`);
        }
         else {
            console.log(`${i} bottles of beer on the wall`);
            console.log(`${i} bottles of beer`);
            console.log(`Take ${i} down, pass ${counter === 1 ? 'it' : 'them'} around`);
        }
    }
  }
  
  

singSong();