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