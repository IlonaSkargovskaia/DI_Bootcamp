// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.


function anagram(str, str2) {

    const strOne = str.toLowerCase().replaceAll(' ', '').split('').sort().join('');
    const strTwo = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    
    return strOne === strTwo;
}

console.log(anagram('Astronomer', 'Moon starer'));
console.log(anagram('School master', 'The classroom'));
console.log(anagram('The Morse Code', 'Here come dots'));
console.log(anagram('sefrngekjrorse Code', 'Here come dots'));

