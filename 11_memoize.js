// Function Transformations

/**
 * @param {Function} fn
 * @return {Function}
 */
 // memoized version - will never be called twice with the same inputs, instead will return cached value
function memoize(fn) {

    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args); // convert args to JSON for comparison

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */