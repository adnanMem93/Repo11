// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray

function myMonitorsFunction(arr) {

var newMonitorsList = [...arr];

// Only change code below this line

var monitorsList = [];
var counter = 0;

for (var i = 1; i <= newMonitorsList.length; i++) {
    monitorsList.push(newMonitorsList.slice(counter, i));
    monitorsList[counter].push(i);
    counter++;
}

return monitorsList;
// Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));  // Change this line
module.exports = myMonitorsFunction;


