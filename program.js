// console.log('HELLO ES6')

// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`)

// var inputs = process.argv.slice(2)
// const   result = inputs.map(str => str.charAt(0))
//         .reduce((finalString, str) => {
//             return `${finalString}${str}`;
//         }, '');
//         console.log(`[${inputs}] becomes "${result}"`);

// const foot = {
//     kick() {
//         this.yelp = 'Ouch!';

//         setImmediate(() => {
//             console.log(this.yelp);
//         });
//     },
// };

// foot.kick();

// const userArray = process.argv.slice(2)
// let   [ , username,email] = userArray
//       console.log(`{ username: '${username}', email: '${email}' }`)

// let numbers = process.argv.splice(2)
// let minimum = Math.min(...numbers)
//     console.log(`The minimum of [${numbers}] is ${minimum}`)

module.exports = function average(...args) {
    var avg = 0
        args.forEach( function (value) {
            avg += value
        })
        avg /= args.length
        return avg
};