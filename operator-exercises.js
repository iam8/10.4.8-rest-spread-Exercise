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

// mergeObjects function
function mergeObjects(obj1, obj2) {

    return {...obj1, ...obj2};
}

// doubleAndReturnArgs function
function doubleAndReturnArgs(array, ...extraNums) {

    const doubledExtras = extraNums.map((num) => num * 2);
    return [...array, ...doubledExtras];
}


// Slice and dice section --------------------------------------------------------------------------

/** Remove a random element in the items array and return a new array without that item. */
const removeRandom = (items) => {

    // Choose a random index in the items array
    const randIndex = Math.floor(Math.random() * items.length);

    // Make a copy of the items array and splice this item from it
    const itemsCopy = [...items];
    itemsCopy.splice(randIndex, 1);
    return itemsCopy;
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {

    return [...array1, ...array2];
}

/** Return a new object with all the keys and values from obj and a new key/value pair. */
const addKeyVal = (obj, key, val) => {

    return key in obj ? {...obj} : {...obj, [key] : val};

}

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {

    const objCopy = {...obj};
    delete objCopy[key];
    return objCopy;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {

    return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {

    return key in obj ? {...obj, [key] : val} : {...obj};
}

