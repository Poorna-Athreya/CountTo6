module.exports = function average(...args) {
    var avg = 0
        args.forEach( function (value) {
            avg += value
        })
        avg /= args.length
        return avg
};
