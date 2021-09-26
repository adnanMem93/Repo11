// Only change code below this line

function multiplyArrayFunction(myArray) {

    var arrayList = [...myArray];
    var arr = [];
    var product = 1;
    var sum = 0;

    for (var i = 0; i < arrayList.length; i++) {
        for (var j = 0; j < arrayList[i].length; j++) {
             product *= arrayList[i][j];
             sum += arrayList[i][j];            
        }
    }        
    
    arr.push(product, sum);

    return arr;
}

// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));  // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));  // Change this line
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));  // Change this line

module.exports = multiplyArrayFunction;