import chalk from "chalk"
import { terrainGen } from "./terraingen.js"
import { render } from "./render.js"

const cl = console.log
const ch = chalk

// made those easier to type ^^^

// test
//console.log(chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
//console.log(chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaa") + chalk.bgWhite.hidden("ccccccccccccccccccccccccccccccccc" ) + chalk.bgBlue.hidden("aaaaaaaaaaaaaaaaaaaaaaaaaaa"))
// end of test, should make segment of the sky with a tiny cloud if run


let test = ("rrrrr")

//loading screen, yeah i had to do that >>>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     i know it looks terrible

console.log("\n\n\n\n\n\n\n\n\n\n")
let loading1 = ("-e-------------------eeeeeeeeeeeeee--------------ee--------------eeeeeeeeeeeee--------e-------ee-------e--------eeeeeeeeeeeee---------------------")
let loading2 = ("-e-------------------e------------e-------------e--e-------------e------------e---------------e-e------e--------e---------------------------------")
let loading3 = ("-e-------------------e------------e------------e----e------------e------------e---------------e--e-----e--------e---------------------------------")
let loading4 = ("-e-------------------e------------e-----------e------e-----------e------------e-------e-------e---e----e--------e-------eeeee---------------------")
let loading5 = ("-e-------------------e------------e----------eeeeeeeeee----------e------------e-------e-------e----e---e--------e------------e--------------------")
let loading6 = ("-e-------------------e------------e---------e----------e---------e------------e-------e-------e-----e--e--------e------------e--------------------")
let loading7 = ("-e-------------------e------------e--------e------------e--------e-----------e--------e-------e------e-e--------e------------e--------------------")
let loading8 = ("-eeeeeeeeeeeee-------eeeeeeeeeeeeee-------e--------------e-------eeeeeeeeeeee---------e-------e-------ee--------eeeeeeeeeeeeee---e---e---e--------")


render(loading1)
render(loading2)
render(loading3)
render(loading4)
render(loading5)
render(loading6)
render(loading7)
render(loading8)

setTimeout(() => {

render("renderer in node js using chalk")









}, 5000);
