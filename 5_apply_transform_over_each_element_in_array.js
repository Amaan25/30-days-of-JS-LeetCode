// Basic Array Transformations

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // for loop approach
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = fn(arr[i], i);
    }

    // forEach approach
    const arr3 = [];
    arr.forEach((element, index) => {
        arr3[index] = fn(element, index);
    });
    
    return arr2;
};