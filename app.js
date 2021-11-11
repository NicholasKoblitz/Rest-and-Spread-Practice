// 1
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// 2
const findMin = (...nums) => nums.reduce((num, next) => num < next ? num : next);

// 3
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// 4
const doubleAndReturnArgs = (arr, ...item) => {
    const double = item.map((val) => val * 2);
    const newArr = [...arr, ...double];
    return newArr
}

// 5

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const num = Math.floor(Math.random() * items.length);
    const arr1 = items.slice(0, num);
    const arr2 = items.slice(num + 1);
    return [...arr1, ...arr2];
}

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({[key]: val, ...obj});


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    delete obj[key];
    return obj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]: val});