
var inputs = process.argv.slice(2)
const   result = inputs.map(str => str.charAt(0))
        .reduce((finalString, str) => {
            return `${finalString}${str}`;
        }, '');
        console.log(`[${inputs}] becomes "${result}"`);
