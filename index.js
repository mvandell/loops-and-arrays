//Only Odds
//iterate over an array to make a new array, using only the odd values
const arr = [2, 4, 6, 8, 10, 11, 12];
const oddArray = [];
for (i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 1) {
        oddArray.push(arr[i]);
    }
}
console.log(oddArray);

//Vowel vs Consonant
//iterate over a string and count the number of consonants and vowels
//print the string and the number of consonants and vowels
let str = "awesome";
let vowels = 0;
let consonants = 0;
for (i=0; i<str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        vowels++;
    }
    else {
        consonants++;
    }
}
console.log(str + " has " + consonants + " consonants and " + vowels + " vowels");

//Reverse Array
//Using a for loop, iterate over an array to create a new array in reverse order
const straightArr = [1,2,3];
const reverseArr = [];
for (i=straightArr.length - 1; i >= 0; i--) {
    reverseArr.push(straightArr[i]);
}
console.log(reverseArr);

//FizzBuzz
//Loop from 1 to 100
//If divisible by 3, print Fizz instead
//If divisible by 5, print Buzz instead
//If divisible by 3 & 5, print FizzBuzz instead
for (i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}