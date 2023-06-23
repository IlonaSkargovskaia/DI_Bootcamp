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


const userNum = +(prompt('Write a begin number of bottles: '));

function bottles(num){

    // for (let i = num; i >= 0; i--) {
    // let bottleText = i === 1 ? 'bottle' : 'bottles';
    // let nextBottleText = i - 1 === 1 ? 'bottle' : 'bottles';
    // let nextBottleCount = i - 1 === 0 ? 'no more' : i - 1;

    // console.log(`${i} ${bottleText} of beer on the wall`);
    // console.log(`${i} ${bottleText} of beer`);
    // console.log(`Take ${i === 0 ? 'it' : i} down, pass ${i === 0 ? 'it' : 'them'} around`);

    // if (i - 1 === 0) {
    //   console.log(`${nextBottleCount} bottle of beer on the wall`);
    // } else if (i === 0) {
    //   console.log(`No more bottles of beer on the wall`);
    // } else {
    //   console.log(`${nextBottleCount} ${nextBottleText} of beer on the wall`);
    // }
  // }
}

bottles(userNum);