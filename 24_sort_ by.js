function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// usage
greet('John', function() {
    console.log('The callback was invoked!');
});

// Hello John
// The callback was invoked!
