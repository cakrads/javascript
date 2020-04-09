// 16. Mandatory Parameter Shorthand
// By default, JavaScript will set function parameters to undefined if they are not passed a value. Some other languages will throw a warning or error. To enforce parameter assignment, you can use an if statement to throw an error if undefined, or you can take advantage of the ‘Mandatory parameter shorthand’.
function foo(bar) {
    if (bar === undefined) {
        throw new Error('Missing parameter!');
    }
    return bar;
}


//
mandatory = () => {
    throw new Error('Missing parameter!');
}

foo = (bar = mandatory()) => {
    return bar;
}

