const numbers = process.argv.splice(2)
let minimum = Math.min(...numbers)
    console.log(`The minimum of [${numbers}] is ${minimum}`)
