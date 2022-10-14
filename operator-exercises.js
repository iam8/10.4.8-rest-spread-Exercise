// Ioana Alex Mititean
// 10/13/22
// Exercise 10.4.8: rest and spread

// Given function
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

// Refactored (ES2015) version of the filterOutOdds() function
function refactoredFilterOutOdds(...nums) {

    return nums.filter((num) => num % 2 === 0);
}

// findMin function
function findMin(...nums) {

    if (!nums.length) {
        return;
    }

    return nums.reduce((min, curVal) => {
        return curVal < min ? curVal : min;
    })
}