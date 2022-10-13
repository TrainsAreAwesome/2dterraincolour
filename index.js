import chalk from "chalk"

const cl = console.log
const ch = chalk

// made those easier to type ^^^

// test
//console.log(chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
//console.log(chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaa") + chalk.bgWhite.hidden("ccccccccccccccccccccccccccccccccc" ) + chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaaaaa"))
// end of test, should make segment of the sky with a tiny cloud if run
console.log(chalk.white.hidden("test text"))

//loading screen, yeah i had to do that >>>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     i know it looks terrible

cl(ch.white(" |                   |‾‾‾‾‾‾‾‾‾‾‾‾|              /\\              |‾‾‾‾‾‾‾‾‾‾‾\\        |       |\\       |        |‾‾‾‾‾‾‾‾‾‾‾‾ \n |                   |            |             /  \\             |            |               | \\      |        | \n |                   |            |            /    \\            |            |               |  \\     |        | \n |                   |            |           /      \\           |            |       |       |   \\    |        |____________  \n |                   |            |          /________\\          |            |       |       |    \\   |        |            | \n |                   |            |         /          \\         |            |       |       |     \\  |        |            | \n |                   |            |        /            \\        |            |       |       |      \\ |        |            | \n |____________       |____________|       /              \\       |___________/        |       |       \\|        |____________| "))

import { terrainGen } from "./terraingen"