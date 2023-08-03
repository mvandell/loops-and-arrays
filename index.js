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