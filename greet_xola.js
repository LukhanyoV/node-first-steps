import chalk from "chalk"

import greet from "./greet.js"

let msg1 = chalk.bgGreen.black(greet('Xola'))

console.log(msg1)