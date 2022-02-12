// console.log('HELLO ES6')

// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`)

// var inputs = process.argv.slice(2)
// const   result = inputs.map(str => str.charAt(0))
//         .reduce((finalString, str) => {
//             return `${finalString}${str}`;
//         }, '');
//         console.log(`[${inputs}] becomes "${result}"`);

const foot = {
    kick() {
        this.yelp = 'Ouch!';

        setImmediate(() => {
            console.log(this.yelp);
        });
    },
};

foot.kick();