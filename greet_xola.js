import chalk from "chalk"

import figlet from "figlet"

import greet from "./greet.js"

let res = greet('Xola')

// print out black text on green background
console.log(chalk.bgGreen.black(res))

// create a figure
console.log(figlet(greet("Lukhanyo"), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        return;
    }
    console.log(data)
}))

// create a 3D figure and style it
console.log(chalk.red(
    figlet.textSync("Hello World!", {'font':'3-D'})
))