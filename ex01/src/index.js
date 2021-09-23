// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array

function myArrayFunction(arr) {
var myItems = [...arr];

// Only change code below this line

myArr[2] = 6;

myItems = myArr;

return myItems;

// Only change code above this line
}

console.log(myArrayFunction([]));  // Change this line
module.exports = myArrayFunction;