var padLeft = function (value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("expected unstring but got '" + padding + "'.");
};
console.log(padLeft('Hello World', 20));
