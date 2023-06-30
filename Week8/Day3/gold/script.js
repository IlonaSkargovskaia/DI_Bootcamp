// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });


// let a = [0, 1];
// let b = [2, 3];
// let c = [1, 2];
// let d = [a, b].reduce((acc, cur) => acc.concat(cur), c);
// console.log(d);

// // [1, 2, 0, 1, 2, 3]



// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => { 
//     console.log(num, i); //1 0
//     //alert(num); // 1
//     return num * 2; // 2
// })
// console.log(newArray);
// i = index of element
// [2,4,8,10,16,18]



// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const modifiedArray = array.reduce((accumulator, current) => {
  if (Array.isArray(current)) {
    return accumulator.concat(current);
  } else {
    accumulator.push(current);
    return accumulator;
  }
}, []);

console.log(modifiedArray);
// Output: [1, 2, 3, [4], [5]]




// Write a JavaScript program to find the sum of all elements in an array.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);


//Write a JavaScript program to remove duplicate items in an array.

let dup = [1, 2, 3, 4, 5, 2, 4];
let remove = [... new Set(dup)];

console.log(remove);


//Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

let start = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let newArr = start.filter((num) => (typeof num) === 'number' && (num !== 0) && (!isNaN(num)));
console.log(newArr);


//repeat string
function repeat(str, num) {
    return str.repeat(num);

}
console.log(repeat('Ha!', 3));





