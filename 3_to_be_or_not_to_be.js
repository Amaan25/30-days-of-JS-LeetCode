// Topic - Closures

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
	// function declarations (arrow syntax)
    let toBe = (anotherVal) => { if(val === anotherVal) return true; else throw new Error("Not Equal")}
    let notToBe = (anotherVal) => { if(val !== anotherVal) return true; else throw new Error("Equal") }

    return {toBe, notToBe}	// return both functions
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */