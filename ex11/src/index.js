// Only change code below this line

function splitArrayInGroup(arr, n) {
    
    var result = [];
    var counter = 0;
    var number = n;
    for(var i = 0; i < n; i++){        
        result.push(arr.slice(counter, number));
        counter = number;
        number += n;  
    }

    return result;
}

// Only change code above this line

console.log(splitArrayInGroup(['a', 'b', 'c', 'd'], 2));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroup;