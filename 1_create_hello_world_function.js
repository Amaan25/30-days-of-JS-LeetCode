// Topic - Closures

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    // arrow syntax + rest arguments
    return (...args) => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */