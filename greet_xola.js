import chalk from "chalk"

import figlet from "figlet"

import greet from "./greet.js"

let msg1 = chalk.bgGreen.black(greet('Xola'))

console.log(msg1)

console.log(figlet(greet("Lukhanyo"), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        return;
    }
    console.log(data)
}))