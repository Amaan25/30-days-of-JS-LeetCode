// Topic - Closures

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
	let counter = init;
	return {
		// function declarations
		increment: () => ++counter,
		decrement: () => --counter,
		reset: () => (counter = init),
	}
}