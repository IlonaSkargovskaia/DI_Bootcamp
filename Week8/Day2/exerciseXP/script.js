// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// // I think 'a' will be 3, because 'a' defined inside funcOne and conditional will be true, so a = 3 and alert show us string with 'a = 3'
// funcOne()

// // 1.2 if we change let to const - will be error, because we can't modify constant variables


// let a = 0;

// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     console.log(`inside the funcThree function ${a}`);
// }

// //here will be 0, because it will take 'a' from global scope
// funcThree()
// // if we console.log or return here will be 5, because we get a value from global scope and after change it inside the function Two
// funcTwo()
// //5 because when we call funcTwo we overrided the global variable to 5
// funcThree()


// // 3

// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// //window.a don't override variable
// funcFour();
// //a = 5
// funcFive();


// //4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // return a = 'test' because it two different variables: global and local
// funcSix()

//#5
const a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

//first will be executed a = 5, after a = 2
// #5.1 - run the code in the console

// #5.2 What will happen if the variable is declared 
// with const instead of let ?


//the same, because its two different variables: 1 - inside block, 2 - outside


