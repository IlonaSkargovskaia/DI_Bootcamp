// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.



function kgToGrams(weight){
    return weight * 1000;
}

console.log(kgToGrams(3));

const kgToGramsExpression = function(weight) {
    return weight * 1000;
}

console.log(kgToGramsExpression(5));

// Write in a one line comment, the difference between function declaration and function expression.

// Basically, difference between FD and FE is that when we use FD - they moved to the top of their scope and can be called before they are defined, and FE - no


// Finally, use a one line arrow function and invoke it.

const kgToGramArrow = (weight) => weight * 1000;
console.log(kgToGramArrow(4));